# ☕ Grão & Mar — Café Bistrô · Torres, RS

Site de treino para um café bistrô fictício em Torres, RS.
Construído com **React + Vite + Tailwind + Framer Motion**.

## Stack

| Tecnologia | Uso |
|---|---|
| React 18 | UI + componentes |
| React Router v6 | 4 páginas |
| Framer Motion | Animações e transições |
| Tailwind CSS v3 | Estilização |

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx       # Navbar com scroll-aware bg
│   ├── Footer.jsx       # Rodapé escuro com horários
│   └── SteamCup.jsx     # ⭐ Assinatura: xícara SVG com vapor animado
├── data/
│   └── menu.js          # Cardápio completo (4 seções, 17 itens)
├── pages/
│   ├── Home.jsx         # Hero com SteamCup + destaques do cardápio
│   ├── Menu.jsx         # Cardápio com abas animadas por seção
│   ├── About.jsx        # História do bistrô
│   └── Reservations.jsx # Formulário de reserva com validação
└── App.jsx
```

## Setup

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `espresso` | `#1A1208` | Fundo escuro, textos |
| `mogno` | `#3D2B1F` | Seções escuras |
| `caramel` | `#C8934A` | Destaque / preços / CTA |
| `creme` | `#F5EDD6` | Fundo principal |
| `kraft` | `#E8DCC8` | Cards / hover states |
| `fumo` | `#7A6555` | Textos secundários |

## O que aprender neste projeto vs. o Surf Store

| Conceito | Surf Store | Grão & Mar |
|---|---|---|
| Estado global | Context + useReducer (carrinho) | Estado local controlado |
| Navegação | 6 páginas + rotas dinâmicas | 4 páginas, mais foco no layout |
| SVG | Ondas decorativas | SVG interativo como assinatura |
| Tipografia | Sans-serif display (Bebas Neue) | Serif editorial (Playfair Display) |
| Cor de fundo | Escuro (dark mode) | Claro (light mode) |
| Formulário | Validação simples | Múltiplos tipos de input + seleção visual |

## Próximos desafios

- [ ] Integrar Google Calendar API para reservas reais
- [ ] Adicionar página de galeria com lightbox
- [ ] Animação de scroll parallax no hero
- [ ] Dark mode toggle
- [ ] i18n (pt-BR / en) para turistas
