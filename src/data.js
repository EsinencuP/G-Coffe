export const routeNames = {
  home: { ro: '', ru: '' },
  collection: { ro: 'colectie', ru: 'collection' },
  showroom: { ro: 'showroom', ru: 'showroom' },
  journal: { ro: 'jurnal', ru: 'journal' },
  contact: { ro: 'contacte', ru: 'contacts' }
};

export const products = [
  {
    slug: 'aurora-01',
    code: '01',
    name: 'Aurora 01',
    origin: 'Ethiopia · Guji',
    process: 'Washed',
    roast: 'Light',
    price: '320 MDL',
    tone: 'ivory',
    notes: { ro: 'bergamotă · iasomie · miere', ru: 'бергамот · жасмин · мёд' },
    description: {
      ro: 'O cafea transparentă și luminoasă pentru V60, AeroPress și dimineți fără grabă.',
      ru: 'Прозрачный, яркий лот для V60, AeroPress и неторопливого утра.'
    }
  },
  {
    slug: 'nocturne-02',
    code: '02',
    name: 'Nocturne 02',
    origin: 'Brazil · Serra Negra',
    process: 'Natural',
    roast: 'Medium',
    price: '290 MDL',
    tone: 'espresso',
    notes: { ro: 'cacao · nuci · caramel', ru: 'какао · орехи · карамель' },
    description: {
      ro: 'Textură catifelată și dulceață calmă, calibrate pentru espresso și lapte.',
      ru: 'Бархатная текстура и спокойная сладость для эспрессо и молочных напитков.'
    }
  },
  {
    slug: 'terroir-03',
    code: '03',
    name: 'Terroir 03',
    origin: 'Colombia · Huila',
    process: 'Honey',
    roast: 'Omni',
    price: '345 MDL',
    tone: 'clay',
    notes: { ro: 'prună · cacao · zahăr brun', ru: 'слива · какао · тростниковый сахар' },
    description: {
      ro: 'Un lot sezonier versatil, cu corp dens și final curat.',
      ru: 'Универсальный сезонный лот с плотным телом и чистым послевкусием.'
    }
  },
  {
    slug: 'atelier-kit',
    code: '04',
    name: 'Atelier Kit',
    origin: 'Home espresso setup',
    process: 'Calibration included',
    roast: 'Made to fit',
    price: 'de la 18 900 MDL',
    tone: 'steel',
    notes: { ro: 'echipament · calibrare · training', ru: 'оборудование · настройка · обучение' },
    description: {
      ro: 'Echipament ales după ritmul casei tale, instalat și calibrat în aceeași zi.',
      ru: 'Оборудование под ритм вашего дома: установка и калибровка в один день.'
    }
  }
];

