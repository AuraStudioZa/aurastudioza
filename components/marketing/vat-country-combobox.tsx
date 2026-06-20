"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  formatJurisdictionOption,
  highlightMatch,
  searchJurisdictions,
} from "../../lib/vat-country-detect";
import {
  getJurisdiction,
  jurisdictionsByRegion,
  VAT_JURISDICTION_REGIONS,
  type VatJurisdiction,
} from "../../lib/vat-jurisdictions";

type VatCountryComboboxProps = {
  jurisdictionId: string;
  onSelect: (id: string) => void;
  detectNote?: string | null;
};

type ListOption = {
  kind: "option";
  item: VatJurisdiction;
};

type ListHeader = {
  kind: "header";
  label: string;
};

type ListEntry = ListOption | ListHeader;

function matchJurisdictionFromQuery(query: string, currentId: string) {
  const trimmed = query.trim();
  if (!trimmed) return null;

  const matches = searchJurisdictions(trimmed, { currentId, limit: 100 });
  const lower = trimmed.toLowerCase();

  const exact =
    matches.find((m) => formatJurisdictionOption(m).toLowerCase() === lower) ??
    matches.find((m) => m.label.toLowerCase() === lower) ??
    matches.find((m) => m.id.toLowerCase() === lower) ??
    matches.find((m) => m.currency.toLowerCase() === lower);

  if (exact) return exact;
  if (matches.length === 1) return matches[0];
  return matches[0] ?? null;
}

function buildListEntries(query: string, currentId: string): ListEntry[] {
  const trimmed = query.trim();
  if (trimmed) {
    return searchJurisdictions(trimmed, { currentId, limit: 100 }).map((item) => ({
      kind: "option" as const,
      item,
    }));
  }

  const entries: ListEntry[] = [];
  for (const region of VAT_JURISDICTION_REGIONS) {
    entries.push({ kind: "header", label: region });
    for (const item of jurisdictionsByRegion(region)) {
      entries.push({ kind: "option", item });
    }
  }
  return entries;
}

function MatchLabel({ text, query }: { text: string; query: string }) {
  const parts = highlightMatch(text, query);
  if (!parts.match) return <>{text}</>;
  return (
    <>
      {parts.before}
      <mark className="vat-country-match">{parts.match}</mark>
      {parts.after}
    </>
  );
}

export function VatCountryCombobox({
  jurisdictionId,
  onSelect,
  detectNote,
}: VatCountryComboboxProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const pickingRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const selected = getJurisdiction(jurisdictionId);
  const entries = useMemo(
    () => buildListEntries(query, jurisdictionId),
    [query, jurisdictionId]
  );
  const options = useMemo(
    () => entries.filter((entry): entry is ListOption => entry.kind === "option"),
    [entries]
  );

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open, jurisdictionId]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const active = listRef.current.querySelector<HTMLElement>('[data-active="true"]');
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open, entries.length]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (pickingRef.current) return;
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function pick(id: string) {
    onSelect(id);
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
  }

  function commitQuery(): boolean {
    const match = matchJurisdictionFromQuery(query, jurisdictionId);
    if (match) {
      pick(match.id);
      return true;
    }
    return false;
  }

  function openList(selectText = false) {
    setOpen(true);
    if (selectText && inputRef.current) {
      requestAnimationFrame(() => inputRef.current?.select());
    }
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, Math.max(0, options.length - 1)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (open && options[activeIndex]) {
        pick(options[activeIndex].item.id);
        return;
      }
      if (commitQuery()) return;
      setOpen(false);
      return;
    }

    if (event.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  }

  function onBlur() {
    window.setTimeout(() => {
      if (pickingRef.current) return;
      if (open && query.trim()) {
        if (!commitQuery()) {
          setOpen(false);
          setQuery("");
        }
        return;
      }
      setOpen(false);
    }, 0);
  }

  const showList = open && options.length > 0;
  const displayValue = open ? query : formatJurisdictionOption(selected);
  const listHeading = query.trim()
    ? `${options.length} match${options.length === 1 ? "" : "es"}`
    : "All countries";
  const inputId = `${listId}-input`;
  const activeOptionId = options[activeIndex]?.item.id;

  return (
    <div className="vat-country-combobox" ref={rootRef}>
      <label className="sig-label" htmlFor={inputId}>
        Country / region
      </label>
      <div className={`vat-country-control${open ? " vat-country-control--open" : ""}`}>
        <div className={`vat-country-field${open ? " vat-country-field--open" : ""}`}>
          <input
            ref={inputRef}
            id={inputId}
            className="sig-input vat-country-input"
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls={showList ? `${listId}-listbox` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
            placeholder="Choose or type — South Africa, UK, ZAR…"
            value={displayValue}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={(e) => {
              setOpen(true);
              setQuery(formatJurisdictionOption(selected));
              requestAnimationFrame(() => e.target.select());
            }}
            onBlur={onBlur}
            onKeyDown={onInputKeyDown}
          />
          <button
            type="button"
            className="vat-country-toggle"
            aria-label={open ? "Close country list" : "Show all countries"}
            aria-expanded={open}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              if (open) {
                setOpen(false);
                setQuery("");
                inputRef.current?.blur();
              } else {
                openList(true);
                setQuery("");
                inputRef.current?.focus();
              }
            }}
          >
            <span className="vat-country-chevron" aria-hidden />
          </button>
        </div>

        {showList ? (
          <div className="vat-country-list-wrap">
            <p className="vat-country-list-heading">{listHeading}</p>
            <ul
              ref={listRef}
              id={`${listId}-listbox`}
              className="vat-country-list"
              role="listbox"
              aria-label="Countries and regions"
            >
              {entries.map((entry) => {
                if (entry.kind === "header") {
                  return (
                    <li key={`header-${entry.label}`} className="vat-country-region" role="presentation">
                      {entry.label}
                    </li>
                  );
                }

                const optionIndex = options.findIndex((o) => o.item.id === entry.item.id);
                const isActive = entry.item.id === activeOptionId;
                return (
                  <li
                    key={entry.item.id}
                    role="option"
                    aria-selected={isActive}
                    data-active={isActive ? "true" : undefined}
                  >
                    <button
                      type="button"
                      className={`vat-country-option${isActive ? " active" : ""}${
                        entry.item.id === jurisdictionId ? " selected" : ""
                      }`}
                      onMouseEnter={() => setActiveIndex(optionIndex)}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        pickingRef.current = true;
                        pick(entry.item.id);
                        window.setTimeout(() => {
                          pickingRef.current = false;
                        }, 0);
                      }}
                    >
                      <span className="vat-country-option-label">
                        <MatchLabel text={entry.item.label} query={query} />
                      </span>
                      <span className="vat-country-option-meta">
                        {entry.item.currency} · {entry.item.standardVatRate}% {entry.item.taxName}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : open && query.trim() && options.length === 0 ? (
          <p className="sig-hint vat-country-empty vat-country-empty--attached">
            No match — try &ldquo;UK&rdquo;, &ldquo;ZAR&rdquo;, or &ldquo;Germany&rdquo;.
          </p>
        ) : null}
      </div>

      {detectNote ? <p className="sig-hint vat-detect-note">{detectNote}</p> : null}
      {!open ? (
        <p className="sig-hint">
          Click the field or arrow to browse all countries, or type to filter. Currency and rate
          update on selection.
        </p>
      ) : null}
    </div>
  );
}
