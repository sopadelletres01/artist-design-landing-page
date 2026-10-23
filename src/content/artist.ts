/*
 * Mock. Sustituye textos e imágenes para pasar a datos reales:
 * 1. Editar los campos de artist.
 * 2. Sustituir cada objeto de portraits (o añadir uno con el mismo shape).
 * 3. Poner el archivo en public/portraits/{slug}.webp y cambiar image.
 * 4. No tocar los componentes.
 */

export type PortraitKind = "persona" | "personaje";

export type Artist = {
  name: string;
  role: string;
  city: string;
  statement: string;
  email: string;
  instagram: string;
  availability: string;
};

export type Portrait = {
  slug: string;
  title: string;
  subject: string;
  kind: PortraitKind;
  year: number;
  medium: string;
  palette: string[];
  image: string;
  alt: string;
};

export type Credit = {
  title: string;
  place: string;
  year: number;
};

export type ProcessStep = {
  label: string;
  text: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export const artist: Artist = {
  name: "Cleo Marín",
  role: "Retratos cartoon de personas y personajes",
  city: "Madrid",
  statement:
    "Dibuja a la gente como si fuera un personaje de cómic, sin perder el parecido. Cada encargo empieza en una referencia y acaba en una viñeta: tinta, color plano y una expresión que se reconoce al instante. También crea personajes originales para marcas, libros y proyectos personales, con el mismo pulso de viñeta.",
  email: "hola@cleomarin.studio",
  instagram: "@cleomarin",
  availability: "Encargos abiertos para primavera",
};

export const heroSlug = "elena-voz";
export const featuredSlug = "senor-bruma";

export const portraits: Portrait[] = [
  {
    slug: "elena-voz",
    title: "Elena en el escenario",
    subject: "Elena Voz, cantautora",
    kind: "persona",
    year: 2025,
    medium: "tinta y digital",
    palette: ["#ffb703", "#2457d6", "#ff3b1f", "#fef6e4"],
    image: "/portraits/elena-voz.svg",
    alt: "Retrato cartoon de Elena Voz con auriculares y moño, cantando con la boca abierta.",
  },
  {
    slug: "pipa",
    title: "Pipa, la terrier",
    subject: "Pipa, mascota de barrio",
    kind: "personaje",
    year: 2023,
    medium: "rotulador y digital",
    palette: ["#c4a574", "#fff1c9", "#8b5e3c", "#ff3b1f"],
    image: "/portraits/pipa.svg",
    alt: "Retrato cartoon de Pipa, una terrier de orejas caídas, lengua fuera y collar rojo.",
  },
  {
    slug: "abuela-rosa",
    title: "Rosa con el pañuelo",
    subject: "Rosa Marín, 82 años",
    kind: "persona",
    year: 2024,
    medium: "tinta, lápiz y digital",
    palette: ["#c45c26", "#ead7c1", "#5c7a5e", "#f3ecdf"],
    image: "/portraits/abuela-rosa.svg",
    alt: "Retrato cartoon de Rosa, una mujer mayor con gafas redondas, moño gris y pañuelo.",
  },
  {
    slug: "capitan-lino",
    title: "El capitán Lino",
    subject: "Capitán Lino, de «La marea de papel»",
    kind: "personaje",
    year: 2024,
    medium: "gouache digital",
    palette: ["#1d3557", "#e63946", "#a8dadc", "#f1faee"],
    image: "/portraits/capitan-lino.svg",
    alt: "Retrato cartoon del capitán Lino con gorra de marino, gafas redondas y bufanda a rayas.",
  },
  {
    slug: "ines-del-parque",
    title: "Inés y el globo",
    subject: "Inés, 7 años",
    kind: "persona",
    year: 2026,
    medium: "tinta y color plano",
    palette: ["#ff6b9d", "#7ec8e3", "#ffe066", "#f3ecdf"],
    image: "/portraits/ines-del-parque.svg",
    alt: "Retrato cartoon de Inés, una niña con coletas, diente de leche y un globo amarillo.",
  },
  {
    slug: "nox",
    title: "Nox, avatar",
    subject: "Nox, avatar de estudio",
    kind: "personaje",
    year: 2026,
    medium: "vector y tinta",
    palette: ["#2457d6", "#ff3b1f", "#161311", "#f3ecdf"],
    image: "/portraits/nox.svg",
    alt: "Retrato cartoon de Nox, un avatar con visor, una antena y oreja puntiaguda.",
  },
  {
    slug: "los-marquez",
    title: "Los Márquez en domingo",
    subject: "Marta y Luis Márquez",
    kind: "persona",
    year: 2025,
    medium: "tinta y acuarela digital",
    palette: ["#3d5a80", "#ee6c4d", "#e0fbfc", "#f3ecdf"],
    image: "/portraits/los-marquez.svg",
    alt: "Retrato cartoon de Marta y Luis Márquez juntos, ella con bob y él con barba.",
  },
  {
    slug: "senor-bruma",
    title: "Señor Bruma",
    subject: "Señor Bruma, villano amable",
    kind: "personaje",
    year: 2025,
    medium: "tinta china y digital",
    palette: ["#6d597a", "#b56576", "#e56b6f", "#f3ecdf"],
    image: "/portraits/senor-bruma.svg",
    alt: "Retrato cartoon del Señor Bruma con chistera, bigote rizado y una sonrisa amable.",
  },
];

export const credits: Credit[] = [
  { title: "Muestra de retrato", place: "Feria del Cómic de Madrid", year: 2025 },
  { title: "Taller de viñeta", place: "Matadero Madrid", year: 2024 },
  { title: "Portada de novela gráfica", place: "Editorial de bolsillo, Barcelona", year: 2026 },
];

export const processSteps: ProcessStep[] = [
  {
    label: "Referencia",
    text: "Una foto, un gesto o tres adjetivos. Sirve para no perder el parecido cuando la cara se vuelve viñeta.",
  },
  {
    label: "Construcción",
    text: "Línea gruesa, cabeza grande, una expresión. Se prueba el peinado, las gafas, el sombrero hasta que la persona se reconoce.",
  },
  {
    label: "Color",
    text: "Pocos planos, sin degradado. El color cuenta el carácter; la tinta sujeta el retrato.",
  },
];

export const bioLines: string[] = [
  "Cleo Marín dibuja en Madrid, entre papel de dibujo y una mesa llena de rotuladores.",
  "Trabaja retratos de encargo y personajes para marcas, libros y proyectos personales.",
  "Le interesa el parecido que no es realista: el que se lee en dos segundos.",
  "Si hay que retratar a alguien, empieza por la expresión y deja el detalle para el final.",
];

export const statementAccent = "cómic";

export const copy = {
  skip: "Saltar al contenido",
  navOpen: "Abrir menú",
  navClose: "Cerrar menú",
  nav: [
    { href: "#obra", label: "Obra" },
    { href: "#proceso", label: "Proceso" },
    { href: "#contacto", label: "Contacto" },
  ] satisfies NavItem[],
  scrollHint: "Bajar a la obra",
  statementKicker: "Cómo mira",
  countPersona: "personas",
  countPersonaje: "personajes",
  worksTitle: "Obra",
  filterAll: "Todas",
  filterPersona: "Persona",
  filterPersonaje: "Personaje",
  processTitle: "Proceso",
  bioTitle: "Estudio",
  creditsTitle: "Créditos",
  closeTitle: "Encargar un retrato",
  closeLead:
    "Cuenta a quién hay que retratar: una persona, una mascota o un personaje que todavía no existe.",
  instagramLabel: "Instagram",
  formName: "Nombre",
  formNamePlaceholder: "Ana Pérez",
  formEmail: "Email",
  formEmailPlaceholder: "ana@estudio.com",
  formType: "Tipo de retrato",
  formTypePersona: "Persona",
  formTypePersonaje: "Personaje",
  formMessage: "Mensaje",
  formMessagePlaceholder: "Quién es, qué le define, para cuándo.",
  formSubmit: "Contar a quién hay que retratar",
  formSuccess: "Recibido. Este formulario aún no envía nada: el encargo real se conecta después.",
  formErrorName: "Escribe un nombre.",
  formErrorEmail: "Escribe un email válido.",
  formErrorType: "Elige persona o personaje.",
  formErrorMessage: "Cuenta un poco más: al menos diez caracteres.",
  footerRights: "Obra mock para esta página.",
};

export const instagramUrl = "https://instagram.com/cleomarin";

export const personaCount = portraits.filter((portrait) => portrait.kind === "persona").length;
export const personajeCount = portraits.filter((portrait) => portrait.kind === "personaje").length;

export function portraitBySlug(slug: string): Portrait {
  const found = portraits.find((portrait) => portrait.slug === slug);
  if (!found) {
    throw new Error(`Portrait not found: ${slug}`);
  }
  return found;
}

export const heroPortrait = portraitBySlug(heroSlug);
export const featuredPortrait = portraitBySlug(featuredSlug);
