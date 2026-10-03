window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-06"] = {
  slug: "a0-06",
  level: "A0",
  id: 6,
  titleSr: "Dani, meseci i koliko je sati",
  titleRu: "Дни, месяцы и время (который час)",

  intro: {
    sr: `Danas učimo dane u nedelji, mesece, godisnja doba i kako da pitamo i kažemo koliko je sati.`,
    ru: `Эта лекция — практичный набор слов на каждый день: дни недели, месяцы, времена года и выражение времени («который час», «в семь часов»). Обратите особое внимание на слово <b>nedelja</b> — это ложный друг переводчика!`
  },

  grammar: {
    titleRu: "Dani, meseci, vreme",
    blocks: [
      {
        heading: "Dani u nedelji",
        explanationRu: `Неделя в сербском традиционно начинается с понедельника. Внимание: слово <b>nedelja</b> означает одновременно и «воскресенье», и «неделя» (как единицу времени) — значение понятно из контекста, но это частая путаница для русскоговорящих.`,
        table: {
          headers: ["Srpski", "Prevod"],
          rows: [
            ["ponedeljak", "понедельник"],
            ["utorak", "вторник"],
            ["sreda", "среда"],
            ["četvrtak", "четверг"],
            ["petak", "пятница"],
            ["subota", "суббота"],
            ["nedelja", "воскресенье / неделя"]
          ]
        },
        drill: {
          type: "choice",
          question: "Koji srpski dan znači 'среда'?",
          options: ["sreda", "subota", "sedmica"],
          correctIndex: 0
        }
      },
      {
        heading: "Meseci i godišnja doba",
        explanationRu: `Названия месяцев похожи на международные (как в русском) и легко запоминаются. Времена года: <b>zima</b> (зима), <b>proleće</b> (весна), <b>leto</b> (лето), <b>jesen</b> (осень).`,
        table: {
          headers: ["Srpski", "Prevod"],
          rows: [
            ["januar, februar, mart", "январь, февраль, март"],
            ["april, maj, jun", "апрель, май, июнь"],
            ["jul, avgust, septembar", "июль, август, сентябрь"],
            ["oktobar, novembar, decembar", "октябрь, ноябрь, декабрь"]
          ]
        },
        drill: {
          type: "fill",
          question: "Treći mesec u godini je ___.",
          answer: "mart",
          alt: []
        }
      },
      {
        heading: "Koliko je sati?",
        explanationRu: `Как и со словом «godina» (ранее), слово <b>sat</b> («час») меняет форму в зависимости от числа: <b>jedan sat</b> (1 час), <b>dva/tri/četiri sata</b> (2-4 часа), <b>pet sati</b> (5 и больше часов). Предлог <b>u</b> используется для «в [какое-то время]»: <b>u pet sati</b> — «в пять часов».`,
        examples: [
          { sr: "Koliko je sati?", ru: "Сколько времени? / Который час?" },
          { sr: "Sada je deset sati.", ru: "Сейчас десять часов." },
          { sr: "Dolazim u sedam sati.", ru: "Я приду в семь часов." },
          { sr: "Pet i po.", ru: "Половина шестого (буквально «пять и половина»)." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Sada je pet ___. (sati)",
          answer: "sati",
          alt: []
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod.",
    items: [
      { sr: "Danas je ponedeljak.", ru: "Сегодня понедельник." },
      { sr: "Sastanak je u sredu.", ru: "Встреча в среду." },
      { sr: "Vikend je subota i nedelja.", ru: "Выходные — субота и воскресенье." },
      { sr: "Rođen sam u martu.", ru: "Я родился в марте." },
      { sr: "Leto je moje omiljeno godišnje doba.", ru: "Лето — моё любимое время года." },
      { sr: "Koliko je sati?", ru: "Который час?" },
      { sr: "Sada je podne.", ru: "Сейчас полдень." },
      { sr: "Radim od devet do pet.", ru: "Я работаю с девяти до пяти." },
      { sr: "Vidimo se sutra ujutru.", ru: "Увидимся завтра утром." },
      { sr: "Dolazim kasnije uveče.", ru: "Я приду позже, вечером." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `<b>Nedelja</b> = i «воскресенье» i «неделя» — ako je nejasno iz konteksta, može se reči <b>sedmica</b> za "неделю" radi preciznosti.`,
      `Nedelja (sedmica) počinje <b>ponedeljkom</b>, a ne nedeljom/voskresenjem — razlika od nekih drugih kalendarskih navika.`,
      `Broj uz "sat" prati isto pravilo kao broj uz "godina": 1 sat, 2-4 sata, 5+ sati.`,
      `Za delove dana koristi se: <b>jutro</b> (утро), <b>podne</b> (полдень), <b>popodne</b> (после полудня), <b>veče</b> (вечер), <b>noć</b> (ночь).`
    ]
  },

  vocab: {
    titleRu: "Reči iz ove lekcije",
    words: [
      { sr: "ponedeljak – nedelja", ru: "дни недели (см. таблицу выше)" },
      { sr: "mesec", ru: "месяц" },
      { sr: "godina", ru: "год" },
      { sr: "zima", ru: "зима" },
      { sr: "proleće", ru: "весна" },
      { sr: "leto", ru: "лето" },
      { sr: "jesen", ru: "осень" },
      { sr: "sat", ru: "час / часы (прибор)" },
      { sr: "jutro", ru: "утро" },
      { sr: "podne", ru: "полдень" },
      { sr: "popodne", ru: "после полудня" },
      { sr: "veče", ru: "вечер" },
      { sr: "noć", ru: "ночь" },
      { sr: "danas / sutra / juče", ru: "сегодня / завтра / вчера" },
      { sr: "vikend", ru: "выходные" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A0) — iz dnevnika.",
      textSr: `<p><span class="word" data-ru="Сегодня понедельник.">Danas je ponedeljak</span>, deseti <span class="word" data-ru="март">mart</span>. Radim od devet do pet. U <span class="word" data-ru="среду">sredu</span> imam sastanak u <span class="word" data-ru="десять часов">deset sati</span>. <span class="word" data-ru="В субботу и воскресенье">U subotu i nedelju</span> ne radim — to je <span class="word" data-ru="выходные">vikend</span>. Volim <span class="word" data-ru="лето">leto</span> najvise od svih godišnjih doba.</p>`,
      comprehension: [
        {
          questionRu: "Какого числа сегодня (по тексту)?",
          options: ["Deseti mart.", "Prvi januar.", "Peti jun."],
          correctIndex: 0
        },
        {
          questionRu: "Когда у автора встреча?",
          options: ["U sredu u deset sati.", "U ponedeljak u pet sati.", "U nedelju."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji dan je prvi u nedelji (po srpskom kalendaru)?", options: ["ponedeljak", "nedelja", "subota"], correct: 0 },
    { type: "mc", q: "Šta znači 'sreda'?", options: ["среда", "субота", "четверг"], correct: 0 },
    { type: "mc", q: "Šta znači 'subota'?", options: ["субота", "пятница", "вторник"], correct: 0 },
    { type: "mc", q: "Reč 'nedelja' može značiti:", options: ["i voskresenje i nedelju (sedmicu)", "samo subotu", "samo mesec"], correct: 0 },
    { type: "mc", q: "Koji mesec je 'decembar'?", options: ["декабрь", "ноябрь", "октябрь"], correct: 0 },
    { type: "mc", q: "Koje je godisnje doba 'leto'?", options: ["лето", "зима", "весна"], correct: 0 },
    { type: "mc", q: "Koje je godisnje doba 'jesen'?", options: ["осень", "лето", "зима"], correct: 0 },
    { type: "mc", q: "Kako pitas 'Который час?'", options: ["Koliko je sati?", "Koliko ima godina?", "Koji je dan?"], correct: 0 },
    { type: "mc", q: "Šta znači 'podne'?", options: ["полдень", "полночь", "утро"], correct: 0 },
    { type: "mc", q: "Šta znači 'veče'?", options: ["вечер", "утро", "ночь"], correct: 0 },
    { type: "mc", q: "Koji oblik ide uz broj 1 i reč 'sat'?", options: ["jedan sat", "jedan sata", "jedan sati"], correct: 0 },
    { type: "mc", q: "Koji oblik ide uz broj 5 i reč 'sat'?", options: ["pet sati", "pet sata", "pet sat"], correct: 0 },
    { type: "fill", q: "Napisi dan koji dolazi posle petka:", answer: "subota", alt: [] },
    { type: "fill", q: "Napisi prvi mesec u godini:", answer: "januar", alt: [] },
    { type: "fill", q: "Napisi godisnje doba kada je najhladnije:", answer: "zima", alt: [] },
    { type: "fill", q: "Dopuni: Sastanak je u ___ (среда) u pet sati.", answer: "sredu", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Сейчас десять часов.':", answer: "Sada je deset sati.", alt: ["sada je deset sati"] },
    { type: "fill", q: "Napisi reč za 'выходные' (subota i nedelja zajedno):", answer: "vikend", alt: [] },
    { type: "fill", q: "Napisi dan koji prethodi nedelji (voskresenju):", answer: "subota", alt: [] },
    { type: "fill", q: "Napisi mesec koji dolazi posle jula:", answer: "avgust", alt: [] }
  ]
};
