window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-02"] = {
  slug: "a1-02",
  level: "A1",
  id: 2,
  titleSr: "Lokativ — gde se nalazi?",
  titleRu: "Местный падеж — где находится?",

  intro: {
    sr: `Danas učimo lokativ — padež koji odgovara na pitanje "gde?".`,
    ru: `<b>Lokativ</b> — почти точный аналог русского предложного падежа: отвечает на вопрос «где?» и используется с предлогами <b>u</b> (в) и <b>na</b> (на), когда речь о статичном месте, а не о направлении движения. Остальные падежи (генитив, датив, инструментал, вокатив) подробно пройдём на уровне A2 — сейчас сосредоточимся на самом практичном: обозначении места.`
  },

  grammar: {
    titleRu: "Lokativ — padež mesta",
    blocks: [
      {
        heading: "Lokativ u jednini",
        explanationRu: `В единственном числе локатив чаще всего образуется окончанием <b>-u</b> (мужской и средний род) или <b>-i</b> (женский род) — похоже на русский предложный падеж (-е/-и), хотя конкретные буквы отличаются.`,
        table: {
          headers: ["Rod", "Nominativ", "Lokativ", "Primer"],
          rows: [
            ["M.", "grad", "gradu", "Živim u gradu. (Я живу в городе.)"],
            ["M.", "posao", "poslu", "Radim na poslu. (Я работаю на работе.)"],
            ["Ž.", "škola", "školi", "Učim u školi. (Я учусь в школе.)"],
            ["Ž.", "kuća", "kući", "Ona je u kući. (Она в доме.)"],
            ["S.", "selo", "selu", "Živi u selu. (Он живёт в деревне.)"]
          ]
        },
        drill: {
          type: "fill",
          question: "Dopuni lokativ: Učim u škol___. (škola)",
          answer: "i",
          alt: ["školi"]
        }
      },
      {
        heading: "AKUZATIV (kuda?) naspram LOKATIVA (gde?)",
        explanationRu: `Самое важное противопоставление этого урока — абсолютно как в русском «иду в школу» (винительный, куда?) vs «учусь в школе» (предложный, где?). Один и тот же предлог <b>u</b> или <b>na</b> требует разного падежа в зависимости от смысла: движение → akuzativ, место → lokativ.`,
        table: {
          headers: ["Smer (kuda?) — AKUZATIV", "Mesto (gde?) — LOKATIV"],
          rows: [
            ["Idem u školu.", "Učim u školi."],
            ["Idem na posao.", "Radim na poslu."],
            ["Idem u grad.", "Živim u gradu."]
          ]
        },
        drill: {
          type: "choice",
          question: "Koji padež ide uz 'Radim na pos___' (mesto, gde?)",
          options: ["Lokativ (poslu)", "Akuzativ (posao)", "Nominativ (posao)"],
          correctIndex: 0
        }
      },
      {
        heading: "Lokativ uz 'o' (govoriti O čemu)",
        explanationRu: `Предлог <b>o</b> («о») тоже требует локатива — и это снова точная параллель с русским «говорить о фильме» (предложный падеж).`,
        examples: [
          { sr: "Pričamo o filmu.", ru: "Мы говорим о фильме." },
          { sr: "Mislim o tebi.", ru: "Я думаю о тебе." },
          { sr: "Knjiga je o ljubavi.", ru: "Книга о любви." }
        ],
        drill: {
          type: "choice",
          question: "Koji predlog + lokativ znači 'говорить О чём-то'?",
          options: ["o", "na", "u"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Živim u Beogradu.", ru: "Я живу в Белграде." },
      { sr: "Knjiga je na stolu.", ru: "Книга на столе." },
      { sr: "Radim u bolnici.", ru: "Я работаю в больнице." },
      { sr: "On je na poslu.", ru: "Он на работе." },
      { sr: "Učimo o istoriji.", ru: "Мы учим историю (говорим об истории)." },
      { sr: "Dete je u školi.", ru: "Ребёнок в школе." },
      { sr: "Auto je u garaži.", ru: "Машина в гараже." },
      { sr: "Pričaju o poslu.", ru: "Они говорят о работе." },
      { sr: "Mačka je na krovu.", ru: "Кошка на крыше." },
      { sr: "Živimo na selu.", ru: "Мы живём в деревне (в сельской местности)." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Запомни пару «kuda? → винительный» / «gde? → местный» как <b>одно правило</b> — оно идентично русскому, так что не нужно новое размышление, только перевод привычки.`,
      `В повседневной речи многие формы датива и локатива совпадают (например, «školi» — это и датив, и локатив) — поэтому изучение локатива сразу облегчает будущее изучение датива на уровне A2.`,
      `У некоторых существительных женского рода на -ka/-ga/-ha происходит изменение согласного (например, <i>ruka</i> → <i>ruci</i>, <i>noga</i> → <i>nozi</i>) — это более продвинутая деталь, которую отработаем позже, пока просто имей в виду, что она существует.`,
      `Предлог <b>o</b> + локатив для «говорить о чём-то» работает идентично русскому — ещё одна вещь, которую не нужно учить заново.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "lokativ", ru: "местный падеж (предложный)" },
      { sr: "gde", ru: "где" },
      { sr: "bolnica", ru: "больница" },
      { sr: "garaža", ru: "гараж" },
      { sr: "krov", ru: "крыша" },
      { sr: "selo", ru: "деревня" },
      { sr: "pričati", ru: "разговаривать" },
      { sr: "misliti", ru: "думать" },
      { sr: "istorija", ru: "история" },
      { sr: "ljubav", ru: "любовь" },
      { sr: "živeti", ru: "жить" },
      { sr: "raditi", ru: "работать" },
      { sr: "učiti", ru: "учить(ся)" },
      { sr: "mačka", ru: "кошка" },
      { sr: "o (predlog)", ru: "о (предлог)" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A1).",
      textSr: `<p>Ja živim <span class="word" data-ru="в Белграде (лок.)">u Beogradu</span>. Radim <span class="word" data-ru="в больнице (лок.)">u bolnici</span> kao lekar. Moja sestra živi <span class="word" data-ru="в деревне (лок.)">na selu</span>, blizu Nisa. Kad se vidimo, pricamo <span class="word" data-ru="о работе (о + лок.)">o poslu</span> i <span class="word" data-ru="о семье (о + лок.)">o porodici</span>. Njena mačka voli da spava <span class="word" data-ru="на крыше (лок.)">na krovu</span>.</p>`,
      comprehension: [
        {
          questionRu: "Где живёт автор текста?",
          options: ["U Beogradu.", "Na selu.", "U Nišu."],
          correctIndex: 0
        },
        {
          questionRu: "О чём говорят автор и его сестра?",
          options: ["O poslu i porodici.", "O filmu.", "O gradu."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Na koje pitanje odgovara lokativ?", options: ["gde?", "koga? šta?", "kome?"], correct: 0 },
    { type: "mc", q: "Koji je lokativ reči 'grad'?", options: ["gradu", "grad", "grada"], correct: 0 },
    { type: "mc", q: "Koji je lokativ reči 'škola'?", options: ["školi", "školu", "škola"], correct: 0 },
    { type: "mc", q: "Šta trazi akuzativ uz 'u/na'?", options: ["pravac (kuda?)", "mesto (gde?)", "vreme (kada?)"], correct: 0 },
    { type: "mc", q: "Šta trazi lokativ uz 'u/na'?", options: ["mesto (gde?)", "pravac (kuda?)", "razlog (zašto?)"], correct: 0 },
    { type: "mc", q: "Koja rečenica je tačna za 'Я работаю на работе' (mesto)?", options: ["Radim na poslu.", "Idem na posao.", "Radim posao."], correct: 0 },
    { type: "mc", q: "Koja rečenica je tačna za 'Я иду на работу' (pravac)?", options: ["Idem na posao.", "Radim na poslu.", "Idem na poslu."], correct: 0 },
    { type: "mc", q: "Koji predlog + lokativ znači 'о чём-то'?", options: ["o", "sa", "za"], correct: 0 },
    { type: "mc", q: "Šta znači 'Pričamo o filmu'?", options: ["Мы говорим о фильме.", "Мы смотрим фильм.", "Мы идём в кино."], correct: 0 },
    { type: "mc", q: "Šta znači 'bolnica'?", options: ["больница", "школа", "гараж"], correct: 0 },
    { type: "mc", q: "Koji je lokativ reči 'posao'?", options: ["poslu", "posao", "posla"], correct: 0 },
    { type: "mc", q: "Šta znači 'na selu'?", options: ["в деревне", "в городе", "в школе"], correct: 0 },
    { type: "fill", q: "Dopuni: Radim u bolnic___. (bolnica, lokativ)", answer: "i", alt: ["bolnici"] },
    { type: "fill", q: "Dopuni: Knjiga je na stol___. (sto, lokativ)", answer: "u", alt: ["stolu"] },
    { type: "fill", q: "Prevedi na srpski 'Я живу в Белграде.':", answer: "Živim u Beogradu.", alt: ["zivim u beogradu"] },
    { type: "fill", q: "Prevedi na srpski 'Мы говорим о работе.':", answer: "Pričamo o poslu.", alt: ["pricamo o poslu"] },
    { type: "fill", q: "Napisi lokativ reči 'kuća':", answer: "kući", alt: ["kuci"] },
    { type: "fill", q: "Napisi lokativ reči 'selo':", answer: "selu", alt: [] },
    { type: "fill", q: "Dopuni par: Idem u školu. / Učim u škol___. (lokativ)", answer: "i", alt: ["školi", "školi"] },
    { type: "fill", q: "Napisi padež koji odgovara na pitanje 'gde?':", answer: "lokativ", alt: [] }
  ]
};
