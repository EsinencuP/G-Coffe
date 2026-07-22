# G-Coffee Catalog Design System

## 1. Visual Theme & Atmosphere

The catalogue is a calm showroom work surface, not a marketplace. It combines CoffeeShare's measured catalogue geometry with G-Coffee's darker editorial identity: warm paper, coffee ink, precise dividers, restrained oxide accents, and product packshots treated as evidence. Density is medium in controls and low around content. The single stance is **editorial coffee dossier**.

## 2. Color

- `--paper: #F3EFE7` — global canvas.
- `--surface: #FBF9F4` — product media and filter surfaces.
- `--ink: #201C18` — headings and primary text; never pure black.
- `--coffee: #5E4232` — primary actions and dark controls.
- `--oxide: #A85C3B` — one interactive accent for selected states and focus.
- `--gold: #B6A06C` — small premium markers only.
- `--line: #D8D0C4` — structural rules.
- `--muted: #756E66` — secondary copy with AA contrast.
- Success and error are semantic only: `#38624C` and `#98483E`.

No gradients, neon, purple, cold blue brand accents, or large gold text.

## 3. Typography

- Primary family: Outfit, with system sans fallback. No Inter.
- Labels and numbers: system monospace.
- Catalogue H1: 40-48 px desktop, 32 px mobile; weight 500; tight leading.
- Product names: 19-22 px, weight 600, maximum two lines.
- Body and controls: 16 px minimum, 1.5-1.7 line-height.
- Metadata: 12-13 px mono; uppercase only for short service labels.
- Price is supporting information, not the page's dominant headline.

## 4. Spacing & Grid

- Maximum frame: 1240 px; desktop gutters 32 px, tablet 24 px, mobile 16 px.
- Base rhythm: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80.
- Desktop catalogue: fluid 3-column product grid plus 286-300 px filter rail; 48 px separation.
- Tablet: two product columns and filter drawer.
- Mobile: one product column; controls use full width; no horizontal scrolling at 320 px zoom.
- Card row gap: 48-56 px. Card padding is not boxed; structure comes from image fields and rules.

## 5. Layout & Composition

- Asymmetric intro: compact title and count on the left, utility note on the right.
- Desktop order: breadcrumbs, intro, toolbar, grid + sidebar.
- Sidebar is sticky below the header and separated by a one-pixel line.
- Cards use a strict image / category / name / descriptors / price-range / actions sequence.
- Product detail uses media 40%, product dossier 35%, calculator 25%; it collapses to media, dossier, calculator, description on mobile.
- Related products use an offset horizontal rail or 2+1 layout, never a generic equal three-card feature block.

## 6. Components

- `CatalogToolbar`: result count, search, sort, mobile filter trigger, clear action.
- `FilterRail`: category, origin, roast, format, availability, price ceiling; active count and reset.
- `CatalogCard`: product visual, taxonomy, title, concise tasting line, indicative range, detail link, calculator shortcut.
- `ProductVisual`: consistent 1:1 packshot field with type-specific package silhouette and image fallback.
- `PriceCalculator`: size, preparation, quantity, optional recurring rhythm, live breakdown, indicative total, consultation CTA.
- `ProductTabs`: description and specifications with keyboard-operable tabs.
- `RelatedRail`: two primary related items plus one compact recommendation.
- All buttons have 44 px minimum targets, focus-visible rings, disabled states, and pressed feedback.

## 7. Motion & Interaction

- UI transitions: 160-240 ms ease-out; no spring or bounce.
- Product image may translate up 4 px and scale to 1.015 on hover; content remains stable.
- Filter results update with opacity/translate only; search uses `useDeferredValue`.
- Calculator total uses a short number reveal without continuous animation.
- Mobile filter drawer traps visual attention, closes with Escape, and restores page scroll.
- `prefers-reduced-motion` disables transforms, staged reveals, and scrolling effects.

## 8. Voice & Brand

- Tone: informed, concrete, hospitable, Moldovan showroom expertise.
- Use “catalogue”, “selection”, “indicative calculation”, “request a recommendation”, and “reserve a tasting”.
- Do not use cart, checkout, shipping, buy now, sale pressure, scarcity, or payment language.
- Prices are explicitly indicative and in MDL; final configuration is confirmed by a consultant.

## 9. Anti-patterns

- No marketplace density, cart counters, discount badges, star ratings, delivery promises, or checkout flows.
- No centered hero over photography, glassmorphism, gradients, large rounded cards, generic bento tiles, or three equal feature cards.
- No hidden filters without an active-count affordance.
- No hover-only actions, icon-only controls without labels, or color-only selected states.
- No decorative perpetual motion, parallax, cursor effects, or layout-shifting hover states.
- No literal CoffeeShare logo, copy, product names, euro pricing, checkout controls, PayPal, or proprietary screenshots.
