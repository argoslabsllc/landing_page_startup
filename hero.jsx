/* eslint-disable */
/* ArgosIA · Header + Hero (versión generalizada con product switcher) */

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState("");
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "capacidades", label: "Capacidades" },
    { id: "productos",   label: "Productos" },
    { id: "como",        label: "Cómo funciona" },
    { id: "caso",        label: "Caso La Virginia" },
    { id: "stack",       label: "Stack" },
  ];

  // Scrollspy: highlight the nav link for the section currently in view
  React.useEffect(() => {
    const sections = links
      .map(l => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={"header " + (scrolled ? "is-scrolled" : "")}>
      <div className="wrap header__inner">
        <a href="#top" className="brand" aria-label="ArgosIA · inicio">
          <img src="assets/logo.png" alt="ArgosIA" className="logo-img" />
        </a>
        <nav className={"nav " + (menuOpen ? "is-open" : "")} aria-label="Navegación principal">
          {links.map(l => (
            <a
              key={l.id}
              href={"#" + l.id}
              onClick={() => setMenuOpen(false)}
              className={activeId === l.id ? "is-active" : ""}
              aria-current={activeId === l.id ? "location" : undefined}
            >{l.label}</a>
          ))}
        </nav>
        <div className="header-cta">
          <span style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--brand)",
            letterSpacing: "0.12em",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "var(--brand)",
              boxShadow: "0 0 8px var(--brand)",
              animation: "pulse 1.6s infinite",
            }}></span>
            SISTEMA EN PRODUCCIÓN
          </span>
        </div>
        <button
          className={"menu-toggle " + (menuOpen ? "is-open" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
}

/* ---------- Products available in the switcher ---------- */
const HERO_PRODUCTS = [
  {
    id: "capsules",
    name: "Cápsulas de café",
    short: "Cápsulas",
    axes: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="2" width="12" height="20" rx="6"/><path d="M6 6h12"/></svg>
    ),
    readouts: [
      { lbl: "EJE 1 · Empaq.", val: "318 kPa · ok" },
      { lbl: "EJE 2 · Cápsula", val: "5.61 g · ok" },
      { lbl: "EJE 3 · Orden",  val: "±0.4° · ok" },
    ],
    code: "C-001143 · 0.41s",
    meta: ["línea / A", "producto / Cápsula Intenso", "modelo / ArgosIA-vision · v3.4"],
    palette: ["body-coffee-a","body-coffee-b","body-coffee-c","body-coffee-d"],
    shape: "capsule",
  },
  {
    id: "bottles",
    name: "Botellas",
    short: "Botellas",
    axes: 4,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 2h6v4l1.5 2.5C17 9.5 17 11 17 11v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9s0-1.5.5-2.5L9 6V2Z"/></svg>
    ),
    readouts: [
      { lbl: "EJE 1 · Tapa",   val: "Cierre OK" },
      { lbl: "EJE 2 · Nivel",  val: "498 ml · ok" },
      { lbl: "EJE 3 · Etiqueta", val: "Posición ±0.6°" },
      { lbl: "EJE 4 · Lote",   val: "Impresión OK" },
    ],
    code: "B-042881 · 0.38s",
    meta: ["línea / 02", "producto / Botella PET 500ml", "modelo / ArgosIA-vision · v2.7"],
    palette: ["body-bottle-a","body-bottle-b","body-bottle-c","body-bottle-d"],
    shape: "bottle",
  },
  {
    id: "blister",
    name: "Blíster farma",
    short: "Blíster",
    axes: 5,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8"  cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="16" cy="12" r="1.8"/></svg>
    ),
    readouts: [
      { lbl: "EJE 1 · Celdas",   val: "10/10 llenas" },
      { lbl: "EJE 2 · Color",    val: "ΔE 1.2 · ok" },
      { lbl: "EJE 3 · Foil",     val: "Sellado pleno" },
      { lbl: "EJE 4 · Forma",    val: "Sin deformidad" },
      { lbl: "EJE 5 · Trazador", val: "Lote leído" },
    ],
    code: "F-090114 · 0.36s",
    meta: ["línea / 04", "producto / Blíster 10×1", "modelo / ArgosIA-vision · v4.1"],
    palette: ["body-blister-a","body-blister-b","body-blister-c","body-blister-d"],
    shape: "blister",
  },
  {
    id: "fruit",
    name: "Fruta fresca",
    short: "Fruta",
    axes: 2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4c-3 0-7 2-7 7s3 9 7 9 7-4 7-9-4-7-7-7Z"/><path d="M12 4c0-1 1-2 2-2"/></svg>
    ),
    readouts: [
      { lbl: "EJE 1 · Color",     val: "Maduración 4/5" },
      { lbl: "EJE 2 · Defectos",  val: "0 manchas · ok" },
    ],
    code: "M-771204 · 0.29s",
    meta: ["línea / packing", "producto / Manzana Royal Gala", "modelo / ArgosIA-vision · v1.9"],
    palette: ["body-fruit-a","body-fruit-b","body-fruit-c","body-fruit-d"],
    shape: "fruit",
  },
];

