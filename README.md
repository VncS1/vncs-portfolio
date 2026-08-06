# 🟣 Vinicius Machioni | Portfólio

> **"Criando ecossistemas digitais de alta performance onde a estrutura brutalista encontra a precisão high-tech."**

Portfólio profissional construído do zero, com foco em performance, SEO e acessibilidade. Site no ar em **[machioni.dev.br](https://machioni.dev.br)**.

---

## 🚀 Stack

- **Next.js 16 (App Router)** — a página é inteiramente estática e renderizada no servidor. O único componente cliente do site é o menu mobile, o que mantém o JavaScript enviado ao navegador próximo de zero.
- **React 19 + React Compiler** — memoização automática, sem `useMemo`/`useCallback` manuais.
- **Tailwind CSS 4** — design tokens declarados via `@theme` em `src/app/globals.css`.
- **TypeScript** — modo estrito.
- **CSS Animations** — efeito typewriter em CSS puro, com respeito a `prefers-reduced-motion`.

---

## 📁 Estrutura

```
src/
├── app/
│   ├── globals.css      # design tokens (@theme) e animações
│   ├── layout.tsx       # metadata, OG, viewport, skip link
│   ├── manifest.ts      # web app manifest
│   ├── page.tsx         # composição das seções
│   └── sitemap.ts
├── components/
│   ├── Navbar.tsx       # + MobileMenu.tsx (único "use client")
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Tech.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    ├── nav.ts           # links de navegação, contatos, caminho do CV
    └── projects.ts      # tipo Project + lista de projetos
```

Para adicionar ou reordenar projetos, edite apenas `src/data/projects.ts`. O tipo
`Project` torna os estados inválidos irrepresentáveis: `liveUrl` ausente significa
que não há versão pública, e `codeUrl` ausente faz o card exibir o selo "PRIVADO".

---

## ♿ Acessibilidade

- Skip link para o conteúdo principal.
- Landmarks semânticos (`header`, `main`, `nav`, `footer`) com `aria-label`.
- Menu mobile com `aria-expanded`/`aria-controls`, fechamento por `Esc` e trava de scroll.
- SVGs decorativos com `aria-hidden`; links externos anunciam que abrem em nova aba.
- Todo texto passa o contraste mínimo WCAG AA (4.5:1).
- Indicadores de foco visíveis em todos os elementos interativos.

---

## 📐 Design System

Paleta **Dark Cyberpunk**:

| Token       | Valor     |
| ----------- | --------- |
| Background  | `#09090B` |
| Surface     | `#18181B` |
| Primary     | `#8B5CF6` |
| Secondary   | `#6D28D9` |
| Text main   | `#FFFFFF` |
| Text muted  | `#A1A1AA` |

Tipografia: `Space Grotesk` nas headlines, `Inter` no corpo.

Todas as seções usam a mesma calha horizontal: `mx-auto max-w-7xl px-6 md:px-12 lg:px-20`.

---

## 🏁 Rodando localmente

```bash
npm install
```

Crie um `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

```bash
npm run dev     # desenvolvimento
npm run build   # build de produção
npm run lint    # eslint
```

As imagens dos projetos ficam em `public/projetos/` no formato WebP.

---

## 📬 Contato

- **LinkedIn:** [linkedin.com/in/viniciusmachioni](https://linkedin.com/in/viniciusmachioni)
- **E-mail:** [machioni.dev@gmail.com](mailto:machioni.dev@gmail.com)
- **WhatsApp:** [Conversar agora](https://wa.me/5535998104311)

---

Developed with precision by **Vinicius Machioni**.
