window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-03"] = {
  slug: "a2-03",
  level: "A2",
  id: 3,
  titleSr: "Futur II i kondicional",
  titleRu: "Футур II и условное наклонение",

  intro: {
    sr: `Danas učimo futur II (za zavisne rečenice o budućnosti) i kondicional (za "bih" izjave).`,
    ru: `Два важных новых оборота: <b>futur II</b> — особое будущее время, которое используется в придаточных предложениях после «если/когда» (похоже на то, как русский в таких предложениях использует совершенный вид будущего времени); и <b>kondicional</b> — условное наклонение («я бы сделал»), которое также незаменимо для вежливых просьб.`
  },

  grammar: {
    titleRu: "Futur II i kondicional",
    blocks: [
      {
        heading: "Futur II — BUDEM + particip",
        explanationRu: `Futur II используется в придаточных предложениях о будущем — после <b>ako</b> (если), <b>kad</b> (когда), <b>čim</b> (как только). Образуется формой <b>budem, budeš, bude, budemo, budete, budu</b> + l-причастие. Обратите внимание: там, где по-русски в таких предложениях встаёт обычное будущее совершенного вида («Когда я <u>приеду</u>...»), сербский требует именно эту особую форму, а не обычный futur I.`,
        table: {
          headers: ["Lice", "BUDEM + particip"],
          rows: [
            ["ja", "budem radio/-la"],
            ["ti", "budeš radio/-la"],
            ["on/ona/ono", "bude radio/-la/-lo"],
            ["mi", "budemo radili/-le"],
            ["vi", "budete radili/-le"],
            ["oni/one/ona", "budu radili/-le/-la"]
          ]
        },
        examples: [
          { sr: "Kad budem imao vremena, javiću ti se.", ru: "Когда у меня будет время, я тебе позвоню." },
          { sr: "Ako budeš učio, položićeš ispit.", ru: "Если будешь учиться, сдашь экзамен." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Kad ___ gotov, javiću se. (biti → futur II, ja, muški rod)",
          answer: "budem",
          alt: []
        }
      },
      {
        heading: "Kondicional — BIH + particip",
        explanationRu: `Kondicional (русское «я бы») строится клитикой <b>bih, bi, bi, bismo, biste, bi</b> + l-причастие. Используется для гипотетических ситуаций и пожеланий — совсем как русское «бы».`,
        table: {
          headers: ["Lice", "BIH + particip"],
          rows: [
            ["ja", "radio/-la bih"],
            ["ti", "radio/-la bi"],
            ["on/ona/ono", "radio/-la/-lo bi"],
            ["mi", "radili/-le bismo"],
            ["vi", "radili/-le biste"],
            ["oni/one/ona", "radili/-le/-la bi"]
          ]
        },
        examples: [
          { sr: "Da sam bogat, kupio bih kuću.", ru: "Если бы я был богат, я купил бы дом." },
          { sr: "Voleo bih da putujem više.", ru: "Я хотел бы путешествовать больше." },
          { sr: "Ne bih brinuo na tvom mestu.", ru: "Я бы не волновался на твоём месте." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'Я хотел бы кофе' (muški rod)?",
          options: ["Voleo bih kafu.", "Voleo sam kafu.", "Voleću kafu."],
          correctIndex: 0
        }
      },
      {
        heading: "Kondicional u uljudnim molbama",
        explanationRu: `Как и русское «не могли бы вы...», сербский kondicional — главный способ вежливо попросить о чём-то.`,
        examples: [
          { sr: "Da li biste mi pomogli?", ru: "Не могли бы вы мне помочь?" },
          { sr: "Mogao bih li da naručim?", ru: "Можно я закажу? (вежливо)" },
          { sr: "Želeo bih da postavim pitanje.", ru: "Я хотел бы задать вопрос." }
        ],
        drill: {
          type: "choice",
          question: "Koja fraza je najuljudnija molba za pomoc?",
          options: ["Da li biste mi pomogli?", "Pomozi mi!", "Pomažeš mi?"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Čim budem stigao, zovem te.", ru: "Как только приеду, позвоню тебе." },
      { sr: "Ako bude padala kiša, ostajemo kući.", ru: "Если пойдёт дождь, останемся дома." },
      { sr: "Kupio bih taj auto da imam novca.", ru: "Я бы купил эту машину, если бы были деньги." },
      { sr: "Da sam ti, ne bih brinuo.", ru: "На твоём месте я бы не волновался." },
      { sr: "Mogli biste mi reći koliko je sati?", ru: "Не могли бы вы сказать который час?" },
      { sr: "Voleli bismo da posetimo Beograd.", ru: "Мы хотели бы посетить Белград." },
      { sr: "Da li bi mogao da mi pomogneš?", ru: "Не мог бы ты мне помочь?" },
      { sr: "Kad budemo imali vremena, putovaćemo.", ru: "Когда у нас будет время, мы поедем путешествовать." },
      { sr: "Bilo bi lepo da dođeš.", ru: "Было бы прекрасно, если бы ты пришёл." },
      { sr: "Ne bih to uradio na tvom mestu.", ru: "Я бы так не поступил на твоём месте." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Futur II почти <b>всегда</b> встречается после слов <b>ako, kad, čim, dok</b>, когда речь о будущем — вне этих предложений используется редко.`,
      `Кондиционал <b>bih/bi/bismo/biste</b> — это клитика, и, как «sam/si/je», не ставится на первое место в предложении: «Voleo bih» естественнее, чем «Bih voleo».`,
      `Для вежливых просьб кондиционал гораздо мягче императива — «Mogao bih li?» звучит намного вежливее, чем «Daj mi!»`,
      `Частое выражение <b>«Da sam na tvom mestu»</b> (на твоём месте) всегда идёт с кондиционалом во второй части предложения — полезная фраза для советов.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "ako", ru: "если" },
      { sr: "kad", ru: "когда" },
      { sr: "čim", ru: "как только" },
      { sr: "dok", ru: "пока" },
      { sr: "bogat", ru: "богатый" },
      { sr: "položiti ispit", ru: "сдать экзамен" },
      { sr: "javiti se", ru: "дать о себе знать, позвонить" },
      { sr: "brinuti", ru: "волноваться" },
      { sr: "mesto (na tvom mestu)", ru: "место (на твоём месте)" },
      { sr: "uljudno", ru: "вежливо" },
      { sr: "pitanje", ru: "вопрос" },
      { sr: "kiša", ru: "дождь" },
      { sr: "posetiti", ru: "посетить" },
      { sr: "novac", ru: "деньги" },
      { sr: "ostajati", ru: "оставаться" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A2).",
      textSr: `<p>Razmišljam o budućnosti. <span class="word" data-ru="Если бы у меня были деньги">Da sam imao novca</span>, <span class="word" data-ru="я бы путешествовал">putovao bih</span> po celom svetu. <span class="word" data-ru="Как только у меня будет время">Čim budem imao vremena</span>, posetiću Italiju. <span class="word" data-ru="Хотел бы я">Voleo bih</span> da naučim i italijanski jezik. <span class="word" data-ru="Если будешь учиться">Ako budeš učio</span> svaki dan, kažu da je to lako.</p>`,
      comprehension: [
        {
          questionRu: "Что автор сделал бы, если бы были деньги?",
          options: ["Putovao bi po svetu.", "Kupio bi kuću.", "Ostao bi kod kuće."],
          correctIndex: 0
        },
        {
          questionRu: "Какой язык хотел бы выучить автор?",
          options: ["Italijanski.", "Ruski.", "Francuski."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kada se koristi futur II?", options: ["u zavisnim rečenicama posle ako/kad/čim", "uvek umesto futura I", "samo u pitanjima"], correct: 0 },
    { type: "mc", q: "Od čega se gradi futur II?", options: ["budem + particip", "ću + infinitiv", "bih + particip"], correct: 0 },
    { type: "mc", q: "Od čega se gradi kondicional?", options: ["bih + particip", "budem + particip", "sam + particip"], correct: 0 },
    { type: "mc", q: "Šta znači 'Voleo bih kafu'?", options: ["Я хотел бы кофе.", "Я люблю кофе.", "Я пью кофе."], correct: 0 },
    { type: "mc", q: "Koja rečenica je uljudna molba?", options: ["Da li biste mi pomogli?", "Pomozi!", "Pomažeš li mi?"], correct: 0 },
    { type: "mc", q: "Šta znači 'ako'?", options: ["если", "когда", "пока"], correct: 0 },
    { type: "mc", q: "Šta znači 'čim'?", options: ["как только", "если", "пока"], correct: 0 },
    { type: "mc", q: "Šta znači 'brinuti'?", options: ["волноваться", "радоваться", "спать"], correct: 0 },
    { type: "mc", q: "Šta znači 'bogat'?", options: ["богатый", "бедный", "умный"], correct: 0 },
    { type: "mc", q: "Koji oblik glagola biti ide uz futur II za 'ti'?", options: ["budeš", "bićeš", "bi"], correct: 0 },
    { type: "mc", q: "Koji oblik ide uz kondicional za 'mi'?", options: ["bismo", "budemo", "ćemo"], correct: 0 },
    { type: "mc", q: "Šta znači 'položiti ispit'?", options: ["сдать экзамен", "провалить экзамен", "написать работу"], correct: 0 },
    { type: "fill", q: "Dopuni: Ako ___ vremena, doći ću. (budem, futur II)", answer: "budem imao", alt: ["budem imala"] },
    { type: "fill", q: "Dopuni: Voleo ___ da putujem. (bih)", answer: "bih", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Не могли бы вы мне помочь?':", answer: "Da li biste mi pomogli?", alt: ["da li biste mi pomogli"] },
    { type: "fill", q: "Prevedi na srpski 'Как только приеду, позвоню.':", answer: "Čim budem stigao, zovem te.", alt: ["cim budem stigao"] },
    { type: "fill", q: "Napisi oblik kondicionala za 'oni' (bi):", answer: "bi", alt: [] },
    { type: "fill", q: "Napisi oblik futura II glagola biti za 'mi':", answer: "budemo", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Было бы прекрасно.':", answer: "Bilo bi lepo.", alt: ["bilo bi lepo"] },
    { type: "fill", q: "Napisi reč za 'как только':", answer: "čim", alt: ["cim"] }
  ]
};
