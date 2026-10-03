window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-07"] = {
  slug: "a2-07",
  level: "A2",
  id: 7,
  titleSr: "Zdravlje i kod lekara",
  titleRu: "Здоровье и у врача",

  intro: {
    sr: `Danas učimo kako da opišeš simptome i razumeš lekara — korisno i za hitne situacije.`,
    ru: `Важная практическая тема: как сказать, что у вас болит, и как понять врача. Обратите внимание на конструкцию «Boli me glava» — она устроена немного иначе, чем русское «у меня болит голова»!`
  },

  grammar: {
    titleRu: "Boli me... i kod lekara",
    blocks: [
      {
        heading: "BOLI ME — konstrukcija za bol",
        explanationRu: `В отличие от русского «у меня болит голова» (где «голова» — подлежащее в именительном, а «у меня» — отдельная конструкция), сербский использует <b>Boli me</b> + часть тела в <b>именительном падеже</b>, где <b>me</b> — это винительный клитик «меня». Буквально: «Болит меня голова». Если частей тела несколько (например, ноги), глагол меняется на множественное число: <b>Bole me noge</b>.`,
        table: {
          headers: ["Deo tela", "Primer"],
          rows: [
            ["glava", "Boli me glava. (У меня болит голова.)"],
            ["grlo", "Boli me grlo. (У меня болит горло.)"],
            ["stomak", "Boli me stomak. (У меня болит живот.)"],
            ["leđa", "Bole me leđa. (У меня болит спина.)"],
            ["noge", "Bole me noge. (У меня болят ноги.)"],
            ["zubi", "Bole me zubi. (У меня болят зубы.)"]
          ]
        },
        drill: {
          type: "choice",
          question: "Kako se kaže 'У меня болит живот'?",
          options: ["Boli me stomak.", "Bole me stomak.", "Boli ja stomak."],
          correctIndex: 0
        }
      },
      {
        heading: "Kod lekara — korisne fraze",
        explanationRu: `Osnovne fraze koje ce ti trebati kad odes kod lekara ili u apoteku.`,
        examples: [
          { sr: "Imam temperaturu.", ru: "У меня температура." },
          { sr: "Osećam se loše.", ru: "Я плохо себя чувствую." },
          { sr: "Prehladio sam se.", ru: "Я простудился." },
          { sr: "Imam kašalj i curi mi nos.", ru: "У меня кашель и насморк." },
          { sr: "Potreban mi je recept.", ru: "Мне нужен рецепт." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: ___ temperaturu. (imati, ja)",
          answer: "Imam",
          alt: ["imam"]
        }
      },
      {
        heading: "Saveti lekara — imperativ",
        explanationRu: `Lekar često daje savete u imperativu (ponavljanje iz prethodne lekcije) — korisno za razumevanje uputstava.`,
        examples: [
          { sr: "Pijte puno tečnosti.", ru: "Пейте много жидкости." },
          { sr: "Odmarajte se nekoliko dana.", ru: "Отдыхайте несколько дней." },
          { sr: "Uzmite ovaj lek tri puta dnevno.", ru: "Принимайте это лекарство три раза в день." }
        ],
        drill: {
          type: "choice",
          question: "Šta znači 'Uzmite ovaj lek tri puta dnevno'?",
          options: ["Принимайте это лекарство три раза в день.", "Купите это лекарство один раз.", "Не принимайте это лекарство."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Boli me glava od jutros.", ru: "У меня болит голова с утра." },
      { sr: "Imam alergiju na polen.", ru: "У меня аллергия на пыльцу." },
      { sr: "Moram da idem kod zubara.", ru: "Мне нужно к стоматологу." },
      { sr: "Lekar mi je dao recept.", ru: "Врач выписал мне рецепт." },
      { sr: "Gde je najbliža apoteka?", ru: "Где ближайшая аптека?" },
      { sr: "Da li imate nešto protiv bola?", ru: "У вас есть что-нибудь от боли?" },
      { sr: "Osećam se mnogo bolje danas.", ru: "Сегодня я чувствую себя намного лучше." },
      { sr: "Povredio sam nogu.", ru: "Я повредил ногу." },
      { sr: "Hitna pomoć stiže za pet minuta.", ru: "Скорая помощь прибудет через пять минут." },
      { sr: "Treba mi zakazati pregled.", ru: "Мне нужно записаться на осмотр." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Konstrukcija "Boli me X" je česta zamka — ne prevodi doslovno iz ruskog "у меня болит", vec zapamti srpski obrazac kao celinu.`,
      `Glagol se slaže sa delom tela: <b>Boli me</b> (jednina: glava, stomak) ali <b>Bole me</b> (množina: noge, zubi, leđa su uvek množina).`,
      `U hitnim slučajevima, broj za hitnu pomoć u Srbiji je <b>194</b> — korisno zapamtiti.`,
      `Reč <b>apoteka</b> (аптека) je lažni prijatelj sa engleskim "apothecary" ali tačno odgovara ruskoj "аптеке" — mesto gde se kupuju lekovi.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "lekar", ru: "врач" },
      { sr: "bolnica", ru: "больница" },
      { sr: "apoteka", ru: "аптека" },
      { sr: "lek", ru: "лекарство" },
      { sr: "recept", ru: "рецепт" },
      { sr: "temperatura", ru: "температура" },
      { sr: "kašalj", ru: "кашель" },
      { sr: "bol", ru: "боль" },
      { sr: "glava", ru: "голова" },
      { sr: "stomak", ru: "живот" },
      { sr: "grlo", ru: "горло" },
      { sr: "prehladiti se", ru: "простудиться" },
      { sr: "hitna pomoć", ru: "скорая помощь" },
      { sr: "pregled", ru: "осмотр" },
      { sr: "zdrav / bolestan", ru: "здоровый / больной" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A2).",
      textSr: `<p>— Dobar dan, doktore. <span class="word" data-ru="У меня болит горло">Boli me grlo</span> i <span class="word" data-ru="у меня температура">imam temperaturu</span>.<br>
      — Od kada se tako osećate?<br>
      — Od juče. Mislim da sam se <span class="word" data-ru="простудился">prehladio</span>.<br>
      — <span class="word" data-ru="Пейте много жидкости">Pijte puno tečnosti</span> i <span class="word" data-ru="отдыхайте">odmarajte se</span>. <span class="word" data-ru="Выпишу вам рецепт.">Daću vam recept</span> za lek.<br>
      — Hvala, doktore!</p>`,
      comprehension: [
        {
          questionRu: "На что жалуется пациент?",
          options: ["Boli ga grlo i ima temperaturu.", "Boli ga noga.", "Ima alergiju."],
          correctIndex: 0
        },
        {
          questionRu: "Что советует врач?",
          options: ["Da pije tečnost i odmara se.", "Da ide na posao.", "Da ne pije ništa."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kako se kaže 'У меня болит голова'?", options: ["Boli me glava.", "Ja bolim glavu.", "Glava boli ja."], correct: 0 },
    { type: "mc", q: "Kako se kaže 'У меня болят ноги' (množina)?", options: ["Bole me noge.", "Boli me noge.", "Bolim noge."], correct: 0 },
    { type: "mc", q: "Šta znači 'prehladiti se'?", options: ["простудиться", "выздороветь", "устать"], correct: 0 },
    { type: "mc", q: "Šta znači 'apoteka'?", options: ["аптека", "больница", "клиника"], correct: 0 },
    { type: "mc", q: "Šta znači 'recept' kod lekara?", options: ["рецепт (на лекарство)", "рецепт блюда", "совет"], correct: 0 },
    { type: "mc", q: "Šta znači 'kašalj'?", options: ["кашель", "насморк", "температура"], correct: 0 },
    { type: "mc", q: "Šta znači 'hitna pomoć'?", options: ["скорая помощь", "больница", "врач"], correct: 0 },
    { type: "mc", q: "Šta znači 'pregled'?", options: ["осмотр", "операция", "рецепт"], correct: 0 },
    { type: "mc", q: "Šta znači 'bolestan'?", options: ["больной", "здоровый", "уставший"], correct: 0 },
    { type: "mc", q: "Koji je broj za hitnu pomoc u Srbiji?", options: ["194", "911", "112"], correct: 0 },
    { type: "mc", q: "Šta znači 'Osećam se loše'?", options: ["Я плохо себя чувствую.", "Я хорошо себя чувствую.", "Я не болен."], correct: 0 },
    { type: "mc", q: "Šta znači 'temperatura' u medicinskom kontekstu?", options: ["жар, температура тела", "погода", "градус на улице"], correct: 0 },
    { type: "fill", q: "Dopuni: ___ me stomak. (boleti, jednina)", answer: "Boli", alt: ["boli"] },
    { type: "fill", q: "Dopuni: ___ me zubi. (boleti, množina)", answer: "Bole", alt: ["bole"] },
    { type: "fill", q: "Prevedi na srpski 'У меня кашель.':", answer: "Imam kašalj.", alt: ["imam kasalj"] },
    { type: "fill", q: "Prevedi na srpski 'Мне нужен рецепт.':", answer: "Potreban mi je recept.", alt: ["potreban mi je recept"] },
    { type: "fill", q: "Napisi reč za 'живот':", answer: "stomak", alt: [] },
    { type: "fill", q: "Napisi reč za 'горло':", answer: "grlo", alt: [] },
    { type: "fill", q: "Napisi reč za 'лекарство':", answer: "lek", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Отдыхайте несколько дней.' (vi, imperativ):", answer: "Odmarajte se nekoliko dana.", alt: ["odmarajte se nekoliko dana"] }
  ]
};
