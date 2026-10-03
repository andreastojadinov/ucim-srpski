window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-03"] = {
  slug: "a0-03",
  level: "A0",
  id: 3,
  titleSr: "Glagol IMATI i predstavljanje",
  titleRu: "Глагол «иметь» и знакомство",

  intro: {
    sr: `Danas ucimo glagol IMATI (иметь) i kako da se predstavimo — ime, godine, porodica.`,
    ru: `Второй по важности глагол — <b>imati</b> («иметь/у меня есть»). Он нужен и для обычных вещей («у меня есть брат»), и для возраста («мне 20 лет» = буквально «я имею 20 лет»). Также вы выучите глагол <b>zvati se</b> («зваться») — ключевой для знакомства.`
  },

  grammar: {
    titleRu: "Imati i zvati se",
    blocks: [
      {
        heading: "Glagol IMATI — sadasnje vreme",
        explanationRu: `<b>Imati</b> значит «иметь, обладать». В отличие от русского «у меня есть брат» (без глагола), сербский использует настоящий глагол: <b>Imam brata</b> — буквально «Я имею брата».`,
        table: {
          headers: ["Zamenica", "IMATI (potvrdno)", "IMATI (odrečno)"],
          rows: [
            ["ja", "imam", "nemam"],
            ["ti", "imaš", "nemaš"],
            ["on / ona / ono", "ima", "nema"],
            ["mi", "imamo", "nemamo"],
            ["vi", "imate", "nemate"],
            ["oni / one / ona", "imaju", "nemaju"]
          ]
        },
        examples: [
          { sr: "Imam brata.", ru: "У меня есть брат." },
          { sr: "Imaš li sestru?", ru: "У тебя есть сестра?" },
          { sr: "Nemam vremena.", ru: "У меня нет времени." },
          { sr: "Oni imaju veliku kuću.", ru: "У них большой дом." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Ja ___ dvoje dece. (imati)",
          answer: "imam",
          alt: []
        }
      },
      {
        heading: "Predstavljanje — Kako se zoveš?",
        explanationRu: `Глагол <b>zvati se</b> («зваться») — возвратный, частица <b>se</b> никогда не опускается. Буквально «Ja se zovem Marko» означает «Я зовусь Марко», хотя по смыслу это полный аналог русского «Меня зовут Марко».`,
        table: {
          headers: ["Zamenica", "ZVATI SE"],
          rows: [
            ["ja", "zovem se"],
            ["ti", "zoveš se"],
            ["on / ona / ono", "zove se"],
            ["mi", "zovemo se"],
            ["vi", "zovete se"],
            ["oni / one / ona", "zovu se"]
          ]
        },
        examples: [
          { sr: "Kako se zoveš?", ru: "Как тебя зовут? (неформально)" },
          { sr: "Kako se zovete?", ru: "Как вас зовут? (формально)" },
          { sr: "Ja se zovem Marko.", ru: "Меня зовут Марко." },
          { sr: "Drago mi je.", ru: "Приятно познакомиться." }
        ],
        drill: {
          type: "choice",
          question: "Kako formalno pitas nepoznatu osobu za ime?",
          options: ["Kako se zovete?", "Kako se zoveš?", "Ko si ti?"],
          correctIndex: 0
        }
      },
      {
        heading: "Koliko imaš godina?",
        explanationRu: `Чтобы спросить о возрасте, используется именно <b>imati</b> + число + <b>godina</b> (лет). Это важная ложная параллель с русским: по-русски «мне 20 лет» (дательный падеж), а по-сербски буквально «я имею 20 лет» (именительный, с глаголом imati).`,
        examples: [
          { sr: "Koliko imaš godina?", ru: "Сколько тебе лет?" },
          { sr: "Imam dvadeset godina.", ru: "Мне двадцать лет." },
          { sr: "On ima trideset godina.", ru: "Ему тридцать лет." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Imam dvadeset ___. (godina)",
          answer: "godina",
          alt: []
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod.",
    items: [
      { sr: "Imam psa.", ru: "У меня есть собака." },
      { sr: "Nemam sestru.", ru: "У меня нет сестры." },
      { sr: "Ja se zovem Jelena.", ru: "Меня зовут Елена." },
      { sr: "On se zove Petar.", ru: "Его зовут Пётр." },
      { sr: "Mi se zovemo Ivanovi.", ru: "Мы — семья Ивановы (фамилия)." },
      { sr: "Koliko godina imaš?", ru: "Сколько тебе лет?" },
      { sr: "Imam dvadeset pet godina.", ru: "Мне двадцать пять лет." },
      { sr: "Drago mi je, ja sam Ana.", ru: "Приятно познакомиться, я Анна." },
      { sr: "Imate li vremena?", ru: "У вас есть время?" },
      { sr: "Nemamo dece.", ru: "У нас нет детей." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Ne mesaj <b>sam</b> (biti — я есть) i <b>imam</b> (imati — у меня есть) — pocetnici cesto grese i kazu "Ja sam dvadeset godina" umesto tacnog "Imam dvadeset godina".`,
      `U pitanju za ime, <b>se</b> ostaje uvek uz glagol: "Kako se zoveš?", nikad "Kako zoveš?".`,
      `Fraza <b>Drago mi je</b> (Приятно познакомиться) koristi se i pri upoznavanju i kada cujes dobru vest — slicno ruskom "Приятно".`,
      `Broj posle "godina" ponekad menja oblik reci "godina" (1 godina, 2-4 godine, 5+ godina) — ovo cemo detaljno obraditi u lekciji o brojevima.`
    ]
  },

  vocab: {
    titleRu: "Reci iz ove lekcije",
    words: [
      { sr: "imati", ru: "иметь" },
      { sr: "nemati", ru: "не иметь" },
      { sr: "zvati se", ru: "зваться" },
      { sr: "ime", ru: "имя" },
      { sr: "prezime", ru: "фамилия" },
      { sr: "godina", ru: "год" },
      { sr: "brat", ru: "брат" },
      { sr: "sestra", ru: "сестра" },
      { sr: "dete / deca", ru: "ребёнок / дети" },
      { sr: "porodica", ru: "семья" },
      { sr: "posao", ru: "работа" },
      { sr: "vreme", ru: "время" },
      { sr: "pas", ru: "собака" },
      { sr: "drago mi je", ru: "приятно познакомиться" },
      { sr: "upoznati", ru: "познакомить(ся)" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A0).",
      textSr: `<p>— Zdravo, kako se zoveš?<br>
      — <span class="word" data-ru="Меня зовут Никола.">Zovem se Nikola</span>. A ti?<br>
      — Ja sam Olga. <span class="word" data-ru="Приятно познакомиться.">Drago mi je</span>!<br>
      — <span class="word" data-ru="Сколько тебе лет?">Koliko imaš godina</span>, Olga?<br>
      — <span class="word" data-ru="Мне двадцать три года.">Imam dvadeset tri godine</span>. <span class="word" data-ru="У меня есть брат и сестра.">Imam brata i sestru</span>.<br>
      — I ja imam sestru, ali <span class="word" data-ru="у меня нет брата.">nemam brata</span>.</p>`,
      comprehension: [
        {
          questionRu: "Сколько лет Ольге?",
          options: ["Dvadeset tri godine.", "Trideset godina.", "Osamnaest godina."],
          correctIndex: 0
        },
        {
          questionRu: "Есть ли у Николы брат?",
          options: ["Ne, nema brata.", "Da, ima brata.", "Ne znamo."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Sta znaci 'imati'?", options: ["иметь", "быть", "звать"], correct: 0 },
    { type: "mc", q: "Koji oblik glagola IMATI ide uz 'ja'?", options: ["imam", "imaš", "ima"], correct: 0 },
    { type: "mc", q: "Koji je odrečan oblik za 'on' (imati)?", options: ["nema", "nemam", "nemaš"], correct: 0 },
    { type: "mc", q: "Kako pitas nekoga za ime neformalno?", options: ["Kako se zoveš?", "Kako se zovete?", "Ko ste vi?"], correct: 0 },
    { type: "mc", q: "Sta znaci 'Drago mi je'?", options: ["Приятно познакомиться", "До свидания", "Спокойной ночи"], correct: 0 },
    { type: "mc", q: "Kako se na srpskom pita 'Сколько тебе лет?'", options: ["Koliko imaš godina?", "Koliko si godina?", "Koliko jesi godina?"], correct: 0 },
    { type: "mc", q: "Kako prevodis 'Mne 20 let' na srpski?", options: ["Imam dvadeset godina.", "Sam dvadeset godina.", "Zovem se dvadeset godina."], correct: 0 },
    { type: "mc", q: "Sta znaci 'brat'?", options: ["брат", "сестра", "друг"], correct: 0 },
    { type: "mc", q: "Sta znaci 'porodica'?", options: ["семья", "работа", "страна"], correct: 0 },
    { type: "mc", q: "Koji glagol je povratan (ima 'se')?", options: ["zvati se", "imati", "biti"], correct: 0 },
    { type: "mc", q: "Sta znaci 'nemam vremena'?", options: ["У меня нет времени", "У меня есть время", "Я не устал"], correct: 0 },
    { type: "mc", q: "Koji oblik glagola ZVATI SE ide uz 'mi'?", options: ["zovemo se", "zovete se", "zovu se"], correct: 0 },
    { type: "mc", q: "Sta znaci 'dete'?", options: ["ребёнок", "взрослый", "друг"], correct: 0 },
    { type: "fill", q: "Dopuni: On ___ dvadeset godina. (imati)", answer: "ima", alt: [] },
    { type: "fill", q: "Dopuni: Ja se ___ Ana. (zvati se)", answer: "zovem", alt: [] },
    { type: "fill", q: "Dopuni odrečno: Mi ___ decu. (nemati)", answer: "nemamo", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Как тебя зовут?':", answer: "Kako se zoveš?", alt: ["kako se zoves", "Kako se zoves?"], explain: "" },
    { type: "fill", q: "Prevedi na srpski 'У меня есть сестра.':", answer: "Imam sestru.", alt: ["imam sestru"], explain: "" },
    { type: "fill", q: "Dopuni: Koliko ___ godina? (imati, ti)", answer: "imaš", alt: ["imas"], explain: "" },
    { type: "fill", q: "Napisi srpsku rec za 'фамилия':", answer: "prezime", alt: [] }
  ]
};