export const copy = {
  ro: {
    localeName: 'Română',
    nav: { home: 'Acasă', collection: 'Colecție', showroom: 'Showroom', journal: 'Jurnal', contact: 'Contacte' },
    service: 'Degustări private · Chișinău',
    book: 'Programează o vizită',
    menu: 'Meniu',
    close: 'Închide',
    home: {
      eyebrow: 'G-Coffee · Luxury showroom',
      title: 'Cafeaua potrivită începe cu o conversație.',
      lead: 'Un showroom din Chișinău pentru origini rare, espresso precis și alegeri făcute pe îndelete.',
      primary: 'Rezervă degustarea',
      secondary: 'Vezi colecția',
      index: '01 / Showroom privat',
      proofTitle: 'Nu vindem rafturi pline.',
      proofBody: 'Punem pe masă câteva cafele bine alese, explicăm diferențele și reglăm rețeta pe loc. Pleci cu mai puține opțiuni și cu una corectă.',
      proofLink: 'Cum decurge vizita',
      selection: 'Selecția acestei luni',
      selectionLead: 'Patru obiecte, patru roluri. Colecția se schimbă odată cu recoltele, nu cu algoritmul.',
      featureLabel: 'Lotul lunii',
      ritual: 'Ritualul G-Coffee',
      ritualTitle: '45 de minute care schimbă cafeaua de dimineață.',
      steps: [
        ['01', 'Ascultăm', 'Metoda, gustul și ritmul tău zilnic.'],
        ['02', 'Comparăm', 'Trei cești, fără jargon și fără răspunsuri corecte.'],
        ['03', 'Calibrăm', 'Rețeta, măcinătura și echipamentul potrivit.']
      ],
      editorial: 'Din jurnal',
      editorialTitle: 'Ce contează înainte să cumperi un espressor.',
      editorialLink: 'Citește nota de atelier'
    },
    collection: {
      eyebrow: 'Colecție curată',
      title: 'Puține loturi. Motive clare.',
      lead: 'Selectăm după prospețime, trasabilitate și felul în care cafeaua se comportă în ceașcă — nu după ambalaj.',
      filter: 'Filtrează',
      search: 'Caută după origine sau note',
      empty: 'Niciun lot nu corespunde căutării.',
      reset: 'Resetează filtrul',
      details: 'Detalii'
    },
    showroom: {
      eyebrow: 'Showroom · Chișinău',
      title: 'Un loc construit pentru decizii lente.',
      lead: 'Aici auzi râșnița, compari extracțiile și vezi ce înseamnă o diferență de două grade. Totul înainte de a cumpăra.',
      quote: 'O demonstrație bună valorează mai mult decât zece specificații.',
      sectionTitle: 'Trei formate de vizită',
      formats: [
        ['Degustare de orientare', '45 min', 'Trei profiluri aromatice și o recomandare personală.'],
        ['Home espresso session', '75 min', 'Alegere de echipament, calibrare și rețetă de bază.'],
        ['Business table', '90 min', 'Soluție pentru restaurant, hotel sau birou, calculată pe flux real.']
      ],
      book: 'Alege formatul'
    },
    journal: {
      eyebrow: 'Jurnal de atelier',
      title: 'Note utile, fără mitologie inutilă.',
      lead: 'Observații scurte despre boabe, apă, echipamente și gust — scrise după testare, nu după tendințe.',
      read: 'Citește nota',
      articles: [
        ['Echipament', 'Cum alegi un espressor fără să plătești pentru funcții pe care nu le folosești', '7 min'],
        ['Gust', 'Aciditate, dulceață, corp: trei repere care chiar ajută', '5 min'],
        ['Metodă', 'Rețeta de espresso pe care o reglăm prima în showroom', '4 min'],
        ['Origine', 'De ce cafeaua sezonieră are un gust mai viu', '6 min']
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Spune-ne ce vrei să îmbunătățești în ceașcă.',
      lead: 'Răspundem cu o recomandare concretă și propunem un interval pentru vizită.',
      location: 'Chișinău · adresa se confirmă la programare',
      hours: 'Luni–Sâmbătă · 10:00–19:00',
      name: 'Nume', phone: 'Telefon', interest: 'Interes', message: 'Mesaj',
      placeholder: 'Ce bei acum și ce ai vrea să schimbi?',
      submit: 'Trimite solicitarea', sending: 'Se pregătește solicitarea',
      success: 'Solicitarea demo a fost înregistrată. În versiunea finală va fi conectată la CRM.',
      error: 'Verifică numele și numărul de telefon.',
      interests: ['Degustare', 'Cafea', 'Echipament acasă', 'Soluție business']
    },
    product: { back: 'Înapoi la colecție', profile: 'Profil', process: 'Proces', roast: 'Prăjire', consult: 'Solicită recomandarea', related: 'Alte loturi din colecție' },
    footer: { line: 'Cafea, echipament și timp bine acordat.', city: 'Chișinău, Republica Moldova', demo: 'MVP · datele comerciale necesită confirmare' },
    notFound: { title: 'Pagina nu a fost găsită.', action: 'Înapoi la început' }
  },
  ru: {
    localeName: 'Русский',
    nav: { home: 'Главная', collection: 'Коллекция', showroom: 'Шоурум', journal: 'Журнал', contact: 'Контакты' },
    service: 'Частные дегустации · Кишинёв',
    book: 'Записаться на визит',
    menu: 'Меню',
    close: 'Закрыть',
    home: {
      eyebrow: 'G-Coffee · Luxury showroom',
      title: 'Подходящий кофе начинается с разговора.',
      lead: 'Шоурум в Кишинёве для редких происхождений, точного эспрессо и решений без спешки.',
      primary: 'Забронировать дегустацию',
      secondary: 'Смотреть коллекцию',
      index: '01 / Частный шоурум',
      proofTitle: 'Мы не продаём полные полки.',
      proofBody: 'Ставим на стол несколько точных вариантов, объясняем разницу и сразу настраиваем рецепт. Вы уходите с меньшим выбором — и с одним правильным.',
      proofLink: 'Как проходит визит',
      selection: 'Выбор этого месяца',
      selectionLead: 'Четыре объекта, четыре задачи. Коллекция меняется вместе с урожаем, а не с алгоритмом.',
      featureLabel: 'Лот месяца',
      ritual: 'Ритуал G-Coffee',
      ritualTitle: '45 минут, которые меняют утренний кофе.',
      steps: [
        ['01', 'Слушаем', 'Ваш метод, вкус и ежедневный ритм.'],
        ['02', 'Сравниваем', 'Три чашки, без жаргона и правильных ответов.'],
        ['03', 'Настраиваем', 'Рецепт, помол и подходящее оборудование.']
      ],
      editorial: 'Из журнала',
      editorialTitle: 'Что важно понять до покупки эспрессо-машины.',
      editorialLink: 'Читать заметку из ателье'
    },
    collection: {
      eyebrow: 'Чистая коллекция',
      title: 'Мало лотов. Ясные причины.',
      lead: 'Выбираем по свежести, прослеживаемости и поведению кофе в чашке — не по упаковке.',
      filter: 'Фильтр',
      search: 'Поиск по происхождению или дескрипторам',
      empty: 'По вашему запросу ничего не найдено.',
      reset: 'Сбросить фильтр',
      details: 'Подробнее'
    },
    showroom: {
      eyebrow: 'Шоурум · Кишинёв',
      title: 'Место для неспешных решений.',
      lead: 'Здесь слышно работу кофемолки, можно сравнить экстракции и почувствовать разницу в два градуса. Всё — до покупки.',
      quote: 'Хорошая демонстрация ценнее десяти спецификаций.',
      sectionTitle: 'Три формата визита',
      formats: [
        ['Ориентационная дегустация', '45 мин', 'Три вкусовых профиля и персональная рекомендация.'],
        ['Home espresso session', '75 мин', 'Выбор оборудования, калибровка и базовый рецепт.'],
        ['Business table', '90 мин', 'Решение для ресторана, отеля или офиса по реальной нагрузке.']
      ],
      book: 'Выбрать формат'
    },
    journal: {
      eyebrow: 'Журнал ателье',
      title: 'Полезные заметки без лишней мифологии.',
      lead: 'Коротко о зерне, воде, оборудовании и вкусе — после тестов, а не по трендам.',
      read: 'Читать заметку',
      articles: [
        ['Оборудование', 'Как выбрать эспрессо-машину и не платить за ненужные функции', '7 мин'],
        ['Вкус', 'Кислотность, сладость, тело: три действительно полезных ориентира', '5 мин'],
        ['Метод', 'Рецепт эспрессо, который мы первым настраиваем в шоуруме', '4 мин'],
        ['Происхождение', 'Почему сезонный кофе обладает более живым вкусом', '6 мин']
      ]
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Расскажите, что хотите изменить в своей чашке.',
      lead: 'Ответим конкретной рекомендацией и предложим время для визита.',
      location: 'Кишинёв · адрес подтверждаем при записи',
      hours: 'Понедельник–Суббота · 10:00–19:00',
      name: 'Имя', phone: 'Телефон', interest: 'Интерес', message: 'Сообщение',
      placeholder: 'Что вы пьёте сейчас и что хотели бы изменить?',
      submit: 'Отправить запрос', sending: 'Готовим запрос',
      success: 'Демо-заявка зарегистрирована. В финальной версии форма будет подключена к CRM.',
      error: 'Проверьте имя и номер телефона.',
      interests: ['Дегустация', 'Кофе', 'Оборудование домой', 'Решение для бизнеса']
    },
    product: { back: 'Назад к коллекции', profile: 'Профиль', process: 'Обработка', roast: 'Обжарка', consult: 'Запросить рекомендацию', related: 'Другие лоты коллекции' },
    footer: { line: 'Кофе, оборудование и точно настроенное время.', city: 'Кишинёв, Республика Молдова', demo: 'MVP · коммерческие данные требуют подтверждения' },
    notFound: { title: 'Страница не найдена.', action: 'Вернуться в начало' }
  }
};

export function pagePath(language, page, slug = '') {
  const segment = routeNames[page]?.[language] ?? '';
  const base = `/${language}${segment ? `/${segment}` : ''}`;
  return slug ? `${base}/${slug}` : base;
}
