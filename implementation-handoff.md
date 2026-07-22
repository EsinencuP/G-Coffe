# Implementation Handoff

Read `DESIGN.md`, `design-contract.md`, the PDF pages 10-13, and `ref/e-catalog*.png`, `ref/cards.png`, `ref/card1.png`-`card4.png`.

## Binding constraints

- React 19, React Router, Tailwind CSS 4, Phosphor icons already installed. Add no dependency unless verified first.
- Preserve Outfit + warm paper / charcoal / coffee / oxide tokens. No Inter, gradients, glass, pure black, or generic rounded cards.
- Catalogue routes remain `/ro/colectie`, `/ru/collection`; product slugs stay language-equivalent.
- Desktop grid: main product area + 286-300 px sticky filters. Grid collapses 3 → 2 → 1; filters become an accessible drawer below 1024 px.
- Use local state and `useDeferredValue`; no global store and no fake network layer.
- Keep the product visual as a replaceable packshot component with explicit aspect ratio.
- Price calculator returns an indicative MDL total and consultation action. Never add cart, checkout, payment, shipping, or order language.

## First artifact should prove

1. Eight varied products can be searched, sorted, filtered, reset, and opened directly.
2. A product card is visually useful before hover and supports keyboard navigation.
3. A detail page recalculates price from pack size, preparation, quantity, and rhythm, exposes a clear breakdown, and links to contact with product context.
4. The complete scenario works in RU and RO at 1440 px and 390 px without console errors or horizontal overflow.
