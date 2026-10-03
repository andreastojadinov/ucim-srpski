window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-06"] = {
  slug: "a2-06",
  level: "A2",
  id: 6,
  titleSr: "Posao i profesije",
  titleRu: "Работа и профессии",

  intro: {
    sr: `Danas učimo nazive zanimanja i fraze za razgovor o poslu — korisno za intervjue i svakodnevni razgovor.`,
    ru: `Практичная лексическая тема: названия профессий (и их женские формы), и фразы для разговора о работе — то, что обязательно понадобится при трудоустройстве в Сербии.`
  },

  grammar: {
    titleRu: "Zanimanja i posao",
    blocks: [
      {
        heading: "Profesije — muški i ženski oblik",
        explanationRu: `Как и в русском (где всё чаще говорят «программистка», «врачиха» разговорно), в сербском у многих профессий есть отдельная женская форма — обычно с суффиксом <b>-ica, -ka, -kinja</b>. Некоторые более формальные/руководящие должности традиционно остаются в мужском роде для обоих полов, хотя это постепенно меняется.`,
        table: {
          headers: ["Muški rod", "Ženski rod", "Prevod"],
          rows: [
            ["učitelj", "učiteljica", "учитель"],
            ["lekar", "lekarka", "врач"],
            ["inženjer", "inženjerka", "инженер"],
            ["prodavac", "prodavačica", "продавец"],
            ["programer", "programerka", "программист"],
            ["advokat", "advokatkinja", "адвокат"],
            ["profesor", "profesorka", "преподаватель"]
          ]
        },
        drill: {
          type: "choice",
          question: "Koji je ženski oblik reči 'lekar'?",
          options: ["lekarka", "lekarica", "lekarkinja"],
          correctIndex: 0
        }
      },
      {
        heading: "RADITI KAO i BAVITI SE",
        explanationRu: `Чтобы сказать, кем вы работаете, используется <b>raditi kao</b> + именительный падеж («работать как учитель»), или <b>baviti se</b> + instrumental («заниматься чем-то») — это точная параллель русскому «заниматься программированием» (творительный падеж)!`,
        examples: [
          { sr: "Radim kao inženjer.", ru: "Я работаю инженером." },
          { sr: "Bavim se programiranjem.", ru: "Я занимаюсь программированием." },
          { sr: "Ona se bavi marketingom.", ru: "Она занимается маркетингом." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Bavim se programiranj___. (instrumental)",
          answer: "em",
          alt: ["programiranjem"]
        }
      },
      {
        heading: "Razgovor o poslu — korisne fraze",
        explanationRu: `Fraze koje ce ti trebati pri trazenju posla i na razgovoru za posao (intervjuu).`,
        examples: [
          { sr: "Šta si po zanimanju?", ru: "Кто ты по профессии?" },
          { sr: "Tražim posao u IT sektoru.", ru: "Я ищу работу в сфере IT." },
          { sr: "Imam intervju za posao sutra.", ru: "У меня завтра собеседование." },
          { sr: "Koliko godina iskustva imate?", ru: "Сколько лет у вас опыта?" }
        ],
        drill: {
          type: "choice",
          question: "Kako pitas 'Кто ты по профессии?'",
          options: ["Šta si po zanimanju?", "Gde radiš?", "Koliko zarađuješ?"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Radim u velikoj kompaniji.", ru: "Я работаю в большой компании." },
      { sr: "Moj šef je vrlo zahtevan.", ru: "Мой начальник очень требовательный." },
      { sr: "Imam dobrog kolegu na poslu.", ru: "У меня хороший коллега на работе." },
      { sr: "Plata nije loša.", ru: "Зарплата неплохая." },
      { sr: "Radno vreme je od devet do pet.", ru: "Рабочее время с девяти до пяти." },
      { sr: "Tražim novi posao.", ru: "Я ищу новую работу." },
      { sr: "Imam petogodišnje iskustvo.", ru: "У меня пятилетний опыт." },
      { sr: "Ona je direktorka firme.", ru: "Она директор фирмы." },
      { sr: "Radimo na daljinu.", ru: "Мы работаем удалённо." },
      { sr: "Dobio sam otkaz.", ru: "Меня уволили." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Как и в русском, женские формы профессий — предмет изменений в языке: в официальных документах (резюме, договор) часто используется мужская форма, а в речи всё больше используют женские формы.`,
      `<b>Baviti se</b> + творительный падеж — более изысканный/формальный способ сказать, чем ты занимаешься, а <b>raditi kao</b> + именительный падеж — проще и чаще в повседневной речи.`,
      `Фраза <b>Šta si po zanimanju?</b> — стандартный способ спросить кого-то о профессии — отвечают «Ja sam + профессия» (именительный падеж).`,
      `В деловом контексте «radno iskustvo» (опыт работы) и «CV» (резюме/биография) — ключевые понятия для поиска работы в Сербии.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "zanimanje", ru: "профессия" },
      { sr: "posao", ru: "работа" },
      { sr: "iskustvo", ru: "опыт" },
      { sr: "plata", ru: "зарплата" },
      { sr: "kolega / koleginica", ru: "коллега" },
      { sr: "šef / šefica", ru: "начальник / начальница" },
      { sr: "intervju", ru: "собеседование" },
      { sr: "kompanija / firma", ru: "компания / фирма" },
      { sr: "radno vreme", ru: "рабочее время" },
      { sr: "otkaz", ru: "увольнение" },
      { sr: "zaposliti se", ru: "устроиться на работу" },
      { sr: "na daljinu", ru: "удалённо" },
      { sr: "biografija (CV)", ru: "резюме" },
      { sr: "programiranje", ru: "программирование" },
      { sr: "tržište rada", ru: "рынок труда" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A2).",
      textSr: `<p>— <span class="word" data-ru="Кто ты по профессии?">Šta si po zanimanju</span>?<br>
      — <span class="word" data-ru="Я работаю инженером.">Radim kao inženjer</span> u jednoj IT kompaniji.<br>
      — Koliko dugo radiš tamo?<br>
      — <span class="word" data-ru="У меня три года опыта.">Imam tri godine iskustva</span> tamo. <span class="word" data-ru="Я занимаюсь программированием.">Bavim se programiranjem</span> i radim na daljinu.<br>
      — Zvuči odlično! <span class="word" data-ru="А зарплата хорошая?">A da li je plata dobra</span>?<br>
      — Da, nisam se žalio.</p>`,
      comprehension: [
        {
          questionRu: "Кем работает собеседник?",
          options: ["Kao inženjer u IT kompaniji.", "Kao lekar.", "Kao nastavnik."],
          correctIndex: 0
        },
        {
          questionRu: "Как он работает — в офисе или удалённо?",
          options: ["Na daljinu.", "U kancelariji.", "Na pijaci."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta znači 'zanimanje'?", options: ["профессия", "компания", "зарплата"], correct: 0 },
    { type: "mc", q: "Koji je ženski oblik reči 'profesor'?", options: ["profesorka", "profesorica", "profesorkinja"], correct: 0 },
    { type: "mc", q: "Kako se kaže 'работать инженером'?", options: ["raditi kao inženjer", "raditi inženjera", "baviti inženjerom"], correct: 0 },
    { type: "mc", q: "Koji padež ide uz 'baviti se'?", options: ["instrumental", "akuzativ", "genitiv"], correct: 0 },
    { type: "mc", q: "Šta znači 'kolega'?", options: ["коллега", "начальник", "клиент"], correct: 0 },
    { type: "mc", q: "Šta znači 'plata'?", options: ["зарплата", "работа", "компания"], correct: 0 },
    { type: "mc", q: "Šta znači 'otkaz'?", options: ["увольнение", "повышение", "отпуск"], correct: 0 },
    { type: "mc", q: "Šta znači 'intervju'?", options: ["собеседование", "встреча друзей", "экзамен"], correct: 0 },
    { type: "mc", q: "Šta znači 'na daljinu'?", options: ["удалённо", "в офисе", "за границей"], correct: 0 },
    { type: "mc", q: "Šta znači 'zaposliti se'?", options: ["устроиться на работу", "уволиться", "уйти в отпуск"], correct: 0 },
    { type: "mc", q: "Koji je muški oblik reči 'advokatkinja'?", options: ["advokat", "advokatko", "advokatac"], correct: 0 },
    { type: "mc", q: "Šta znači 'iskustvo'?", options: ["опыт", "образование", "способность"], correct: 0 },
    { type: "fill", q: "Dopuni: Radim ___ programer. (kao)", answer: "kao", alt: [] },
    { type: "fill", q: "Dopuni: Bavim se marketing___. (instrumental)", answer: "om", alt: ["marketingom"] },
    { type: "fill", q: "Prevedi na srpski 'Кто ты по профессии?':", answer: "Šta si po zanimanju?", alt: ["šta si po zanimanju"] },
    { type: "fill", q: "Prevedi na srpski 'У меня пятилетний опыт.':", answer: "Imam petogodišnje iskustvo.", alt: ["imam petogodisnje iskustvo"] },
    { type: "fill", q: "Napisi ženski oblik reči 'učitelj':", answer: "učiteljica", alt: ["uciteljica"] },
    { type: "fill", q: "Napisi reč za 'начальник':", answer: "šef", alt: ["sef"] },
    { type: "fill", q: "Napisi reč za 'рабочее время':", answer: "radno vreme", alt: [] },
    { type: "fill", q: "Napisi reč za 'собеседование':", answer: "intervju", alt: [] }
  ]
};
