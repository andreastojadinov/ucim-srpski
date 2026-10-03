window.LESSONS = window.LESSONS || {};
window.LESSONS["b1-07"] = {
  slug: "b1-07",
  level: "B1",
  id: 7,
  titleSr: "Vesti i mediji",
  titleRu: "Новости и СМИ",

  intro: {
    sr: "Danas učimo jezik vesti — kako su napisani naslovi i članci, i kako da ih razumeš bez poteškoća.",
    ru: "Язык новостей отличается от разговорного — здесь часто используется пассив (из урока B1-01) и особые конструкции заголовков. Это поможет вам читать сербские новости самостоятельно."
  },

  grammar: {
    titleRu: "Jezik medija",
    blocks: [
      {
        heading: "Pasiv u vestima",
        explanationRu: "В новостях пассив (из урока B1-01) встречается постоянно, потому что автор часто не называет, кто совершил действие — только результат.",
        examples: [
          { sr: "Zakon je usvojen jednoglasno.", ru: "Закон принят единогласно." },
          { sr: "Most je otvoren za saobraćaj.", ru: "Мост открыт для движения." },
          { sr: "Sastanak je održan u Beogradu.", ru: "Встреча состоялась в Белграде." }
        ],
        drill: {
          type: "choice",
          question: "Koji glagolski oblik dominira u vestima?",
          options: ["pasiv", "imperativ", "kondicional"],
          correctIndex: 0
        }
      },
      {
        heading: "Naslovi — posebna pravila",
        explanationRu: "Заголовки новостей часто используют <b>настоящее время</b> даже для событий в прошлом — это придаёт ощущение непосредственности (похоже на использование настоящего времени в русских заголовках).",
        examples: [
          { sr: "Predsednik potpisuje važan sporazum.", ru: "Президент подписывает важное соглашение. (хотя это уже произошло)" },
          { sr: "Cene rastu drugi mesec zaredom.", ru: "Цены растут второй месяц подряд." }
        ],
        drill: {
          type: "fill",
          question: "U naslovima vesti, koje vreme se najčešće koristi za opis nedavnih događaja? (prezent/perfekat)",
          answer: "prezent",
          alt: []
        }
      },
      {
        heading: "Vrste medija i vokabular",
        explanationRu: "Основные слова, связанные с медиа и журналистикой.",
        examples: [
          { sr: "Pročitao sam to na internet portalu.", ru: "Я прочитал это на интернет-портале." },
          { sr: "Novinar je postavio teško pitanje.", ru: "Журналист задал сложный вопрос." },
          { sr: "Vest se brzo proširila na društvenim mrežama.", ru: "Новость быстро распространилась в соцсетях." }
        ],
        drill: {
          type: "choice",
          question: "Ko piše članke za novine?",
          options: ["novinar", "urednik", "čitalac"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Prema poslednjim vestima, situacija se popravlja.", ru: "По последним новостям, ситуация улучшается." },
      { sr: "Izvor blizak vladi je potvrdio informaciju.", ru: "Источник, близкий к правительству, подтвердил информацию." },
      { sr: "Saopštenje je objavljeno jutros.", ru: "Заявление было опубликовано сегодня утром." },
      { sr: "Novinar je intervjuisao ministra.", ru: "Журналист взял интервью у министра." },
      { sr: "Ova vest nije potvrđena.", ru: "Эта новость не подтверждена." },
      { sr: "Urednik je odlučio da ne objavi članak.", ru: "Редактор решил не публиковать статью." },
      { sr: "Gledaoci su podeljeni oko ove teme.", ru: "Зрители разделились во мнениях по этой теме." },
      { sr: "Informacije treba uvek proveriti.", ru: "Информацию всегда нужно проверять." },
      { sr: "Portal je objavio ekskluzivnu priču.", ru: "Портал опубликовал эксклюзивную историю." },
      { sr: "Mediji izveštavaju o protestu.", ru: "СМИ сообщают о протесте." }
    ]
  },

  tips: {
    titleRu: "Советы",
    items: [
      "Привыкайте видеть пассив в новостях — это нормально, он гораздо чаще, чем в повседневной речи (см. урок B1-01).",
      "Настоящее время в заголовках не означает, что событие происходит прямо сейчас — это стилистический приём для придания живости.",
      "Полезная привычка при чтении любых новостей — критически относиться к источнику: <b>Da li je ovo potvrđeno?</b> (Это подтверждено?)",
      "Слово <b>vest</b> в единственном числе означает одну новость, а <b>vesti</b> во множественном — программу новостей целиком, как русское «новости»."
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "vest / vesti", ru: "новость / новости" },
      { sr: "izvor", ru: "источник" },
      { sr: "novinar", ru: "журналист" },
      { sr: "urednik", ru: "редактор" },
      { sr: "saopštenje", ru: "заявление, сообщение" },
      { sr: "intervju", ru: "интервью" },
      { sr: "portal", ru: "портал" },
      { sr: "društvene mreže", ru: "социальные сети" },
      { sr: "objaviti", ru: "опубликовать" },
      { sr: "izveštavati", ru: "сообщать, освещать" },
      { sr: "potvrditi", ru: "подтвердить" },
      { sr: "članak", ru: "статья" },
      { sr: "gledalac", ru: "зритель" },
      { sr: "proširiti se", ru: "распространиться" },
      { sr: "proveriti", ru: "проверить" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo B1) — u stilu vesti.",
      textSr: "<p><span class=\"word\" data-ru=\"Новый закон принят\">Novi zakon je usvojen</span> juče u parlamentu. Prema <span class=\"word\" data-ru=\"заявлению\">saopštenju</span> vlade, zakon <span class=\"word\" data-ru=\"вступит в силу\">stupa na snagu</span> sledećeg meseca. Nekoliko <span class=\"word\" data-ru=\"журналистов\">novinara</span> postavilo je pitanja na konferenciji za štampu. Vest <span class=\"word\" data-ru=\"быстро распространилась\">se brzo proširila</span> na društvenim mrežama.</p>",
      comprehension: [
        {
          questionRu: "Когда вступает в силу новый закон?",
          options: ["Sledećeg meseca.", "Odmah.", "Sledeće godine."],
          correctIndex: 0
        },
        {
          questionRu: "Где новость быстро распространилась?",
          options: ["Na društvenim mrežama.", "Samo na televiziji.", "U novinama."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji glagolski oblik je čest u vestima?", options: ["pasiv", "imperativ", "vokativ"], correct: 0 },
    { type: "mc", q: "Koje vreme se često koristi u naslovima za prošle događaje?", options: ["prezent", "perfekat", "futur"], correct: 0 },
    { type: "mc", q: "Šta znači 'izvor' (u kontekstu vesti)?", options: ["источник", "журналист", "редактор"], correct: 0 },
    { type: "mc", q: "Šta znači 'novinar'?", options: ["журналист", "читатель", "редактор"], correct: 0 },
    { type: "mc", q: "Šta znači 'saopštenje'?", options: ["заявление", "вопрос", "статья"], correct: 0 },
    { type: "mc", q: "Šta znači 'objaviti'?", options: ["опубликовать", "скрыть", "удалить"], correct: 0 },
    { type: "mc", q: "Šta znači 'izveštavati'?", options: ["сообщать, освещать", "забывать", "спрашивать"], correct: 0 },
    { type: "mc", q: "Šta znači 'potvrditi'?", options: ["подтвердить", "опровергнуть", "сомневаться"], correct: 0 },
    { type: "mc", q: "Šta znači 'gledalac'?", options: ["зритель", "писатель", "актёр"], correct: 0 },
    { type: "mc", q: "Šta znači 'proveriti informaciju'?", options: ["проверить информацию", "удалить информацию", "скрыть информацию"], correct: 0 },
    { type: "mc", q: "Ko uređuje novine ili portal?", options: ["urednik", "novinar", "čitalac"], correct: 0 },
    { type: "mc", q: "Šta znači 'članak'?", options: ["статья", "книга", "письмо"], correct: 0 },
    { type: "fill", q: "Dopuni: Vest se brzo ___ na mrežama. (proširiti se)", answer: "proširila", alt: ["prosirila"] },
    { type: "fill", q: "Dopuni: Zakon je ___ juče. (usvojiti, pasiv)", answer: "usvojen", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Журналист взял интервью у министра.':", answer: "Novinar je intervjuisao ministra.", alt: ["novinar je intervjuisao ministra"] },
    { type: "fill", q: "Prevedi na srpski 'Эта новость не подтверждена.':", answer: "Ova vest nije potvrđena.", alt: ["ova vest nije potvrdjena"] },
    { type: "fill", q: "Napiši reč za 'источник':", answer: "izvor", alt: [] },
    { type: "fill", q: "Napiši reč za 'социальные сети':", answer: "društvene mreže", alt: ["drustvene mreze"] },
    { type: "fill", q: "Napiši reč za 'интервью':", answer: "intervju", alt: [] },
    { type: "fill", q: "Napiši reč za 'зритель':", answer: "gledalac", alt: [] }
  ]
};
