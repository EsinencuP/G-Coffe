# G-Coffee Luxury Showroom

Multipage RU/RO MVP for a premium coffee showroom in Moldova. The visual direction uses the supplied CoffeeShare brief and local `ref/` screenshots as evidence while keeping G-Coffee's own editorial identity.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Production preview:

```powershell
npm.cmd run build
npm.cmd run start
```

The built-in server uses `http://127.0.0.1:4174` and supports direct links to every SPA route.

## Routes

| Page | Romanian | Russian |
| --- | --- | --- |
| Home | `/ro` | `/ru` |
| Catalogue | `/ro/colectie` | `/ru/collection` |
| Product dossier | `/ro/colectie/:slug` | `/ru/collection/:slug` |
| Showroom | `/ro/showroom` | `/ru/showroom` |
| Journal | `/ro/jurnal` | `/ru/journal` |
| Contacts | `/ro/contacte` | `/ru/contacts` |

## Catalogue MVP

- Eight product dossiers across coffee, equipment, and accessories.
- Deferred search, sorting, category/origin/roast/method/availability filters, budget range, active count, reset, pagination, loading, and query-aware empty state.
- Desktop filter rail and accessible tablet/mobile drawer with focus containment and Escape close.
- Product detail with configurable size/setup, preparation/service, quantity, rhythm, live MDL breakdown, keyboard tabs, and related products.
- The calculator is indicative only. There is no cart, checkout, payment, delivery, or order flow.

## Design documentation

- `DESIGN.md` — binding visual and interaction system.
- `design-contract.md` — evidence, keep/change boundaries, risks, and quality gate.
- `implementation-handoff.md` — concise implementation constraints.
- `design-system/g-coffee-luxury-showroom/` — persisted master and catalogue override.

## Stack

- React 19 and React Router
- Vite 8
- Tailwind CSS 4
- Phosphor Icons
- Built-in Node production server with SPA fallback

The contact form and all prices are MVP demonstrations only; no personal data is transmitted and commercial values require confirmation.
