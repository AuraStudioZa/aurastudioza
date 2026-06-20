"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  formatJurisdictionOption,
  highlightMatch,
  searchJurisdictions,
} from "../../lib/vat-country-detect";
import { getJurisdiction } from "../../lib/vat-jurisdictions";

type VatCountryComboboxProps = {
  jurisdictionId: string;
  onSelect: (id: string) => void;
  detectNote?: string | null;
};

function matchJurisdictionFromQuery(query: string, currentId: string) {
  const trimmed = query.trim();
  if (!trimmed) return null;

  const matches = searchJurisdictions(trimmed, { currentId, limit: 20 });
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
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const selected = getJurisdiction(jurisdictionId);
  const results = useMemo(
    () => searchJurisdictions(query, { currentId: jurisdictionId }),
    [query, jurisdictionId]
  );

  useEffect(() => {
    if (!searching) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [searching, jurisdictionId]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!searching || !listRef.current) return;
    const active = listRef.current.querySelector<HTMLElement>('[data-active="true"]');
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, searching, results.length]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (pickingRef.current) return;
      if (!rootRef.current?.contains(event.target as Node)) {
        setSearching(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function pick(id: string) {
    onSelect(id);
    setSearching(false);
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

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSearching(true);
      setActiveIndex((i) => Math.min(i + 1, Math.max(0, results.length - 1)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSearching(true);
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (searching && results[activeIndex]) {
        pick(results[activeIndex].id);
        return;
      }
      if (commitQuery()) return;
      setSearching(false);
      return;
    }

    if (event.key === "Escape") {
      setSearching(false);
      setQuery("");
    }
  }

  function onBlur() {
    window.setTimeout(() => {
      if (pickingRef.current) return;
      if (searching && query.trim()) {
        if (!commitQuery()) {
          setSearching(false);
          setQuery("");
        }
        return;
      }
      setSearching(false);
    }, 0);
  }

  const showList = searching && results.length > 0;
  const displayValue = searching ? query : formatJurisdictionOption(selected);
  const listHeading = query.trim() ? `${results.length} matches` : "Suggestions";

  return (
    <div className="vat-country-combobox" ref={rootRef}>
      <label className="sig-label" htmlFor={`${listId}-input`}>
        Country / region
      </label>
      <input
        ref={inputRef}
        id={`${listId}-input`}
        className="sig-input"
        type="text"
        role="combobox"
        aria-expanded={showList}
        aria-controls={showList ? `${listId}-listbox` : undefined}
        aria-autocomplete="list"
        autoComplete="off"
        spellCheck={false}
        placeholder="Start typing a country…"
        value={displayValue}
        onChange={(e) => {
          setQuery(e.target.value);
          setSearching(true);
        }}
        onFocus={(e) => {
          setSearching(true);
          setQuery(formatJurisdictionOption(selected));
          requestAnimationFrame(() => e.target.select());
        }}
        onBlur={onBlur}
        onKeyDown={onInputKeyDown}
      />
      {detectNote ? <p className="sig-hint vat-detect-note">{detectNote}</p> : null}
      {showList ? (
        <div className="vat-country-list-wrap">
          <p className="vat-country-list-heading">{listHeading}</p>
          <ul
            ref={listRef}
            id={`${listId}-listbox`}
            className="vat-country-list"
            role="listbox"
            aria-label="Country suggestions"
          >
            {results.map((item, index) => (
              <li
                key={item.id}
                role="option"
                aria-selected={index === activeIndex}
                data-active={index === activeIndex ? "true" : undefined}
              >
                <button
                  type="button"
                  className={`vat-country-option${index === activeIndex ? " active" : ""}${
                    item.id === jurisdictionId ? " selected" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    pickingRef.current = true;
                    pick(item.id);
                    window.setTimeout(() => {
                      pickingRef.current = false;
                    }, 0);
                  }}
                >
                  <span className="vat-country-option-label">
                    <MatchLabel text={item.label} query={query} />
                  </span>
                  <span className="vat-country-option-meta">
                    {item.currency} · {item.standardVatRate}% {item.taxName}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : searching && query.trim() && results.length === 0 ? (
        <p className="sig-hint vat-country-empty">No match — try &ldquo;UK&rdquo;, &ldquo;GBP&rdquo;, or &ldquo;Germany&rdquo;.</p>
      ) : null}
      {!searching ? (
        <p className="sig-hint">
          Click the field and type — suggestions appear as you go. Currency and rate update on
          selection.
        </p>
      ) : null}
    </div>
  );
}
