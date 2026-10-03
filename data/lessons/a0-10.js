window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-10"] = {
  slug: "a0-10",
  level: "A0",
  id: 10,
  titleSr: "Prezent — uvod u glagolske grupe",
  titleRu: "Настоящее время — введение в группы глаголов",

  intro: {
    sr: `Zadnja lekcija A0 nivoa! Danas učimo osnovne tipove prezenta i ponavljamo sve dosad naučeno.`,
    ru: `Это последний урок уровня A0. Вы познакомитесь с тремя основными моделями настоящего времени (презента) обычных глаголов и с несколькими очень частыми «неправильными» глаголами — <b>hteti</b> (хотеть), <b>ići</b> (идти), <b>moći</b> (мочь). В конце — краткое повторение всего уровня A0.`
  },

  grammar: {
    titleRu: "Prezent glagola",
    blocks: [
      {
        heading: "Tri osnovna obrasca prezenta",
        explanationRu: `Большинство сербских глаголов в настоящем времени следуют одной из трёх моделей окончаний. Важный совет: форма настоящего времени не всегда предсказуема по инфинитиву (как и в русском — ср. «писать» → «пишу», не «писаю»), поэтому полезно запоминать глагол сразу в двух формах: инфинитив + форма «я» (ja).`,
        table: {
          headers: ["Lice", "raditi (работать)", "gledati (смотреть)", "pisati (писать)"],
          rows: [
            ["ja", "radim", "gledam", "pišem"],
            ["ti", "radiš", "gledaš", "pišeš"],
            ["on/ona/ono", "radi", "gleda", "piše"],
            ["mi", "radimo", "gledamo", "pišemo"],
            ["vi", "radite", "gledate", "pišete"],
            ["oni/one/ona", "rade", "gledaju", "pišu"]
          ]
        },
        drill: {
          type: "fill",
          question: "Dopuni: Ja ___ domaći zadatak svaki dan. (raditi)",
          answer: "radim",
          alt: []
        }
      },
      {
        heading: "Česti 'nepravilni' glagoli: hteti, ići, moći",
        explanationRu: `Эти три глагола встречаются постоянно и стоит выучить их формы отдельно: <b>hteti</b> (хотеть — также вспомогательный глагол для будущего времени, которое мы изучим на A1), <b>ići</b> (идти/ехать), <b>moći</b> (мочь, быть способным).`,
        table: {
          headers: ["Lice", "hteti", "ići", "moći"],
          rows: [
            ["ja", "hoću", "idem", "mogu"],
            ["ti", "hoćeš", "ideš", "možeš"],
            ["on/ona/ono", "hoće", "ide", "može"],
            ["mi", "hoćemo", "idemo", "možemo"],
            ["vi", "hoćete", "idete", "možete"],
            ["oni/one/ona", "hoće", "idu", "mogu"]
          ]
        },
        examples: [
          { sr: "Hoću kafu, molim.", ru: "Я хочу кофе, пожалуйста." },
          { sr: "Idem kući.", ru: "Я иду домой." },
          { sr: "Mogu li da pomognem?", ru: "Могу я помочь?" }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'Я иду домой'?",
          options: ["Idem kući.", "Hoću kući.", "Mogu kući."],
          correctIndex: 0
        }
      },
      {
        heading: "Ponavljanje A0 — sve zajedno",
        explanationRu: `Вы уже умеете: представляться (<b>biti</b>, <b>zvati se</b>), говорить о том, что у вас есть (<b>imati</b>), описывать людей и предметы (род существительных, прилагательные, цвета), считать и говорить о времени, задавать вопросы и строить отрицание, и теперь — спрягать глаголы в настоящем времени. Это полный фундамент уровня A0!`,
        examples: [
          { sr: "Ja se zovem Ana, imam dvadeset pet godina i radim kao nastavnica.", ru: "Меня зовут Анна, мне двадцать пять лет, и я работаю учительницей." },
          { sr: "Da li imaš vremena? Hoću da pričamo.", ru: "У тебя есть время? Я хочу поговорить." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni celu rečenicu: Ja ___ (zvati se) Petar i ___ (imati) trideset godina.",
          answer: "se zovem",
          alt: ["zovem se", "se zovem i imam", "zovem se i imam"]
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod.",
    items: [
      { sr: "Gledam televiziju uveče.", ru: "Я смотрю телевизор по вечерам." },
      { sr: "Čitam knjigu.", ru: "Я читаю книгу." },
      { sr: "Slušam muziku.", ru: "Я слушаю музыку." },
      { sr: "Učim srpski jezik.", ru: "Я учу сербский язык." },
      { sr: "Volim kafu ujutru.", ru: "Я люблю кофе по утрам." },
      { sr: "Jedem ručak u podne.", ru: "Я ем обед в полдень." },
      { sr: "Pijem vodu.", ru: "Я пью воду." },
      { sr: "Igram fudbal sa prijateljima.", ru: "Я играю в футбол с друзьями." },
      { sr: "Hoćeš li da igraš?", ru: "Хочешь поиграть?" },
      { sr: "Mogu li da uđem?", ru: "Можно войти?" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Kad uciš novi glagol, odmah zapamti i njegov oblik za "ja" — to ti otkriva kojoj grupi prezenta pripada, isto kao sto bi u ruskom pamtio par glagola po vidu.`,
      `<b>Hteti</b> je kljucan jer se koristi i za "желание" i kao pomocni glagol za buduce vreme (Futur I) — to cemo učiti na A1 nivou.`,
      `<b>Moći</b> se često koristi sa "da" + prezent: "Mogu da dođem" (Я могу прийти) — ova "da + prezent" konstrukcija zamenjuje infinitiv u svakodnevnom govoru.`,
      `Cestitamo na zavrsetku A0 nivoa! Sledeci nivo (A1) uvodi padeže — temelj za mnogo precizniji srpski.`
    ]
  },

  vocab: {
    titleRu: "Reči iz ove lekcije",
    words: [
      { sr: "raditi", ru: "работать / делать" },
      { sr: "gledati", ru: "смотреть" },
      { sr: "pisati", ru: "писать" },
      { sr: "govoriti", ru: "говорить" },
      { sr: "slušati", ru: "слушать" },
      { sr: "čitati", ru: "читать" },
      { sr: "učiti", ru: "учить" },
      { sr: "voleti", ru: "любить" },
      { sr: "jesti", ru: "есть (кушать)" },
      { sr: "piti", ru: "пить" },
      { sr: "igrati", ru: "играть" },
      { sr: "hteti", ru: "хотеть" },
      { sr: "ići", ru: "идти / ехать" },
      { sr: "moći", ru: "мочь" },
      { sr: "svaki dan", ru: "каждый день" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A0) — dnevna rutina.",
      textSr: `<p>Svaki dan <span class="word" data-ru="я встаю">ustajem</span> u sedam sati. <span class="word" data-ru="Я пью кофе">Pijem kafu</span> i <span class="word" data-ru="читаю">čitam</span> vesti. Zatim <span class="word" data-ru="я иду">idem</span> na posao — <span class="word" data-ru="я работаю">radim</span> kao nastavnik. Uveče <span class="word" data-ru="я смотрю">gledam</span> film ili <span class="word" data-ru="слушаю">slušam</span> muziku. <span class="word" data-ru="Я хочу">Hoću</span> jednog dana da <span class="word" data-ru="говорить">govorim</span> srpski bez greske!</p>`,
      comprehension: [
        {
          questionRu: "В котором часу автор встаёт?",
          options: ["U sedam sati.", "U devet sati.", "U podne."],
          correctIndex: 0
        },
        {
          questionRu: "Кем работает автор?",
          options: ["Kao nastavnik.", "Kao lekar.", "Ne radi."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji je oblik glagola 'raditi' za 'ja'?", options: ["radim", "radiš", "radi"], correct: 0 },
    { type: "mc", q: "Koji je oblik glagola 'gledati' za 'mi'?", options: ["gledamo", "gledate", "gledaju"], correct: 0 },
    { type: "mc", q: "Koji je oblik glagola 'pisati' za 'oni'?", options: ["pišu", "pišem", "pišemo"], correct: 0 },
    { type: "mc", q: "Koji je oblik glagola 'hteti' za 'ja'?", options: ["hoću", "hoćeš", "hoće"], correct: 0 },
    { type: "mc", q: "Koji je oblik glagola 'ići' za 'ti'?", options: ["ideš", "idem", "ide"], correct: 0 },
    { type: "mc", q: "Koji je oblik glagola 'moći' za 'mi'?", options: ["možemo", "mogu", "možete"], correct: 0 },
    { type: "mc", q: "Šta znači 'Idem kući'?", options: ["Я иду домой.", "Я хочу кофе.", "Я могу помочь."], correct: 0 },
    { type: "mc", q: "Šta znači 'voleti'?", options: ["любить", "хотеть", "мочь"], correct: 0 },
    { type: "mc", q: "Šta znači 'učiti'?", options: ["учить", "играть", "писать"], correct: 0 },
    { type: "mc", q: "Koja konstrukcija zamenjuje infinitiv u govoru ('mogu da...')?", options: ["da + prezent", "da + infinitiv", "li + prezent"], correct: 0 },
    { type: "mc", q: "Šta znači 'svaki dan'?", options: ["каждый день", "сегодня", "вчера"], correct: 0 },
    { type: "mc", q: "Koji glagol je važan i za 'желание' i za buduce vreme?", options: ["hteti", "moći", "ići"], correct: 0 },
    { type: "fill", q: "Dopuni: Ona ___ knjigu svaki dan. (čitati)", answer: "čita", alt: ["čita"] },
    { type: "fill", q: "Dopuni: Mi ___ u školu. (ići)", answer: "idemo", alt: [] },
    { type: "fill", q: "Dopuni: Vi ___ da pomognete? (moći)", answer: "možete", alt: ["možete"] },
    { type: "fill", q: "Prevedi na srpski 'Я хочу кофе.':", answer: "Hoću kafu.", alt: ["hocu kafu"] },
    { type: "fill", q: "Napisi oblik glagola 'pisati' za 'ti':", answer: "pišeš", alt: ["pises"] },
    { type: "fill", q: "Napisi oblik glagola 'raditi' za 'on':", answer: "radi", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Могу я войти?':", answer: "Mogu li da uđem?", alt: ["mogu li da uđem"] },
    { type: "fill", q: "Napisi infinitiv glagola cija je forma za 'ja' — 'idem':", answer: "ići", alt: ["ici"] }
  ]
};
