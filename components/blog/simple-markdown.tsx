import Link from "next/link";
import type { ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2] && match[3]) {
      const href = match[3];
      const isExternal = href.startsWith("http");
      nodes.push(
        isExternal ? (
          <a key={key++} href={href} rel="noopener noreferrer">
            {match[2]}
          </a>
        ) : (
          <Link key={key++} href={href}>
            {match[2]}
          </Link>
        )
      );
    } else if (match[4]) {
      nodes.push(<strong key={key++}>{match[4]}</strong>);
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

type SimpleMarkdownProps = {
  source: string;
};

export function SimpleMarkdown({ source }: SimpleMarkdownProps) {
  const blocks = source.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="blog-prose">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("## ")) {
          return <h2 key={index}>{trimmed.slice(3)}</h2>;
        }
        if (trimmed.startsWith("### ")) {
          return <h3 key={index}>{trimmed.slice(4)}</h3>;
        }
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").map((line) => line.replace(/^- /, "").trim());
          return (
            <ul key={index}>
              {items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{renderInline(trimmed)}</p>;
      })}
    </div>
  );
}
