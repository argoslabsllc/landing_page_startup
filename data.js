/* ArgosIA · Datos derivados del panel La Virginia (3 ejes) */

window.LV_DATA = {
  shift: {
    linea: "Línea A",
    inicio: "08:00",
    fin: "16:00",
    duracionHs: 8,
    meta: 1200,
    ritmoMeta: 150,
    ritmoActual: 143,
    produccionAcumulada: 1143,
    aprobacion: 95.0,
    aprobadas: 1086,
    rechazadas: 57,
  },
  axes: [
    { n: 1, label: "Empaquetado", desc: "Sellado · foil · integridad",   rechazos: 23, color: "#f0a060" },
    { n: 2, label: "Cápsula",     desc: "Forma · fisuras · peso 5.6g",   rechazos: 14, color: "#1a6dc4" },
    { n: 3, label: "Orden",       desc: "Posición · orientación bandeja", rechazos: 20, color: "#FFCE2E" },
  ],
  byHour: [
    { h: "08", e1: 2, e2: 1, e3: 1, prod: 120 },
    { h: "09", e1: 3, e2: 2, e3: 2, prod: 145 },
    { h: "10", e1: 4, e2: 2, e3: 3, prod: 152 },
    { h: "11", e1: 3, e2: 2, e3: 3, prod: 148 },
    { h: "12", e1: 2, e2: 1, e3: 4, prod: 142 },
    { h: "13", e1: 4, e2: 3, e3: 3, prod: 155 },
    { h: "14", e1: 3, e2: 2, e3: 3, prod: 149 },
    { h: "15", e1: 2, e2: 1, e3: 1, prod: 132 },
  ],
  recent: [
    { n: "C-001143", t: "14:08:42.1", prod: "P-2026-1142", var: "Intenso",       status: "ok",  read: "Sellado 318 kPa · Peso 5.61 g · ±0.4°" },
    { n: "C-001142", t: "14:08:41.7", prod: "P-2026-1142", var: "Intenso",       status: "ok",  read: "Sellado 315 kPa · Peso 5.59 g · ±0.6°" },
    { n: "C-001141", t: "14:08:41.3", prod: "P-2026-1142", var: "Intenso",       status: "bad", read: "Sellado 198 kPa · debajo del umbral", detail: "Eje 1 · Sellado deficiente" },
    { n: "C-001140", t: "14:08:40.9", prod: "P-2026-1142", var: "Intenso",       status: "ok",  read: "Sellado 320 kPa · Peso 5.60 g · ±0.5°" },
    { n: "C-001139", t: "14:08:40.4", prod: "P-2026-1140", var: "Equilibrado",   status: "bad", read: "Fisura detectada · sector lateral",   detail: "Eje 2 · Cápsula fisurada" },
    { n: "C-001138", t: "14:08:40.0", prod: "P-2026-1140", var: "Equilibrado",   status: "ok",  read: "Sellado 316 kPa · Peso 5.62 g · ±0.4°" },
    { n: "C-001137", t: "14:08:39.5", prod: "P-2026-1140", var: "Equilibrado",   status: "ok",  read: "Sellado 319 kPa · Peso 5.61 g · ±0.6°" },
    { n: "C-001136", t: "14:08:39.1", prod: "P-2026-1141", var: "Extra Intenso", status: "bad", read: "Orientación invertida ±18.2°",        detail: "Eje 3 · Orientación inválida" },
    { n: "C-001135", t: "14:08:38.7", prod: "P-2026-1141", var: "Extra Intenso", status: "ok",  read: "Sellado 318 kPa · Peso 5.57 g · ±0.3°" },
    { n: "C-001134", t: "14:08:38.3", prod: "P-2026-1141", var: "Extra Intenso", status: "ok",  read: "Sellado 322 kPa · Peso 5.58 g · ±0.5°" },
    { n: "C-001133", t: "14:08:37.9", prod: "P-2026-1144", var: "Sutil",         status: "bad", read: "Sellado 210 kPa · debajo del umbral", detail: "Eje 1 · Sellado deficiente" },
    { n: "C-001132", t: "14:08:37.4", prod: "P-2026-1144", var: "Sutil",         status: "ok",  read: "Sellado 321 kPa · Peso 5.60 g · ±0.6°" },
  ],
  topDefects: [
    { code: "1.1", name: "Sellado deficiente",              count: 14, axis: 1 },
    { code: "3.1", name: "Posición incorrecta en bandeja",  count: 10, axis: 3 },
    { code: "2.1", name: "Cápsula fisurada",                count:  7, axis: 2 },
    { code: "1.2", name: "Foil perforado",                  count:  6, axis: 1 },
    { code: "3.2", name: "Orientación invertida",           count:  6, axis: 3 },
    { code: "2.2", name: "Cuerpo deformado",                count:  5, axis: 2 },
  ],
};

/* KPIs de servicios ArgosIA para tickers */
window.VIRGIA_METRICS = [
  { label: "clientes activos en producción",    value: "14" },
  { label: "proyectos entregados",              value: "32" },
  { label: "industrias cubiertas",              value: "6" },
  { label: "modelos en producción",             value: "47" },
  { label: "uptime promedio de plataforma",     value: "99.4 %" },
  { label: "latencia promedio por inferencia",  value: "<420 ms" },
  { label: "horas acumuladas sin downtime",     value: "12.480" },
  { label: "ROI promedio de nuestros clientes", value: "<6 meses" },
];
