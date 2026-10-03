window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-02"] = {
  slug: "a2-02",
  level: "A2",
  id: 2,
  titleSr: "Perfekt — detaljno",
  titleRu: "Перфект — подробно",

  intro: {
    sr: `Na A1 nivou naučili smo osnovu perfekta. Danas produbljujemo — tvorba participa po svim grupama glagola.`,
    ru: `На уровне A1 вы выучили базовую формулу перфекта (biti + l-причастие). Сегодня разберём, как причастие образуется для <b>каждого</b> типа инфинитива — включая важные «неправильные» глаголы на <b>-ći</b> — и отработаем вопросы и отрицание подробнее.`
  },

  grammar: {
    titleRu: "Tvorba participa po grupama",
    blocks: [
      {
        heading: "L-particip po tipu infinitiva",
        explanationRu: `Причастие образуется от основы инфинитива (убираем <b>-ti</b>) + окончание <b>-o/-la/-lo</b> (ед. ч.) или <b>-li/-le/-la</b> (мн. ч.). Вот таблица для каждого типа инфинитива.`,
        table: {
          headers: ["Tip infinitiva", "Primer", "Particip (m./ž./s.)"],
          rows: [
            ["-ati", "gledati", "gledao / gledala / gledalo"],
            ["-iti", "govoriti", "govorio / govorila / govorilo"],
            ["-eti", "videti", "video / videla / videlo"],
            ["-ovati", "kupovati", "kupovao / kupovala / kupovalo"],
            ["-nuti", "gurnuti", "gurnuo / gurnula / gurnulo"]
          ]
        },
        drill: {
          type: "fill",
          question: "Dopuni particip (muški rod): voleti → vol___.",
          answer: "eo",
          alt: ["voleo"]
        }
      },
      {
        heading: "Nepravilni glagoli na -ći",
        explanationRu: `Глаголы на <b>-ći</b> (ići, doći, stići, reći, moći...) образуют причастие от другой, исторической основы — их нужно просто запомнить, так как они очень частотны.`,
        table: {
          headers: ["Infinitiv", "Particip (m./ž./s.)"],
          rows: [
            ["ići", "išao / išla / išlo"],
            ["doći", "došao / došla / došlo"],
            ["stići", "stigao / stigla / stiglo"],
            ["reći", "rekao / rekla / reklo"],
            ["moći", "mogao / mogla / moglo"]
          ]
        },
        examples: [
          { sr: "Stigao sam na vreme.", ru: "Я приехал вовремя." },
          { sr: "Rekla je da dolazi.", ru: "Она сказала, что придёт." }
        ],
        drill: {
          type: "choice",
          question: "Koji je particip glagola 'reći' (ženski rod)?",
          options: ["rekla", "rečila", "rekla je"],
          correctIndex: 0
        }
      },
      {
        heading: "BITI i IMATI u perfektu + pitanja",
        explanationRu: `<b>Biti</b> и <b>imati</b> тоже имеют перфект — часто используемый для рассказа о прошлом состоянии. В вопросах в перфекте тоже работают оба порядка: <b>Da li si...</b> или <b>Jesi li...</b>, а с возвратными глаголами <b>se</b> ставится после вспомогательного глагола: <b>Jesi li se probudio?</b>`,
        table: {
          headers: ["Glagol", "Particip (m./ž./s.)"],
          rows: [
            ["biti", "bio / bila / bilo"],
            ["imati", "imao / imala / imalo"]
          ]
        },
        examples: [
          { sr: "Bio sam student u Beogradu.", ru: "Я был студентом в Белграде." },
          { sr: "Imali smo mnogo posla.", ru: "У нас было много работы." },
          { sr: "Jesi li se naspavao?", ru: "Ты выспался?" }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Ona je ___ veoma srećna juče. (biti, ženski rod)",
          answer: "bila",
          alt: []
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Gledao sam zanimljiv film.", ru: "Я смотрел интересный фильм." },
      { sr: "Govorila je o poslu.", ru: "Она говорила о работе." },
      { sr: "Video sam tvoju poruku.", ru: "Я видел твоё сообщение." },
      { sr: "Kupovali smo hranu na pijaci.", ru: "Мы покупали еду на рынке." },
      { sr: "Došli su kasno.", ru: "Они пришли поздно." },
      { sr: "Rekao sam ti već.", ru: "Я уже тебе говорил." },
      { sr: "Nisam mogao da dođem.", ru: "Я не смог прийти." },
      { sr: "Bili smo zajedno u školi.", ru: "Мы вместе учились (были в школе)." },
      { sr: "Imala je samo dvadeset godina.", ru: "Ей было всего двадцать лет." },
      { sr: "Jesi li čuo vest?", ru: "Ты слышал новость?" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Глаголы на <b>-ovati</b> меняются в презенте (kupovati → kupujem), но в перфекте причастие остаётся «правильным» — kupovao, без изменения основы.`,
      `Глаголы на <b>-ći</b> неправильные именно потому, что сохраняют старую корневую основу — легче всего выучить их как небольшой список из 5-6 очень частых глаголов.`,
      `При рассказе о событиях (последовательность действий) сербы часто нанизывают несколько перфектов подряд: «Ustao sam, doručkovao sam, otišao sam na posao...» — похоже на русское нанизывание прошедшего времени.`,
      `Когда в предложении одновременно «se» и вопрос, порядок такой: причастие + jesi/si + li + se — например, «Jesi li se naspavao?»`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "gledati", ru: "смотреть" },
      { sr: "govoriti", ru: "говорить" },
      { sr: "videti", ru: "видеть" },
      { sr: "kupovati", ru: "покупать" },
      { sr: "stići", ru: "успеть, прибыть" },
      { sr: "reći", ru: "сказать" },
      { sr: "poruka", ru: "сообщение" },
      { sr: "vest", ru: "новость" },
      { sr: "naspavati se", ru: "выспаться" },
      { sr: "srećan / srećna", ru: "счастливый / -ая" },
      { sr: "zanimljiv", ru: "интересный" },
      { sr: "već", ru: "уже" },
      { sr: "kasno", ru: "поздно" },
      { sr: "zajedno", ru: "вместе" },
      { sr: "redosled", ru: "порядок, последовательность" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A2) — iz dnevnika.",
      textSr: `<p>Juče sam imao dug dan. <span class="word" data-ru="Я встал">Ustao sam</span> rano, <span class="word" data-ru="позавтракал">doručkovao sam</span> i <span class="word" data-ru="пошёл на работу">otišao sam na posao</span>. Na poslu smo <span class="word" data-ru="много говорили">puno govorili</span> o novom projektu. Uveče <span class="word" data-ru="я пришёл">sam došao</span> kući kasno i <span class="word" data-ru="я сказал">rekao sam</span> ženi da <span class="word" data-ru="я не смог">nisam mogao</span> da stignem ranije. <span class="word" data-ru="Она сказала">Rekla je</span> da razume.</p>`,
      comprehension: [
        {
          questionRu: "О чём говорили на работе?",
          options: ["O novom projektu.", "O odmoru.", "O porodici."],
          correctIndex: 0
        },
        {
          questionRu: "Почему автор пришёл домой поздно?",
          options: ["Nije mogao da stigne ranije.", "Zaboravio je.", "Nije želeo da dođe."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji je particip glagola 'gledati' (muški rod)?", options: ["gledao", "gledio", "gledeo"], correct: 0 },
    { type: "mc", q: "Koji je particip glagola 'videti' (muški rod)?", options: ["video", "video je", "videio"], correct: 0 },
    { type: "mc", q: "Koji je particip glagola 'ići' (ženski rod)?", options: ["išla", "idila", "išala"], correct: 0 },
    { type: "mc", q: "Koji je particip glagola 'doći' (muški rod)?", options: ["došao", "dosla", "dociao"], correct: 0 },
    { type: "mc", q: "Koji je particip glagola 'reći' (srednji rod)?", options: ["reklo", "rečeno", "rekoo"], correct: 0 },
    { type: "mc", q: "Koji je particip glagola 'moći' (muški rod)?", options: ["mogao", "mocio", "mogeo"], correct: 0 },
    { type: "mc", q: "Koji je particip glagola 'kupovati' (ženski rod)?", options: ["kupovala", "kupila", "kupujala"], correct: 0 },
    { type: "mc", q: "Koji je particip glagola 'biti' (muški rod)?", options: ["bio", "bijo", "beo"], correct: 0 },
    { type: "mc", q: "Koji je particip glagola 'imati' (ženski rod)?", options: ["imala", "imela", "imila"], correct: 0 },
    { type: "mc", q: "Kako glasi pitanje sa povratnim glagolom u perfektu 'Ты проснулся?'", options: ["Jesi li se probudio?", "Jesi se li probudio?", "Se jesi li probudio?"], correct: 0 },
    { type: "mc", q: "Šta znači 'stići'?", options: ["успеть, прибыть", "уйти", "остаться"], correct: 0 },
    { type: "mc", q: "Šta znači 'naspavati se'?", options: ["выспаться", "проснуться", "устать"], correct: 0 },
    { type: "fill", q: "Dopuni: Ja sam ___ pismo. (pisati, muški rod - napisao)", answer: "napisao", alt: ["pisao"] },
    { type: "fill", q: "Dopuni: Oni su ___ kasno. (doći, muški rod množina)", answer: "došli", alt: ["dosli"] },
    { type: "fill", q: "Napisi particip glagola 'reći' za musko rod:", answer: "rekao", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я не смог прийти.':", answer: "Nisam mogao da dođem.", alt: ["nisam mogao da dodjem"] },
    { type: "fill", q: "Napisi particip glagola 'videti' za ženski rod:", answer: "videla", alt: [] },
    { type: "fill", q: "Napisi particip glagola 'biti' za srednji rod:", answer: "bilo", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Она сказала, что придёт.':", answer: "Rekla je da dolazi.", alt: ["rekla je da dolazi"] },
    { type: "fill", q: "Napisi particip glagola 'ići' za srednji rod:", answer: "išlo", alt: ["islo"] }
  ]
};
