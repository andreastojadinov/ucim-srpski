window.LESSONS = window.LESSONS || {};
window.LESSONS["b1-02"] = {
  slug: "b1-02",
  level: "B1",
  id: 2,
  titleSr: "Glagolski prilozi i participi",
  titleRu: "Деепричастия и причастия",

  intro: {
    sr: "Danas učimo glagolske priloge — oblike koji opisuju radnju koja se dešava uz drugu radnju.",
    ru: "Сербские <b>glagolski prilozi</b> — это практически то же самое, что русские деепричастия! Есть деепричастие несовершенного вида (читая, работая) и деепричастие совершенного вида (написав, придя) — и логика образования очень похожа."
  },

  grammar: {
    titleRu: "Glagolski prilozi",
    blocks: [
      {
        heading: "Sadašnji glagolski prilog (-ći)",
        explanationRu: "Образуется от основы 3-го лица множественного числа настоящего времени + <b>-ći</b>. Соответствует русскому деепричастию несовершенного вида («читая», «работая») — описывает действие, происходящее одновременно с другим.",
        table: {
          headers: ["Infinitiv", "Prezent (oni)", "Glagolski prilog"],
          rows: [
            ["čitati", "čitaju", "čitajući (читая)"],
            ["raditi", "rade", "radeći (работая)"],
            ["gledati", "gledaju", "gledajući (смотря)"],
            ["pisati", "pišu", "pišući (пиша)"]
          ]
        },
        examples: [
          { sr: "Čitajući knjigu, pio je kafu.", ru: "Читая книгу, он пил кофе." },
          { sr: "Radeći marljivo, postigla je uspeh.", ru: "Работая усердно, она добилась успеха." }
        ],
        drill: {
          type: "fill",
          question: "Napravi glagolski prilog od 'gledati' (prezent: gledaju):",
          answer: "gledajući",
          alt: []
        }
      },
      {
        heading: "Prošli glagolski prilog (-vši)",
        explanationRu: "Образуется от основы l-причастия + <b>-vši</b> (или просто <b>-ši</b>). Соответствует русскому деепричастию совершенного вида («написав», «придя»). Используется редко, в основном в письменном и литературном стиле.",
        table: {
          headers: ["Infinitiv", "Glagolski prilog (prošli)"],
          rows: [
            ["napisati", "napisavši (написав)"],
            ["doći", "došavši (придя)"],
            ["pročitati", "pročitavši (прочитав)"]
          ]
        },
        examples: [
          { sr: "Napisavši pismo, otišla je na poštu.", ru: "Написав письмо, она пошла на почту." }
        ],
        drill: {
          type: "choice",
          question: "Koji oblik odgovara ruskom 'написав'?",
          options: ["napisavši", "pisajući", "napisao"],
          correctIndex: 0
        }
      },
      {
        heading: "Upotreba — pisani naspram govornog jezika",
        explanationRu: "Glagolski prilozi се чаще встречаются в письменной, формальной речи (книги, статьи). В повседневной устной речи сербы чаще используют обычное предложение с союзом <b>dok</b> (пока/в то время как) вместо деепричастия.",
        examples: [
          { sr: "Dok je čitao knjigu, pio je kafu. (govorno)", ru: "Пока он читал книгу, пил кофе. (разговорный вариант)" },
          { sr: "Čitajući knjigu, pio je kafu. (pisano)", ru: "Читая книгу, он пил кофе. (письменный вариант)" }
        ],
        drill: {
          type: "choice",
          question: "Koji stil je tipičniji za svakodnevni govor?",
          options: ["Dok je čitao, pio je kafu.", "Čitajući, pio je kafu.", "Oba su podjednako česta u govoru."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Smejući se, ispričala je priču.", ru: "Смеясь, она рассказала историю." },
      { sr: "Vozeći auto, slušao je muziku.", ru: "Ведя машину, он слушал музыку." },
      { sr: "Učeći svaki dan, napredovala je brzo.", ru: "Учась каждый день, она быстро продвигалась." },
      { sr: "Hodajući ulicom, sreo je prijatelja.", ru: "Идя по улице, он встретил друга." },
      { sr: "Završivši posao, otišao je kući.", ru: "Закончив работу, он пошёл домой." },
      { sr: "Pevajući, deca su se igrala.", ru: "Напевая, дети играли." },
      { sr: "Razmišljajući o problemu, našao je rešenje.", ru: "Размышляя над проблемой, он нашёл решение." },
      { sr: "Stigavši kući, odmah je legla.", ru: "Придя домой, она сразу легла." },
      { sr: "Putujući po Srbiji, naučila je mnogo.", ru: "Путешествуя по Сербии, она многому научилась." },
      { sr: "Gledajući film, zaspao je.", ru: "Смотря фильм, он уснул." }
    ]
  },

  tips: {
    titleRu: "Советы",
    items: [
      "Думайте о <b>glagolski prilog</b> как о прямом аналоге русского деепричастия — образование очень похоже, только другие окончания.",
      "Форма на <b>-ći</b> (несовершенный вид) встречается заметно чаще, чем форма на <b>-vši</b> (совершенный вид), которая звучит довольно книжно.",
      "В устной речи часто проще и естественнее использовать союз <b>dok</b> + обычный глагол, чем деепричастие — используйте деепричастия в основном при чтении и письме.",
      "Деепричастие в сербском <b>не изменяется</b> ни по родам, ни по числам — это одна неизменяемая форма, в отличие от трпног придева из прошлого урока."
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "čitajući", ru: "читая" },
      { sr: "radeći", ru: "работая" },
      { sr: "gledajući", ru: "смотря" },
      { sr: "pišući", ru: "пиша" },
      { sr: "smejući se", ru: "смеясь" },
      { sr: "hodajući", ru: "идя (пешком)" },
      { sr: "napisavši", ru: "написав" },
      { sr: "došavši", ru: "придя" },
      { sr: "završivši", ru: "закончив" },
      { sr: "razmišljati", ru: "размышлять" },
      { sr: "napredovati", ru: "продвигаться" },
      { sr: "rešenje", ru: "решение" },
      { sr: "marljivo", ru: "усердно" },
      { sr: "sresti", ru: "встретить" },
      { sr: "zaspati", ru: "уснуть" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo B1).",
      textSr: "<p><span class=\"word\" data-ru=\"Идя на работу\">Idući na posao</span>, Ana je svaki dan slušala podkaste. <span class=\"word\" data-ru=\"Слушая их\">Slušajući ih</span>, naučila je mnogo novih reči. Jednog dana, <span class=\"word\" data-ru=\"выйдя из автобуса\">izašavši iz autobusa</span>, srela je staru prijateljicu. <span class=\"word\" data-ru=\"Разговаривая\">Razgovarajući</span>, shvatile su da rade u istoj zgradi.</p>",
      comprehension: [
        {
          questionRu: "Что Ана слушала по пути на работу?",
          options: ["Podkaste.", "Muziku.", "Vesti."],
          correctIndex: 0
        },
        {
          questionRu: "Кого она встретила, выйдя из автобуса?",
          options: ["Staru prijateljicu.", "Kolegu.", "Sestru."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Od čega se gradi sadašnji glagolski prilog?", options: ["prezent (oni) + ći", "infinitiv + ći", "particip + ći"], correct: 0 },
    { type: "mc", q: "Koji je glagolski prilog od 'čitati' (prezent: čitaju)?", options: ["čitajući", "čitavši", "čitao"], correct: 0 },
    { type: "mc", q: "Koji je glagolski prilog od 'raditi' (prezent: rade)?", options: ["radeći", "radivši", "radio"], correct: 0 },
    { type: "mc", q: "Od čega se gradi prošli glagolski prilog?", options: ["l-particip + vši", "prezent + ći", "infinitiv + o"], correct: 0 },
    { type: "mc", q: "Koji oblik odgovara ruskom 'придя'?", options: ["došavši", "dolazeći", "došao"], correct: 0 },
    { type: "mc", q: "Koji je stil tipičniji za svakodnevni govor?", options: ["rečenica sa 'dok'", "glagolski prilog", "oba podjednako"], correct: 0 },
    { type: "mc", q: "Da li se glagolski prilog menja po rodu i broju?", options: ["Ne, nepromenljiv je", "Da, kao pridev", "Samo po broju"], correct: 0 },
    { type: "mc", q: "Šta znači 'smejući se'?", options: ["смеясь", "плача", "крича"], correct: 0 },
    { type: "mc", q: "Šta znači 'razmišljati'?", options: ["размышлять", "забывать", "вспоминать"], correct: 0 },
    { type: "mc", q: "Šta znači 'napredovati'?", options: ["продвигаться", "останавливаться", "возвращаться"], correct: 0 },
    { type: "mc", q: "Koji oblik je knjiski/formalniji?", options: ["prošli glagolski prilog (-vši)", "sadašnji glagolski prilog (-ći)", "oba su podjednako česta"], correct: 0 },
    { type: "mc", q: "Šta znači 'zaspati'?", options: ["уснуть", "проснуться", "устать"], correct: 0 },
    { type: "fill", q: "Napravi glagolski prilog od 'pisati' (prezent: pišu):", answer: "pišući", alt: [] },
    { type: "fill", q: "Napravi prošli glagolski prilog od 'pročitati':", answer: "pročitavši", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Читая книгу, он пил кофе.':", answer: "Čitajući knjigu, pio je kafu.", alt: ["citajuci knjigu, pio je kafu"] },
    { type: "fill", q: "Prevedi na srpski 'Закончив работу, он пошёл домой.':", answer: "Završivši posao, otišao je kući.", alt: ["zavrsivsi posao, otisao je kuci"] },
    { type: "fill", q: "Napiši glagolski prilog od 'gledati':", answer: "gledajući", alt: [] },
    { type: "fill", q: "Napiši reč za 'решение':", answer: "rešenje", alt: ["resenje"] },
    { type: "fill", q: "Napiši reč za 'встретить':", answer: "sresti", alt: [] },
    { type: "fill", q: "Napiši govorni ekvivalent za 'Čitajući knjigu...' koristeci veznik 'dok':", answer: "Dok je čitao knjigu", alt: ["dok je citao knjigu"] }
  ]
};
