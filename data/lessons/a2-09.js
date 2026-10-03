window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-09"] = {
  slug: "a2-09",
  level: "A2",
  id: 9,
  titleSr: "Veznici i složene rečenice",
  titleRu: "Союзы и сложные предложения",

  intro: {
    sr: `Danas učimo veznike koji povezuju rečenice — i jednu bitnu konstrukciju koja se razlikuje od ruskog: "da" + prezent.`,
    ru: `Союзы помогут вам строить сложные предложения. Также разберём конструкцию <b>da</b> + презент, которая во многом заменяет инфинитив — это важное отличие от русского, где после «хочу/должен» просто ставится инфинитив.`
  },

  grammar: {
    titleRu: "Veznici",
    blocks: [
      {
        heading: "Sastavni i suprotni veznici",
        explanationRu: `Основные союзы для соединения и противопоставления — в основном прямые параллели с русским.`,
        table: {
          headers: ["Veznik", "Prevod"],
          rows: [
            ["i", "и"],
            ["a", "а"],
            ["ali", "но"],
            ["ili", "или"],
            ["pa", "и затем, и вот"],
            ["niti... niti", "ни... ни"]
          ]
        },
        examples: [
          { sr: "Volim kafu, a ne volim čaj.", ru: "Я люблю кофе, а чай не люблю." },
          { sr: "Umoran sam, ali srećan.", ru: "Я устал, но счастлив." }
        ],
        drill: {
          type: "choice",
          question: "Koji veznik znači 'но'?",
          options: ["ali", "a", "pa"],
          correctIndex: 0
        }
      },
      {
        heading: "Zavisni veznici — uzrok i vreme",
        explanationRu: `Эти союзы вводят придаточные предложения причины и времени. Осторожно: <b>pošto</b> имеет <b>два значения</b> — «так как» (причина) и «после того как» (время) — смысл проясняется из контекста!`,
        table: {
          headers: ["Veznik", "Prevod"],
          rows: [
            ["jer", "потому что"],
            ["zato što", "из-за того что"],
            ["pošto", "так как / после того как (два značenja!)"],
            ["iako / mada", "хотя"],
            ["dok", "пока, в то время как"]
          ]
        },
        examples: [
          { sr: "Ne idem jer sam umoran.", ru: "Я не иду, потому что устал." },
          { sr: "Pošto je kasno, idemo kući.", ru: "Так как поздно, идём домой. (причина)" },
          { sr: "Pošto smo stigli, pozvali smo taksi.", ru: "После того как мы прибыли, вызвали такси. (время)" }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Ne idem na posao ___ sam bolestan. (jer)",
          answer: "jer",
          alt: []
        }
      },
      {
        heading: "DA + prezent — zamenjuje infinitiv",
        explanationRu: `Важная особенность сербского (и всех балканских языков): вместо инфинитива после «хочу, могу, должен» обычно используется <b>da</b> + <b>презент</b>. Это отличается от русского, где просто ставится инфинитив: «хочу <u>учить</u>» → «želim <u>da učim</u>» (буквально «хочу, чтобы я учил»).`,
        examples: [
          { sr: "Želim da naučim srpski.", ru: "Я хочу выучить сербский." },
          { sr: "Moram da idem.", ru: "Мне нужно идти." },
          { sr: "Idem da kupim hleb.", ru: "Я иду, чтобы купить хлеб." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'Я хочу учиться' (želim + učiti)?",
          options: ["Želim da učim.", "Želim učiti.", "Želim učim."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Volim i čaj i kafu.", ru: "Я люблю и чай, и кофе." },
      { sr: "Nije skupo, ali nije ni jeftino.", ru: "Не дорого, но и не дёшево." },
      { sr: "Iako je umoran, nastavlja da radi.", ru: "Хотя он устал, продолжает работать." },
      { sr: "Dok sam čekao, čitao sam knjigu.", ru: "Пока я ждал, я читал книгу." },
      { sr: "Moram da završim ovaj posao.", ru: "Мне нужно закончить эту работу." },
      { sr: "Pozvao me je da dođem na večeru.", ru: "Он позвал меня прийти на ужин." },
      { sr: "Niti sam gladan, niti sam žedan.", ru: "Я ни голоден, ни хочу пить." },
      { sr: "Zato što je kasno, moram da idem.", ru: "Из-за того что поздно, мне нужно идти." },
      { sr: "Čekam da autobus dođe.", ru: "Я жду, когда придёт автобус." },
      { sr: "Rekao je da će doći, pa nije došao.", ru: "Он сказал, что придёт, и всё же не пришёл." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `<b>Pošto</b> je dvosmisleno — ako nisi siguran da li znači "так как" ili "после того как", koristi umesto toga <b>jer</b> (причина) ili <b>nakon što</b> (время) da izbegneš zabunu.`,
      `Konstrukcija <b>da + prezent</b> je toliko česta da je gotovo nemoguce govoriti srpski bez nje — navikni se da je koristiš svuda gde bi na ruskom stavio infinitiv posle glagola volje/potrebe.`,
      `<b>Iako</b> i <b>mada</b> su potpuni sinonimi (хотя) — možeš koristiti bilo koji, stvar je stila.`,
      `U pisanom, formalnijem jeziku često se vidi i "infinitiv" bez "da" (npr. "Želim učiti"), ali u govoru je "da + prezent" mnogo prirodnije i češće.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "jer", ru: "потому что" },
      { sr: "zato što", ru: "из-за того что" },
      { sr: "pošto", ru: "так как / после того как" },
      { sr: "iako / mada", ru: "хотя" },
      { sr: "dok", ru: "пока" },
      { sr: "pa", ru: "и затем" },
      { sr: "niti", ru: "ни" },
      { sr: "da (veznik)", ru: "что / чтобы" },
      { sr: "nastaviti", ru: "продолжать" },
      { sr: "žedan", ru: "хочет пить" },
      { sr: "čekati", ru: "ждать" },
      { sr: "nakon što", ru: "после того как" },
      { sr: "pozvati", ru: "позвать, пригласить" },
      { sr: "večera", ru: "ужин" },
      { sr: "završiti", ru: "закончить" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A2).",
      textSr: `<p><span class="word" data-ru="Хотя было холодно">Iako je bilo hladno</span>, izašli smo u šetnju <span class="word" data-ru="потому что">jer</span> smo hteli svež vazduh. <span class="word" data-ru="Пока мы гуляли">Dok smo šetali</span>, pričali smo o poslu. <span class="word" data-ru="После того как мы пришли домой">Pošto smo došli kući</span>, skuvali smo čaj. Sada <span class="word" data-ru="хочу отдохнуть">želim da se odmorim</span> <span class="word" data-ru="потому что">jer</span> sam umoran.</p>`,
      comprehension: [
        {
          questionRu: "Почему они вышли на прогулку несмотря на холод?",
          options: ["Jer su hteli svež vazduh.", "Jer su morali.", "Jer je bilo toplo."],
          correctIndex: 0
        },
        {
          questionRu: "Что они сделали, когда пришли домой?",
          options: ["Skuvali su čaj.", "Legli su da spavaju.", "Izašli su opet."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta znači 'jer'?", options: ["потому что", "хотя", "когда"], correct: 0 },
    { type: "mc", q: "Šta znači 'iako'?", options: ["хотя", "потому что", "пока"], correct: 0 },
    { type: "mc", q: "Šta znači 'dok'?", options: ["пока", "хотя", "затем"], correct: 0 },
    { type: "mc", q: "Koja dva znacenja ima 'pošto'?", options: ["так как / после того как", "если / когда", "но / и"], correct: 0 },
    { type: "mc", q: "Šta zamenjuje konstrukcija 'da + prezent'?", options: ["infinitiv", "perfekat", "imperativ"], correct: 0 },
    { type: "mc", q: "Kako se kaže 'Я хочу выучить сербский'?", options: ["Želim da naučim srpski.", "Želim naučiti srpski.", "Želim naučim srpski."], correct: 0 },
    { type: "mc", q: "Šta znači 'niti... niti'?", options: ["ни... ни", "или... или", "и... и"], correct: 0 },
    { type: "mc", q: "Šta znači 'zato što'?", options: ["из-за того что", "хотя", "если"], correct: 0 },
    { type: "mc", q: "Šta znači 'mada'?", options: ["хотя", "потому что", "когда"], correct: 0 },
    { type: "mc", q: "Šta znači 'žedan'?", options: ["хочет пить", "голоден", "устал"], correct: 0 },
    { type: "mc", q: "Šta znači 'nastaviti'?", options: ["продолжать", "заканчивать", "начинать"], correct: 0 },
    { type: "mc", q: "Šta znači 'pa' kao veznik?", options: ["и затем", "но", "или"], correct: 0 },
    { type: "fill", q: "Dopuni: Umoran sam, ___ srećan. (ali)", answer: "ali", alt: [] },
    { type: "fill", q: "Dopuni: Moram ___ idem. (da)", answer: "da", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Мне нужно закончить эту работу.':", answer: "Moram da završim ovaj posao.", alt: ["moram da zavrsim ovaj posao"] },
    { type: "fill", q: "Prevedi na srpski 'Пока я ждал, я читал книгу.':", answer: "Dok sam čekao, čitao sam knjigu.", alt: ["dok sam cekao, citao sam knjigu"] },
    { type: "fill", q: "Napisi veznik za 'хотя' (sinonim za iako):", answer: "mada", alt: [] },
    { type: "fill", q: "Napisi veznik za 'потому что':", answer: "jer", alt: [] },
    { type: "fill", q: "Napisi dvosmisleni veznik koji znači i 'так как' i 'после того как':", answer: "pošto", alt: ["posto"] },
    { type: "fill", q: "Prevedi na srpski 'Я иду, чтобы купить хлеб.':", answer: "Idem da kupim hleb.", alt: ["idem da kupim hleb"] }
  ]
};
