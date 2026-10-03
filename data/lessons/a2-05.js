window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-05"] = {
  slug: "a2-05",
  level: "A2",
  id: 5,
  titleSr: "Glagolski vid — svršeni i nesvršeni",
  titleRu: "Глагольный вид — совершенный и несовершенный",

  intro: {
    sr: `Danas učimo glagolski vid — temu koju ćete, kao ruski govornik, savladati brže nego bilo ko drugi!`,
    ru: `Отличные новости: сербский <b>glagolski vid</b> — это <b>практически то же самое</b>, что русский глагольный вид! <i>Nesvršeni</i> вид = несовершенный (процесс, повторение), <i>svršeni</i> вид = совершенный (законченное действие с результатом). Логика и даже многие приставки совпадают с русскими почти один в один.`
  },

  grammar: {
    titleRu: "Nesvršeni i svršeni vid",
    blocks: [
      {
        heading: "Parovi glagola — nesvršeni / svršeni",
        explanationRu: `Как и в русском, большинство глаголов образуют пару: несовершенный вид (процесс) и совершенный вид (результат), часто через приставку.`,
        table: {
          headers: ["Nesvršeni", "Svršeni", "Prevod"],
          rows: [
            ["pisati", "napisati", "писать / написать"],
            ["čitati", "pročitati", "читать / прочитать"],
            ["raditi", "uraditi", "делать / сделать"],
            ["graditi", "sagraditi", "строить / построить"],
            ["gledati", "pogledati", "смотреть / посмотреть"],
            ["jesti", "pojesti", "есть / съесть"]
          ]
        },
        drill: {
          type: "choice",
          question: "Koji glagol je svršenog vida (završena radnja)?",
          options: ["napisati", "pisati", "pisanje"],
          correctIndex: 0
        }
      },
      {
        heading: "Kada nesvršeni, kada svršeni",
        explanationRu: `Употребление полностью совпадает с русской логикой: <b>nesvršeni</b> — для процесса, повторяющихся и общих действий; <b>svršeni</b> — для одного законченного действия с акцентом на результат.`,
        examples: [
          { sr: "Svaki dan čitam novine. (nesvršeni — navika)", ru: "Каждый день я читаю газету. (привычка)" },
          { sr: "Pročitao sam novine jutros. (svršeni — završeno)", ru: "Я прочитал газету утром. (закончил)" },
          { sr: "Pisao sam pismo ceo sat. (nesvršeni — proces)", ru: "Я писал письмо целый час. (процесс)" },
          { sr: "Napisao sam pismo. (svršeni — gotovo)", ru: "Я написал письмо. (готово)" }
        ],
        drill: {
          type: "choice",
          question: "Koja rečenica naglašava da je radnja ZAVRŠENA?",
          options: ["Pročitao sam knjigu.", "Čitao sam knjigu.", "Čitam knjigu."],
          correctIndex: 0
        }
      },
      {
        heading: "Vid i prefiksi",
        explanationRu: `Многие приставки, образующие совершенный вид, совпадают по смыслу с русскими: <b>na-</b> (написать), <b>pro-</b> (прочитать), <b>po-</b> (посмотреть), <b>sa-</b> (построить), <b>u-</b> (сделать).`,
        examples: [
          { sr: "učiti → naučiti", ru: "учить → научить(ся)" },
          { sr: "piti → popiti", ru: "пить → выпить" },
          { sr: "praviti → napraviti", ru: "делать → сделать (приготовить)" }
        ],
        drill: {
          type: "fill",
          question: "Napravi svršeni vid glagola 'učiti' dodavanjem prefiksa 'na-':",
          answer: "naučiti",
          alt: []
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Gledam film svako veče. (nesvršeni)", ru: "Я смотрю фильм каждый вечер." },
      { sr: "Pogledao sam taj film juče. (svršeni)", ru: "Я посмотрел этот фильм вчера." },
      { sr: "Radim na projektu već mesec dana.", ru: "Я работаю над проектом уже месяц." },
      { sr: "Uradio sam domaći zadatak.", ru: "Я сделал домашнее задание." },
      { sr: "Svake godine grade nove kuće.", ru: "Каждый год строят новые дома." },
      { sr: "Sagradili su kuću za godinu dana.", ru: "Они построили дом за год." },
      { sr: "Jela sam voće svaki dan.", ru: "Я ела фрукты каждый день." },
      { sr: "Pojela sam celu jabuku.", ru: "Я съела целое яблоко." },
      { sr: "Pišem knjigu već dve godine.", ru: "Я пишу книгу уже два года." },
      { sr: "Napisaću ti poruku večeras.", ru: "Я напишу тебе сообщение вечером." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Это, вероятно, <b>самая лёгкая</b> грамматическая тема для вас как для русскоговорящего — думайте о виде точно так же, как в русском.`,
      `Всегда учи обоих партнёров пары вместе (pisati/napisati), точно как учил бы видовые пары в русском.`,
      `Глаголы совершенного вида обычно <b>не имеют</b> презента со значением «сейчас» — их форма «презента» (napišem, pročitam) чаще всего имеет будущее или условное значение, точно как русское «напишу», которое грамматически выглядит как настоящее время, а означает будущее.`,
      `Императив и будущее время чаще всего сочетаются с совершенным видом, когда описывают одно конкретное действие: «Napiši mi poruku!» (один раз, конкретно), но «Piši mi često!» (повторяющееся действие, несовершенный вид).`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "pisati / napisati", ru: "писать / написать" },
      { sr: "čitati / pročitati", ru: "читать / прочитать" },
      { sr: "raditi / uraditi", ru: "делать / сделать" },
      { sr: "graditi / sagraditi", ru: "строить / построить" },
      { sr: "gledati / pogledati", ru: "смотреть / посмотреть" },
      { sr: "jesti / pojesti", ru: "есть / съесть" },
      { sr: "učiti / naučiti", ru: "учить / научить" },
      { sr: "piti / popiti", ru: "пить / выпить" },
      { sr: "trajati", ru: "длиться" },
      { sr: "završiti", ru: "закончить" },
      { sr: "ponavljati", ru: "повторять" },
      { sr: "jednom", ru: "однажды, один раз" },
      { sr: "uvek", ru: "всегда" },
      { sr: "svaki put", ru: "каждый раз" },
      { sr: "već", ru: "уже" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A2).",
      textSr: `<p>Svako jutro <span class="word" data-ru="я пью (несов.)">pijem</span> kafu i <span class="word" data-ru="читаю (несов.)">čitam</span> vesti — to je moja navika. Jutros sam <span class="word" data-ru="выпил (сов.)">popio</span> kafu brzo i <span class="word" data-ru="прочитал (сов.)">pročitao</span> samo jedan članak, jer sam žurio na posao. Vikendom volim da <span class="word" data-ru="пишу (несов.)">pišem</span> dnevnik, a juče sam konačno <span class="word" data-ru="написал (сов.)">napisao</span> dugačak tekst o svom putovanju.</p>`,
      comprehension: [
        {
          questionRu: "Что обычно делает автор по утрам?",
          options: ["Pije kafu i čita vesti.", "Piše dnevnik.", "Gleda film."],
          correctIndex: 0
        },
        {
          questionRu: "Что автор написал вчера?",
          options: ["Dugačak tekst o putovanju.", "Pismo prijatelju.", "Domaći zadatak."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji vid opisuje proces ili naviku?", options: ["nesvršeni", "svršeni", "oba podjednako"], correct: 0 },
    { type: "mc", q: "Koji vid naglašava završen rezultat?", options: ["svršeni", "nesvršeni", "nijedan"], correct: 0 },
    { type: "mc", q: "Koji je svršeni par glagola 'pisati'?", options: ["napisati", "pisanje", "pisao"], correct: 0 },
    { type: "mc", q: "Koji je svršeni par glagola 'čitati'?", options: ["pročitati", "čitao", "čitanje"], correct: 0 },
    { type: "mc", q: "Koja rečenica znači 'Я читаю газету каждый день' (navika)?", options: ["Svaki dan čitam novine.", "Pročitao sam novine.", "Čitaću novine."], correct: 0 },
    { type: "mc", q: "Koja rečenica znači 'Я прочитал газету' (završeno)?", options: ["Pročitao sam novine.", "Čitam novine.", "Čitao sam novine ceo dan."], correct: 0 },
    { type: "mc", q: "Koji prefiks često gradi svršeni vid (kao rusko на-)?", options: ["na-", "ne-", "sa-mo"], correct: 0 },
    { type: "mc", q: "Šta znači 'trajati'?", options: ["длиться", "заканчиваться", "начинаться"], correct: 0 },
    { type: "mc", q: "Šta znači 'ponavljati'?", options: ["повторять", "забывать", "учить"], correct: 0 },
    { type: "mc", q: "Da li svrseni glagoli obično imaju prezent sa znacenjem 'sada'?", options: ["Ne, obično znači buduce", "Da, uvek", "Samo kod nekih glagola"], correct: 0 },
    { type: "mc", q: "Šta znači 'pojesti'?", options: ["съесть", "есть (процесс)", "готовить"], correct: 0 },
    { type: "mc", q: "Koji glagol je nesvrsenog vida?", options: ["graditi", "sagraditi", "izgraditi"], correct: 0 },
    { type: "fill", q: "Napravi svršeni par glagola 'raditi':", answer: "uraditi", alt: [] },
    { type: "fill", q: "Napravi svršeni par glagola 'gledati':", answer: "pogledati", alt: [] },
    { type: "fill", q: "Napravi svršeni par glagola 'piti':", answer: "popiti", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я построил дом.' (svrseni, muški rod):", answer: "Sagradio sam kuću.", alt: ["sagradio sam kucu"] },
    { type: "fill", q: "Prevedi na srpski 'Я читаю книгу каждый день.' (nesvrseni):", answer: "Čitam knjigu svaki dan.", alt: ["čitam knjigu svaki dan"] },
    { type: "fill", q: "Napisi nesvrseni par glagola 'naučiti':", answer: "učiti", alt: [] },
    { type: "fill", q: "Napisi svrseni par glagola 'jesti':", answer: "pojesti", alt: [] },
    { type: "fill", q: "Napisi reč za 'уже' (vremenski prilog):", answer: "već", alt: ["vec"] }
  ]
};
