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

/* ---------- ServicesGrid ---------- */
function ServicesGrid() {
  const services = [
    {
      n: "01",
      icon: <Icon.Eye />,
      title: "Desarrollo de Modelos de Visión IA",
      body: "Entrenamos redes de deep learning a medida (detección de defectos, conteo, control dimensional) usando imágenes reales de tu propia planta.",
      tags: ["YOLOv8/v10", "Modelos Propietarios", "99.2% Precisión"],
    },
    {
      n: "02",
      icon: <Icon.Cpu />,
      title: "Integración e Ingeniería de Campo",
      body: "Diseñamos y montamos la infraestructura física: cámaras Basler, sistemas de iluminación industrial y tableros con placas NVIDIA Jetson.",
      tags: ["Cámaras GigE", "NVIDIA Jetson", "Hardware Industrial"],
    },
    {
      n: "03",
      icon: <Icon.Pulse />,
      title: "Conexión a PLC & Sistemas de Planta",
      body: "Desarrollamos la lógica de comunicación para interactuar con tus PLCs en tiempo real. Soporte para Siemens, Rockwell, Modbus y OPC UA.",
      tags: ["OPC UA", "Modbus", "Integración PLC"],
    },
    {
      n: "04",
      icon: <Icon.Shield />,
      title: "Soporte Continuo & Mantenimiento (SLA)",
      body: "Ofrecemos servicios de monitoreo, reentrenamiento periódico de modelos ante nuevos SKUs y calibración remota para garantizar cero paradas.",
      tags: ["Soporte 24/7", "Reentrenamiento", "Uptime Garantizado"],
    },
  ];

  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 01 ] Nuestros Servicios</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            Ingeniería de IA aplicada<br/>
            <span className="dim">a resolver problemas reales.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="section-lede">
            No somos una plataforma SaaS para que experimentes. Entregamos soluciones llave en mano,
            haciéndonos cargo desde la consultoría inicial y el cableado hasta el mantenimiento a largo plazo.
          </p>
        </Reveal>

        <div className="cap-grid">
          {services.map((s, i) => (
            <Reveal key={s.n} className="cap" delay={i * 80}>
              <div className="cap-num">/ {s.n}</div>
              <div className="cap-icon">{s.icon}</div>
              <h3 className="cap-title">{s.title}</h3>
              <p className="cap-body">{s.body}</p>
              <div className="cap-tag">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FlagshipService ---------- */
function FlagshipService() {
  return (
    <section className="section section--tight" id="servicio-estrella">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 02 ] Servicio Insignia</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            Visión Artificial en Línea:<br/>
            <em>Inferencia en milisegundos</em>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="section-lede" style={{ marginBottom: 40 }}>
            Implementamos sistemas de inspección visual continua de altísima velocidad. 
            Nuestros ingenieros instalan cámaras sobre tu cinta transportadora y conectan un nodo edge que analiza cada unidad en tiempo real, decidiendo el rechazo sin retrasar la producción.
          </p>
        </Reveal>
        <Pipeline />
      </div>
    </section>
  );
}

/* ---------- IndustriesSection ---------- */
function IndustriesSection() {
  const industries = [
    {
      name: "Alimentos & Bebidas",
      desc: "Inspección de empaque, sellado hermético, nivel de llenado y detección de cuerpos extraños a alta velocidad.",
      icon: "☕",
    },
    {
      name: "Farmacéutica",
      desc: "Control de blisters, integridad de comprimidos, legibilidad de códigos de lote e inspección de sellado bajo normas estrictas.",
      icon: "💊",
    },
    {
      name: "Metalúrgica & Autopartes",
      desc: "Detección de rebabas, fallas geométricas, grietas estructurales y verificación de soldadura.",
      icon: "🔩",
    },
    {
      name: "Logística & Packing",
      desc: "Clasificación automática de bultos por dimensiones, color, lectura de etiquetas y control de daños.",
      icon: "📦",
    },
  ];

  return (
    <section className="section" id="industrias">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 03 ] Sectores de Aplicación</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            Experiencia en sectores<br/>
            <em>altamente exigentes</em>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="section-lede">
            Cada industria tiene desafíos específicos de iluminación, velocidad y normativas. 
            Nuestros consultores diseñan la solución adaptada a tu estándar de calidad.
          </p>
        </Reveal>

        <div className="products" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {industries.map((ind, i) => (
            <Reveal key={ind.name} className="product-card" delay={i * 60} style={{ padding: 24 }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{ind.icon}</div>
              <div className="product-name" style={{ fontSize: 18, marginBottom: 8 }}>{ind.name}</div>
              <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.5 }}>{ind.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HowWeWork ---------- */
function HowWeWork() {
  const [active, setActive] = React.useState(0);
  const steps = [
    {
      title: "1. Diagnóstico & Factibilidad",
      body: "Analizamos tu línea, tomamos una muestra inicial de productos y evaluamos la viabilidad óptica de la inspección. Definimos el ROI esperado en menos de una semana.",
      detail: "argos.diagnose({ site: 'Línea 1', samples: 150 })",
    },
    {
      title: "2. Diseño & Entrenamiento a medida",
      body: "Entrenamos la red neuronal con imágenes etiquetadas de tus propios defectos y productos correctos. Definimos en conjunto los ejes de control de calidad.",
      detail: "argos.train({ model: 'ArgosIA-v3.5', defects: 6 })",
    },
    {
      title: "3. Instalación e Integración física",
      body: "Montamos las cámaras GigE, la iluminación industrial controlada y el nodo local (NVIDIA Jetson) en tu planta. Conectamos los resultados directamente a tus PLCs.",
      detail: "argos.deploy({ plc_ip: '192.168.1.50', edge_node: 'Jetson' })",
    },
    {
      title: "4. Soporte Operativo & SLA",
      body: "Monitoreamos la deriva del modelo, lo reentrenamos cuando agregás nuevos SKUs y brindamos soporte presencial y remoto ante cualquier anomalía.",
      detail: "argos.sla.monitor({ uptime: '99.4%', status: 'active' })",
    },
  ];

  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section" id="como-trabajamos">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 04 ] Metodología de Trabajo</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            De la idea a producción<br/>
            <em>en solo 6 semanas</em>.
          </h2>
        </Reveal>

        <div className="process-grid">
          <div>
            {steps.map((s, i) => (
              <div
                key={i}
                className={"step " + (i === active ? "is-active" : "")}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={i === active}
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

/* ---------- TeamSection ---------- */
function TeamSection() {
  const team = [
    {
      name: "Dra. Elena Ruiz",
      role: "Directora de Inteligencia Artificial",
      bio: "PhD en Visión Computacional. Especialista en procesamiento de imágenes y modelos avanzados de inspección en tiempo real.",
      icon: <Icon.Eye />,
    },
    {
      name: "Ing. Carlos Rossi",
      role: "Director de Automatización",
      bio: "Ingeniero Electrónico. Ex-integrador senior de Siemens. Experto en conectar lógica inteligente a PLCs y sistemas SCADA.",
      icon: <Icon.Cpu />,
    },
    {
      name: "Lic. Javier Domínguez",
      role: "Director de Proyectos",
      bio: "Especialista en operaciones industriales. Lidera la implementación física, calibración en planta y cumplimiento de SLAs de servicio.",
      icon: <Icon.Shield />,
    },
  ];

  return (
    <section className="section" id="equipo">
      <div className="wrap">
        <Reveal>
          <div className="section-label">[ 06 ] Nuestro Equipo</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="section-title">
            Especialistas en IA<br/>
            <em>y automatización de planta</em>.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="section-lede">
            Combinamos la precisión del análisis de datos con la experiencia de campo en entornos fabriles exigentes.
          </p>
        </Reveal>

        <div className="cap-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {team.map((member, i) => (
            <Reveal key={member.name} className="cap" delay={i * 80} style={{ padding: 24, textAlign: "center" }}>
              <div className="cap-icon" style={{ marginBottom: 16, display: "inline-flex", justifyContent: "center" }}>{member.icon}</div>
              <h3 className="cap-title" style={{ fontSize: 18, marginBottom: 4, width: "100%", textAlign: "center" }}>{member.name}</h3>
              <div style={{ color: "var(--brand)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.05em", marginBottom: 12 }}>{member.role.toUpperCase()}</div>
              <p style={{ color: "var(--text-2)", fontSize: 13, lineHeight: 1.5 }}>{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
          <Reveal className="kpi" delay={240}><div className="kpi-num"><CountUp to={1872} /><span className="unit">h</span></div><div className="kpi-label">Horas sin downtime · ArgosIA</div></Reveal>
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
  const [formData, setFormData] = React.useState({
    nombre: "",
    empresa: "",
    industria: "Alimentos",
    velocidad: "",
    inspeccion: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [logs, setLogs] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const logLines = [
      `[INFO] Inicializando análisis de factibilidad para ${formData.empresa}...`,
      `[INFO] Origen detectado: Industria ${formData.industria}`,
      `[INFO] Parámetros de entrada: velocidad de línea = ${formData.velocidad} u/min`,
      `[INFO] Requerimiento óptico: ${formData.inspeccion}`,
      `[OK] Modelos YOLO-Edge asignados de manera óptima.`,
      `[OK] Reporte preliminar de ROI en generación (< 48 hs).`,
      `[SUCCESS] Solicitud registrada con ID: ARGOS-${Math.floor(Math.random() * 900000 + 100000)}`
    ];

    logLines.forEach((line, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, line]);
      }, (index + 1) * 350);
    });
  };

  return (
    <section className="cta" id="contacto">
      <div className="wrap">
        <Reveal>
          <div className="section-label" style={{ justifyContent: "center", display: "inline-flex", width: "100%" }}>
            [ 07 ] Contacto y Factibilidad
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 style={{ textAlign: "center", marginBottom: 40, fontSize: "clamp(32px, 5vw, 64px)" }}>
            Iniciemos el diagnóstico<br/>
            <em>de tu planta</em>.
          </h2>
        </Reveal>

        <Reveal delay={240}>
          <div style={{
            display: "grid",
            gridTemplateColumns: submitted ? "1fr" : "1fr 1fr",
            gap: 48,
            alignItems: "start",
            maxWidth: submitted ? 600 : 960,
            margin: "0 auto",
          }} className="cta-grid-b2b">
            {!submitted ? (
              <>
                <div style={{ textAlign: "left" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>¿Qué inspección necesitás automatizar?</h3>
                  <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                    Completá los datos de tu línea de producción. Nuestros ingenieros evaluarán la factibilidad de visión artificial on-premise y te enviarán un reporte preliminar de viabilidad técnica y estimación de ROI en 48 horas sin costo.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14, color: "var(--muted)", fontSize: 13, fontFamily: "var(--mono)" }}>
                    <div>📂 Paso 1: Muestras ópticas</div>
                    <div>⚙️ Paso 2: Validación offline</div>
                    <div>🚀 Paso 3: Integración en PLC</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="b2b-form">
                  <div className="form-group">
                    <label>Nombre y Apellido</label>
                    <input type="text" required value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} placeholder="Ej. Carlos Rossi" />
                  </div>
                  <div className="form-group">
                    <label>Empresa / Planta</label>
                    <input type="text" required value={formData.empresa} onChange={e => setFormData({...formData, empresa: e.target.value})} placeholder="Ej. La Virginia S.A." />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div className="form-group">
                      <label>Industria</label>
                      <select value={formData.industria} onChange={e => setFormData({...formData, industria: e.target.value})}>
                        <option value="Alimentos">Alimentos y Bebidas</option>
                        <option value="Farma">Farmacéutica</option>
                        <option value="Metalurgica">Metalúrgica</option>
                        <option value="Logistica">Logística</option>
                        <option value="Otra">Otra</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Velocidad de Línea (u/min)</label>
                      <input type="number" required value={formData.velocidad} onChange={e => setFormData({...formData, velocidad: e.target.value})} placeholder="Ej. 120" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Defecto o Parámetro a inspeccionar</label>
                    <textarea required value={formData.inspeccion} onChange={e => setFormData({...formData, inspeccion: e.target.value})} placeholder="Describí brevemente qué defecto óptico buscás detectar (ej. sellado deficiente, fisuras, legibilidad de lote)" rows={3}></textarea>
                  </div>
                  <button type="submit" className="btn btn--brand btn--lg" style={{ width: "100%", justifyContent: "center" }}>
                    Solicitar Estudio de Factibilidad
                  </button>
                </form>
              </>
            ) : (
              <div className="lead-terminal" style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
                fontFamily: "var(--mono)",
                fontSize: 13,
                minHeight: 280,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                textAlign: "left",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--muted)", fontSize: 11, borderBottom: "1px solid var(--border)", paddingBottom: 10, marginBottom: 16 }}>
                  <span>ARGOS CONSOLE // CONNECTION ESTABLISHED</span>
                  <span style={{ color: "var(--ok)", animation: "blink 1.2s steps(1) infinite" }}>● STATUS_OK</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {logs.map((log, index) => (
                    <div key={index} className="log-line" style={{
                      color: log.includes("SUCCESS") ? "var(--ok)" : log.includes("OK") ? "var(--text)" : "var(--muted)",
                      animation: "appear 0.2s ease-out both",
                    }}>
                      <span style={{ color: "var(--brand-text)", marginRight: 8 }}>&gt;</span>
                      {log}
                    </div>
                  ))}
                  {logs.length < 7 && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ color: "var(--brand-text)", marginRight: 8 }}>&gt;</span>
                      <span className="cursor" style={{ width: 8, height: 14, background: "var(--brand)", animation: "blink 1.2s steps(1) infinite" }} />
                    </div>
                  )}
                </div>
                {logs.length === 7 && (
                  <div style={{ marginTop: 24, textAlign: "center", color: "var(--text)", animation: "appear 0.5s ease-out both" }}>
                    <p style={{ fontWeight: 600, color: "var(--ok)", marginBottom: 8 }}>¡Solicitud enviada con éxito!</p>
                    <p style={{ fontSize: 13, color: "var(--text-2)" }}>Recibirás el diagnóstico preliminar en tu correo.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
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
              <img src="assets/logo.png" alt="ArgosIA" className="logo-img" />
            </a>
            <p className="footer-desc">
              Consultoría, ingeniería e integración llave en mano de sistemas de inteligencia artificial para control de calidad y predicción de procesos en piso de planta.
            </p>
          </div>
          <div className="footer-col">
            <h3>Servicios</h3>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#como-trabajamos">Cómo trabajamos</a></li>
              <li><a href="#stack">Tecnología</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Casos</h3>
            <ul>
              <li><a href="#caso">La Virginia · café</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Argos Labs · Todos los derechos reservados</span>
          <span className="footer-status">Todos los sistemas operativos</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  MetricsMarquee, ServicesGrid, FlagshipService, IndustriesSection, HowWeWork, ProcessVisual,
  CaptureFrame, InferenceFrame, ValidateFrame, AuditFrame,
  Pipeline, PipelineSVG,
  Stack, TeamSection, Testimonial, FinalCTA, Footer
});
