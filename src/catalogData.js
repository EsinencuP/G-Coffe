const coffeeVariants = [
  { id: '250', multiplier: 1, label: { ro: '250 g · lot de test', ru: '250 г · пробный формат' } },
  { id: '500', multiplier: 1.88, label: { ro: '500 g · pentru acasă', ru: '500 г · для дома' } },
  { id: '1000', multiplier: 3.52, label: { ro: '1 kg · ritm constant', ru: '1 кг · постоянный ритм' } }
];

const coffeePreparation = [
  { id: 'beans', cost: 0, label: { ro: 'Boabe întregi', ru: 'В зерне' } },
  { id: 'filter', cost: 12, label: { ro: 'Măcinat pentru filtru', ru: 'Помол под фильтр' } },
  { id: 'espresso', cost: 18, label: { ro: 'Măcinat pentru espresso', ru: 'Помол под эспрессо' } }
];

const equipmentVariants = [
  { id: 'base', multiplier: 1, label: { ro: 'Base · aparat + calibrare', ru: 'Base · машина + калибровка' } },
  { id: 'plus', multiplier: 1.23, label: { ro: 'Plus · aparat + râșniță', ru: 'Plus · машина + кофемолка' } },
  { id: 'studio', multiplier: 1.48, label: { ro: 'Studio · set complet', ru: 'Studio · полный комплект' } }
];

const equipmentPreparation = [
  { id: 'showroom', cost: 0, label: { ro: 'Ridicare după demonstrație', ru: 'Самовывоз после демонстрации' } },
  { id: 'install', cost: 620, label: { ro: 'Instalare și rețetă acasă', ru: 'Установка и рецепт дома' } },
  { id: 'training', cost: 980, label: { ro: 'Instalare + training extins', ru: 'Установка + расширенное обучение' } }
];

const grinderVariants = [
  { id: 'hand', multiplier: 1, label: { ro: 'Manual · set standard', ru: 'Ручная · базовый комплект' } },
  { id: 'travel', multiplier: 1.14, label: { ro: 'Travel · husă + recipient', ru: 'Travel · чехол + контейнер' } },
  { id: 'lab', multiplier: 1.3, label: { ro: 'Lab · sită + calibrare', ru: 'Lab · сито + калибровка' } }
];

const grinderPreparation = [
  { id: 'showroom', cost: 0, label: { ro: 'Reglaj în showroom', ru: 'Настройка в шоуруме' } },
  { id: 'filter', cost: 140, label: { ro: 'Profil filtru + rețetă', ru: 'Профиль фильтра + рецепт' } },
  { id: 'espresso', cost: 190, label: { ro: 'Profil espresso + rețetă', ru: 'Профиль эспрессо + рецепт' } }
];

