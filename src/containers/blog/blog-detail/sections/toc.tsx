"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn, slugify } from "@/lib/utils";

import {
  HeadingBlockNode,
  LinkInlineNode,
} from "../components/blocks-renderer";
import { TextInlineNode } from "../components/text";

interface TocProps {
  headings: HeadingBlockNode[];
}

function extractHeadingId(heading: HeadingBlockNode) {
  if (heading.children.length === 1) {
    return slugify((heading.children[0] as TextInlineNode).text);
  } else {
    return slugify((heading.children[1] as LinkInlineNode).children[0].text);
  }
}

export function TableOfContents({ headings }: TocProps) {
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!headings.length) return;

    const elements = headings
      .map((heading) => {
        const id = extractHeadingId(heading);
        return document.getElementById(id);
      })
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%", threshold: 0.1 },
    );

    elements.forEach((element) => observer.current?.observe(element));

    return () => {
      elements.forEach((heading) => observer.current?.unobserve(heading));
    };
  }, [headings]);

  if (!headings.length) {
    return <p className="text-muted-foreground text-sm">No headings found</p>;
  }

  return (
    <nav className="sticky top-24 overflow-y-auto">
      <h2 className="font-semibold">Başlıklar</h2>
      <ul className="relative mt-3 ml-[9.5px] text-sm">
        {headings.map((heading, index) => {
          const id = extractHeadingId(heading);
          const text = heading.children
            .map((child) =>
              child.type === "text"
                ? child.text
                : child.type === "link"
                  ? child.children.map((c) => c.text).join(" ")
                  : "",
            )
            .join(" ");

          return (
            <li key={id || index} className="group relative">
              <span
                className={cn(
                  "bg-foreground/40 absolute -ml-[9px] h-full w-[1px] rounded-full",
                  activeId === id && "bg-foreground/80 -ml-[9.5px] w-[2px]",
                  activeId !== id && "group-hover:bg-foreground/75",
                )}
              />
              <Link
                href={`#${id}`}
                style={{ paddingLeft: `${(heading.level - 1) * 0.5}rem` }}
                className={cn(
                  "text-muted-foreground inline-block w-full py-1.5 text-left transition-colors",
                  activeId === id && "text-foreground font-medium",
                  activeId !== id && "group-hover:text-foreground/90",
                )}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