/* ---------- Capsule / shape SVGs ---------- */
function ProductShape({ shape, paletteClass }) {
  if (shape === "capsule") {
    return (
      <svg viewBox="0 0 24 32" className={paletteClass}>
        <path className="body" d="M3 8 Q3 4 7 3 L17 3 Q21 4 21 8 L19 28 Q18 30 16 30 L8 30 Q6 30 5 28 Z"/>
        <rect className="lid" x="3" y="6" width="18" height="3" rx="1"/>
      </svg>
    );
  }
  if (shape === "bottle") {
    return (
      <svg viewBox="0 0 24 32" className={paletteClass}>
        <path className="body" d="M9 4 L15 4 L15 9 L17 12 L17 28 Q17 30 15 30 L9 30 Q7 30 7 28 L7 12 L9 9 Z"/>
        <rect className="lid" x="10" y="2" width="4" height="3" rx="0.5"/>
      </svg>
    );
  }
  if (shape === "blister") {
    return (
      <svg viewBox="0 0 32 24" className={paletteClass}>
        <rect className="body" x="2" y="6" width="28" height="14" rx="2"/>
        <circle className="lid" cx="8"  cy="13" r="2"/>
        <circle className="lid" cx="16" cy="13" r="2"/>
        <circle className="lid" cx="24" cy="13" r="2"/>
      </svg>
    );
  }
  // fruit
  return (
    <svg viewBox="0 0 24 32" className={paletteClass}>
      <path className="body" d="M12 6 C7 6 4 10 4 16 C4 22 8 28 12 28 C16 28 20 22 20 16 C20 10 17 6 12 6 Z"/>
      <path className="lid" d="M12 6 Q13 3 15 3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

/* ---------- Hero capsule visualizer (now generic, switchable) ---------- */
function ProductStage({ product }) {
  const N = 6;
  const items = React.useMemo(() => Array.from({ length: N }, (_, i) => ({
    id: i,
    palette: product.palette[i % product.palette.length],
    delay: -(i * (12 / N)),
  })), [product.id]);

  return (
    <>
      <div className="capsule-stage-head">
        <span>ArgosIA · inferencia en línea</span>
        <span className="live">LIVE</span>
      </div>

      <div className="capsule-stage-meta">
        {product.meta.map((m, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: m.replace(/\/ (.*)$/, '/ <strong>$1</strong>') }} />
        ))}
      </div>

      <div className="scan-corner tr">{product.axes} EJES · TIEMPO REAL</div>

      <div className="capsule-belt">
        <div className="capsule-rail"></div>
        {items.map(it => (
          <div
            key={it.id}
            className="capsule"
            style={{
              animation: `beltMove 12s linear infinite`,
              animationDelay: `${it.delay}s`,
            }}
          >
            <ProductShape shape={product.shape} paletteClass={it.palette} />
          </div>
        ))}
      </div>

      <div className="scan-axes">
        <div className="scan-line"></div>
      </div>

      <div className="scan-readouts">
        {product.readouts.map((r, i) => (
          <div key={i} className="scan-readout">
            <span className="dot"></span>
            <span className="lbl">{r.lbl}</span>
            <span className="val">{r.val}</span>
          </div>
        ))}
      </div>

      <div className="scan-corner br">{product.code}</div>
    </>
  );
}

