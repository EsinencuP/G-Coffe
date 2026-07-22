# G-Coffee Luxury Showroom · заметки клона

## Источник

- Референс URL: https://coffeeshare.eu/
- Локальные материалы: 18 PNG в `ref/` и 22-страничный `CoffeeShare_Design_Brief_RU.pdf`.
- Исходный код референса не найден и не копировался.
- Лицензия референс-сайта не заявлена; его тексты, логотипы и изображения не используются.
- Два растровых ассета G-Coffee созданы специально для этого MVP через встроенный image generation workflow.

## Технический стек

- Статический HTML/CSS/JavaScript без runtime-зависимостей и сборки.
- Node.js используется только как локальный static server (`server.mjs`).
- CSS custom properties, responsive grid, native `dialog`, localStorage для языка.

## Предварительная оценка

- Сложность: L3 — контентный frontend с каруселью, локализацией, формами и responsive states.
- Режим: content adaptation — ритм, сетка и UI-паттерны сохранены, бренд и бизнес-сценарий заменены.
- Сохраняется: 1200 px container, спокойная кофейная палитра, двухуровневая шапка, крупный hero, low-density sections, flat product cards, тёмный footer.
- Заменено: CoffeeShare branding/content/assets, e-commerce checkout, итальянская локаль и продуктовая структура.
- Не клонируется: аккаунт, корзина, оплата, loyalty backend, CMS, API и production-отправка форм.
- Риски: реальные контакты/цены/юридические тексты пока не предоставлены; внешние Google Fonts нужно self-host перед production.

## Запуск

```powershell
cd 'C:\Users\User.DESKTOP\Documents\Web\G-Coffe'
npm.cmd run dev
```

## Референс vs G-Coffee

| Модуль | Референс | G-Coffee MVP | Решение | Evidence |
|---|---|---|---|---|
| Header | service bar + logo + desktop nav | service bar + G-Coffee mark + RU/RO nav | структура сохранена, бренд заменён | `index.html` |
| Hero | 2-slide commercial carousel | 2-slide showroom/tasting carousel | ритм сохранён, изображения и CTA оригинальные | `assets/`, `app.js` |
| Каталог | плотный e-commerce grid | curated 3-item showroom collection | коммерция переведена в consultation flow | `#collection` |
| Контент | academy/shop/story | experience/showroom/journal/B2B | полная замена под молдавский MVP | `index.html` |
| Mobile | hamburger + stacked content | hamburger + 3/2/1 grid + stacked sections | подтверждено при 390 px | `RECON/screenshots/clone-390.png` |

## Оценка

- Источники: 5/5
- Структура: 4/5
- Визуальный язык: 4/5
- Motion/interaction: 5/5
- Responsive: 5/5
- Функциональность: 5/5
- Замена контента: 5/5
- Правовые/деплой-риски: 4/5
- Итого: 37/40

## Проверка

- [x] Локальный URL отвечает 200.
- [x] 1440/768/390 recon выполнен.
- [x] Console errors: 0; page errors: 0.
- [x] На 1440 и 390 horizontal overflow отсутствует.
- [x] RU/RO переключение проверено в браузере.
- [x] Mobile menu, carousel, form validation/success и booking dialog проверены.
- [x] Route crawl: `/` status 200.
- [x] Audit: trackers не найдены; исходные изображения и код не копировались.

## Что заменить

- Контакты: `+373 60 000 000`, `hello@gcoffee.md`, текст адреса.
- Каталог и цены: product cards в `index.html`, переводы в `app.js`.
- Палитра и типографика: CSS variables в начале `styles.css`.
- Изображения: `assets/showroom-hero.png`, `assets/private-tasting.png`.
