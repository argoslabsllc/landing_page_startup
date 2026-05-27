/* eslint-disable */
/* ArgosIA · Marquee, Capabilities, Products grid, Pipeline, Process, Stack, Testimonial, CTA, Footer */

/* ---------- KPI marquee ---------- */
function MetricsMarquee() {
  const items = window.VIRGIA_METRICS;
  return (
    <div className="marquee">
      <Marquee items={items} render={(it, i) => (
        <div className="marquee-item">
          <span className="marquee-num"><em>{it.value}</em></span>
          <span className="marquee-label">{it.label}</span>
          <span className="marquee-dot"></span>
        </div>
      )}/>
    </div>
  );
}

/* ---------- Capacidades ---------- */
function Capabilities() {
  const caps = [
    {
      n: "01",
      icon: <Icon.Eye />,
      title: "Visión por computador en línea",
      body: "Modelos entrenados sobre tu producto y tu planta, no sobre datasets genéricos. Detección de fisuras, color, forma, posición, etiqueta, lote y todo lo que tu QC defina.",
      tags: ["YOLOv8", "Edge inference", "<420 ms"],
    },
    {
      n: "02",
      icon: <Icon.Cpu />,
      title: "Decisión en el operario",
      body: "Cada unidad valida o rechaza al instante. La UI fue diseñada con operarios reales: tipografía grande, semáforo claro, sin jerga. Sin gerentes en el medio.",
      tags: ["Operator-first", "WCAG AA", "Offline-ready"],
    },
    {
      n: "03",
      icon: <Icon.Pulse />,
      title: "Series y predicción de turno",
      body: "Anticipamos la deriva del proceso antes que se vuelva rechazo. Proyección de ritmo, aprobación y meta a fin de jornada con bandas de confianza.",
      tags: ["Forecast", "Anomaly detect", "Backtesting"],
    },
    {
      n: "04",
      icon: <Icon.Shield />,
      title: "Trazabilidad auditada",
      body: "Cada inferencia queda almacenada con su lectura y firma de modelo. Reportes por turno, lote y SKU exportables para auditorías ISO 22000 y HACCP.",
      tags: ["ISO 22000", "Audit log", "Firmas v3.4"],
    },
  ];
  return (
    <section className="section" id="capacidades">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 01 ] Capacidades</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            ML que <em>vive en la línea</em>,<br/>
            <span className="dim">no en una notebook.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="section-lede">
            Construimos sistemas pensados para que el operario los use ocho horas
            por turno. La latencia, la legibilidad y la robustez ganan a las
            métricas de paper.
          </p>
        </Reveal>

        <div className="cap-grid">
          {caps.map((c, i) => (
            <Reveal key={c.n} className="cap" delay={i * 80}>
              <div className="cap-num">/ {c.n}</div>
              <div className="cap-icon">{c.icon}</div>
              <h3 className="cap-title">{c.title}</h3>
              <p className="cap-body">{c.body}</p>
              <div className="cap-tag">
                {c.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Products: adapts to anything ---------- */
function ProductsSection() {
  const cards = [
    {
      name: "Cápsulas de café",
      axes: 3,
      desc: "Empaque · forma · orden",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="6" y="2" width="12" height="20" rx="6"/><path d="M6 6h12"/></svg>,
    },
    {
      name: "Botellas y latas",
      axes: 4,
      desc: "Tapa · nivel · etiqueta · lote",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M9 2h6v4l1.5 2.5C17 9.5 17 11 17 11v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9s0-1.5.5-2.5L9 6V2Z"/></svg>,
    },
    {
      name: "Blíster farma",
      axes: 5,
      desc: "Celdas · color · foil · forma · lote",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="16" cy="12" r="1.6"/></svg>,
    },
    {
      name: "Fruta fresca",
      axes: 2,
      desc: "Color/maduración · defectos",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 4c-3 0-7 2-7 7s3 9 7 9 7-4 7-9-4-7-7-7Z"/><path d="M12 4c0-1 1-2 2-2"/></svg>,
    },
    {
      name: "Piezas metálicas",
      axes: 4,
      desc: "Geometría · rebabas · soldadura · marca",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><polygon points="12,3 21,8 21,16 12,21 3,16 3,8"/><circle cx="12" cy="12" r="3"/></svg>,
    },
    {
      name: "Envases flexibles",
      axes: 3,
      desc: "Sellado · impresión · arrugas",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 3h12v18H6Z"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>,
    },
  ];

  return (
    <section className="section" id="productos">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 02 ] Adaptable a cualquier producto</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            Un sistema.<br/>
            <em>Tu producto</em>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="section-lede">
            ArgosIA no es un detector pre-entrenado. Entrenamos los modelos sobre
            tu línea, definimos contigo los <em>ejes de validación</em> que
            importan para tu QC, y el panel del operario se mantiene idéntico.
            Cambias de SKU, se reentrena; el procedimiento no cambia.
          </p>
        </Reveal>

        <div className="products">
          {cards.map((c, i) => (
            <Reveal key={c.name} className="product-card" delay={i * 60}>
              <div className="product-icon">{c.icon}</div>
              <div className="product-name">{c.name}</div>
              <div className="product-axes">
                <span className="num">{c.axes}</span> ejes · {c.desc}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div style={{
            marginTop: 32,
            padding: "18px 24px",
            border: "1px dashed var(--border-2)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: "var(--muted)",
            letterSpacing: "0.06em",
          }}>
            <span><span style={{ color: "var(--brand)" }}>{">"}</span> ¿tu producto no está acá?</span>
            <span style={{ color: "var(--text-2)" }}>Validamos viabilidad en 48h con muestras tuyas y un set de imágenes.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process (general) ---------- */
function Process() {
  const [active, setActive] = React.useState(0);
  const steps = [
    {
      title: "Captura",
      body: "Cámaras industriales sobre tu cinta o línea. Hasta 60 fps con iluminación controlada. Calibramos contra el producto patrón sin tocar tu PLC.",
      detail: 'captura.line("línea-01")',
    },
    {
      title: "Inferencia multi-eje",
      body: "Definimos contigo los ejes que importan: pueden ser 2, 3, 5 o los que tu QC requiera. Cada modelo corre en paralelo y responde con un veredicto legible.",
      detail: "ArgosIA.infer({ axes: N })",
    },
    {
      title: "Validación",
      body: "El panel muestra OK / RECHAZO por eje, con la lectura física que lo motivó (mm, g, kPa, ΔE, °). El operario solo decide ante duda real.",
      detail: "panel.validate(decision)",
    },
    {
      title: "Trazabilidad",
      body: "Cada unidad queda registrada con su lectura, su lote y la versión del modelo. El supervisor cierra turno con un reporte completo, no con planilla.",
      detail: "audit.commit(turno)",
    },
  ];
  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section" id="como">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 03 ] Cómo funciona</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            Cuatro pasos,<br/>
            <em>una jornada</em> de planta.
          </h2>
        </Reveal>

        <div className="process-grid">
          <div>
            {steps.map((s, i) => (
              <div
                key={i}
                className={"step " + (i === active ? "is-active" : "")}
                onClick={() => setActive(i)}
              >
                <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="step-title">{s.title}</div>
                  <p className="step-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="process-visual">
            <ProcessVisual step={active} steps={steps} />
          </div>
        </div>

        {/* Pipeline animado */}
        <Pipeline />
      </div>
    </section>
  );
}

function ProcessVisual({ step, steps }) {
  return (
    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 18,
        fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)",
        letterSpacing: "0.1em",
      }}>
        <span>STEP / {String(step + 1).padStart(2, "0")} · {steps[step].title.toUpperCase()}</span>
        <span style={{ color: "var(--brand)" }}>● EN VIVO</span>
      </div>

      <div style={{
        flex: 1,
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}></div>

        {step === 0 && <CaptureFrame />}
        {step === 1 && <InferenceFrame />}
        {step === 2 && <ValidateFrame />}
        {step === 3 && <AuditFrame />}
      </div>

      <div style={{
        marginTop: 14,
        fontFamily: "var(--mono)", fontSize: 12,
        color: "var(--brand)", letterSpacing: "0.02em",
      }}>
        <span style={{ color: "var(--muted)" }}>{"> "}</span>
        {steps[step].detail}
        <span className="cursor" style={{
          display: "inline-block", width: 8, height: 14, background: "var(--brand)",
          marginLeft: 6, transform: "translateY(2px)",
          animation: "blink 1s steps(1) infinite",
        }}></span>
        <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
      </div>
    </div>
  );
}

function CaptureFrame() {
  return (
    <div style={{ position: "relative", flex: 1, padding: 24 }}>
      <div style={{
        position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
        width: 240, height: 240,
        border: "1px dashed var(--brand-line)",
        borderRadius: 8,
      }}>
        <div style={{ position: "absolute", left: -1, top: -1, width: 18, height: 18, borderLeft: "2px solid var(--brand)", borderTop: "2px solid var(--brand)"}}></div>
        <div style={{ position: "absolute", right: -1, top: -1, width: 18, height: 18, borderRight: "2px solid var(--brand)", borderTop: "2px solid var(--brand)"}}></div>
        <div style={{ position: "absolute", left: -1, bottom: -1, width: 18, height: 18, borderLeft: "2px solid var(--brand)", borderBottom: "2px solid var(--brand)"}}></div>
        <div style={{ position: "absolute", right: -1, bottom: -1, width: 18, height: 18, borderRight: "2px solid var(--brand)", borderBottom: "2px solid var(--brand)"}}></div>

        <div style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          width: 90, height: 130,
          background: "linear-gradient(180deg, #3b1c10, #2a1108)",
          borderRadius: "45px 45px 18px 18px",
        }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 14, height: 8, background: "var(--brand)" }}></div>
        </div>

        <div style={{ position: "absolute", left: 0, right: 0, top: -28, fontFamily: "var(--mono)", fontSize: 10, color: "var(--brand)", letterSpacing: "0.1em" }}>
          ROI · 240 × 240 · 60fps
        </div>
      </div>
    </div>
  );
}

function InferenceFrame() {
  const axes = [
    { n: 1, label: "Eje 1 · Geometría",   val: "lectura ok", color: "var(--brand)" },
    { n: 2, label: "Eje 2 · Color",       val: "ΔE 1.2 · ok", color: "#1a6dc4" },
    { n: 3, label: "Eje 3 · Posición",    val: "±0.4° · ok",  color: "#FFCE2E" },
    { n: 4, label: "Eje N · …",           val: "configurable", color: "var(--muted)", muted: true },
  ];
  return (
    <div style={{ position: "relative", flex: 1, padding: 24, display: "grid", gap: 10 }}>
      {axes.map((a, i) => (
        <div key={a.n} style={{
          display: "grid",
          gridTemplateColumns: "60px 1fr auto",
          gap: 16,
          alignItems: "center",
          padding: "12px 16px",
          background: "var(--bg-1)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          borderLeft: `3px solid ${a.color}`,
          opacity: a.muted ? 0.5 : 1,
          animation: `slideUp 0.4s ${i * 0.12}s both cubic-bezier(0.16,1,0.3,1)`,
        }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)" }}>EJE {a.n}</div>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 2 }}>{a.label}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-2)" }}>{a.val}</div>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: a.muted ? "var(--bg-2)" : a.color, color: "#0a0a0c",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 700,
            border: a.muted ? "1px dashed var(--border-2)" : "0",
          }}>{a.muted ? "?" : "✓"}</div>
        </div>
      ))}
      <style>{`@keyframes slideUp { from { opacity: 0; transform: translateY(8px); } }`}</style>
    </div>
  );
}

function ValidateFrame() {
  return (
    <div style={{ position: "relative", flex: 1, padding: 28, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 14 }}>
      <div style={{
        width: 110, height: 110, borderRadius: "50%",
        background: "rgba(74,222,128,0.10)",
        border: "1px solid var(--ok)",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
        animation: "okPulse 1.8s infinite",
      }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12 5 5 9-11"/>
        </svg>
      </div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.1em" }}>
        UNIDAD APROBADA
      </div>
      <div style={{ fontSize: 13, color: "var(--text-2)" }}>
        N ejes válidos · 0.41 s · firma de modelo v3.4
      </div>
      <style>{`@keyframes okPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); } 50% { box-shadow: 0 0 0 24px rgba(74,222,128,0); } }`}</style>
    </div>
  );
}

function AuditFrame() {
  const rows = [
    "U-001143  14:08:42  SKU-2026-114  ok",
    "U-001142  14:08:41  SKU-2026-114  ok",
    "U-001141  14:08:41  SKU-2026-114  bad/e1",
    "U-001140  14:08:40  SKU-2026-114  ok",
    "U-001139  14:08:40  SKU-2026-112  bad/e2",
    "U-001138  14:08:40  SKU-2026-112  ok",
  ];
  return (
    <div style={{ position: "relative", flex: 1, padding: 24, fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--text-2)", overflow: "hidden" }}>
      <div style={{ color: "var(--muted)", marginBottom: 12, fontSize: 10, letterSpacing: "0.1em" }}>
        AUDIT_LOG · TURNO ACTUAL · LÍNEA 01
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          padding: "4px 8px",
          borderBottom: "1px solid var(--line)",
          color: r.includes("bad") ? "#fca5a5" : "var(--text-2)",
          animation: `appear 0.4s ${i * 0.08}s both`,
        }}>
          <span style={{ color: "var(--muted)" }}>[{String(i+1).padStart(4,"0")}]</span>  {r}
        </div>
      ))}
      <style>{`@keyframes appear { from { opacity: 0; transform: translateX(-6px); } }`}</style>
    </div>
  );
}