function ProductStageContainer() {
  const [active, setActive] = React.useState(HERO_PRODUCTS[0]);
  const [paused, setPaused] = React.useState(false);

  // Pausar la rotación si el usuario prefiere menos movimiento (WCAG 2.2.2)
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPaused(true);
  }, []);

  // Auto-rotate cada 6.5s (se detiene si el usuario interactúa o pidió menos movimiento)
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive(prev => {
        const idx = HERO_PRODUCTS.findIndex(p => p.id === prev.id);
        return HERO_PRODUCTS[(idx + 1) % HERO_PRODUCTS.length];
      });
    }, 6500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div className="capsule-stage">
      <ProductStage product={active} key={active.id} />
      <div className="prod-tabs">
        {HERO_PRODUCTS.map(p => (
          <button
            key={p.id}
            className={"prod-tab " + (p.id === active.id ? "is-on" : "")}
            onClick={() => { setActive(p); setPaused(true); }}
            aria-pressed={p.id === active.id}
            aria-label={"Ver " + p.name}
          >
            <span aria-hidden="true">{p.icon}</span>
            <span>{p.short.toUpperCase()}</span>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes beltMove {
          0%   { left: -8%; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { left: 108%; opacity: 0; }
        }
        /* product palettes */
        .body-coffee-a .body { fill: #2a1108; stroke: #5a2d18; }
        .body-coffee-b .body { fill: #3b1c10; stroke: #6a4128; }
        .body-coffee-c .body { fill: #5a2d18; stroke: #7a4828; }
        .body-coffee-d .body { fill: #8b5a3c; stroke: #a4795a; }

        .body-bottle-a .body { fill: #0d2a3a; stroke: #1d4258; }
        .body-bottle-b .body { fill: #143246; stroke: #25506b; }
        .body-bottle-c .body { fill: #1a4a5e; stroke: #2e6a82; }
        .body-bottle-d .body { fill: #2b6378; stroke: #468da7; }

        .body-blister-a .body { fill: #1a1a26; stroke: #2e2e3d; }
        .body-blister-b .body { fill: #15151f; stroke: #2e2e3d; }
        .body-blister-c .body { fill: #1d1d2c; stroke: #353548; }
        .body-blister-d .body { fill: #25253a; stroke: #3d3d52; }

        .body-fruit-a .body { fill: #4a1a1a; stroke: #7a2a2a; }
        .body-fruit-b .body { fill: #6a2418; stroke: #9a3a28; }
        .body-fruit-c .body { fill: #7a3018; stroke: #b04a28; }
        .body-fruit-d .body { fill: #9a4a28; stroke: #c66b3e; }
      `}</style>
    </div>
  );
}

function Hero() {
  React.useEffect(() => {
    const u = window.UnicornStudio;
    if (u && u.init) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function() {
          u.init();
        });
      } else {
        u.init();
      }
    } else {
      window.UnicornStudio = { isInitialized: false };
      const i = document.createElement("script");
      i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.12/dist/unicornStudio.umd.js";
      i.onload = function() {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", function() {
            if (window.UnicornStudio && window.UnicornStudio.init) {
              window.UnicornStudio.init();
            }
          });
        } else {
          if (window.UnicornStudio && window.UnicornStudio.init) {
            window.UnicornStudio.init();
          }
        }
      };
      (document.head || document.body).appendChild(i);
    }
  }, []);

  return (
    <section className="hero" id="top">
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, width: "100%", height: "100%" }} data-us-project="iy52WMLmbblvqYmBu4oH"></div>
      <div className="wrap hero-grid" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <Reveal>
            <div className="hero-eyebrow">
              <span className="pill">ArgosIA · ML para industria</span>
              Inferencia en planta · adaptable a cualquier producto
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="hero-title">
              Calidad<br/>
              que se <em>decide</em><br/>
              en la <span className="stroke">línea.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero-sub">
              ArgosIA entrena modelos de visión por computador sobre tu producto
              y los despliega en piso de planta. Decisión sub-segundo,
              auditable, integrada con tu PLC. Cambias el producto, entrenamos
              de nuevo; el panel queda igual.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="hero-cta">
              <a href="#caso" className="btn btn--brand btn--lg">
                Ver caso La Virginia <Icon.Arrow />
              </a>
              <a href="#productos" className="btn btn--outline btn--lg">
                Productos soportados
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <ProductStageContainer />
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, ProductStageContainer, HERO_PRODUCTS });
