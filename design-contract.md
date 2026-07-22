# Reference Design Contract — Catalogue and Product Dossier

## Goal and target artifact

Build a route-separated RU/RO consultation catalogue for G-Coffee Luxury Showroom in Moldova. The artefact includes a searchable/filterable catalogue, reusable catalogue cards, and interactive product dossiers with an indicative MDL calculator. It is explicitly not an online shop.

Audience: people choosing specialty coffee, brewing formats, or showroom equipment who need clarity before a tasting or consultation.

## Evidence

| Evidence | Confidence | What it proves |
| --- | --- | --- |
| User request: separate catalogue, not an online shop | provided | Cart, checkout, payment, and delivery flows are out of scope. |
| `CoffeeShare_Design_Brief_RU.pdf`, pages 10-13 | observed | 3-column grid, filter rail, product summary, variants, quantity, tabs, and related products. |
| `ref/e-catalog.png`, `e-catalog1.png`, `cards.png` | observed | Flat packshot cards, category/name/price/action hierarchy, right filter sidebar, pagination. |
| `ref/card1.png`-`card4.png` | observed | Media + information + utility rail, variable configuration, attributes, tabs, specification table, related items. |
| Existing G-Coffee v2 interface | observed | Warm paper/charcoal/oxide palette, Outfit typography, asymmetric editorial rhythm, RU/RO routes. |
| Indicative price calculator replaces cart controls | inferred | Preserves useful variant/quantity logic while respecting the non-shop requirement. |

## Keep / Change / Do not copy

| Keep | Change | Do not copy |
| --- | --- | --- |
| 1200-1240 px frame, 3/2/1 responsive grid | CoffeeShare retail “Shop” becomes G-Coffee “Catalogue” | CoffeeShare logos and wording |
| Image-first cards without outer boxes | Right sidebar becomes G-Coffee filter dossier | Product names, claims, prices, and package artwork |
| Search, sorting, taxonomy, price filter | Cart quantity becomes configuration quantity for an estimate | Add-to-cart, PayPal, checkout, loyalty cashback |
| Variant selector, attributes, tabs, related products | Euro ranges become indicative MDL ranges | Exact source layout measurements as a pixel clone |
| Warm white, brown, orange, thin dividers | Lato-like retail tone becomes Outfit editorial showroom tone | Screenshots or embedded reference imagery |

## Final stance

The catalogue should feel like a quiet physical sample library translated to the web: products are arranged as dossiers, filters feel like index tools, and the calculator explains how format, quantity, and preparation affect an indicative price. Commercial data is present, but conversion ends in a tasting or recommendation request rather than a purchase.

## Risks and explicit unknowns

- Product packshots are not provided; the MVP will use the existing branded CSS package visual system as an explicit placeholder.
- Real SKU taxonomy, stock, wholesale tiers, and final prices are unknown; sample catalogue data must be labeled as indicative.
- The exact calculator business formula is unknown; the MVP formula is deterministic and transparent, but requires business confirmation before production.
- Backend persistence and lead delivery are not included.

## Quality gate

- [ ] RU and RO catalogue/detail routes preserve the same product and filter semantics.
- [ ] Search, sort, every filter, reset, empty state, and active-count state work.
- [ ] Product cards stay aligned with short and long names and expose both detail and calculation paths.
- [ ] Calculator updates size, preparation, quantity, rhythm, line items, and total without cart language.
- [ ] Keyboard focus, labels, live result announcements, Escape handling, and 44 px targets are present.
- [ ] 1440, 1024, 768, 390, and 320 CSS px layouts have no horizontal overflow.
- [ ] Reduced motion removes transform-based flourishes.
- [ ] No CoffeeShare brand assets, copy, or checkout controls appear in the build.