/* ---------- Pipeline neural-style ---------- */
function Pipeline() {
  return (
    <Reveal className="pipeline">
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 32, flexWrap: "wrap", gap: 16,
      }}>
        <div>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10,
            letterSpacing: "0.14em", color: "var(--brand)",
            marginBottom: 8,
          }}>PIPELINE · END-TO-END</div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em" }}>
            De la cámara al log, en <em style={{ color: "var(--brand)", fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400 }}>menos de medio segundo</em>.
          </div>
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)" }}>
          latencia / <span style={{ color: "var(--text)" }}>418 ms p95</span>
        </div>
      </div>

      <PipelineSVG />
    </Reveal>
  );
}

function PipelineSVG() {
  // 5 nodes: Cam → Preproc → Model (×N) → Decision → Audit
  const nodes = [
    { id: "cam",    label: "CÁMARA",     icon: "📷", x: 8 },
    { id: "pre",    label: "PREPROC",    icon: "▦",  x: 28 },
    { id: "model",  label: "MODELO ArgosIA", icon: "◈", x: 50, model: true },
    { id: "dec",    label: "DECISIÓN",   icon: "◉",  x: 72 },
    { id: "audit",  label: "AUDIT LOG",  icon: "≡",  x: 92 },
  ];

  return (
    <div style={{ position: "relative", padding: "20px 0 8px" }}>
      <svg viewBox="0 0 100 32" preserveAspectRatio="none" style={{ width: "100%", height: 70 }}>
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.1"/>
            <stop offset="50%" stopColor="var(--brand)" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        {/* base lines */}
        {nodes.slice(0, -1).map((n, i) => (
          <line key={i} x1={n.x + 2} y1="16" x2={nodes[i+1].x - 2} y2="16"
            stroke="var(--border-2)" strokeWidth="0.2" />
        ))}
        {/* travelling dots */}
        {nodes.slice(0, -1).map((n, i) => (
          <circle key={"d"+i} r="0.7" fill="var(--brand)">
            <animate
              attributeName="cx"
              from={n.x + 2}
              to={nodes[i+1].x - 2}
              dur="1.8s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="16"
              dur="1.8s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
        {/* secondary parallel model paths (multi-axis) */}
        <line x1="48" y1="16" x2="52" y2="8"  stroke="var(--brand-line)" strokeWidth="0.15" strokeDasharray="0.8 0.8"/>
        <line x1="48" y1="16" x2="52" y2="24" stroke="var(--brand-line)" strokeWidth="0.15" strokeDasharray="0.8 0.8"/>
        <line x1="48" y1="16" x2="52" y2="2"  stroke="var(--brand-line)" strokeWidth="0.15" strokeDasharray="0.8 0.8"/>
        <line x1="48" y1="16" x2="52" y2="30" stroke="var(--brand-line)" strokeWidth="0.15" strokeDasharray="0.8 0.8"/>
        {/* small axis dots near model */}
        {[2, 8, 24, 30].map((y, i) => (
          <circle key={"a"+i} cx="52" cy={y} r="0.6" fill="var(--brand)" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin={`${i*0.2}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </svg>

      <div className="pipe-row">
        {nodes.map(n => (
          <div key={n.id} className="pipe-node-group" style={{ flex: "0 0 auto", width: 100, textAlign: "center" }}>
            <div className={"pipe-node" + (n.model ? " is-model" : "")}>
              <span style={{ fontSize: 22, color: n.model ? "var(--brand)" : "var(--text-2)" }}>{n.icon}</span>
            </div>
            <div className="pipe-node-label">{n.label}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 28,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 12,
        fontFamily: "var(--mono)", fontSize: 10,
        color: "var(--muted)",
        letterSpacing: "0.06em",
        textAlign: "center",
      }}>
        <div>RGB 60 fps</div>
        <div>↓ → ROI · 224²</div>
        <div style={{ color: "var(--brand)" }}>↓ N modelos paralelos</div>
        <div>↓ veredicto + lectura</div>
        <div>↓ commit · firmado</div>
      </div>
    </div>
  );
}

/* ---------- Stack / Integrations ---------- */
function Stack() {
  const left = [
    { ic: "📷", t: "Basler · cámaras GigE" },
    { ic: "⚙️", t: "PLC · Siemens S7" },
    { ic: "🔌", t: "OPC UA · IEC 62541" },
    { ic: "📡", t: "MQTT · QoS 2" },
    { ic: "🧠", t: "PyTorch · YOLOv8" },
    { ic: "📈", t: "Prometheus · Grafana" },
    { ic: "🗄️", t: "PostgreSQL · TimescaleDB" },
    { ic: "🔁", t: "Redis · streams" },
  ];
  const right = [
    { ic: "🚀", t: "ONNX Runtime · edge" },
    { ic: "🐳", t: "Docker · k3s on-prem" },
    { ic: "⛁",  t: "S3-compatible · MinIO" },
    { ic: "🔐", t: "Vault · secret rotation" },
    { ic: "📤", t: "SAP · ERP webhook" },
    { ic: "📊", t: "Metabase · BI" },
    { ic: "🛰️", t: "NVIDIA Jetson · in-line" },
    { ic: "🧪", t: "MLflow · experiment log" },
  ];
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 06 ] Stack en planta</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            Convive con<br/>
            <em>tu fábrica</em>, no la reemplaza.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="section-lede">
            Hablamos OPC UA, MQTT, Modbus y los protocolos que tu PLC ya conoce.
            Corremos en edge sobre Jetson o en server on-premise. Tu IT no
            necesita aprobar otra nube.
          </p>
        </Reveal>
      </div>

      <div className="integrations">
        <div className="int-row">
          <div className="int-track">
            {[...left, ...left].map((it, i) => (
              <span key={i} className="int-chip"><span className="ic">{it.ic}</span>{it.t}</span>
            ))}
          </div>
        </div>
        <div className="int-row">
          <div className="int-track">
            {[...right, ...right].map((it, i) => (
              <span key={i} className="int-chip"><span className="ic">{it.ic}</span>{it.t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="kpi-grid">
          <Reveal className="kpi"><div className="kpi-num brand"><CountUp to={420} duration={1600} /><span className="unit">ms p95</span></div><div className="kpi-label">Latencia por unidad</div></Reveal>
          <Reveal className="kpi" delay={80}><div className="kpi-num"><CountUp to={99.4} decimals={1} /><span className="unit">%</span></div><div className="kpi-label">Uptime · últimos 90 días</div></Reveal>
          <Reveal className="kpi" delay={160}><div className="kpi-num"><CountUp to={18} /></div><div className="kpi-label">Clases de defecto soportadas</div></Reveal>
          <Reveal className="kpi" delay={240}><div className="kpi-num"><CountUp to={1.872} decimals={3} /><span className="unit">h</span></div><div className="kpi-label">Horas sin downtime · ArgosIA</div></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonial ---------- */
function Testimonial() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 07 ] La gente que lo opera</div>
        </Reveal>
        <Reveal delay={100} className="testi">
          <div>
            <p className="testi-quote">
              “Antes paraba la línea para revisar a ojo. Ahora <em>el panel
              decide en menos de un segundo</em> y yo solo intervengo cuando
              algo se sale del ritmo.”
            </p>
            <div className="testi-meta">
              <div className="testi-avatar">MS</div>
              <div>
                <div className="testi-who">Marcos S.</div>
                <div className="testi-role">Operario supervisor · Línea A · La Virginia</div>
              </div>
            </div>
          </div>
          <div className="testi-result">
            <div className="testi-result-label">Resultado · jornada actual</div>
            <div className="testi-result-value">95.0 %</div>
            <div style={{ marginTop: 8, fontSize: 13, color: "var(--text-2)" }}>
              de aprobación sobre 1.143 cápsulas, con +12 puntos vs. inspección
              manual del mismo turno hace un año.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="cta" id="contacto">
      <Reveal>
        <div className="section-label" style={{ justifyContent: "center", display: "inline-flex" }}>
          [ 08 ] Empezar
        </div>
      </Reveal>
      <Reveal delay={120}>
        <h2>
          Tu producto.<br/>
          Nuestros <em>modelos</em>.
        </h2>
      </Reveal>
      <Reveal delay={240}>
        <div className="cta-cta">
          <a href="#" className="btn btn--brand btn--lg">Hablemos de tu planta <Icon.Arrow /></a>
          <a href="#caso" className="btn btn--outline btn--lg">Ver caso La Virginia</a>
        </div>
      </Reveal>
      <Reveal delay={360}>
        <div className="cta-foot">PILOTO EN 6 SEMANAS · SIN MIGRAR DATOS A LA NUBE</div>
      </Reveal>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              <img src="assets/logo.png" alt="ArgosIA" className="logo-img" style={{ height: 80 }} />
            </a>
            <p className="footer-desc">
              Machine learning aplicado al control de calidad en línea.
              Construimos sistemas para el operario, auditables y robustos,
              adaptables a cualquier producto.
            </p>
          </div>
          <div className="footer-col">
            <h4>Producto</h4>
            <ul>
              <li><a href="#capacidades">Capacidades</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#como">Cómo funciona</a></li>
              <li><a href="#stack">Stack</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Casos</h4>
            <ul>
              <li><a href="#caso">La Virginia · café</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ArgosIA · Todos los derechos reservados</span>
          <span className="footer-status">Todos los sistemas operativos</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  MetricsMarquee, Capabilities, ProductsSection, Process, ProcessVisual,
  CaptureFrame, InferenceFrame, ValidateFrame, AuditFrame,
  Pipeline, PipelineSVG,
  Stack, Testimonial, FinalCTA, Footer
});
