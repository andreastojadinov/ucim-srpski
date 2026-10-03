window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-03"] = {
  slug: "a1-03",
  level: "A1",
  id: 3,
  titleSr: "Prisvojne zamenice i pridevi",
  titleRu: "Притяжательные местоимения и прилагательные",

  intro: {
    sr: `Danas učimo kako se kaže "moj, tvoj, njegov, njen..." i kako se prave prisvojni pridevi od imena.`,
    ru: `Притяжательные местоимения («мой, твой, его, её, наш, ваш, их») в сербском согласуются с тем, <b>что принадлежит</b>, а не с тем, <b>кому принадлежит</b> — точно как в русском «мой дом» / «моя книга». Плюс вы узнаете особый сербский (и отчасти русский разговорный!) способ — образовывать притяжательные прилагательные прямо из имён: <i>Markov auto</i> — «Марков автомобиль».`
  },

  grammar: {
    titleRu: "Prisvojne reči",
    blocks: [
      {
        heading: "Prisvojne zamenice",
        explanationRu: `Как и русские притяжательные местоимения, эти слова меняются по роду в зависимости от <b>предмета</b>, а не владельца: <i>njegova knjiga</i> («его книга» — <i>knjiga</i> женского рода, поэтому -a, хотя владелец мужчина).`,
        table: {
          headers: ["Muški", "Ženski", "Srednji", "Prevod"],
          rows: [
            ["moj", "moja", "moje", "мой"],
            ["tvoj", "tvoja", "tvoje", "твой"],
            ["njegov", "njegova", "njegovo", "его"],
            ["njen", "njena", "njeno", "её"],
            ["naš", "naša", "naše", "наш"],
            ["vaš", "vaša", "vaše", "ваш"],
            ["njihov", "njihova", "njihovo", "их"]
          ]
        },
        examples: [
          { sr: "Ovo je moj brat.", ru: "Это мой брат." },
          { sr: "Njena kuća je velika.", ru: "Её дом большой." },
          { sr: "Njegov pas je mali.", ru: "Его собака маленькая." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Ovo je ___ sestra. (moj, ženski rod)",
          answer: "moja",
          alt: []
        }
      },
      {
        heading: "Prisvojni pridevi od imena (-ov / -ev / -in)",
        explanationRu: `В сербском очень продуктивен способ образовывать притяжательное прилагательное прямо от имени: мужское имя + <b>-ov/-ev</b>, женское имя + <b>-in</b>. Кстати, это не совсем чуждо русскому — вспомните разговорное «Мишина книга», «папин стул» — та же идея, только в сербском она используется гораздо шире, включая обычные имена и фамилии.`,
        examples: [
          { sr: "Markov auto je crn.", ru: "Марков автомобиль чёрный." },
          { sr: "Anina knjiga je interesantna.", ru: "Анина книга интересная." },
          { sr: "Petrov brat radi u banci.", ru: "Петров брат работает в банке." },
          { sr: "Milicina torba je nova.", ru: "Милицина сумка новая." }
        ],
        drill: {
          type: "choice",
          question: "Kako glasi prisvojni pridev od imena 'Ana' + 'knjiga'?",
          options: ["Anina knjiga", "Anaova knjiga", "Anin knjiga"],
          correctIndex: 0
        }
      },
      {
        heading: "SVOJ — kad je vlasnik isti kao subjekt",
        explanationRu: `Слово <b>svoj</b> («свой») используется, когда владелец совпадает с подлежащим предложения — точно как в русском «свой». Это помогает избежать путаницы между «его» и «своего».`,
        examples: [
          { sr: "On voli svoju majku.", ru: "Он любит свою мать. (его собственную)" },
          { sr: "Ona čita svoju knjigu.", ru: "Она читает свою книгу." },
          { sr: "Uzeo je svoj kaput.", ru: "Он взял своё пальто." }
        ],
        drill: {
          type: "choice",
          question: "Kada koristis 'svoj' umesto 'njegov/njen'?",
          options: ["Kad je vlasnik isti kao subjekt rečenice", "Kad je vlasnik muskarac", "Uvek, bez razlike"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod.",
    items: [
      { sr: "Ovo je naš grad.", ru: "Это наш город." },
      { sr: "Vaša deca su lepa.", ru: "Ваши дети красивые." },
      { sr: "Njihova kuća je nova.", ru: "Их дом новый." },
      { sr: "Markov pas je veliki.", ru: "Марков пёс большой." },
      { sr: "Jovanina sestra je lekarka.", ru: "Йованина сестра — врач." },
      { sr: "Moj otac radi u banci.", ru: "Мой отец работает в банке." },
      { sr: "Tvoja ideja je dobra.", ru: "Твоя идея хорошая." },
      { sr: "On voli svoj posao.", ru: "Он любит свою работу." },
      { sr: "Njen muž je iz Niša.", ru: "Её муж из Ниша." },
      { sr: "Čiji je ovo telefon?", ru: "Чей это телефон?" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Najcesca greska pocetnika: prisvojna reč se slaže sa <b>stvari koja se poseduje</b>, a ne sa vlasnikom. "Njegova sestra" je tačno iako je "on" muskog roda — zato sto je "sestra" zenskog roda.`,
      `<b>Njegov</b> (его) i <b>njen</b> (её) biraju se prema rodu <b>vlasnika</b>, a završetak (-ov/-ova/-ovo ili -en/-na/-no) prema rodu <b>stvari</b> — dva različita pravila se primenjuju istovremeno.`,
      `Prisvojni pridevi od imena (-ov/-ev/-in) se koriste mnogo cesce u srpskom nego u standardnom ruskom — slobodno ih koristi i za obicna imena, ne samo poznate osobe.`,
      `<b>Svoj</b> je koristan kad hoces da budes precizan da je vlasnik upravo subjekt rečenice — u svakodnevnom govoru se ipak često i "njegov/njen" koristi umesto "svoj" bez velike razlike u znacenju.`
    ]
  },

  vocab: {
    titleRu: "Reči iz ove lekcije",
    words: [
      { sr: "moj / moja / moje", ru: "мой / моя / моё" },
      { sr: "tvoj / tvoja / tvoje", ru: "твой / твоя / твоё" },
      { sr: "njegov / njegova / njegovo", ru: "его" },
      { sr: "njen / njena / njeno", ru: "её" },
      { sr: "naš / naša / naše", ru: "наш" },
      { sr: "vaš / vaša / vaše", ru: "ваш" },
      { sr: "njihov / njihova / njihovo", ru: "их" },
      { sr: "svoj / svoja / svoje", ru: "свой / своя / своё" },
      { sr: "čiji / čija / čije", ru: "чей / чья / чьё" },
      { sr: "banka", ru: "банк" },
      { sr: "torba", ru: "сумка" },
      { sr: "kaput", ru: "пальто" },
      { sr: "ideja", ru: "идея" },
      { sr: "vlasnik", ru: "владелец" },
      { sr: "pripadati", ru: "принадлежать" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A1).",
      textSr: `<p>Ovo je <span class="word" data-ru="моя семья">moja porodica</span>. <span class="word" data-ru="мой отец">Moj otac</span> radi u banci, a <span class="word" data-ru="его машина">njegov auto</span> je crn. <span class="word" data-ru="моя мать">Moja majka</span> voli <span class="word" data-ru="свою работу">svoj posao</span> — ona je lekarka. Imam i sestru, <span class="word" data-ru="её имя">njeno ime</span> je Ana, i <span class="word" data-ru="Анина сумка">Anina torba</span> je uvek puna knjiga.</p>`,
      comprehension: [
        {
          questionRu: "Кем работает отец автора?",
          options: ["Radi u banci.", "Radi kao lekar.", "Ne radi."],
          correctIndex: 0
        },
        {
          questionRu: "Как зовут сестру автора?",
          options: ["Ana.", "Milica.", "Jovana."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koja prisvojna zamenica znači 'его'?", options: ["njegov", "njen", "njihov"], correct: 0 },
    { type: "mc", q: "Koja prisvojna zamenica znači 'её'?", options: ["njen", "njegov", "njihov"], correct: 0 },
    { type: "mc", q: "Koji oblik ide uz 'sestra' (ženski rod) od 'moj'?", options: ["moja", "moj", "moje"], correct: 0 },
    { type: "mc", q: "Koji oblik ide uz 'auto' (muški rod) od 'naš'?", options: ["naš", "naša", "naše"], correct: 0 },
    { type: "mc", q: "Kako se gradi prisvojni pridev od imena 'Marko'?", options: ["Markov", "Markoin", "Markoja"], correct: 0 },
    { type: "mc", q: "Kako se gradi prisvojni pridev od imena 'Ana'?", options: ["Anina", "Anov", "Anino"], correct: 0 },
    { type: "mc", q: "Kada se koristi 'svoj'?", options: ["kad je vlasnik = subjekt", "kad je vlasnik žena", "uvek umesto njegov/njen"], correct: 0 },
    { type: "mc", q: "Šta znači 'Markov auto'?", options: ["Марков автомобиль", "Автомобиль Анны", "Наш автомобиль"], correct: 0 },
    { type: "mc", q: "Šta znači 'čiji'?", options: ["чей", "какой", "который"], correct: 0 },
    { type: "mc", q: "Koji rod odreduje završetak prisvojne zamenice — vlasnika ili stvari?", options: ["stvari koja se poseduje", "vlasnika", "oba podjednako"], correct: 0 },
    { type: "mc", q: "Šta znači 'vlasnik'?", options: ["владелец", "работник", "гость"], correct: 0 },
    { type: "mc", q: "Šta znači 'pripadati'?", options: ["принадлежать", "работать", "жить"], correct: 0 },
    { type: "fill", q: "Dopuni: ___ knjiga je interesantna. (Ana + prisvojni pridev)", answer: "Anina", alt: [] },
    { type: "fill", q: "Dopuni: Ovo je ___ pas. (njegov, muški rod)", answer: "njegov", alt: [] },
    { type: "fill", q: "Dopuni: On voli ___ posao. (svoj, refleksivno)", answer: "svoj", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Это наш дом.' (kuća, ženski rod):", answer: "Ovo je naša kuća.", alt: ["ovo je nasa kuca"] },
    { type: "fill", q: "Napisi prisvojni pridev od imena 'Petar':", answer: "Petrov", alt: [] },
    { type: "fill", q: "Napisi prisvojnu zamenicu za 'их':", answer: "njihov", alt: [] },
    { type: "fill", q: "Dopuni: ___ deca su lepa. (vaš, srednji rod množina)", answer: "Vaša", alt: ["vasa"] },
    { type: "fill", q: "Napisi reč za 'чей' (upitna prisvojna zamenica, muški rod):", answer: "čiji", alt: ["ciji"] }
  ]
};
