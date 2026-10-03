window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-07"] = {
  slug: "a0-07",
  level: "A0",
  id: 7,
  titleSr: "Porodica i osnovni pridevi",
  titleRu: "Семья и основные прилагательные",

  intro: {
    sr: `Danas učimo reči za porodicu i osnovne pridjeve koji se slažu sa rodom imenice.`,
    ru: `Вы выучите слова для членов семьи и базовые прилагательные (хороший, красивый, молодой, старый...). Главное новое правило — прилагательные в сербском согласуются с существительным по роду, очень похоже на русский («хороший» / «хорошая» / «хорошее»).`
  },

  grammar: {
    titleRu: "Porodica i pridevi",
    blocks: [
      {
        heading: "Porodica",
        explanationRu: `Как и в русском, у многих членов семьи есть и «официальное», и «тёплое, разговорное» слово: <b>majka</b> / <b>mama</b> (мать / мама), <b>otac</b> / <b>tata</b> (отец / папа), <b>baba</b> (бабушка — также формально «baka»), <b>deda</b> (дедушка).`,
        table: {
          headers: ["Srpski", "Prevod"],
          rows: [
            ["majka / mama", "мать / мама"],
            ["otac / tata", "отец / папа"],
            ["roditelji", "родители"],
            ["sin", "сын"],
            ["ćerka", "дочь"],
            ["brat / sestra", "брат / сестра"],
            ["baka (baba) / deda", "бабушка / дедушка"],
            ["muž / žena (supruga)", "муж / жена"]
          ]
        },
        drill: {
          type: "choice",
          question: "Kako se kaže 'дочь' na srpskom?",
          options: ["ćerka", "sin", "sestra"],
          correctIndex: 0
        }
      },
      {
        heading: "Pridevi — slaganje po rodu",
        explanationRu: `Прилагательные меняют окончание в зависимости от рода существительного, почти как в русском: <b>-0 / -а / -о</b> (муж./жен./сред. род). Обратите внимание: у многих прилагательных мужская форма содержит «вставное -a-», которое пропадает в женском и среднем роде (<b>dobar → dobra → dobro</b>, не «dobara»).`,
        table: {
          headers: ["Muški", "Ženski", "Srednji", "Prevod"],
          rows: [
            ["dobar", "dobra", "dobro", "хороший"],
            ["lep", "lepa", "lepo", "красивый"],
            ["mlad", "mlada", "mlado", "молодой"],
            ["star", "stara", "staro", "старый"],
            ["visok", "visoka", "visoko", "высокий"]
          ]
        },
        drill: {
          type: "fill",
          question: "Dopuni: Moja sestra je vrlo ___. (lep, ženski rod)",
          answer: "lepa",
          alt: []
        }
      },
      {
        heading: "Red reči: pridev + imenica",
        explanationRu: `Радостная новость: порядок слов «прилагательное + существительное» в сербском такой же, как в русском («хороший человек» → <b>dobar čovek</b>). Просто не забывайте согласовывать род.`,
        examples: [
          { sr: "Moj brat je visok.", ru: "Мой брат высокий." },
          { sr: "Moja majka je lepa.", ru: "Моя мама красивая." },
          { sr: "Imam staru kuću.", ru: "У меня старый дом." },
          { sr: "On je dobar čovek.", ru: "Он хороший человек." }
        ],
        drill: {
          type: "choice",
          question: "Koji oblik ide uz 'kuća' (ženski rod) — 'star___ kuća'?",
          options: ["stara", "star", "staro"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Imam veliku porodicu.", ru: "У меня большая семья." },
      { sr: "Moj otac je visok i mršav.", ru: "Мой отец высокий и худой." },
      { sr: "Moja baka je vrlo stara.", ru: "Моя бабушка очень старая." },
      { sr: "Moj brat je mlad.", ru: "Мой брат молодой." },
      { sr: "Moja sestra je lepa i dobra.", ru: "Моя сестра красивая и добрая." },
      { sr: "Imamo malo dete.", ru: "У нас маленький ребёнок." },
      { sr: "Moj muž je dobar kuvar.", ru: "Мой муж хороший повар." },
      { sr: "Njena žena je lekarka.", ru: "Его жена — врач." },
      { sr: "Roditelji su mi iz Beograda.", ru: "Мои родители из Белграда." },
      { sr: "Deda je veoma pametan.", ru: "Дедушка очень умный." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `У многих прилагательных мужского рода есть «непостоянное a», которое пропадает в других родах: <b>dobar → dobra/dobro</b>, <b>mudar → mudra/mudro</b>. Запоминай их не как «добавь a», а как «убери a, когда добавляешь -a/-o».`,
      `Тёплые, семейные имена (<b>mama, tata, baka, deka</b>) используются в повседневной речи, а <b>majka, otac, baba, deda</b> звучат немного формальнее или используются, когда говорят о третьем лице.`,
      `Порядок слов «прилагательное + существительное» такой же, как в русском — не думай много о порядке, только о согласовании рода.`,
      `Когда описываешь людей, сербский часто использует два прилагательных подряд без запятой, иначе, чем можно было бы ожидать: «lepa i pametna žena» (lepa i pametna) — красивая и умная женщина.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "majka / mama", ru: "мать / мама" },
      { sr: "otac / tata", ru: "отец / папа" },
      { sr: "roditelji", ru: "родители" },
      { sr: "sin", ru: "сын" },
      { sr: "ćerka", ru: "дочь" },
      { sr: "baka / deda", ru: "бабушка / дедушка" },
      { sr: "muž / žena", ru: "муж / жена" },
      { sr: "dobar / dobra / dobro", ru: "хороший / -ая / -ее" },
      { sr: "lep / lepa / lepo", ru: "красивый / -ая / -ое" },
      { sr: "mlad / mlada / mlado", ru: "молодой / -ая / -ое" },
      { sr: "star / stara / staro", ru: "старый / -ая / -ое" },
      { sr: "visok / visoka / visoko", ru: "высокий / -ая / -ое" },
      { sr: "pametan / pametna / pametno", ru: "умный / -ая / -ое" },
      { sr: "velik / velika / veliko", ru: "большой / -ая / -ое" },
      { sr: "mali / mala / malo", ru: "маленький / -ая / -ое" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A0).",
      textSr: `<p>Imam <span class="word" data-ru="большая семья">veliku porodicu</span>. Moj <span class="word" data-ru="отец">otac</span> je <span class="word" data-ru="высокий">visok</span> i <span class="word" data-ru="умный">pametan</span>. Moja <span class="word" data-ru="мать">majka</span> je <span class="word" data-ru="красивая и добрая">lepa i dobra</span>. Imam jednog <span class="word" data-ru="брат">brata</span> — on je <span class="word" data-ru="молодой">mlad</span> i veoma <span class="word" data-ru="высокий">visok</span>. Moja <span class="word" data-ru="бабушка">baka</span> je <span class="word" data-ru="старая, но очень умная">stara, ali veoma pametna</span>.</p>`,
      comprehension: [
        {
          questionRu: "Какой у автора отец?",
          options: ["Visok i pametan.", "Mali i mlad.", "Star i nizak."],
          correctIndex: 0
        },
        {
          questionRu: "Сколько братьев у автора по тексту?",
          options: ["Jednog.", "Dva.", "Nema brata."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta znači 'majka'?", options: ["мать", "сестра", "дочь"], correct: 0 },
    { type: "mc", q: "Šta znači 'ćerka'?", options: ["дочь", "сын", "жена"], correct: 0 },
    { type: "mc", q: "Šta znači 'deda'?", options: ["дедушка", "бабушка", "дядя"], correct: 0 },
    { type: "mc", q: "Koji je ženski oblik pridjeva 'dobar'?", options: ["dobra", "dobro", "dobara"], correct: 0 },
    { type: "mc", q: "Koji je srednji oblik pridjeva 'lep'?", options: ["lepo", "lepa", "lepi"], correct: 0 },
    { type: "mc", q: "Koji je muški oblik pridjeva koji znači 'молодой'?", options: ["mlad", "mlada", "mlado"], correct: 0 },
    { type: "mc", q: "Šta znači 'visok'?", options: ["высокий", "низкий", "маленький"], correct: 0 },
    { type: "mc", q: "Šta znači 'pametan'?", options: ["умный", "глупый", "старый"], correct: 0 },
    { type: "mc", q: "Koji red reči je ispravan za 'красивый дом'?", options: ["lepa kuća", "kuća lepa", "lep kuća"], correct: 0 },
    { type: "mc", q: "Šta znači 'roditelji'?", options: ["родители", "дети", "соседи"], correct: 0 },
    { type: "mc", q: "Šta znači 'muž'?", options: ["муж", "жена", "брат"], correct: 0 },
    { type: "mc", q: "Koji oblik ide uz 'dete' (srednji rod) od 'mali'?", options: ["malo", "mali", "mala"], correct: 0 },
    { type: "fill", q: "Dopuni: Moj brat je vrlo ___. (visok, muški rod)", answer: "visok", alt: [] },
    { type: "fill", q: "Dopuni: Moja kuća je ___. (star, ženski rod)", answer: "stara", alt: [] },
    { type: "fill", q: "Napisi 'хороший' u srednjem rodu (uz 'dete'):", answer: "dobro", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'бабушка':", answer: "baka", alt: ["baba"] },
    { type: "fill", q: "Prevedi na srpski 'сын':", answer: "sin", alt: [] },
    { type: "fill", q: "Dopuni: Moja sestra je ___ i pametna. (lep, ženski rod)", answer: "lepa", alt: [] },
    { type: "fill", q: "Napisi musku formu pridjeva koja znači 'старый':", answer: "star", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'родители':", answer: "roditelji", alt: [] }
  ]
};
