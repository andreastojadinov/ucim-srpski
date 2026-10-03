window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-02"] = {
  slug: "a1-02",
  level: "A1",
  id: 2,
  titleSr: "Lokativ — gde se nalazi?",
  titleRu: "Местный падеж — где находится?",

  intro: {
    sr: `Danas ucimo lokativ — padez koji odgovara na pitanje "gde?".`,
    ru: `<b>Lokativ</b> — почти точный аналог русского предложного падежа: отвечает на вопрос «где?» и используется с предлогами <b>u</b> (в) и <b>na</b> (на), когда речь о статичном месте, а не о направлении движения. Остальные падежи (генитив, датив, инструментал, вокатив) подробно пройдём на уровне A2 — сейчас сосредоточимся на самом практичном: обозначении места.`
  },

  grammar: {
    titleRu: "Lokativ — padez mesta",
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
          question: "Koji padez ide uz 'Radim na pos___' (mesto, gde?)",
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
          question: "Koji predlog + lokativ znaci 'говорить О чём-то'?",
          options: ["o", "na", "u"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod.",
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
      `Zapamti par "kuda? → akuzativ" / "gde? → lokativ" kao <b>jedno pravilo</b> — ono je identicno ruskom, pa ti ne treba novo razmisljanje, samo prevod navike.`,
      `U svakodnevnom govoru, mnogi oblici datива i lokativa se poklapaju (npr. "školi" je i dativ i lokativ) — zato ucenje lokativa odmah olaksava i buduce ucenje dativa na A2 nivou.`,
      `Kod nekih zenskih imenica na -ka/-ga/-ha dolazi do promene suglasnika (npr. <i>ruka</i> → <i>ruci</i>, <i>noga</i> → <i>nozi</i>) — ovo je napredniji detalj koji cemo uvezbati kasnije, za sada samo budi svestan da postoji.`,
      `Predlog <b>o</b> + lokativ za "говорить о чём-то" radi identicno kao u ruskom — jedna manje stvar da pamtis ispočetka.`
    ]
  },

  vocab: {
    titleRu: "Reci iz ove lekcije",
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
    { type: "mc", q: "Koji je lokativ reci 'grad'?", options: ["gradu", "grad", "grada"], correct: 0 },
    { type: "mc", q: "Koji je lokativ reci 'škola'?", options: ["školi", "školu", "škola"], correct: 0 },
    { type: "mc", q: "Sta trazi akuzativ uz 'u/na'?", options: ["pravac (kuda?)", "mesto (gde?)", "vreme (kada?)"], correct: 0 },
    { type: "mc", q: "Sta trazi lokativ uz 'u/na'?", options: ["mesto (gde?)", "pravac (kuda?)", "razlog (zasto?)"], correct: 0 },
    { type: "mc", q: "Koja recenica je tacna za 'Я работаю на работе' (mesto)?", options: ["Radim na poslu.", "Idem na posao.", "Radim posao."], correct: 0 },
    { type: "mc", q: "Koja recenica je tacna za 'Я иду на работу' (pravac)?", options: ["Idem na posao.", "Radim na poslu.", "Idem na poslu."], correct: 0 },
    { type: "mc", q: "Koji predlog + lokativ znaci 'о чём-то'?", options: ["o", "sa", "za"], correct: 0 },
    { type: "mc", q: "Sta znaci 'Pričamo o filmu'?", options: ["Мы говорим о фильме.", "Мы смотрим фильм.", "Мы идём в кино."], correct: 0 },
    { type: "mc", q: "Sta znaci 'bolnica'?", options: ["больница", "школа", "гараж"], correct: 0 },
    { type: "mc", q: "Koji je lokativ reci 'posao'?", options: ["poslu", "posao", "posla"], correct: 0 },
    { type: "mc", q: "Sta znaci 'na selu'?", options: ["в деревне", "в городе", "в школе"], correct: 0 },
    { type: "fill", q: "Dopuni: Radim u bolnic___. (bolnica, lokativ)", answer: "i", alt: ["bolnici"] },
    { type: "fill", q: "Dopuni: Knjiga je na stol___. (sto, lokativ)", answer: "u", alt: ["stolu"] },
    { type: "fill", q: "Prevedi na srpski 'Я живу в Белграде.':", answer: "Živim u Beogradu.", alt: ["zivim u beogradu"] },
    { type: "fill", q: "Prevedi na srpski 'Мы говорим о работе.':", answer: "Pričamo o poslu.", alt: ["pricamo o poslu"] },
    { type: "fill", q: "Napisi lokativ reci 'kuća':", answer: "kući", alt: ["kuci"] },
    { type: "fill", q: "Napisi lokativ reci 'selo':", answer: "selu", alt: [] },
    { type: "fill", q: "Dopuni par: Idem u skolu. / Učim u skol___. (lokativ)", answer: "i", alt: ["školi", "skoli"] },
    { type: "fill", q: "Napisi padez koji odgovara na pitanje 'gde?':", answer: "lokativ", alt: [] }
  ]
};
