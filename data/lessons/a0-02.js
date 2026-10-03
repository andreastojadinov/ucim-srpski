window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-02"] = {
  slug: "a0-02",
  level: "A0",
  id: 2,
  titleSr: "Glagol BITI i lične zamenice",
  titleRu: "Глагол «быть» и личные местоимения",

  intro: {
    sr: `Danas učimo najvazniji glagol u srpskom jeziku — BITI (быть) — i lične zamenice.`,
    ru: `Глагол <b>biti</b> («быть») — самый частотный глагол сербского языка: он нужен почти в каждом предложении о себе и о других («Я — ...», «Ты — ...», «Мы из ...»). В этом уроке вы выучите личные местоимения и полное спряжение <b>biti</b> в настоящем времени, включая отрицательную форму.`
  },

  grammar: {
    titleRu: "Zamenice i glagol biti",
    blocks: [
      {
        heading: "Licne zamenice",
        explanationRu: `В отличие от русского, в сербском множественное число «они» имеет три формы в зависимости от грамматического рода группы: <b>oni</b> (мужской род / смешанная группа), <b>one</b> (женский род), <b>ona</b> (средний род — редко для людей). Пока достаточно запомнить <b>oni</b> как основной вариант. Также заметьте: <b>vi</b> — это и «вы» (множественное число), и уважительное «Вы» к одному человеку, совсем как в русском.`,
        table: {
          headers: ["Zamenica", "Prevod"],
          rows: [
            ["ja", "я"],
            ["ti", "ты"],
            ["on", "он"],
            ["ona", "она"],
            ["ono", "оно"],
            ["mi", "мы"],
            ["vi", "вы / Вы (формально)"],
            ["oni / one / ona", "они (м.р. / ж.р. / ср.р.)"]
          ]
        },
        drill: {
          type: "choice",
          question: "Koja zamenica znači 'ты'?",
          options: ["ti", "vi", "on"],
          correctIndex: 0
        }
      },
      {
        heading: "Glagol BITI — potvrdan oblik",
        explanationRu: `Эти короткие формы глагола <b>biti</b> — клитики: они обычно "опираются" на предыдущее слово и, как правило, не ставятся первым словом в предложении (кроме особых случаев). Есть также полные, "ударные" формы — <b>jesam, jesi, jeste, jesmo, jeste, jesu</b> — которые используются для акцента или в коротких ответах: "Jesi li umoran? — Jesam." (Ты устал? — Да, устал.)`,
        table: {
          headers: ["Zamenica", "BITI (kratko)", "BITI (naglaseno)"],
          rows: [
            ["ja", "sam", "jesam"],
            ["ti", "si", "jesi"],
            ["on / ona / ono", "je", "jeste"],
            ["mi", "smo", "jesmo"],
            ["vi", "ste", "jeste"],
            ["oni / one / ona", "su", "jesu"]
          ]
        },
        examples: [
          { sr: "Ja sam Ana.", ru: "Я — Анна." },
          { sr: "Ti si dobar prijatelj.", ru: "Ты хороший друг." },
          { sr: "On je učitelj.", ru: "Он учитель." },
          { sr: "Mi smo iz Rusije.", ru: "Мы из России." },
          { sr: "Vi ste veoma ljubazni.", ru: "Вы очень любезны." },
          { sr: "Oni su studenti.", ru: "Они студенты." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Ja ___ iz Moskve.",
          answer: "sam",
          alt: []
        }
      },
      {
        heading: "Glagol BITI — odrečan oblik (NISAM)",
        explanationRu: `Отрицательная форма образуется слитным словом <b>ni-</b> + личная форма: <b>nisam, nisi, nije, nismo, niste, nisu</b>. В отличие от утвердительной формы, отрицательная форма <i>может</i> стоять в начале предложения.`,
        table: {
          headers: ["Zamenica", "BITI (odrečno)"],
          rows: [
            ["ja", "nisam"],
            ["ti", "nisi"],
            ["on / ona / ono", "nije"],
            ["mi", "nismo"],
            ["vi", "niste"],
            ["oni / one / ona", "nisu"]
          ]
        },
        examples: [
          { sr: "Nisam umoran.", ru: "Я не устал." },
          { sr: "On nije ovde.", ru: "Его здесь нет." },
          { sr: "Nismo iz Beograda.", ru: "Мы не из Белграда." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'Я не устал' (muški rod)?",
          options: ["Nisam umoran.", "Sam umoran.", "Nisi umoran."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Ja sam dobro.", ru: "Я в порядке / Мне хорошо." },
      { sr: "Ti si moj prijatelj.", ru: "Ты мой друг." },
      { sr: "On je iz Beograda.", ru: "Он из Белграда." },
      { sr: "Ona je lekar.", ru: "Она врач." },
      { sr: "Mi smo kod kuće.", ru: "Мы дома." },
      { sr: "Vi ste novi ovde?", ru: "Вы здесь новенький / новенькие?" },
      { sr: "Oni su na poslu.", ru: "Они на работе." },
      { sr: "Nisam gladan.", ru: "Я не голоден." },
      { sr: "Nije skupo.", ru: "Это не дорого." },
      { sr: "Jesi li siguran?", ru: "Ты уверен? (наглашена форма)" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Краткие формы (<b>sam, si, je, smo, ste, su</b>) почти никогда не начинают предложение — поэтому «Ja sam Ana», а не «Sam Ana». У отрицательной формы (<b>nisam</b> и т.д.) такого правила нет — она может стоять в начале.`,
      `В вопросах форма «jeste»/«jesam» используется для коротких утвердительных ответов: «Da li si umoran? — Jesam.» (Да, устал.) — похоже на русское «Да, это так.»`,
      `Местоимение <b>vi</b> используй, когда обращаешься к незнакомому или старшему человеку формально — точно как русское формальное «Вы».`,
      `Различие oni / one / ona зависит от рода группы, о которой идёт речь — пока запомни <b>oni</b> как самый частый, «нейтральный» выбор, если не уверен.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "ja", ru: "я" },
      { sr: "ti", ru: "ты" },
      { sr: "on / ona / ono", ru: "он / она / оно" },
      { sr: "mi", ru: "мы" },
      { sr: "vi", ru: "вы" },
      { sr: "oni / one / ona", ru: "они" },
      { sr: "student / studentkinja", ru: "студент / студентка" },
      { sr: "nastavnik / nastavnica", ru: "преподаватель" },
      { sr: "lekar / lekarka", ru: "врач" },
      { sr: "zemlja", ru: "страна" },
      { sr: "Rusija", ru: "Россия" },
      { sr: "Srbija", ru: "Сербия" },
      { sr: "odakle", ru: "откуда" },
      { sr: "umoran / umorna", ru: "усталый / усталая" },
      { sr: "gladan / gladna", ru: "голодный / голодная" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A0).",
      textSr: `<p>— Zdravo! Ja sam <span class="word" data-ru="Виктор">Viktor</span>. <span class="word" data-ru="Я из России.">Ja sam iz Rusije</span>.<br>
      — Ćao, Viktore! Ja sam Milica, i ja sam <span class="word" data-ru="студентка">studentkinja</span>.<br>
      — <span class="word" data-ru="Вы студентка? Я тоже!">Vi ste studentkinja? I ja sam student</span>!<br>
      — Odlicno! <span class="word" data-ru="Мы оба студенты.">Mi smo oba studenti</span>. Odakle si ti tačno?<br>
      — Ja sam iz Moskve, a sada sam ovde, u Beogradu.</p>`,
      comprehension: [
        {
          questionRu: "Откуда Виктор?",
          options: ["Iz Rusije, iz Moskve.", "Iz Srbije.", "Ne znamo."],
          correctIndex: 0
        },
        {
          questionRu: "Кем является Милица?",
          options: ["Studentkinja.", "Lekarka.", "Nastavnica."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta znači zamenica 'ti'?", options: ["ты", "вы", "он"], correct: 0 },
    { type: "mc", q: "Koja zamenica znači 'мы'?", options: ["mi", "vi", "oni"], correct: 0 },
    { type: "mc", q: "Kako se kaže 'я' na srpskom?", options: ["ja", "ti", "on"], correct: 0 },
    { type: "mc", q: "Koji oblik glagola BITI ide uz 'ja'?", options: ["sam", "si", "je"], correct: 0 },
    { type: "mc", q: "Koji oblik glagola BITI ide uz 'on/ona/ono'?", options: ["je", "sam", "su"], correct: 0 },
    { type: "mc", q: "Koji oblik glagola BITI ide uz 'mi'?", options: ["smo", "ste", "su"], correct: 0 },
    { type: "mc", q: "Koji je odrečan oblik za 'ja'?", options: ["nisam", "nisi", "nije"], correct: 0 },
    { type: "mc", q: "Kako prevodis 'On je lekar.'?", options: ["Он врач.", "Она врач.", "Мы врачи."], correct: 0 },
    { type: "mc", q: "Kako prevodis 'Mi smo iz Rusije.'?", options: ["Мы из России.", "Я из России.", "Вы из России."], correct: 0 },
    { type: "mc", q: "Koji oblik je 'naglasen' (emfaticki) oblik za 'ti'?", options: ["jesi", "si", "ste"], correct: 0 },
    { type: "mc", q: "Koja rečenica je tačno negirana?", options: ["Nisam umoran.", "Ne sam umoran.", "Sam nisam umoran."], correct: 0 },
    { type: "mc", q: "Šta znači 'odakle'?", options: ["откуда", "куда", "где"], correct: 0 },
    { type: "mc", q: "Koja zamenica se koristi za formalno 'Вы' jednoj osobi?", options: ["vi", "ti", "oni"], correct: 0 },
    { type: "mc", q: "Šta znači 'studentkinja'?", options: ["студентка", "преподаватель", "врач"], correct: 0 },
    { type: "fill", q: "Dopuni: Mi ___ studenti. (biti)", answer: "smo", alt: [], explain: "Mi smo = Мы есть." },
    { type: "fill", q: "Dopuni: Vi ___ veoma ljubazni. (biti)", answer: "ste", alt: [] },
    { type: "fill", q: "Dopuni odrečno: On ___ ovde. (nije)", answer: "nije", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'я не голоден' (muški rod):", answer: "nisam gladan", alt: ["Nisam gladan"], explain: "" },
    { type: "fill", q: "Dopuni: Ja ___ Ana. (biti, potvrdno)", answer: "sam", alt: [] },
    { type: "fill", q: "Napisi zamenicu za 'они' (muški rod / mesovita grupa):", answer: "oni", alt: [] }
  ]
};
