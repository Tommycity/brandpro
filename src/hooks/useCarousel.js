import { useState, useEffect, useCallback, useRef } from "react";


export function useCarousel(total, interval = 0) {
  const [current, setCurrent] = useState(0);

  // Always-fresh ref so the interval never goes stale
  const currentRef = useRef(current);
  useEffect(() => { currentRef.current = current; }, [current]);

  const goTo = useCallback(
    (index) => setCurrent(((index % total) + total) % total),
    [total]
  );

  const prev = useCallback(() => goTo(currentRef.current - 1), [goTo]);
  const next = useCallback(() => goTo(currentRef.current + 1), [goTo]);

  // Stable auto-play — the interval is set once and reads from the ref,
  // so changing slides never resets the timer.
  useEffect(() => {
    if (!interval) return;
    const id = setInterval(() => goTo(currentRef.current + 1), interval);
    return () => clearInterval(id);
  }, [interval, goTo]);

  return {
    current,
    goTo,
    prev,
    next,
    canPrev: current > 0,
    canNext: current < total - 1,
  };
}

