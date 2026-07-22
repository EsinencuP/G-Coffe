# Prompt для переработки текущего проекта

Переработай существующий React/Vite проект G-Coffee Luxury Showroom так, чтобы он визуально и структурно был узнаваемо построен на базе CoffeeShare, но не копировал защищённые материалы. Работай в существующих RU/RO маршрутах и сохрани текущую функциональность каталога, фильтров, поиска, карточки товара и калькулятора.

## Источники истины

1. `CoffeeShare_Design_Brief_RU.pdf`.
2. Скриншоты проекта `ref/header.png`, `hero.png`, `image carousel.png`, `e-catalog.png`, `e-catalog1.png`, `card1.png`–`card4.png`, `blog1.png`, `contact.png`, `footer.png`.
3. Живой сайт `https://coffeeshare.eu/` как дополнительная проверка.
4. Аудит `REFERENCE_ANALYSIS.md` и целевой контракт `DESIGN.md` в этой папке.

Если источники расходятся, приоритет: прямое требование заказчика → PDF → локальные скриншоты → текущий live URL.

## Главная цель

Сейчас сайт слишком самостоятельный и editorial. Сделай CoffeeShare layout grammar базовой системой: 1200 px, Lato-подобная типографика, двухъярусная шапка, image carousel, белые плоскости, компактные заголовки, каталожная геометрия и высокий трёхколоночный footer. Бренд G-Coffee проявляется через свой контент, изображения, RU/RO, MDL и сценарий консультации.

## Обязательные изменения

### Global

- Заменить Outfit как основной UI-шрифт на Lato 400/700 или близкий humanist sans.
- Заменить глобальный 1400 px frame на 1200 px.
- Основной фон сделать белым; тёплый paper использовать только в отдельных секциях.
- Уменьшить H1/H2 до масштаба CoffeeShare.
- Использовать `#3E2A1F`, `#6F4E37`, `#C97A40`, тонкие линии, 0–6 px radius, почти без теней.

### Header/footer

- Service bar около 50 px.
- Main header около 120 px с горизонтальным G-Coffee lockup.
- Навигация: Главная, Каталог, Шоурум, Журнал, Контакты, RU/RO.
- Footer: высокий тёмно-коричневый, три колонки, крупный логотип слева, навигация по центру, контакты/FAQ справа.

### Home `/ru`, `/ro`

- Пересобрать hero как 1200×560 image carousel.
- Использовать реальные изображения G-Coffee.
- Нижняя тёмная overlay-плашка: короткий заголовок, текст, один CTA.
- Справа вертикальные controls.
- После hero использовать модульную последовательность CoffeeShare, адаптированную под дегустации, каталог и шоурум.
- Не использовать текущий full-height split hero.

### Catalog

- Сохранить поиск, сортировку, фильтры, reset, empty state, пагинацию и RU/RO.
- Layout desktop: 840 + 60 + 300 px.
- Три карточки около 246 px.
- Убрать отдельный oversized intro.
- Карточки упростить до photo/category/name/descriptor/price/action.
- Сохранить «Рассчитать», но сделать вторичным действием.
- Заменить CSS packaging art реальными/сгенерированными packshot-изображениями G-Coffee.

### Product detail

- Desktop grid: 390 / 360 / 300 px.
- Сохранить калькулятор веса, подготовки, количества и режима.
- Стилизовать калькулятор как спокойный utility rail, а не отдельный чёрный promo-блок.
- Сохранить tabs, specification table и related products.
- CTA ведёт на консультацию с параметрами, без cart/checkout.

### Journal

- Перестроить на 840 px content + 300 px sidebar.
- Карточки и статья — белые листы на очень светлом тёплом фоне.
- Article width около 710 px.

### Contacts

- Grid: 310 px данные + 716 px форма.
- Ниже карта около 1100×450.
- Сохранить молдавские телефон, email, адрес и RU/RO.

## Responsive

- Desktop 1440/1200, tablet 1024/768, mobile 390/320.
- Catalog: 3 → 2 → 1 column; sidebar → drawer.
- Product: 3 columns → 2 → 1 in порядке media/info/calculator/tabs/related.
- Hero сохраняет фото, overlay и CTA.
- Никакого horizontal overflow; targets минимум 44 px.
- Уважать `prefers-reduced-motion`.

## Не копировать

- CoffeeShare logo, тексты, продуктовые фото, названия, цены и claims.
- PayPal, cart, checkout, доставка, cashback и loyalty.
- Код, HTML или proprietary assets источника.

## QA

- Снять одинаковые desktop/mobile screenshots референса и реализации.
- Сравнить side-by-side: header, hero, card density, container width, product proportions, footer.
- Проверить все ссылки, фильтры, поиск, сортировку, пагинацию, calculator, tabs, RU/RO и mobile drawer.
- Проверить отсутствие console errors и horizontal overflow.
- Не считать задачу завершённой, пока главная визуально не читается как G-Coffee-адаптация CoffeeShare.

