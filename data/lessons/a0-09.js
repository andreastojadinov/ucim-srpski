window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-09"] = {
  slug: "a0-09",
  level: "A0",
  id: 9,
  titleSr: "Upitne reči i negacija",
  titleRu: "Вопросительные слова и отрицание",

  intro: {
    sr: `Danas učimo upitne reči (ko, šta, gde, kada...) i kako se gradi negacija u rečenici.`,
    ru: `Вопросительные слова нужны, чтобы спрашивать «кто, что, где, когда, почему». Также вы узнаете, как задавать вопросы типа «да/нет» и как строить отрицание — и обнаружите приятную параллель с русским языком: двойное отрицание работает точно так же!`
  },

  grammar: {
    titleRu: "Pitanja i negacija",
    blocks: [
      {
        heading: "Upitne reči",
        explanationRu: `Основные вопросительные слова — стройте с ними вопросы так же, как в русском, порядок слов почти не меняется.`,
        table: {
          headers: ["Srpski", "Prevod"],
          rows: [
            ["ko", "кто"],
            ["šta", "что"],
            ["gde", "где"],
            ["kada", "когда"],
            ["zašto", "почему"],
            ["kako", "как"],
            ["koliko", "сколько"],
            ["koji / koja / koje", "который / какой (по роду)"]
          ]
        },
        drill: {
          type: "choice",
          question: "Koja reč znači 'почему'?",
          options: ["zašto", "kako", "gde"],
          correctIndex: 0
        }
      },
      {
        heading: "Da li — pitanja za da/ne",
        explanationRu: `Вопрос с ответом «да/нет» строится двумя способами: (1) частица <b>Da li</b> в начале + обычный порядок слов; (2) глагол выносится в начало, а после него ставится <b>li</b>. Оба варианта равнозначны.`,
        examples: [
          { sr: "Da li govoriš ruski?", ru: "Ты говоришь по-русски? (вариант 1)" },
          { sr: "Govoriš li ruski?", ru: "Ты говоришь по-русски? (вариант 2, тот же смысл)" },
          { sr: "Da li imaš vremena?", ru: "У тебя есть время?" },
          { sr: "Imaš li vremena?", ru: "У тебя есть время? (тот же смысл)" }
        ],
        drill: {
          type: "fill",
          question: "Preoblikuj pitanje 'Da li si gladan?' bez 'da li', koristeci 'li':",
          answer: "Jesi li gladan?",
          alt: ["jesi li gladan", "Jesi li gladan"]
        }
      },
      {
        heading: "Negacija — dvostruka negacija kao u ruskom",
        explanationRu: `Чтобы отрицать глагол, перед ним ставится <b>ne</b>: <b>Ne znam</b> («Я не знаю»). Приятная новость для русскоговорящих: сербский, как и русский, требует <b>двойного отрицания</b> с отрицательными местоимениями — <b>niko</b> (никто), <b>ništa</b> (ничего), <b>nikad</b> (никогда) всегда идут вместе с «ne» перед глаголом, точно как в русском "никто <u>не</u> знает".`,
        examples: [
          { sr: "Ne znam.", ru: "Я не знаю." },
          { sr: "Ne volim kafu.", ru: "Я не люблю кофе." },
          { sr: "Niko ne zna.", ru: "Никто не знает." },
          { sr: "Ništa ne razumem.", ru: "Я ничего не понимаю." },
          { sr: "Nikad ne kasnim.", ru: "Я никогда не опаздываю." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'Я ничего не понимаю'?",
          options: ["Ništa ne razumem.", "Ništa razumem.", "Ne ništa razumem."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Ko je to?", ru: "Кто это?" },
      { sr: "Šta radiš?", ru: "Что ты делаешь?" },
      { sr: "Gde živiš?", ru: "Где ты живёшь?" },
      { sr: "Kada dolaziš?", ru: "Когда ты приедешь?" },
      { sr: "Zašto si tužan?", ru: "Почему ты грустный?" },
      { sr: "Kako se osećaš?", ru: "Как ты себя чувствуешь?" },
      { sr: "Koliko košta?", ru: "Сколько стоит?" },
      { sr: "Koju knjigu čitaš?", ru: "Какую книгу ты читаешь?" },
      { sr: "Ne razumem pitanje.", ru: "Я не понимаю вопрос." },
      { sr: "Nikada nisam bio u Nišu.", ru: "Я никогда не был в Нише." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Dvostruka negacija (<b>niko ne..., ništa ne..., nikad ne...</b>) je <b>obavezna</b> — za razliku od engleskog, ovo je ustvari lakse za ruske govornike jer radi tačno kao u ruskom.`,
      `<b>Da li</b> i inverzija sa <b>li</b> su potpuno zamenljivi — izbor je stvar stila, ne gramatike.`,
      `<b>Koji/koja/koje</b> se slaže sa rodom imenice na koju se odnosi, kao pridev: "koji grad" (m.), "koja knjiga" (ž.), "koje selo" (s.).`,
      `Reč <b>šta</b> se koristi za stvari, a <b>ko</b> za ljude — kao rusko "что" i "кто".`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "ko", ru: "кто" },
      { sr: "šta", ru: "что" },
      { sr: "gde", ru: "где" },
      { sr: "kada", ru: "когда" },
      { sr: "zašto", ru: "почему" },
      { sr: "kako", ru: "как" },
      { sr: "koliko", ru: "сколько" },
      { sr: "koji / koja / koje", ru: "который / какой" },
      { sr: "niko", ru: "никто" },
      { sr: "ništa", ru: "ничего" },
      { sr: "nikad", ru: "никогда" },
      { sr: "znati", ru: "знать" },
      { sr: "razumeti", ru: "понимать" },
      { sr: "misliti", ru: "думать" },
      { sr: "hteti", ru: "хотеть" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A0).",
      textSr: `<p>— <span class="word" data-ru="Кто это?">Ko je to</span>?<br>
      — To je moj prijatelj Marko.<br>
      — <span class="word" data-ru="Где он живёт?">Gde on živi</span>?<br>
      — <span class="word" data-ru="Я не знаю точно.">Ne znam tačno</span>, ali mislim da živi u Nišu.<br>
      — <span class="word" data-ru="Ты говоришь по-русски?">Govoriš li ruski</span>?<br>
      — <span class="word" data-ru="Нет, ещё ничего не понимаю.">Ne, još ništa ne razumem</span>, ali učim!</p>`,
      comprehension: [
        {
          questionRu: "Знает ли говорящий точно, где живёт Марко?",
          options: ["Ne, ne zna tačno.", "Da, zna tačno.", "Marko ne zivi nigde."],
          correctIndex: 0
        },
        {
          questionRu: "Понимает ли говорящий русский (по диалогу)?",
          options: ["Ne, još ništa ne razume.", "Da, odlično govori.", "Ne znamo."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta znači 'ko'?", options: ["кто", "что", "где"], correct: 0 },
    { type: "mc", q: "Šta znači 'šta'?", options: ["что", "кто", "когда"], correct: 0 },
    { type: "mc", q: "Šta znači 'gde'?", options: ["где", "как", "почему"], correct: 0 },
    { type: "mc", q: "Šta znači 'zašto'?", options: ["почему", "сколько", "когда"], correct: 0 },
    { type: "mc", q: "Koja je druga varijanta pitanja 'Da li govoriš ruski?'", options: ["Govoriš li ruski?", "Ruski govoriš?", "Li govoriš ruski?"], correct: 0 },
    { type: "mc", q: "Kako prevodis 'Я не знаю'?", options: ["Ne znam.", "Znam ne.", "Nisam znam."], correct: 0 },
    { type: "mc", q: "Kako prevodis 'Никто не знает'?", options: ["Niko ne zna.", "Niko zna.", "Ne niko zna."], correct: 0 },
    { type: "mc", q: "Šta znači 'ništa'?", options: ["ничего", "никто", "никогда"], correct: 0 },
    { type: "mc", q: "Šta znači 'nikad'?", options: ["никогда", "ничего", "никто"], correct: 0 },
    { type: "mc", q: "Koja reč se slaže sa rodom imenice ('который')?", options: ["koji / koja / koje", "ko", "šta"], correct: 0 },
    { type: "mc", q: "Da li srpski koristi dvostruku negaciju kao ruski?", options: ["Da", "Ne", "Samo u pitanjima"], correct: 0 },
    { type: "mc", q: "Šta znači 'razumeti'?", options: ["понимать", "знать", "думать"], correct: 0 },
    { type: "fill", q: "Dopuni: ___ je to? (kto)", answer: "Ko", alt: ["ko"] },
    { type: "fill", q: "Dopuni negaciju: Ja ___ znam. (ne)", answer: "ne", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я ничего не понимаю.':", answer: "Ništa ne razumem.", alt: ["nista ne razumem"] },
    { type: "fill", q: "Prevedi na srpski 'Где ты живёшь?':", answer: "Gde živiš?", alt: ["gde zivis", "Gde zivis?"] },
    { type: "fill", q: "Napisi upitnu reč za 'сколько':", answer: "koliko", alt: [] },
    { type: "fill", q: "Napisi upitnu reč za 'когда':", answer: "kada", alt: [] },
    { type: "fill", q: "Preoblikuj sa 'li': Da li imaš vremena? →", answer: "Imaš li vremena?", alt: ["imas li vremena"] },
    { type: "fill", q: "Napisi negativnu zamenicu za 'никогда':", answer: "nikad", alt: [] }
  ]
};
