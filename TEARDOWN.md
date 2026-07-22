# G-Coffee · технический разбор референса

## 0. Суть

Референс — статичный по восприятию content/e-commerce сайт без Canvas/WebGL. Его узнаваемость создают не сложные эффекты, а 1200 px сетка, крупные фото, кофейная палитра, низкая плотность и повторяемые flat-компоненты. Для G-Coffee перенесён этот композиционный принцип, но не исходные материалы.

## A. Проверенная реализация

- **SOURCE:** `RECON/original-recon.json` фиксирует отсутствие React/Vue/Next/Canvas/Three.js и наличие 20 изображений на главной.
- **SOURCE:** `RECON/routes/original-route-map.json` фиксирует главную, shop, category, business и editorial/legal routes.
- **SOURCE:** PDF-бриф задаёт container 1200 px, warm canvas, espresso/coffee/roast/gold tokens, 3-column catalog и 3/2/1 responsive grid.
- **SOURCE:** browser snapshot фиксирует service bar, основную навигацию, 2-slide hero, Academy/Shop/Story content и трёхколоночный footer.
- **PARTIAL:** hover и scroll-состояния подтверждены interaction screenshots; probe не сформировал итоговый JSON до timeout.
- **GUESS:** точные внутренние CSS-компоненты и CMS-тема не реконструировались, потому что исходный код не использовался.

## B. Калибровка анализа

| Тезис | Источник | Точность | Решение |
|---|---|---:|---|
| Контейнер 1200 px | PDF + recon screenshots | высокая | сохранён |
| Тёплая espresso/cream палитра | PDF tokens + screenshots | высокая | адаптирована под G-Coffee |
| Hero 2.13:1 с контролами | PDF + browser DOM | высокая | сохранён как responsive 2-slide carousel |
| E-commerce как основной сценарий | route map + DOM | высокая | сознательно заменён showroom consultation flow |
| Сложная анимационная система | recon: no GSAP/Canvas/WebGL | высокая | не добавлялась |

## C. Переносимый метод

1. Сначала измерить container, header, hero и section rhythm.
2. Перенести design tokens и flat geometry через CSS custom properties.
3. Сохранить плотность и иерархию, заменить весь брендовый контент.
4. Реализовать business-specific journey: discovery → collection → guided tasting → visit request.
5. Проверить 1440/768/390, keyboard-visible controls, reduced motion и локализацию.

Для этого MVP путь «content adaptation» оказался точнее faithful clone: он сохраняет характер референса и одновременно создаёт самостоятельный продукт G-Coffee.
