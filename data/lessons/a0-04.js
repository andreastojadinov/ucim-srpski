window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-04"] = {
  slug: "a0-04",
  level: "A0",
  id: 4,
  titleSr: "Rod i broj imenica",
  titleRu: "Род и число существительных",

  intro: {
    sr: `Danas učimo rodove imenica (muški, ženski, srednji) i kako se gradi množina.`,
    ru: `Как и в русском, в сербском у существительных есть три рода — мужской, женский и средний — и форма рода почти всегда видна по окончанию слова. Это очень похоже на русский, поэтому интуиция часто срабатывает, но есть и важные различия, особенно во множественном числе.`
  },

  grammar: {
    titleRu: "Rod i množina",
    blocks: [
      {
        heading: "Rod imenica — kako prepoznati",
        explanationRu: `Правило почти как в русском: слова, оканчивающиеся на согласную — мужской род; на <b>-a</b> — женский род; на <b>-o</b> или <b>-e</b> — средний род. Есть исключения (например, <i>auto</i> — мужской род, хотя оканчивается на -o), но в большинстве случаев правило работает.`,
        table: {
          headers: ["Rod", "Tipičan završetak", "Primeri"],
          rows: [
            ["Muški (м.р.)", "suglasnik", "grad, sto, čovek, prijatelj"],
            ["Ženski (ж.р.)", "-a", "žena, kuća, knjiga, sestra"],
            ["Srednji (с.р.)", "-o / -e", "selo, pismo, more, dete"]
          ]
        },
        drill: {
          type: "choice",
          question: "Kog je roda reč 'knjiga'?",
          options: ["Ženski rod", "Muški rod", "Srednji rod"],
          correctIndex: 0
        }
      },
      {
        heading: "Množina imenica — osnovna pravila",
        explanationRu: `Множественное число образуется в зависимости от рода. Женский род на <b>-a</b> меняет окончание на <b>-e</b>. Средний род на <b>-o/-e</b> меняет окончание на <b>-a</b>. Мужской род обычно добавляет <b>-i</b>, а короткие (часто односложные) слова нередко вставляют <b>-ov-/-ev-</b> перед <b>-i</b>.`,
        table: {
          headers: ["Rod", "Jednina", "Množina"],
          rows: [
            ["Muški (bez dodatka)", "student", "studenti"],
            ["Muški (sa -ov-)", "grad", "gradovi"],
            ["Ženski", "žena", "žene"],
            ["Ženski", "kuća", "kuće"],
            ["Srednji", "selo", "sela"],
            ["Srednji", "pismo", "pisma"]
          ]
        },
        drill: {
          type: "fill",
          question: "Množina reči 'kuća' je ___.",
          answer: "kuće",
          alt: ["kuce"]
        }
      },
      {
        heading: "Izuzetak: dete → deca",
        explanationRu: `Слово <b>dete</b> (ребёнок, средний род, ед. ч.) образует множественное число неправильной формой <b>deca</b> — грамматически она ведёт себя как собирательное существительное женского рода единственного числа, хотя по смыслу означает «дети» (множественное число). Запомните её просто как исключение — она очень частотна.`,
        examples: [
          { sr: "Imam dvoje dece.", ru: "У меня двое детей." },
          { sr: "Deca su u školi.", ru: "Дети в школе." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'дети' na srpskom?",
          options: ["deca", "deteta", "detu"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод и род.",
    items: [
      { sr: "grad (m.) → gradovi", ru: "город → города" },
      { sr: "sto (m.) → stolovi", ru: "стол → столы" },
      { sr: "žena (ž.) → žene", ru: "женщина → женщины" },
      { sr: "sestra (ž.) → sestre", ru: "сестра → сёстры" },
      { sr: "selo (s.) → sela", ru: "деревня → деревни" },
      { sr: "pismo (s.) → pisma", ru: "письмо → письма" },
      { sr: "auto (m., izuzetak) → auti", ru: "машина → машины (муж. род, хоть и на -о)" },
      { sr: "knjiga (ž.) → knjige", ru: "книга → книги" },
      { sr: "prijatelj (m.) → prijatelji", ru: "друг → друзья" },
      { sr: "dete (s., izuzetak) → deca", ru: "ребёнок → дети" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Правило «<b>-a</b> = женский, <b>-o/-e</b> = средний, согласная = мужской» верно в большинстве случаев, но всегда учи род вместе с новым словом — как и в русском, есть исключения (например, <i>auto</i>, <i>radio</i> мужского рода).`,
      `Род существительных часто <b>не совпадает</b> между сербским и русским для одного и того же слова — проверка — полезная привычка при изучении новой лексики.`,
      `<b>Dete → deca</b> — классическое исключение, которое все учат рано — запомни его как особое, неправильное слово.`,
      `У существительных мужского рода односложные слова (sto, grad, sin) часто получают вставку <b>-ov-</b> или <b>-ev-</b> во множественном числе: sto → stolovi, sin → sinovi.`
    ]
  },

  vocab: {
    titleRu: "Существительные с указанием рода",
    words: [
      { sr: "grad (m.)", ru: "город" },
      { sr: "sto (m.)", ru: "стол" },
      { sr: "auto (m.)", ru: "машина" },
      { sr: "čovek (m.)", ru: "человек" },
      { sr: "prijatelj (m.)", ru: "друг" },
      { sr: "žena (ž.)", ru: "женщина" },
      { sr: "kuća (ž.)", ru: "дом" },
      { sr: "knjiga (ž.)", ru: "книга" },
      { sr: "sestra (ž.)", ru: "сестра" },
      { sr: "škola (ž.)", ru: "школа" },
      { sr: "selo (s.)", ru: "деревня" },
      { sr: "more (s.)", ru: "море" },
      { sr: "dete (s.)", ru: "ребёнок" },
      { sr: "pismo (s.)", ru: "письмо" },
      { sr: "posao (m.)", ru: "работа" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A0).",
      textSr: `<p>Ovo je moja <span class="word" data-ru="дом (ж.р.)">kuća</span>. U kući živi moja <span class="word" data-ru="семья">porodica</span>: majka, otac i <span class="word" data-ru="дети">dvoje dece</span>. Imamo i <span class="word" data-ru="машина (муж. род)">auto</span>. Blizu kuce je <span class="word" data-ru="школа">škola</span>, a malo dalje je <span class="word" data-ru="город">grad</span> sa mnogo <span class="word" data-ru="дома (мн.ч.)">kuća</span> i <span class="word" data-ru="магазинов">prodavnica</span>.</p>`,
      comprehension: [
        {
          questionRu: "Какого рода слово 'auto' в этом тексте?",
          options: ["Muškog roda.", "Ženskog roda.", "Srednjeg roda."],
          correctIndex: 0
        },
        {
          questionRu: "Что находится рядом с домом по тексту?",
          options: ["Škola.", "More.", "Posao."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kog je roda reč 'žena'?", options: ["Ženski", "Muški", "Srednji"], correct: 0 },
    { type: "mc", q: "Kog je roda reč 'selo'?", options: ["Srednji", "Muški", "Ženski"], correct: 0 },
    { type: "mc", q: "Kog je roda reč 'grad'?", options: ["Muški", "Ženski", "Srednji"], correct: 0 },
    { type: "mc", q: "Koji je tipičan završetak za ženski rod?", options: ["-a", "-o", "suglasnik"], correct: 0 },
    { type: "mc", q: "Koji je tipičan završetak za srednji rod?", options: ["-o / -e", "-a", "suglasnik"], correct: 0 },
    { type: "mc", q: "Koja je množina reči 'žena'?", options: ["žene", "žena", "ženama"], correct: 0 },
    { type: "mc", q: "Koja je množina reči 'selo'?", options: ["sela", "seli", "selovi"], correct: 0 },
    { type: "mc", q: "Koja je množina reči 'grad'?", options: ["gradovi", "gradi", "grade"], correct: 0 },
    { type: "mc", q: "Koja je množina reči 'dete'?", options: ["deca", "deteta", "deti"], correct: 0 },
    { type: "mc", q: "Koji rod ima reč 'auto' iako se završava na -o?", options: ["Muški (izuzetak)", "Srednji", "Ženski"], correct: 0 },
    { type: "mc", q: "Šta znači 'kuća'?", options: ["дом", "школа", "город"], correct: 0 },
    { type: "mc", q: "Šta znači 'prijatelj'?", options: ["друг", "враг", "сосед"], correct: 0 },
    { type: "mc", q: "Koja je množina reči 'knjiga'?", options: ["knjige", "knjiga", "knjigi"], correct: 0 },
    { type: "fill", q: "Dopuni množinu: sto → stol___ (dodaj umetak i nastavak)", answer: "ovi", alt: ["stolovi"], explain: "sto → stolovi." },
    { type: "fill", q: "Napisi množinu reči 'pismo':", answer: "pisma", alt: [] },
    { type: "fill", q: "Napisi množinu reči 'sestra':", answer: "sestre", alt: [] },
    { type: "fill", q: "Napisi jedninu reči 'deca' (standardni oblik koji se uči, iako je gramaticki poseban):", answer: "dete", alt: [] },
    { type: "fill", q: "Napisi rod reči 'knjiga' jednom reči (muški/ženski/srednji):", answer: "ženski", alt: ["ženski"], explain: "" },
    { type: "fill", q: "Prevedi na srpski 'ребёнок':", answer: "dete", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'город':", answer: "grad", alt: [] }
  ]
};
