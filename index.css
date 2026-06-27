import { useEffect, useRef, useState } from "react";

interface TypewriterHeadlineProps {
  /** First part of the headline, e.g. "Din partner för" */
  pre: string;
  /** Emphasised middle word, e.g. "datadrivna" */
  em: string;
  /** Last part, e.g. "beslut" */
  post: string;
  /** Called once when the typing has finished (or is skipped). */
  onDone?: () => void;
}

/** Base time per keystroke (ms). A little randomness is added for a human feel. */
const KEY_MS = 68;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Types the hero headline out character by character, as if typed on a keyboard,
 * with a blinking caret. When the sentence is finished, the caret is replaced by
 * three dots that load 1, 2, 3 in a repeating loop. Text comes from props, so it
 * works in any language.
 */
const TypewriterHeadline = ({ pre, em, post, onDone }: TypewriterHeadlineProps) => {
  const reduce = prefersReducedMotion();

  // Ordered text segments. The line break keeps the same two-line layout as before.
  const segments = [
    { text: pre },
    { text: " " + em, em: true },
    { text: " " + post },
  ];
  const total = segments.reduce((n, s) => n + s.text.length, 0);

  const [count, setCount] = useState(reduce ? total : 0);
  const [done, setDone] = useState(reduce);
  const firedRef = useRef(false);

  const fireDone = () => {
    if (!firedRef.current) {
      firedRef.current = true;
      onDone?.();
    }
  };

  useEffect(() => {
    if (reduce) {
      fireDone();
      return;
    }
    let i = 0;
    let timer: number;

    const tick = () => {
      i += 1;
      setCount(i);
      if (i < total) {
        timer = window.setTimeout(tick, KEY_MS + Math.random() * 55);
      } else {
        setDone(true);
        fireDone();
      }
    };

    timer = window.setTimeout(tick, 300);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  // Build the visible, typed-out content while preserving the emphasis + line break.
  let consumed = 0;
  const nodes: JSX.Element[] = [];
  segments.forEach((seg, idx) => {
    const visibleLen = Math.max(0, Math.min(seg.text.length, count - consumed));
    let visible = seg.text.slice(0, visibleLen);
    consumed += seg.text.length;

    // First segment stays on line 1; the emphasised segment starts line 2.
    if (idx === 1) {
      nodes.push(<br key={`br-${idx}`} />);
      visible = visible.replace(/^ /, ""); // drop the leading join-space at line start
    }

    if (seg.em) {
      nodes.push(
        <em key={idx} className="font-light not-italic">
          {visible}
        </em>
      );
    } else {
      nodes.push(<span key={idx}>{visible}</span>);
    }
  });

  return (
    <div className="relative pb-2 mb-8">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold leading-[1.05] tracking-tight">
        {nodes}
        {!done && <span className="tw-caret" aria-hidden="true" />}
        {done && (
          <span className="tw-dots" aria-hidden="true">
            <span className={reduce ? "tw-dot" : "tw-dot tw-dot--anim"} />
            <span className={reduce ? "tw-dot" : "tw-dot tw-dot--anim"} />
            <span className={reduce ? "tw-dot" : "tw-dot tw-dot--anim"} />
          </span>
        )}
      </h1>
    </div>
  );
};

export default TypewriterHeadline;
