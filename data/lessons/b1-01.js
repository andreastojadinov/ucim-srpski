window.LESSONS = window.LESSONS || {};
window.LESSONS["b1-01"] = {
  slug: "b1-01",
  level: "B1",
  id: 1,
  titleSr: "Pasiv — trpni glagolski oblik",
  titleRu: "Пассив — страдательный залог",

  intro: {
    sr: "Dobrodošli na B1 nivo! Danas učimo pasiv — kako reći 'knjiga je napisana' umesto 'neko je napisao knjigu'.",
    ru: "Отличная новость: сербский пассив строится почти так же, как русский — глагол <b>biti</b> + страдательное причастие, похожее на русскую краткую форму причастия («книга написана»). Это первый урок уровня B1, где вы начнёте работать с более сложными, «книжными» конструкциями."
  },

  grammar: {
    titleRu: "Пассив",
    blocks: [
      {
        heading: "BITI + trpni pridev (pasivni particip)",
        explanationRu: "Пассив образуется глаголом <b>biti</b> в нужном времени + страдательным причастием (<i>trpni pridev</i>), которое образуется от основы глагола с окончаниями <b>-an/-en/-t</b>. Само причастие ведёт себя как прилагательное и согласуется в роде и числе с подлежащим — совсем как русское краткое причастие («книга написана», «дверь закрыта»).",
        table: {
          headers: ["Infinitiv", "Trpni pridev (m./ž./s.)"],
          rows: [
            ["napisati", "napisan / napisana / napisano"],
            ["pročitati", "pročitan / pročitana / pročitano"],
            ["uraditi", "urađen / urađena / urađeno"],
            ["otvoriti", "otvoren / otvorena / otvoreno"],
            ["sagraditi", "sagrađen / sagrađena / sagrađeno"]
          ]
        },
        examples: [
          { sr: "Knjiga je napisana.", ru: "Книга написана." },
          { sr: "Vrata su zatvorena.", ru: "Дверь закрыта." },
          { sr: "Posao je urađen na vreme.", ru: "Работа сделана вовремя." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni pasiv: Kuća je ___ prošle godine. (sagraditi, ženski rod)",
          answer: "sagrađena",
          alt: ["sagradjena"]
        }
      },
      {
        heading: "Pasiv sa SE — svakodnevni pasiv",
        explanationRu: "В повседневной речи гораздо чаще используется второй тип пассива — активная форма глагола + частица <b>se</b>. Это прямая параллель русскому пассиву на -ся: «дом строится», «книги продаются».",
        examples: [
          { sr: "Kuća se gradi već godinu dana.", ru: "Дом строится уже год." },
          { sr: "Knjige se prodaju u ovoj prodavnici.", ru: "Книги продаются в этом магазине." },
          { sr: "Ova pesma se peva svuda.", ru: "Эта песня поётся везде." }
        ],
        drill: {
          type: "choice",
          question: "Koja rečenica koristi 'se-pasiv'?",
          options: ["Knjige se prodaju ovde.", "Knjige su prodane ovde.", "Neko prodaje knjige ovde."],
          correctIndex: 0
        }
      },
      {
        heading: "Vršilac radnje — OD STRANE + genitiv",
        explanationRu: "Если нужно указать, <b>кем</b> было выполнено действие, используется конструкция <b>od strane</b> + родительный падеж. Внимание: это отличается от русского, где для этого используется творительный падеж без предлога («написана писателем»)!",
        examples: [
          { sr: "Knjiga je napisana od strane poznatog pisca.", ru: "Книга написана известным писателем." },
          { sr: "Odluka je doneta od strane direktora.", ru: "Решение принято директором." }
        ],
        drill: {
          type: "choice",
          question: "Kako se na srpskom izražava 'кем' u pasivnoj rečenici?",
          options: ["od strane + genitiv", "instrumental bez predloga", "dativ"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Ovaj film je snimljen u Srbiji.", ru: "Этот фильм снят в Сербии." },
      { sr: "Pismo je poslato juče.", ru: "Письмо отправлено вчера." },
      { sr: "Restoran je otvoren svaki dan.", ru: "Ресторан открыт каждый день." },
      { sr: "Projekat se finansira iz budžeta.", ru: "Проект финансируется из бюджета." },
      { sr: "Grad je osnovan pre dva veka.", ru: "Город основан два века назад." },
      { sr: "Sastanak je otkazan.", ru: "Встреча отменена." },
      { sr: "Ovde se govori srpski i engleski.", ru: "Здесь говорят по-сербски и по-английски." },
      { sr: "Zakon je usvojen prošle nedelje.", ru: "Закон принят на прошлой неделе." },
      { sr: "Vrata se automatski zatvaraju.", ru: "Двери закрываются автоматически." },
      { sr: "Nagrada mu je dodeljena lično.", ru: "Награда вручена ему лично." }
    ]
  },

  tips: {
    titleRu: "Советы",
    items: [
      "Формула <b>biti + trpni pridev</b> почти идентична русскому краткому причастию — думайте о «napisana» точно как о «написана».",
      "<b>Se-пассив</b> гораздо естественнее в устной речи, а <b>biti + trpni pridev</b> чаще встречается в официальных текстах, новостях и документах.",
      "Не переводите дословно «кем» — вместо русского творительного падежа используйте <b>od strane</b> + родительный падеж.",
      "Трпни придев часто используется и просто как обычное прилагательное, без значения пассива: «otvoren restoran» может значить и «ресторан открыт (кем-то)», и «ресторан работает/открытый»."
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "napisan", ru: "написанный" },
      { sr: "pročitan", ru: "прочитанный" },
      { sr: "urađen", ru: "сделанный" },
      { sr: "otvoren / zatvoren", ru: "открытый / закрытый" },
      { sr: "sagrađen", ru: "построенный" },
      { sr: "osnovan", ru: "основанный" },
      { sr: "poslat", ru: "отправленный" },
      { sr: "otkazan", ru: "отменённый" },
      { sr: "usvojen", ru: "принятый (закон)" },
      { sr: "od strane", ru: "со стороны (кем)" },
      { sr: "dodeliti", ru: "вручить, присудить" },
      { sr: "nagrada", ru: "награда" },
      { sr: "zakon", ru: "закон" },
      { sr: "budžet", ru: "бюджет" },
      { sr: "finansirati", ru: "финансировать" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo B1) — u stilu novinskog članka.",
      textSr: "<p>Novi most u centru grada <span class=\"word\" data-ru=\"построен\">je sagrađen</span> za samo šest meseci. Projekat <span class=\"word\" data-ru=\"финансировался\">je finansiran</span> iz gradskog budžeta, a radovi <span class=\"word\" data-ru=\"были выполнены\">su urađeni</span> od strane lokalne kompanije. Most <span class=\"word\" data-ru=\"был открыт\">je otvoren</span> za saobraćaj juče, a ceremoniji <span class=\"word\" data-ru=\"присутствовал\">je prisustvovao</span> i gradonačelnik.</p>",
      comprehension: [
        {
          questionRu: "За сколько месяцев построен мост?",
          options: ["Za šest meseci.", "Za godinu dana.", "Za mesec dana."],
          correctIndex: 0
        },
        {
          questionRu: "Откуда финансировался проект?",
          options: ["Iz gradskog budžeta.", "Iz privatnih donacija.", "Iz banke."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kako se gradi pasiv sa biti?", options: ["biti + trpni pridev", "biti + infinitiv", "hteti + particip"], correct: 0 },
    { type: "mc", q: "Koji je trpni pridev glagola 'napisati' (muški rod)?", options: ["napisan", "napisao", "napisati"], correct: 0 },
    { type: "mc", q: "Koji je trpni pridev glagola 'otvoriti' (ženski rod)?", options: ["otvorena", "otvorila", "otvoriti"], correct: 0 },
    { type: "mc", q: "Kako se izražava vršilac radnje u pasivu?", options: ["od strane + genitiv", "instrumental", "dativ"], correct: 0 },
    { type: "mc", q: "Koja rečenica je primer 'se-pasiva'?", options: ["Knjige se prodaju ovde.", "Knjiga je prodata.", "Neko prodaje knjigu."], correct: 0, explain: "Se-пассив использует обычную форму глагола с частицей se." },
    { type: "mc", q: "Šta znači 'sagrađen'?", options: ["построенный", "написанный", "открытый"], correct: 0 },
    { type: "mc", q: "Šta znači 'otkazan'?", options: ["отменённый", "принятый", "отправленный"], correct: 0 },
    { type: "mc", q: "Šta znači 'od strane'?", options: ["со стороны (кем)", "рядом с", "вместо"], correct: 0 },
    { type: "mc", q: "Gde se češće koristi pasiv sa biti?", options: ["u formalnim tekstovima i vestima", "samo u govoru", "nikad se ne koristi"], correct: 0 },
    { type: "mc", q: "Šta znači 'usvojen zakon'?", options: ["принятый закон", "отменённый закон", "написанный закон"], correct: 0 },
    { type: "mc", q: "Šta znači 'dodeliti nagradu'?", options: ["вручить награду", "отменить награду", "написать награду"], correct: 0 },
    { type: "mc", q: "Koji trpni pridev odgovara glagolu 'uraditi' (srednji rod)?", options: ["urađeno", "urađen", "uradio"], correct: 0 },
    { type: "fill", q: "Dopuni: Pismo je ___ juče. (poslati, srednji rod)", answer: "poslato", alt: [] },
    { type: "fill", q: "Dopuni: Restoran je ___ svaki dan. (otvoriti, muški rod)", answer: "otvoren", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Дом строится.' (se-пассив):", answer: "Kuća se gradi.", alt: ["kuca se gradi"] },
    { type: "fill", q: "Prevedi na srpski 'Закон принят.' (zakon, muški rod):", answer: "Zakon je usvojen.", alt: ["zakon je usvojen"] },
    { type: "fill", q: "Napiši trpni pridev glagola 'sagraditi' za ženski rod:", answer: "sagrađena", alt: ["sagradjena"] },
    { type: "fill", q: "Napiši frazu za 'кем' (vršilac radnje) + genitiv:", answer: "od strane", alt: [] },
    { type: "fill", q: "Dopuni: Ova pesma ___ peva svuda. (se)", answer: "se", alt: [] },
    { type: "fill", q: "Napiši reč za 'награда':", answer: "nagrada", alt: [] }
  ]
};