export const catalogProducts = [
  {
    slug: 'aurora-01', code: '01', name: 'Aurora 01', kind: 'coffee', category: 'seasonal', originKey: 'ethiopia', roastKey: 'light', formatKey: 'filter', available: true,
    origin: 'Ethiopia · Guji', process: 'Washed', roast: 'Light', basePrice: 320, tone: 'ivory',
    notes: { ro: 'bergamotă · iasomie · miere', ru: 'бергамот · жасмин · мёд' },
    short: { ro: 'Lot luminos pentru filtru și dimineți fără grabă.', ru: 'Светлый лот для фильтра и неспешного утра.' },
    description: { ro: 'Cafea transparentă, florală, cu aciditate citrică precisă și final lung de miere.', ru: 'Прозрачный цветочный кофе с точной цитрусовой кислотностью и долгим медовым послевкусием.' },
    story: { ro: 'Aurora arată de ce un lot spălat din Guji merită preparat cu apă mai moale și temperatură moderată. În showroom îl comparăm în V60 și AeroPress.', ru: 'Aurora показывает, зачем мытый лот из Гуджи готовить на более мягкой воде и при умеренной температуре. В шоуруме сравниваем V60 и AeroPress.' },
    specs: { altitude: '1 950–2 100 m', variety: 'Heirloom', harvest: '2025 / 26', recipe: '15 g · 250 ml · 2:45' }, variants: coffeeVariants, preparations: coffeePreparation
  },
  {
    slug: 'nocturne-02', code: '02', name: 'Nocturne 02', kind: 'coffee', category: 'espresso', originKey: 'brazil', roastKey: 'medium', formatKey: 'espresso', available: true,
    origin: 'Brazil · Serra Negra', process: 'Natural', roast: 'Medium', basePrice: 290, tone: 'espresso',
    notes: { ro: 'cacao · nuci · caramel', ru: 'какао · орехи · карамель' },
    short: { ro: 'Textură densă pentru espresso și lapte.', ru: 'Плотная текстура для эспрессо и молока.' },
    description: { ro: 'Dulceață calmă, corp catifelat și extracție stabilă în espresso de acasă.', ru: 'Спокойная сладость, бархатное тело и стабильная экстракция в домашнем эспрессо.' },
    story: { ro: 'Nocturne este lotul nostru de orientare pentru aparatele de acasă: iartă mici variații de temperatură, dar răspunde clar la reglajul râșniței.', ru: 'Nocturne — наш ориентир для домашних машин: он прощает небольшие колебания температуры, но ясно реагирует на настройку кофемолки.' },
    specs: { altitude: '1 050–1 250 m', variety: 'Catuai', harvest: '2025', recipe: '18 g · 38 g · 29 sec' }, variants: coffeeVariants, preparations: coffeePreparation
  },
  {
    slug: 'terroir-03', code: '03', name: 'Terroir 03', kind: 'coffee', category: 'seasonal', originKey: 'colombia', roastKey: 'omni', formatKey: 'omni', available: true,
    origin: 'Colombia · Huila', process: 'Honey', roast: 'Omni', basePrice: 345, tone: 'clay',
    notes: { ro: 'prună · cacao · zahăr brun', ru: 'слива · какао · тростниковый сахар' },
    short: { ro: 'Lot versatil, dulce și foarte curat.', ru: 'Универсальный, сладкий и очень чистый лот.' },
    description: { ro: 'Corp dens, fruct copt și o dulceață care funcționează atât în filtru, cât și în espresso.', ru: 'Плотное тело, спелый фрукт и сладость, которая работает и в фильтре, и в эспрессо.' },
    story: { ro: 'Procesarea honey adaugă textură fără să ascundă originea. În degustare îl folosim pentru a explica diferența dintre corp și amăreală.', ru: 'Обработка honey добавляет текстуру, не скрывая происхождение. На дегустации с ним объясняем разницу между телом и горечью.' },
    specs: { altitude: '1 700–1 920 m', variety: 'Caturra', harvest: '2025 / 26', recipe: '16 g · 260 ml · 3:00' }, variants: coffeeVariants, preparations: coffeePreparation
  },
  {
    slug: 'solis-04', code: '04', name: 'Solis 04', kind: 'coffee', category: 'micro', originKey: 'kenya', roastKey: 'light', formatKey: 'filter', available: true,
    origin: 'Kenya · Nyeri', process: 'Double washed', roast: 'Light', basePrice: 365, tone: 'berry',
    notes: { ro: 'coacăze · hibiscus · grapefruit', ru: 'смородина · гибискус · грейпфрут' },
    short: { ro: 'Aciditate vie, măsurată pentru filtru.', ru: 'Живая, выверенная кислотность для фильтра.' },
    description: { ro: 'Un microlot energic, cu fruct roșu și structură de ceai negru.', ru: 'Энергичный микролот с красной ягодой и структурой чёрного чая.' },
    story: { ro: 'Solis cere o măcinare precisă și este recomandarea noastră pentru cei care caută claritate, nu doar intensitate.', ru: 'Solis требует точного помола и подходит тем, кто ищет ясность, а не только интенсивность.' },
    specs: { altitude: '1 820–1 960 m', variety: 'SL28 · SL34', harvest: '2025', recipe: '15 g · 250 ml · 2:35' }, variants: coffeeVariants, preparations: coffeePreparation
  },
  {
    slug: 'linea-05', code: '05', name: 'Linea 05', kind: 'coffee', category: 'espresso', originKey: 'rwanda', roastKey: 'medium', formatKey: 'espresso', available: false,
    origin: 'Rwanda · Nyamasheke', process: 'Natural', roast: 'Medium', basePrice: 335, tone: 'forest',
    notes: { ro: 'cireașă · ciocolată · vanilie', ru: 'вишня · шоколад · ваниль' },
    short: { ro: 'Espresso fructat cu bază de ciocolată.', ru: 'Фруктовый эспрессо с шоколадной основой.' },
    description: { ro: 'Un profil confortabil, dar nu banal: fruct copt, ciocolată și final de vanilie.', ru: 'Комфортный, но не банальный профиль: спелый фрукт, шоколад и ванильный финал.' },
    story: { ro: 'Lotul revine în rotație după confirmarea recoltei. Poate fi degustat din lotul de arhivă în showroom.', ru: 'Лот вернётся в ротацию после подтверждения урожая. Архивную обжарку можно попробовать в шоуруме.' },
    specs: { altitude: '1 760–1 900 m', variety: 'Red Bourbon', harvest: '2025', recipe: '18 g · 40 g · 30 sec' }, variants: coffeeVariants, preparations: coffeePreparation
  },
  {
    slug: 'cumbre-06', code: '06', name: 'Cumbre 06', kind: 'coffee', category: 'seasonal', originKey: 'guatemala', roastKey: 'omni', formatKey: 'omni', available: true,
    origin: 'Guatemala · Huehuetenango', process: 'Washed', roast: 'Omni', basePrice: 310, tone: 'sand',
    notes: { ro: 'măr roșu · migdale · panela', ru: 'красное яблоко · миндаль · панела' },
    short: { ro: 'Echilibru clasic, trasabilitate modernă.', ru: 'Классический баланс, современная прослеживаемость.' },
    description: { ro: 'Cafea echilibrată pentru cei care vor dulceață și structură fără aromatice dominante.', ru: 'Сбалансированный кофе для тех, кому нужны сладость и структура без доминирующей ароматики.' },
    story: { ro: 'Cumbre este reperul de tranziție între espresso și filtru. În calculator poți compara direct costul celor două rețete.', ru: 'Cumbre — переходная точка между эспрессо и фильтром. В калькуляторе можно напрямую сравнить стоимость двух рецептов.' },
    specs: { altitude: '1 650–1 850 m', variety: 'Bourbon · Caturra', harvest: '2025 / 26', recipe: '16 g · 250 ml · 2:50' }, variants: coffeeVariants, preparations: coffeePreparation
  },
  {
    slug: 'atelier-kit', code: '07', name: 'Atelier Kit', kind: 'equipment', category: 'equipment', originKey: 'atelier', roastKey: 'equipment', formatKey: 'equipment', available: true,
    origin: 'G-Coffee · Home espresso', process: 'Calibration included', roast: 'Made to fit', basePrice: 18900, tone: 'steel',
    notes: { ro: 'aparat · calibrare · training', ru: 'машина · калибровка · обучение' },
    short: { ro: 'Configurație de acasă aleasă după ritmul real.', ru: 'Домашняя конфигурация под реальный ритм.' },
    description: { ro: 'Un sistem de espresso selectat, instalat și calibrat pentru spațiul și obiceiurile tale.', ru: 'Эспрессо-система, подобранная, установленная и откалиброванная под ваше пространство и привычки.' },
    story: { ro: 'Prețul depinde de aparat, râșniță și nivelul de instalare. Calculatorul arată o estimare înainte de demonstrația din showroom.', ru: 'Цена зависит от машины, кофемолки и уровня установки. Калькулятор даёт ориентир до демонстрации в шоуруме.' },
    specs: { altitude: '220 V · 10 A', variety: '58 mm group', harvest: '2.0–2.5 l tank', recipe: 'Installation · 1 day' }, variants: equipmentVariants, preparations: equipmentPreparation
  },
  {
    slug: 'metric-grinder-08', code: '08', name: 'Metric Grinder 08', kind: 'accessory', category: 'accessories', originKey: 'atelier', roastKey: 'equipment', formatKey: 'equipment', available: true,
    origin: 'G-Coffee · Precision tools', process: 'Steel burrs', roast: 'Manual', basePrice: 2450, tone: 'graphite',
    notes: { ro: 'râșniță · precizie · rețetă', ru: 'кофемолка · точность · рецепт' },
    short: { ro: 'Râșniță manuală reglată pentru metoda ta.', ru: 'Ручная кофемолка, настроенная под ваш метод.' },
    description: { ro: 'Construcție simplă, reglaj repetabil și profil ales în showroom pentru filtru sau espresso.', ru: 'Простая конструкция, повторяемая настройка и профиль под фильтр или эспрессо, выбранный в шоуруме.' },
    story: { ro: 'Nu vindem râșnița ca obiect izolat: o predăm cu punct de pornire, rețetă și verificare după prima săptămână.', ru: 'Мы не отдаём кофемолку как отдельный предмет: передаём стартовую настройку, рецепт и проверку после первой недели.' },
    specs: { altitude: '38 mm burrs', variety: '42 steps / rotation', harvest: '620 g', recipe: 'Filter · espresso' }, variants: grinderVariants, preparations: grinderPreparation
  }
];

