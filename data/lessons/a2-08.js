window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-08"] = {
  slug: "a2-08",
  level: "A2",
  id: 8,
  titleSr: "Stan, kuća i pravci kretanja",
  titleRu: "Квартира, дом и направления движения",

  intro: {
    sr: `Danas učimo delove stana i predloge za mesto — sa jednom važnom razlikom od ruskog!`,
    ru: `Вы выучите части квартиры/дома и предлоги места. Внимание: здесь есть важное отличие от русского — там, где русский использует творительный падеж («перед домом», «за столом», «между окнами»), сербский в большинстве случаев использует <b>genitiv</b>!`
  },

  grammar: {
    titleRu: "Stan i predlozi mesta",
    blocks: [
      {
        heading: "Delovi stana/kuće",
        explanationRu: `Osnovne reči za opis stana ili kuce.`,
        table: {
          headers: ["Srpski", "Prevod"],
          rows: [
            ["soba", "комната"],
            ["kuhinja", "кухня"],
            ["kupatilo", "ванная"],
            ["dnevna soba", "гостиная"],
            ["spavaća soba", "спальня"],
            ["balkon", "балкон"],
            ["dvorište", "двор"],
            ["sprat", "этаж"],
            ["prizemlje", "первый этаж (на уровне земли)"]
          ]
        },
        examples: [
          { sr: "Stan je na trećem spratu.", ru: "Квартира на третьем этаже." },
          { sr: "Imamo lep balkon.", ru: "У нас красивый балкон." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'кухня'?",
          options: ["kuhinja", "soba", "dvorište"],
          correctIndex: 0
        }
      },
      {
        heading: "Predlozi mesta — VAŽNA RAZLIKA od ruskog!",
        explanationRu: `Запомните хорошо: в русском «перед, за, между, под, над» требуют творительного падежа, а в сербском эквиваленты этих предлогов требуют <b>genitiv</b>! Это противоположно вашей интуиции, так что обратите на это особое внимание.`,
        table: {
          headers: ["Predlog", "Prevod", "Primer (+ genitiv)"],
          rows: [
            ["ispred", "перед", "ispred kuće (перед домом)"],
            ["iza", "за, позади", "iza zgrade (за зданием)"],
            ["pored", "рядом с", "pored prozora (рядом с окном)"],
            ["između", "между", "između stolova (между столами)"],
            ["iznad", "над", "iznad kreveta (над кроватью)"]
          ]
        },
        drill: {
          type: "fill",
          question: "Dopuni: Bašta je ispred kuć___. (kuća, genitiv)",
          answer: "e",
          alt: ["kuće"]
        }
      },
      {
        heading: "Pravci kretanja — napredno",
        explanationRu: `Dopunski izrazi za snalaženje unutar zgrade i po gradu.`,
        examples: [
          { sr: "Skrenite na prvom uglu.", ru: "Поверните на первом углу." },
          { sr: "Idite pravo napred.", ru: "Идите прямо вперёд." },
          { sr: "Popnite se na treći sprat.", ru: "Поднимитесь на третий этаж." },
          { sr: "Siđite liftom dole.", ru: "Спуститесь на лифте вниз." }
        ],
        drill: {
          type: "choice",
          question: "Šta znači 'Popnite se na treći sprat'?",
          options: ["Поднимитесь на третий этаж.", "Спуститесь вниз.", "Поверните налево."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Kuhinja je pored dnevne sobe.", ru: "Кухня рядом с гостиной." },
      { sr: "Ispod stola je mačka.", ru: "Под столом кошка." },
      { sr: "Iza kuće je veliko dvorište.", ru: "За домом большой двор." },
      { sr: "Lift je između stepenica.", ru: "Лифт между лестницами." },
      { sr: "Slika je iznad kreveta.", ru: "Картина над кроватью." },
      { sr: "Živimo u prizemlju.", ru: "Мы живём на первом этаже." },
      { sr: "Stan ima dve spavaće sobe.", ru: "В квартире две спальни." },
      { sr: "Parking je ispred zgrade.", ru: "Парковка перед зданием." },
      { sr: "Prodavnica je pored škole.", ru: "Магазин рядом со школой." },
      { sr: "Moja soba je na drugom spratu.", ru: "Моя комната на втором этаже." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Zapamti dobro: predlozi <b>ispred, iza, pored, između, iznad, ispod</b> idu sa <b>genitivom</b> — ovo je najčešća zamka za ruske govornike jer je logika suprotna od ruskog instrumentala.`,
      `<b>Prizemlje</b> je "nulti" sprat (na nivou zemlje) — kao u vecini Evrope, a razlikuje se od američkog sistema brojanja spratova.`,
      `Reč <b>sprat</b> (этаж) se koristi sa predlogom "na": na prvom spratu, na drugom spratu — slicno ruskom "на первом этаже".`,
      `Za vertikalno kretanje koristi se "gore/dole" (up/down) uz "popeti se" (подняться) i "sići" (спуститься) — korisno u zgradama bez lifta!`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "soba", ru: "комната" },
      { sr: "kuhinja", ru: "кухня" },
      { sr: "kupatilo", ru: "ванная" },
      { sr: "balkon", ru: "балкон" },
      { sr: "dvorište", ru: "двор" },
      { sr: "sprat", ru: "этаж" },
      { sr: "prizemlje", ru: "первый этаж" },
      { sr: "lift", ru: "лифт" },
      { sr: "stepenice", ru: "лестница" },
      { sr: "ispred", ru: "перед" },
      { sr: "iza", ru: "за, позади" },
      { sr: "pored", ru: "рядом с" },
      { sr: "između", ru: "между" },
      { sr: "popeti se", ru: "подняться" },
      { sr: "sići", ru: "спуститься" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A2).",
      textSr: `<p>Naš stan je na <span class="word" data-ru="на третьем этаже">trećem spratu</span>. Ima <span class="word" data-ru="гостиную">dnevnu sobu</span>, <span class="word" data-ru="кухню">kuhinju</span> i dve <span class="word" data-ru="спальни">spavaće sobe</span>. <span class="word" data-ru="Перед зданием">Ispred zgrade</span> je parking, a <span class="word" data-ru="за зданием">iza zgrade</span> je malo dvorište. Lift je <span class="word" data-ru="между лестницами">između stepenica</span>, ali mi obično idemo peške.</p>`,
      comprehension: [
        {
          questionRu: "На каком этаже квартира?",
          options: ["Na trećem spratu.", "U prizemlju.", "Na petom spratu."],
          correctIndex: 0
        },
        {
          questionRu: "Что находится перед зданием?",
          options: ["Parking.", "Dvorište.", "Prodavnica."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji padež traže predlozi ispred/iza/pored/između?", options: ["genitiv", "instrumental", "dativ"], correct: 0 },
    { type: "mc", q: "Šta znači 'kuhinja'?", options: ["кухня", "ванная", "спальня"], correct: 0 },
    { type: "mc", q: "Šta znači 'dvorište'?", options: ["двор", "балкон", "лестница"], correct: 0 },
    { type: "mc", q: "Šta znači 'prizemlje'?", options: ["первый этаж (на земле)", "подвал", "крыша"], correct: 0 },
    { type: "mc", q: "Šta znači 'popeti se'?", options: ["подняться", "спуститься", "войти"], correct: 0 },
    { type: "mc", q: "Šta znači 'sići'?", options: ["спуститься", "подняться", "остаться"], correct: 0 },
    { type: "mc", q: "Kako se kaže 'между столами' (genitiv množine)?", options: ["između stolova", "između stolovima", "između stolove"], correct: 0 },
    { type: "mc", q: "Šta znači 'ispred'?", options: ["перед", "за", "рядом"], correct: 0 },
    { type: "mc", q: "Šta znači 'iza'?", options: ["за, позади", "перед", "над"], correct: 0 },
    { type: "mc", q: "Šta znači 'balkon'?", options: ["балкон", "двор", "лестница"], correct: 0 },
    { type: "mc", q: "Koji sprat je 'na nivou zemlje'?", options: ["prizemlje", "prvi sprat", "poslednji sprat"], correct: 0 },
    { type: "mc", q: "Šta znači 'lift'?", options: ["лифт", "лестница", "дверь"], correct: 0 },
    { type: "fill", q: "Dopuni: Bašta je iza kuć___. (kuća, genitiv)", answer: "e", alt: ["kuće"] },
    { type: "fill", q: "Dopuni: Prodavnica je pored škol___. (škola, genitiv)", answer: "e", alt: ["škole"] },
    { type: "fill", q: "Prevedi na srpski 'Картина над кроватью.':", answer: "Slika je iznad kreveta.", alt: ["slika je iznad kreveta"] },
    { type: "fill", q: "Prevedi na srpski 'Мы живём на первом этаже.':", answer: "Živimo u prizemlju.", alt: ["zivimo u prizemlju"] },
    { type: "fill", q: "Napisi reč za 'гостиная':", answer: "dnevna soba", alt: [] },
    { type: "fill", q: "Napisi reč za 'спальня':", answer: "spavaća soba", alt: ["spavaca soba"] },
    { type: "fill", q: "Napisi predlog za 'между' (+ genitiv):", answer: "između", alt: ["izmedju"] },
    { type: "fill", q: "Napisi reč za 'этаж':", answer: "sprat", alt: [] }
  ]
};
