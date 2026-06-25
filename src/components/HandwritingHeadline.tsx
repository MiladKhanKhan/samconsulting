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

/** Base time per character (ms). A little randomness is added for a human feel. */
const CHAR_MS = 55;
/** Pause after the last letter before morphing into the final headline. */
const END_PAUSE_MS = 550;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Writes the hero headline out letter by letter, as if by hand, with a pen that
 * sits right after the last written character (so it follows the text and drops
 * to the next line on its own). When finished it crossfades ("morphs") into the
 * normal typographic headline. Text comes from props, so it works in any language.
 */
const HandwritingHeadline = ({ pre, em, post, onDone }: HandwritingHeadlineProps) => {
  const reduce = prefersReducedMotion();
  // "\n" forces the same two-line layout as the final headline.
  const full = `${pre}\n${em} ${post}`;

  const [count, setCount] = useState(reduce ? full.length : 0);
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
    let charTimer: number;
    let doneTimer: number;

    const tick = () => {
      i += 1;
      setCount(i);
      if (i < full.length) {
        charTimer = window.setTimeout(tick, CHAR_MS + Math.random() * 45);
      } else {
        doneTimer = window.setTimeout(() => {
          setDone(true);
          fireDone();
        }, END_PAUSE_MS);
      }
    };

    charTimer = window.setTimeout(tick, 250);
    return () => {
      window.clearTimeout(charTimer);
      window.clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [full]);

  const sizeClasses = "text-5xl md:text-7xl lg:text-8xl leading-[1.05]";
  const written = full.slice(0, count);

  return (
    <div className="relative pb-2 mb-8">
      {/* Handwriting layer (decorative – the real text lives in the <h1> below) */}
      {!reduce && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            done ? "opacity-0 blur-[2px] scale-[1.02] pointer-events-none" : "opacity-100"
          }`}
        >
          <span
            className={`font-hand font-semibold text-foreground ${sizeClasses}`}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {written}
            {!done && (
              <Pen
                className="inline-block text-foreground drop-shadow-sm"
                size={34}
                strokeWidth={1.75}
                style={{
                  verticalAlign: "-0.18em",
                  marginLeft: "0.02em",
                  animation: "hw-pen-bob 0.5s ease-in-out infinite",
                }}
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
