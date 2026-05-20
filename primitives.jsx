/* eslint-disable */
/* virgIA · Primitives: Reveal, CountUp, Icons */

const { useState, useEffect, useRef, useMemo, useLayoutEffect } = React;

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { el.classList.add("is-in"); io.unobserve(el); }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={"reveal " + className} style={{ "--rd": delay + "ms", ...(style || {}) }} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- CountUp ---------- */
function CountUp({ to, decimals = 0, duration = 1400, suffix = "", prefix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(to * eased);
          if (p < 1) requestAnimationFrame(tick);
          else setVal(to);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const display = decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString("es-AR");
  return <span ref={ref} className="tnum">{prefix}{display}{suffix}</span>;
}

/* ---------- Icons (custom, minimal) ---------- */
const Icon = {
  Eye: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  Cpu: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9" y="9" width="6" height="6" rx="0.5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>
  ),
  Pulse: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>
  ),
  Shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  Capsule: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="2" width="16" height="20" rx="8"/><path d="M4 12h16"/></svg>
  ),
  Net: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
  ),
  Bolt: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>
  ),
  Tag: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12V3h9l9 9-9 9-9-9Z"/><circle cx="8" cy="8" r="1.5"/></svg>
  ),
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  ),
};

/* ---------- Marquee (auto-duplicates content) ---------- */
function Marquee({ items, render }) {
  const list = [...items, ...items];
  return (
    <div className="marquee-track">
      {list.map((it, i) => (
        <React.Fragment key={i}>{render(it, i)}</React.Fragment>
      ))}
    </div>
  );
}

Object.assign(window, { useReveal, Reveal, CountUp, Icon, Marquee });
