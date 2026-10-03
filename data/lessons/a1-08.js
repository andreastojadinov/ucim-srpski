window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-08"] = {
  slug: "a1-08",
  level: "A1",
  id: 8,
  titleSr: "Dnevna rutina i povratni glagoli",
  titleRu: "Распорядок дня и возвратные глаголы",

  intro: {
    sr: `Danas učimo povratne glagole sa "se" i reči za svakodnevnu rutinu.`,
    ru: `Частица <b>se</b> в сербском работает почти так же, как русское «-ся/-сь»: <i>buditi se</i> (просыпаться), <i>oblačiti se</i> (одеваться), <i>kupati se</i> (мыться, купаться). Это прямая параллель, которая сделает эту тему интуитивно понятной.`
  },

  grammar: {
    titleRu: "Povratni glagoli i rutina",
    blocks: [
      {
        heading: "Povratni glagoli sa SE",
        explanationRu: `Эти глаголы спрягаются как обычные, но всегда требуют частицы <b>se</b>, которая не меняется по лицам (в отличие от русского -ся/-сь, которое не меняется тоже — ещё одна параллель!).`,
        table: {
          headers: ["Lice", "buditi se (просыпаться)"],
          rows: [
            ["ja", "budim se"],
            ["ti", "budiš se"],
            ["on/ona/ono", "budi se"],
            ["mi", "budimo se"],
            ["vi", "budite se"],
            ["oni/one/ona", "bude se"]
          ]
        },
        examples: [
          { sr: "Budim se u sedam.", ru: "Я просыпаюсь в семь." },
          { sr: "Oblačiš se brzo.", ru: "Ты быстро одеваешься." },
          { sr: "Deca se kupaju uveče.", ru: "Дети купаются вечером." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Ja se ___ u šest. (buditi se)",
          answer: "budim",
          alt: []
        }
      },
      {
        heading: "SE u perfektu — red klitika",
        explanationRu: `В перфекте частица <b>se</b> обычно идёт сразу после вспомогательной клитики (sam/si/je...): <b>Probudio sam se</b> (а не «Se sam probudio» или «Probudio se sam»).`,
        examples: [
          { sr: "Probudio sam se u sedam.", ru: "Я проснулся в семь." },
          { sr: "Obukla se brzo.", ru: "Она быстро оделась." },
          { sr: "Nismo se odmorili.", ru: "Мы не отдохнули." }
        ],
        drill: {
          type: "choice",
          question: "Koji red reči je ispravan za 'Я проснулся в семь'?",
          options: ["Probudio sam se u sedam.", "Se sam probudio u sedam.", "Probudio se sam u sedam."],
          correctIndex: 0
        }
      },
      {
        heading: "Tipičan dan — redosled rutine",
        explanationRu: `Полезный набор глаголов, чтобы описать свой день от утра до вечера.`,
        examples: [
          { sr: "Ustajem u šest.", ru: "Я встаю в шесть." },
          { sr: "Umivam se i perem zube.", ru: "Я умываюсь и чищу зубы." },
          { sr: "Doručkujem brzo.", ru: "Я быстро завтракаю." },
          { sr: "Odmaram se posle posla.", ru: "Я отдыхаю после работы." },
          { sr: "Ležem u ponoć.", ru: "Я ложусь в полночь." }
        ],
        drill: {
          type: "choice",
          question: "Koji glagol znači 'ложиться' (ici na spavanje)?",
          options: ["leći", "ustati", "buditi se"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Ustajem rano.", ru: "Я встаю рано." },
      { sr: "Kupam se ujutru.", ru: "Я купаюсь по утрам." },
      { sr: "Oblačim se za posao.", ru: "Я одеваюсь на работу." },
      { sr: "Doručkujem u sedam.", ru: "Я завтракаю в семь." },
      { sr: "Odmaram se vikendom.", ru: "Я отдыхаю по выходным." },
      { sr: "Osećam se dobro.", ru: "Я чувствую себя хорошо." },
      { sr: "Češljam se pred ogledalom.", ru: "Я причёсываюсь перед зеркалом." },
      { sr: "Večeramo u osam.", ru: "Мы ужинаем в восемь." },
      { sr: "Idem na spavanje u ponoć.", ru: "Я иду спать в полночь." },
      { sr: "Ona se brzo navikla.", ru: "Она быстро привыкла." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `«Se» <b>не меняется</b> по лицам — точно как русское -ся/-сь. Это делает возвратные глаголы лёгкими для переноса из русского.`,
      `Некоторые глаголы возвратные в сербском, но <b>не</b> в русском (например, <i>odmarati se</i> — «отдыхать» без -ся) — всегда проверяй каждый новый глагол.`,
      `В перфекте порядок всегда такой: <b>причастие + sam/si/je... + se</b> (или причастие + se + sam, в зависимости от предложения) — «se» никогда не ставится первым.`,
      `Фраза <b>Kako se osećaš?</b> (Как ты себя чувствуешь?) повседневная и естественно использует возвратный глагол — хороша для практики.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "buditi se", ru: "просыпаться" },
      { sr: "ustati", ru: "встать" },
      { sr: "umivati se", ru: "умываться" },
      { sr: "oblačiti se", ru: "одеваться" },
      { sr: "kupati se", ru: "купаться, мыться" },
      { sr: "češljati se", ru: "причёсываться" },
      { sr: "doručkovati", ru: "завтракать" },
      { sr: "večerati", ru: "ужинать" },
      { sr: "odmarati se", ru: "отдыхать" },
      { sr: "osećati se", ru: "чувствовать себя" },
      { sr: "leći", ru: "лечь" },
      { sr: "zubi", ru: "зубы" },
      { sr: "krevet", ru: "кровать" },
      { sr: "ogledalo", ru: "зеркало" },
      { sr: "ponoć", ru: "полночь" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A1) — opis dana.",
      textSr: `<p><span class="word" data-ru="Я просыпаюсь">Budim se</span> u šest sati. <span class="word" data-ru="Умываюсь и чищу зубы">Umivam se i perem zube</span>, pa se <span class="word" data-ru="одеваюсь">oblačim</span> za posao. <span class="word" data-ru="Завтракаю">Doručkujem</span> brzo, obično samo kafu i hleb. Posle posla <span class="word" data-ru="отдыхаю">odmaram se</span> malo, a uveče <span class="word" data-ru="ужинаем">večeramo</span> svi zajedno. <span class="word" data-ru="Ложусь">Ležem</span> oko ponoci.</p>`,
      comprehension: [
        {
          questionRu: "В котором часу автор просыпается?",
          options: ["U šest sati.", "U sedam sati.", "U osam sati."],
          correctIndex: 0
        },
        {
          questionRu: "Что автор обычно ест на завтрак?",
          options: ["Kafu i hleb.", "Supu.", "Ništa."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta znači 'buditi se'?", options: ["просыпаться", "ложиться", "одеваться"], correct: 0 },
    { type: "mc", q: "Šta znači 'oblačiti se'?", options: ["одеваться", "купаться", "отдыхать"], correct: 0 },
    { type: "mc", q: "Šta znači 'odmarati se'?", options: ["отдыхать", "работать", "есть"], correct: 0 },
    { type: "mc", q: "Da li se 'se' menja po licima?", options: ["Ne, ostaje isto", "Da, menja se", "Samo u množini"], correct: 0 },
    { type: "mc", q: "Koji je ispravan red reči u perfektu?", options: ["Probudio sam se.", "Se sam probudio.", "Probudio se sam."], correct: 0 },
    { type: "mc", q: "Šta znači 'leći'?", options: ["лечь", "встать", "сесть"], correct: 0 },
    { type: "mc", q: "Šta znači 'doručkovati'?", options: ["завтракать", "ужинать", "обедать"], correct: 0 },
    { type: "mc", q: "Šta znači 'Kako se osećaš?'", options: ["Как ты себя чувствуешь?", "Как тебя зовут?", "Где ты живёшь?"], correct: 0 },
    { type: "mc", q: "Koji oblik ide uz 'mi' od 'buditi se'?", options: ["budimo se", "budite se", "bude se"], correct: 0 },
    { type: "mc", q: "Šta znači 'zubi'?", options: ["зубы", "глаза", "руки"], correct: 0 },
    { type: "mc", q: "Šta znači 'ponoć'?", options: ["полночь", "полдень", "вечер"], correct: 0 },
    { type: "mc", q: "Šta znači 'krevet'?", options: ["кровать", "стул", "стол"], correct: 0 },
    { type: "fill", q: "Dopuni: Ja se ___ u sedam. (buditi se)", answer: "budim", alt: [] },
    { type: "fill", q: "Dopuni: Ona se brzo ___. (oblačiti se, perfekt, ženski rod)", answer: "obukla", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я чувствую себя хорошо.':", answer: "Osećam se dobro.", alt: ["osećam se dobro"] },
    { type: "fill", q: "Prevedi na srpski 'Мы отдыхаем по выходным.':", answer: "Odmaramo se vikendom.", alt: ["odmaramo se vikendom"] },
    { type: "fill", q: "Napisi povratni glagol za 'умываться':", answer: "umivati se", alt: [] },
    { type: "fill", q: "Napisi povratni glagol za 'причёсываться':", answer: "češljati se", alt: ["cesljati se"] },
    { type: "fill", q: "Dopuni: Probudio sam ___ u šest. (se)", answer: "se", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я ложусь в полночь.':", answer: "Ležem u ponoć.", alt: ["lezem u ponoc"] }
  ]
};