export const catalogTaxonomy = {
  categories: ['seasonal', 'micro', 'espresso', 'equipment', 'accessories'],
  origins: ['ethiopia', 'brazil', 'colombia', 'kenya', 'rwanda', 'guatemala', 'atelier'],
  roasts: ['light', 'medium', 'omni', 'equipment'],
  formats: ['filter', 'espresso', 'omni', 'equipment']
};

export const catalogCopy = {
  ro: {
    eyebrow: 'Catalog · ediția 02', title: 'Gust, metodă și obiecte bine alese.', lead: 'Un catalog de orientare pentru showroom. Compară loturile, filtrează după felul în care bei cafeaua și calculează o configurație orientativă.',
    result: 'Afișate', of: 'din', searchLabel: 'Caută în catalog', search: 'Origine, nume sau note', sortLabel: 'Sortează', sortFeatured: 'Selecția showroomului', sortLow: 'Preț orientativ: crescător', sortHigh: 'Preț orientativ: descrescător', sortName: 'Nume: A–Z',
    filters: 'Filtre', showFilters: 'Arată filtrele', closeFilters: 'Închide filtrele', activeFilters: 'filtre active', reset: 'Resetează', resetAll: 'Resetează toate filtrele',
    category: 'Categorie', origin: 'Origine', roast: 'Prăjire', format: 'Metodă', availability: 'Disponibil acum', price: 'Buget orientativ', priceTo: 'Până la',
    categories: { seasonal: 'Loturi sezoniere', micro: 'Microloturi', espresso: 'Espresso', equipment: 'Echipament', accessories: 'Accesorii' },
    origins: { ethiopia: 'Etiopia', brazil: 'Brazilia', colombia: 'Columbia', kenya: 'Kenya', rwanda: 'Rwanda', guatemala: 'Guatemala', atelier: 'Atelier G-Coffee' },
    roasts: { light: 'Light', medium: 'Medium', omni: 'Omni', equipment: 'Nu se aplică' },
    formats: { filter: 'Filtru', espresso: 'Espresso', omni: 'Ambele metode', equipment: 'Echipament' },
    available: 'În showroom', unavailable: 'Revine în rotație', detail: 'Deschide dosarul', calculate: 'Calculează', from: 'de la', indicative: 'Preț orientativ',
    emptyTitle: 'Niciun dosar nu corespunde selecției.', emptyBody: 'Schimbă bugetul, elimină un filtru sau caută o origine mai largă.', queryEmpty: 'Nu am găsit rezultate pentru',
    previous: 'Pagina anterioară', next: 'Pagina următoare', page: 'Pagina', noteTitle: 'Catalog, nu coș.', noteBody: 'Prețurile ajută la orientare. Configurația finală se confirmă după degustare sau demonstrație.'
  },
  ru: {
    eyebrow: 'Каталог · редакция 02', title: 'Вкус, метод и точно выбранные предметы.', lead: 'Навигационный каталог шоурума. Сравнивайте лоты, фильтруйте по способу приготовления и считайте ориентировочную конфигурацию.',
    result: 'Показано', of: 'из', searchLabel: 'Поиск по каталогу', search: 'Происхождение, название или дескрипторы', sortLabel: 'Сортировка', sortFeatured: 'Выбор шоурума', sortLow: 'Ориентировочная цена: по возрастанию', sortHigh: 'Ориентировочная цена: по убыванию', sortName: 'Название: А–Я',
    filters: 'Фильтры', showFilters: 'Показать фильтры', closeFilters: 'Закрыть фильтры', activeFilters: 'активных фильтра', reset: 'Сбросить', resetAll: 'Сбросить все фильтры',
    category: 'Категория', origin: 'Происхождение', roast: 'Обжарка', format: 'Метод', availability: 'Доступно сейчас', price: 'Ориентировочный бюджет', priceTo: 'До',
    categories: { seasonal: 'Сезонные лоты', micro: 'Микролоты', espresso: 'Эспрессо', equipment: 'Оборудование', accessories: 'Аксессуары' },
    origins: { ethiopia: 'Эфиопия', brazil: 'Бразилия', colombia: 'Колумбия', kenya: 'Кения', rwanda: 'Руанда', guatemala: 'Гватемала', atelier: 'Ателье G-Coffee' },
    roasts: { light: 'Light', medium: 'Medium', omni: 'Omni', equipment: 'Не применяется' },
    formats: { filter: 'Фильтр', espresso: 'Эспрессо', omni: 'Оба метода', equipment: 'Оборудование' },
    available: 'В шоуруме', unavailable: 'Вернётся в ротацию', detail: 'Открыть досье', calculate: 'Рассчитать', from: 'от', indicative: 'Ориентировочная цена',
    emptyTitle: 'Нет досье, соответствующих выбранным условиям.', emptyBody: 'Измените бюджет, уберите один фильтр или расширьте запрос.', queryEmpty: 'Ничего не найдено по запросу',
    previous: 'Предыдущая страница', next: 'Следующая страница', page: 'Страница', noteTitle: 'Каталог, не корзина.', noteBody: 'Цены нужны для ориентира. Финальную конфигурацию подтверждаем после дегустации или демонстрации.'
  }
};

