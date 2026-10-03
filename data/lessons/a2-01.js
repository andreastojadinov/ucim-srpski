window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-01"] = {
  slug: "a2-01",
  level: "A2",
  id: 1,
  titleSr: "Svi padeži — pregled i upotreba",
  titleRu: "Все падежи — обзор и употребление",

  intro: {
    sr: `Dobrodošli na A2 nivo! Danas sistematizujemo svih sedam padeža i učimo dva nova — dativ i vokativ.`,
    ru: `До сих пор вы уже встречали номинатив, акузатив, локатив и немного генитива/инструментала. Сегодня — полная картина: все семь сербских падежей в одной таблице, плюс два новых — <b>dativ</b> (дательный) и <b>vokativ</b> (звательный — падеж, которого в современном русском почти не осталось!).`
  },

  grammar: {
    titleRu: "Sedam padeža",
    blocks: [
      {
        heading: "Sedam padeža — pregled",
        explanationRu: `Вот полная таблица всех семи падежей сербского языка с их русскими аналогами и главной функцией.`,
        table: {
          headers: ["Padež", "Pitanje", "Funkcija", "Ruski ekvivalent"],
          rows: [
            ["Nominativ", "ko? šta?", "subjekat", "именительный"],
            ["Genitiv", "koga? čega?", "pripadnost, količina, od/iz/do", "родительный"],
            ["Dativ", "kome? čemu?", "indirektni objekat", "дательный"],
            ["Akuzativ", "koga? šta?", "direktni objekat", "винительный"],
            ["Vokativ", "—", "obraćanje nekome", "(u ruskom skoro izumro)"],
            ["Instrumental", "s kim? čim?", "sredstvo, društvo", "творительный"],
            ["Lokativ", "gde? o kome/čemu?", "mesto, tema", "предложный"]
          ]
        },
        drill: {
          type: "choice",
          question: "Koji padež se koristi za obraćanje nekome direktno?",
          options: ["Vokativ", "Dativ", "Instrumental"],
          correctIndex: 0
        }
      },
      {
        heading: "DATIV — kome? čemu?",
        explanationRu: `Датив обозначает косвенное дополнение («кому/чему»). Хорошая новость: в единственном числе датив почти всегда выглядит <b>точно как locativ</b>, который вы уже знаете (окончание <b>-u</b> для муж./сред. рода, <b>-i</b> для жен. рода).`,
        table: {
          headers: ["Rod", "Nominativ", "Dativ"],
          rows: [
            ["M.", "brat", "bratu"],
            ["Ž.", "majka", "majci"],
            ["S.", "selo", "selu"]
          ]
        },
        examples: [
          { sr: "Dajem knjigu bratu.", ru: "Я даю книгу брату." },
          { sr: "Pišem majci pismo.", ru: "Я пишу маме письмо." },
          { sr: "Prilazim kući.", ru: "Я подхожу к дому." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni dativ: Dajem poklon sestr___. (sestra)",
          answer: "i",
          alt: ["sestri"]
        }
      },
      {
        heading: "VOKATIV — obraćanje",
        explanationRu: `Вокатив — особый падеж для прямого обращения к кому-то: «Марко!», «Мама!». В русском этот падеж почти исчез (остались только окаменелые формы вроде «Боже!»), а в сербском он живой и используется постоянно.`,
        table: {
          headers: ["Rod", "Nominativ", "Vokativ"],
          rows: [
            ["M.", "Petar", "Petre!"],
            ["M.", "Marko", "Marko!"],
            ["Ž.", "Ana", "Ano!"],
            ["Ž.", "Milica", "Milice!"]
          ]
        },
        examples: [
          { sr: "Marko! Dođi ovamo!", ru: "Марко! Иди сюда!" },
          { sr: "Draga majko, nedostaješ mi.", ru: "Дорогая мама, скучаю по тебе." },
          { sr: "Gospodine, izvolite.", ru: "Господин, пожалуйста (вот, прошу)." }
        ],
        drill: {
          type: "choice",
          question: "Koji je vokativ imena 'Ana'?",
          options: ["Ano!", "Ana!", "Ani!"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод и падеж.",
    items: [
      { sr: "Ovo je moj grad. (nominativ)", ru: "Это мой город." },
      { sr: "Nemam vremena. (genitiv)", ru: "У меня нет времени." },
      { sr: "Dajem savet prijatelju. (dativ)", ru: "Я даю совет другу." },
      { sr: "Vidim kuću. (akuzativ)", ru: "Я вижу дом." },
      { sr: "Marko, dođi! (vokativ)", ru: "Марко, иди сюда!" },
      { sr: "Pišem olovkom. (instrumental)", ru: "Я пишу ручкой." },
      { sr: "Živim u gradu. (lokativ)", ru: "Я живу в городе." },
      { sr: "Pomažem majci. (dativ)", ru: "Я помогаю маме." },
      { sr: "Gospođo, izvolite! (vokativ)", ru: "Госпожа, пожалуйста!" },
      { sr: "To je kuća moje sestre. (genitiv)", ru: "Это дом моей сестры." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Дательный и местный падеж в единственном числе имеют <b>одинаковые формы</b> у большинства существительных — если знаешь один, почти знаешь и другой.`,
      `Звательный падеж чаще всего используется с именами, титулами и родственными связями (majko, oče, prijatelju) — в повседневной речи его всё же иногда заменяют именительным, особенно с иностранными именами.`,
      `Не переживай, если не запомнишь все падежи сразу — следующие уроки уровня A2 подробно разберут перфект, будущее время и другие темы, а падежи будут отрабатываться постепенно на примерах.`,
      `Лучшая стратегия: учи существительное вместе с предложением, которое показывает падеж в контексте, а не изолированные таблицы наизусть.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "padež", ru: "падеж" },
      { sr: "dativ", ru: "дательный падеж" },
      { sr: "vokativ", ru: "звательный падеж" },
      { sr: "davati", ru: "давать" },
      { sr: "pomagati", ru: "помогать" },
      { sr: "prilaziti", ru: "подходить" },
      { sr: "obraćati se", ru: "обращаться" },
      { sr: "gospodin / gospođa", ru: "господин / госпожа" },
      { sr: "dragi / draga", ru: "дорогой / дорогая" },
      { sr: "poklon", ru: "подарок" },
      { sr: "savet", ru: "совет" },
      { sr: "olovka", ru: "ручка (для письма)" },
      { sr: "nedostajati", ru: "не хватать, скучать" },
      { sr: "ovamo", ru: "сюда" },
      { sr: "izvoleti", ru: "пожалуйста (при подаче/приглашении)" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A2).",
      textSr: `<p>— <span class="word" data-ru="Марко! (звательный)">Marko</span>, dođi malo!<br>
      — Evo me, majko!<br>
      — <span class="word" data-ru="Я даю тебе (дательный)">Dajem ti</span> ovaj poklon za rođendan.<br>
      — Hvala ti puno! <span class="word" data-ru="Ты мне очень помогаешь (дательный).">Mnogo mi pomažeš</span>.<br>
      — <span class="word" data-ru="Не хватает мне (дательный)">Nedostaje mi</span> kad si daleko. <span class="word" data-ru="Дорогой сын (звательный)">Dragi sine</span>, čuvaj se!</p>`,
      comprehension: [
        {
          questionRu: "Что мать даёт сыну?",
          options: ["Poklon za rođendan.", "Pismo.", "Novac."],
          correctIndex: 0
        },
        {
          questionRu: "Как мать обращается к сыну в конце?",
          options: ["Dragi sine!", "Marko!", "Gospodine!"],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koliko padeža ima srpski jezik?", options: ["sedam", "šest", "pet"], correct: 0 },
    { type: "mc", q: "Koji padež odgovara na pitanje 'kome? čemu?'", options: ["dativ", "genitiv", "instrumental"], correct: 0 },
    { type: "mc", q: "Koji padež se koristi za obraćanje?", options: ["vokativ", "lokativ", "nominativ"], correct: 0 },
    { type: "mc", q: "Koji padež u jednini izgleda isto kao dativ kod većine imenica?", options: ["lokativ", "genitiv", "akuzativ"], correct: 0 },
    { type: "mc", q: "Koji je dativ reči 'brat'?", options: ["bratu", "brata", "bratom"], correct: 0 },
    { type: "mc", q: "Koji je dativ reči 'majka'?", options: ["majci", "majku", "majka"], correct: 0 },
    { type: "mc", q: "Koji je vokativ imena 'Petar'?", options: ["Petre!", "Petar!", "Petru!"], correct: 0 },
    { type: "mc", q: "Šta znači 'davati'?", options: ["давать", "брать", "получать"], correct: 0 },
    { type: "mc", q: "Šta znači 'pomagati'?", options: ["помогать", "мешать", "просить"], correct: 0 },
    { type: "mc", q: "Koji padež odgovara ruskom 'творительному'?", options: ["instrumental", "dativ", "lokativ"], correct: 0 },
    { type: "mc", q: "Šta znači 'gospodine'?", options: ["господин (обращение)", "друг", "сосед"], correct: 0 },
    { type: "mc", q: "Šta znači 'poklon'?", options: ["подарок", "письмо", "книга"], correct: 0 },
    { type: "fill", q: "Dopuni dativ: Pišem pismo majc___. (majka)", answer: "i", alt: ["majci"] },
    { type: "fill", q: "Dopuni vokativ: ___, dođi ovamo! (Ana)", answer: "Ano", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я даю книгу брату.':", answer: "Dajem knjigu bratu.", alt: ["dajem knjigu bratu"] },
    { type: "fill", q: "Napisi padež koji odgovara na 'koga? šta?' (direktni objekat):", answer: "akuzativ", alt: [] },
    { type: "fill", q: "Napisi padež koji odgovara na 's kim? čim?':", answer: "instrumental", alt: [] },
    { type: "fill", q: "Napisi dativ reči 'sestra':", answer: "sestri", alt: [] },
    { type: "fill", q: "Napisi vokativ imena 'Milica':", answer: "Milice", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я помогаю маме.':", answer: "Pomažem majci.", alt: ["pomazem majci"] }
  ]
};
