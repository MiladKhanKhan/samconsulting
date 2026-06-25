import { useEffect, useRef, useState } from "react";
import { Pen } from "lucide-react";

interface HandwritingHeadlineProps {
  /** First part of the headline, e.g. "Din partner för" */
  pre: string;
  /** Emphasised middle word, e.g. "datadrivna" */
  em: string;
  /** Last part, e.g. "beslut" */
  post: string;
  /** Called once when the writing animation has finished (or is skipped). */
  onDone?: () => void;
}

/** How long the "writing" takes before it morphs into the final headline. */
const WRITE_MS = 2400;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Renders the hero headline as if it is being written by hand, then crossfades
 * ("morphs") into the normal typographic headline. The text is supplied as
 * props, so it works for any language.
 */
const HandwritingHeadline = ({ pre, em, post, onDone }: HandwritingHeadlineProps) => {
  const reduce = prefersReducedMotion();
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
    const id = window.setTimeout(() => {
      setDone(true);
      fireDone();
    }, WRITE_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sizeClasses = "text-5xl md:text-7xl lg:text-8xl leading-[1.05]";

  return (
    <div className="relative pb-2 mb-8">
      {/* Handwriting layer (decorative – the real text lives in the <h1> below) */}
      {!reduce && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 flex items-start transition-all duration-700 ease-out ${
            done ? "opacity-0 blur-[2px] scale-[1.02] pointer-events-none" : "opacity-100"
          }`}
        >
          <span className="relative inline-block">
            <span
              className={`font-hand font-semibold text-foreground ${sizeClasses}`}
              style={{ animation: `hw-reveal ${WRITE_MS}ms ease-in-out forwards` }}
            >
              {pre}
              <br />
              {em} {post}
            </span>
            {!done && (
              <Pen
                className="absolute top-[0.15em] text-foreground drop-shadow-sm"
                size={36}
                strokeWidth={1.75}
                style={{ animation: `hw-pen ${WRITE_MS}ms ease-in-out forwards` }}
              />
            )}
          </span>
        </div>
      )}

      {/* Final headline – always in the DOM (for SEO / screen readers), faded in on finish */}
      <h1
        className={`font-heading font-semibold tracking-tight transition-all duration-700 ease-out ${sizeClasses} ${
          done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        {pre}
        <br />
        <em className="font-light not-italic">{em}</em> {post}
      </h1>
    </div>
  );
};

export default HandwritingHeadline;