export const productCopy = {
  ro: {
    back: 'Înapoi la catalog', dossier: 'Dosar produs', profile: 'Profil', process: 'Proces', roast: 'Prăjire', origin: 'Origine', status: 'Statut', available: 'Disponibil pentru demonstrație', unavailable: 'Lotul revine în rotație',
    calculator: 'Calculator orientativ', calculatorLead: 'Alege formatul și ritmul. Totalul nu este o comandă și se confirmă în showroom.', variantCoffee: 'Cantitate per unitate', variantEquipment: 'Configurație', preparationCoffee: 'Pregătire', preparationEquipment: 'Serviciu', quantity: 'Număr de unități', rhythm: 'Ritm', once: 'O singură dată', monthly: 'Recomandare lunară · −6%',
    subtotal: 'Bază', service: 'Pregătire / serviciu', rhythmBenefit: 'Ajustare de ritm', total: 'Total orientativ', perMonth: 'per selecție', disclaimer: 'Estimare în MDL. Prețul final depinde de disponibilitate și calibrare.', consult: 'Solicită selecția', reset: 'Configurație inițială', decrease: 'Scade cantitatea', increase: 'Crește cantitatea',
    description: 'Descriere', specifications: 'Date tehnice', altitude: 'Altitudine / alimentare', variety: 'Varietate / mecanism', harvest: 'Recoltă / capacitate', recipe: 'Rețetă / serviciu', related: 'Continuă selecția', relatedLead: 'Două alternative apropiate și un contrast util pentru degustare.'
  },
  ru: {
    back: 'Назад в каталог', dossier: 'Досье продукта', profile: 'Профиль', process: 'Обработка', roast: 'Обжарка', origin: 'Происхождение', status: 'Статус', available: 'Доступно для демонстрации', unavailable: 'Лот вернётся в ротацию',
    calculator: 'Ориентировочный калькулятор', calculatorLead: 'Выберите формат и ритм. Итог не является заказом и подтверждается в шоуруме.', variantCoffee: 'Вес одной упаковки', variantEquipment: 'Конфигурация', preparationCoffee: 'Подготовка', preparationEquipment: 'Сервис', quantity: 'Количество единиц', rhythm: 'Ритм', once: 'Разовый подбор', monthly: 'Ежемесячная рекомендация · −6%',
    subtotal: 'Основа', service: 'Подготовка / сервис', rhythmBenefit: 'Коррекция ритма', total: 'Ориентировочный итог', perMonth: 'за подбор', disclaimer: 'Расчёт в MDL. Финальная цена зависит от наличия и калибровки.', consult: 'Запросить подбор', reset: 'Исходная конфигурация', decrease: 'Уменьшить количество', increase: 'Увеличить количество',
    description: 'Описание', specifications: 'Технические данные', altitude: 'Высота / питание', variety: 'Разновидность / механизм', harvest: 'Урожай / ёмкость', recipe: 'Рецепт / сервис', related: 'Продолжить подбор', relatedLead: 'Две близкие альтернативы и один полезный контраст для дегустации.'
  }
};

export function formatMdl(value, language) {
  return `${new Intl.NumberFormat(language === 'ru' ? 'ru-RU' : 'ro-RO').format(value)} MDL`;
}

export function productPriceRange(product) {
  const values = product.variants.map((variant) => Math.round(product.basePrice * variant.multiplier / 5) * 5);
  return [Math.min(...values), Math.max(...values)];
}
