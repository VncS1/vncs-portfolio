export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#about", label: "Sobre" },
  { href: "#tech", label: "Habilidades" },
  { href: "#work", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export const CV_PATH = "/CV-Vinicius-Machioni-PT.pdf";

export const CONTACT = {
  email: "machioni.dev@gmail.com",
  whatsapp: "5535998104311",
  github: "https://github.com/viniciusmachioni",
  linkedin: "https://linkedin.com/in/viniciusmachioni",
} as const;
