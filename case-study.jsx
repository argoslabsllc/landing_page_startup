/* eslint-disable */
/* ArgosIA · Caso de éxito · La Virginia */

function LiveFeed() {
  const base = window.LV_DATA.recent;
  const [feed, setFeed] = React.useState(base);

  React.useEffect(() => {
    let counter = 1143;
    const t = setInterval(() => {
      counter += 1;
      const variants = ["Intenso", "Equilibrado", "Extra Intenso", "Sutil"];
      const isBad = Math.random() < 0.18;
      const v = variants[Math.floor(Math.random() * variants.length)];
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      const ms = String(Math.floor(now.getMilliseconds() / 100));

      const badPool = [
        { read: `Sellado ${180 + Math.floor(Math.random() * 50)} kPa · debajo del umbral`, detail: "Eje 1 · Sellado deficiente" },
        { read: "Fisura detectada · sector lateral", detail: "Eje 2 · Cápsula fisurada" },
        { read: `Orientación invertida ±${(15 + Math.random() * 6).toFixed(1)}°`, detail: "Eje 3 · Orientación inválida" },
      ];
      const okRead = `Sellado ${310 + Math.floor(Math.random() * 18)} kPa · Peso 5.${55 + Math.floor(Math.random() * 8)} g · ±${(Math.random() * 0.8).toFixed(1)}°`;
      const bp = badPool[Math.floor(Math.random() * badPool.length)];

      const item = {
        n: `C-00${counter}`,
        t: `${hh}:${mm}:${ss}.${ms}`,
        prod: `P-2026-114${Math.floor(Math.random() * 5)}`,
        var: v,
        status: isBad ? "bad" : "ok",
        read: isBad ? bp.read : okRead,
        detail: isBad ? bp.detail : null,
        isNew: true,
      };
      setFeed(prev => [item, ...prev.slice(0, 11)]);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-head">
        <div className="traffic">
          <span></span><span></span><span></span>
        </div>
        <span className="title">la-virginia · panel · línea A</span>
        <span className="live">EN VIVO</span>
      </div>
      <ul className="feed" aria-live="polite" aria-relevant="additions" aria-atomic="false">
        {feed.map((it, i) => (
          <li key={it.n + i} className={"feed-item " + it.status + (it.isNew && i === 0 ? " new" : "")}>
            <span className="feed-time">{it.t}</span>
            <span className="feed-id">{it.n}</span>
            <span className="feed-detail">{it.detail || `${it.var} · ${it.read}`}</span>
            <span className={"feed-status " + it.status}>{it.status === "ok" ? "OK" : "RECHAZO"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AxisBreakdown() {
  const axes = window.LV_DATA.axes;
  const maxR = Math.max(...axes.map(a => a.rechazos));
  return (
    <div className="lv-stat full">
      <div className="lv-stat-label">Rechazos por eje · jornada</div>
      <div className="axes">
        {axes.map(a => (
          <div className="axis" key={a.n} style={{ color: a.color }}>
            <div className="axis-head">
              <span className="axis-num">EJE {a.n}</span>
              <span className="axis-dot"></span>
            </div>
            <div className="axis-title" style={{ color: "var(--text)" }}>{a.label}</div>
            <div className="axis-bar">
              <div className="axis-bar-fill animBar" style={{ width: `${(a.rechazos / maxR) * 100}%` }}></div>
            </div>
            <div className="axis-count">
              <span style={{ color: "var(--muted)" }}>{a.desc}</span>
              <span style={{ color: "var(--text)" }}>{a.rechazos}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HourChart() {
  const data = window.LV_DATA.byHour;
  const maxTotal = Math.max(...data.map(d => d.e1 + d.e2 + d.e3));
  const palette = ["#f0a060", "#1a6dc4", "#FFCE2E"];
  return (
    <div className="lv-stat full">
      <div className="lv-stat-label">Rechazos por hora · 08:00 – 16:00</div>
      <div className="hour-chart">
        {data.map((d, i) => {
          const total = d.e1 + d.e2 + d.e3;
          const h = (total / maxTotal) * 100;
          return (
            <div key={d.h} className="hour-bar" style={{ height: `${Math.max(h, 6)}%`, transitionDelay: `${i * 60}ms` }}>
              <div className="hour-bar-seg" style={{ flexBasis: `${(d.e1 / total) * 100}%`, background: palette[0] }}></div>
              <div className="hour-bar-seg" style={{ flexBasis: `${(d.e2 / total) * 100}%`, background: palette[1] }}></div>
              <div className="hour-bar-seg" style={{ flexBasis: `${(d.e3 / total) * 100}%`, background: palette[2] }}></div>
            </div>
          );
        })}
      </div>
      <div className="hour-axis">
        {data.map(d => <span key={d.h}>{d.h}h</span>)}
      </div>
    </div>
  );
}

function CaseStudy() {
  const s = window.LV_DATA.shift;
  return (
    <section className="lv-section" id="caso">
      <div className="lv-bg"></div>
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <div className="section-label" style={{ color: "var(--lv-blue-2)" }}>
            [ 04 ] Caso de éxito · La Virginia
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="lv-head">
            <div style={{ flex: 1 }}>
              <div className="lv-meta">
                <div className="lv-meta-text">
                  <span className="lv-meta-tag">Rosario, Santa Fe · Hackathon La Virginia</span>
                  <h2>Inspección de cápsulas en tiempo real</h2>
                </div>
              </div>
              <p className="lv-quote" style={{ marginTop: 24 }}>
                Desarrollamos y presentamos ante el equipo de operaciones de La Virginia (en la Hackathon de Rosario organizada por Shippear y potenciada por Vercel) un sistema integrado de visión artificial. Validamos en milisegundos los tres ejes de control de la línea: sellado (foil), integridad de cápsula y posicionamiento en bandeja.
              </p>
            </div>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{
                position: "absolute",
                width: 650,
                height: 650,
                borderRadius: "50%",
                background: "radial-gradient(circle at 50% 50%, rgba(50, 150, 220, 0.35), rgba(30, 100, 180, 0.1) 50%, transparent 85%)",
                zIndex: 0,
                filter: "blur(40px)",
              }} />
              <img width="360" height="206" src="https://www.lavirginia.com.ar/wp-content/uploads/2025/04/LOGO-SVG.svg" className="header-logo-dark" alt="La Virginia" style={{ opacity: 0.8, zIndex: 1, position: "relative" }} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="lv-feed-grid">
            {/* Left: live feed */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <LiveFeed />
              <div style={{
                display: "flex", justifyContent: "space-between",
                fontFamily: "var(--mono)", fontSize: 11,
                color: "var(--muted)", letterSpacing: "0.06em",
                padding: "0 4px",
              }}>
                <span>Cápsulas inspeccionadas · turno actual</span>
                <span style={{ color: "var(--text)" }}>
                  <CountUp to={s.produccionAcumulada} /> / {s.meta.toLocaleString("es-AR")}
                </span>
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="lv-stats">
              <div className="lv-stat">
                <div className="lv-stat-label">Aprobación · jornada</div>
                <div className="lv-stat-value" style={{ color: "var(--lv-yellow)" }}>
                  <CountUp to={95.0} decimals={1} /><span className="unit">%</span>
                </div>
                <div className="lv-stat-foot">
                  <CountUp to={s.aprobadas} /> aprobadas · {s.rechazadas} rechazadas
                </div>
              </div>

              <div className="lv-stat">
                <div className="lv-stat-label">Ritmo actual</div>
                <div className="lv-stat-value">
                  <CountUp to={s.ritmoActual} /><span className="unit">/ h</span>
                </div>
                <div className="lv-stat-foot">
                  Meta · {s.ritmoMeta} / h · proyección 1.198
                </div>
              </div>

              <AxisBreakdown />
              <HourChart />
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }} className="lv-bottom-cards">
            <BottomCard
              tag="ANTES"
              title="Inspección manual"
              body="Muestreo aleatorio manual (1 de cada 12 cápsulas). Detención obligatoria de la línea para control de calidad."
              foot="Monitoreo discontinuo"
            />
            <BottomCard
              tag="PROTOTIPO HACKATHON"
              title="Validación en 3 ejes"
              body="Inspección óptica del 100% de la producción en tiempo real. Análisis de sellado, cuerpo y bandeja en milisegundos."
              foot="Clasificación automática"
            />
            <BottomCard
              tag="TECNOLOGÍA"
              title="Shippear by Vercel"
              body="Desarrollado y desplegado en tiempo récord durante la hackathon de Rosario. Interfaz ultra veloz corriendo en el edge."
              foot="MVP funcional"
            />
          </div>
        </Reveal>

        <Reveal delay={320}>
          <DefectHeatmap />
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .lv-bottom-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function BottomCard({ tag, title, body, foot, accent }) {
  return (
    <div style={{
      padding: 28,
      background: accent ? "linear-gradient(180deg, rgba(3,78,162,0.10), var(--bg-1))" : "var(--bg-1)",
      border: "1px solid " + (accent ? "rgba(3,78,162,0.5)" : "var(--border)"),
      borderRadius: 14,
    }}>
      <div style={{
        fontFamily: "var(--mono)",
        fontSize: 10,
        letterSpacing: "0.12em",
        color: accent ? "var(--lv-yellow)" : "var(--muted)",
        marginBottom: 16,
      }}>{tag}</div>
      <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.01em" }}>{title}</div>
      <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.55, marginBottom: 18 }}>{body}</p>
      <div style={{
        fontFamily: "var(--mono)", fontSize: 12,
        color: accent ? "var(--lv-yellow)" : "var(--brand)",
        letterSpacing: "0.04em",
        paddingTop: 14,
        borderTop: "1px solid var(--line)",
      }}>{foot}</div>
    </div>
  );
}

Object.assign(window, { LiveFeed, AxisBreakdown, HourChart, CaseStudy, BottomCard, DefectHeatmap });

/* ---------- Defect heatmap on capsule silhouette ---------- */
function DefectHeatmap() {
  const defects = window.LV_DATA.topDefects;
  // Position dots on the capsule shape; coords are % within the heatmap-vis box
  const positions = [
    { x: 50, y: 42, color: "#f0a060" },  // axis 1 sealing
    { x: 50, y: 70, color: "#FFCE2E" },  // axis 3 position
    { x: 30, y: 55, color: "#1a6dc4" },  // axis 2 capsule
    { x: 50, y: 26, color: "#f0a060" },  // axis 1 foil
    { x: 65, y: 75, color: "#FFCE2E" },  // axis 3 orientation
    { x: 70, y: 50, color: "#1a6dc4" },  // axis 2 deformation
  ];

  return (
    <div style={{ marginTop: 56 }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        marginBottom: 16, flexWrap: "wrap", gap: 12,
      }}>
        <div>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10,
            letterSpacing: "0.14em", color: "var(--lv-blue-2)",
            marginBottom: 8,
          }}>HEATMAP · DEFECTOS POR ZONA</div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em" }}>
            Dónde aparecen los rechazos sobre la cápsula
          </div>
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)" }}>
          últimos 30 días · {defects.reduce((s, d) => s + d.count, 0)} eventos
        </div>
      </div>

      <div className="heatmap">
        <div className="heatmap-vis">
          {/* Capsule silhouette */}
          <svg viewBox="0 0 200 320" style={{ height: "82%", position: "relative", zIndex: 2 }}>
            <path
              d="M50 70 Q50 30 90 25 L110 25 Q150 30 150 70 L138 290 Q135 305 120 305 L80 305 Q65 305 62 290 Z"
              fill="rgba(20,20,26,0.6)"
              stroke="var(--border-2)"
              strokeWidth="1.2"
            />
            <rect x="50" y="60" width="100" height="14" rx="2" fill="var(--lv-blue)" opacity="0.4"/>
            <rect x="50" y="60" width="100" height="14" rx="2" fill="none" stroke="var(--lv-blue-2)" strokeWidth="1"/>
            {/* labels */}
            <text x="160" y="68" fill="var(--muted)" fontSize="10" fontFamily="var(--mono)">eje 1</text>
            <text x="160" y="180" fill="var(--muted)" fontSize="10" fontFamily="var(--mono)">eje 2</text>
            <text x="160" y="270" fill="var(--muted)" fontSize="10" fontFamily="var(--mono)">eje 3</text>
            <line x1="50" y1="60" x2="155" y2="60" stroke="var(--border)" strokeDasharray="2 2"/>
            <line x1="50" y1="180" x2="155" y2="180" stroke="var(--border)" strokeDasharray="2 2"/>
            <line x1="50" y1="270" x2="155" y2="270" stroke="var(--border)" strokeDasharray="2 2"/>
          </svg>

          {/* heat dots */}
          {positions.map((p, i) => (
            <div key={i} className="heat-dot" style={{
              left: `calc(${p.x}% - 18px)`,
              top: `calc(${p.y}% - 18px)`,
              background: p.color,
              opacity: 0.65,
              animation: `heatPulse 2.6s ${i * 0.3}s infinite ease-in-out`,
            }} />
          ))}

          <style>{`
            @keyframes heatPulse {
              0%, 100% { transform: scale(0.7); opacity: 0.5; }
              50% { transform: scale(1.2); opacity: 0.8; }
            }
          `}</style>

          {/* corner label */}
          <div style={{
            position: "absolute", left: 14, top: 14, zIndex: 3,
            fontFamily: "var(--mono)", fontSize: 10,
            color: "var(--muted)", letterSpacing: "0.1em",
          }}>SILUETA · CÁPSULA LV</div>
        </div>

        <div>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10,
            letterSpacing: "0.14em", color: "var(--muted)",
            marginBottom: 12, textTransform: "uppercase",
          }}>Top 6 defectos · jornada</div>
          <div className="heatmap-legend">
            {defects.map(d => {
              const max = defects[0].count;
              const palette = { 1: "#f0a060", 2: "#1a6dc4", 3: "#FFCE2E" };
              const color = palette[d.axis];
              return (
                <div key={d.code} className="heatmap-legend-row">
                  <span className="heatmap-legend-dot" style={{ background: color }}></span>
                  <span className="heatmap-legend-name">
                    <span style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: 11, marginRight: 8 }}>{d.code}</span>
                    {d.name}
                  </span>
                  <span className="heatmap-legend-bar" style={{ color }}>
                    <span className="heatmap-legend-bar-fill" style={{ width: `${(d.count / max) * 100}%` }}></span>
                  </span>
                  <span className="heatmap-legend-count">{d.count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
