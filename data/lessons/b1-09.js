window.LESSONS = window.LESSONS || {};
window.LESSONS["b1-09"] = {
  slug: "b1-09",
  level: "B1",
  id: 9,
  titleSr: "Pisanje CV-a i motivacionog pisma",
  titleRu: "Составление резюме и мотивационного письма",

  intro: {
    sr: "Danas učimo kako da napišeš CV i motivaciono pismo na srpskom — ključno za traženje posla.",
    ru: "Это прямое продолжение урока A2-10 о формальной переписке. Сегодня — конкретные инструменты для поиска работы: структура резюме и мотивационного письма."
  },

  grammar: {
    titleRu: "CV i motivaciono pismo",
    blocks: [
      {
        heading: "Struktura CV-a",
        explanationRu: "Стандартная структура резюме в Сербии (часто в формате Europass).",
        table: {
          headers: ["Deo CV-a", "Prevod"],
          rows: [
            ["Lični podaci", "Личные данные"],
            ["Radno iskustvo", "Опыт работы"],
            ["Obrazovanje", "Образование"],
            ["Veštine", "Навыки"],
            ["Znanje jezika", "Знание языков"]
          ]
        },
        drill: {
          type: "choice",
          question: "Kako se na srpskom kaže 'опыт работы'?",
          options: ["radno iskustvo", "lični podaci", "znanje jezika"],
          correctIndex: 0
        }
      },
      {
        heading: "Opisivanje iskustva — glagoli u CV-u",
        explanationRu: "В резюме опыт описывается перфектом, обычно от первого лица, с глаголами действия.",
        examples: [
          { sr: "Vodio sam tim od pet ljudi.", ru: "Я руководил командой из пяти человек." },
          { sr: "Razvio sam novu strategiju prodaje.", ru: "Я разработал новую стратегию продаж." },
          { sr: "Upravljao sam budžetom od 50.000 evra.", ru: "Я управлял бюджетом в 50 000 евро." },
          { sr: "Implementirao sam novi sistem.", ru: "Я внедрил новую систему." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: ___ sam tim od deset ljudi. (voditi)",
          answer: "Vodio",
          alt: ["vodio", "Vodila", "vodila"]
        }
      },
      {
        heading: "Motivaciono pismo — struktura",
        explanationRu: "Мотивационное письмо обычно состоит из трёх частей: формальное обращение (из урока A2-10), объяснение, почему ты подходишь на позицию, и вежливое завершение.",
        examples: [
          { sr: "Poštovani, obraćam se povodom konkursa za poziciju...", ru: "Уважаемые, обращаюсь по поводу вакансии на должность..." },
          { sr: "Verujem da moje iskustvo odgovara ovoj poziciji.", ru: "Я верю, что мой опыт подходит для этой позиции." },
          { sr: "Rado bih razgovarao/la o ovoj prilici.", ru: "Я бы с радостью обсудил/а эту возможность." }
        ],
        drill: {
          type: "choice",
          question: "Šta je obično treći (završni) deo motivacionog pisma?",
          options: ["Uljudno zatvaranje i poziv na razgovor", "Lista hobija", "Istorija firme"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Diplomirao sam na Ekonomskom fakultetu.", ru: "Я окончил экономический факультет." },
      { sr: "Imam sertifikat iz projektnog menadžmenta.", ru: "У меня есть сертификат по управлению проектами." },
      { sr: "Tečno govorim engleski i ruski.", ru: "Я свободно говорю на английском и русском." },
      { sr: "Priložene su moje preporuke.", ru: "Прилагаются мои рекомендации." },
      { sr: "Posedujem odlične komunikacione veštine.", ru: "Я обладаю отличными коммуникативными навыками." },
      { sr: "Radio sam u međunarodnom okruženju.", ru: "Я работал в международной среде." },
      { sr: "Zainteresovan/a sam za ovu poziciju.", ru: "Я заинтересован/а в этой позиции." },
      { sr: "Spreman/na sam da počnem odmah.", ru: "Я готов/а начать немедленно." },
      { sr: "Moje kvalifikacije odgovaraju zahtevima.", ru: "Мои квалификации соответствуют требованиям." },
      { sr: "Hvala na razmatranju moje prijave.", ru: "Спасибо за рассмотрение моей заявки." }
    ]
  },

  tips: {
    titleRu: "Советы",
    items: [
      "Резюме должно быть кратким — в Сербии, как и в большинстве Европы, предпочитают резюме на 1-2 страницы, а не длинное перечисление всего.",
      "Используй глаголы действия в перфекте (<b>vodio sam, razvio sam, upravljao sam</b>) вместо пассивных описаний — это звучит увереннее.",
      "Формат <b>Europass CV</b> широко распространён и бесплатен онлайн — хорошая отправная точка, если не знаешь, с чего начать.",
      "В мотивационном письме избегай простого повторения резюме — объясни, <i>почему</i> именно эта компания и позиция тебе интересны."
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "radno iskustvo", ru: "опыт работы" },
      { sr: "obrazovanje", ru: "образование" },
      { sr: "veštine", ru: "навыки" },
      { sr: "kvalifikacije", ru: "квалификации" },
      { sr: "preporuka", ru: "рекомендация" },
      { sr: "diploma", ru: "диплом" },
      { sr: "sertifikat", ru: "сертификат" },
      { sr: "prijava", ru: "заявка" },
      { sr: "pozicija", ru: "должность, позиция" },
      { sr: "voditi tim", ru: "руководить командой" },
      { sr: "razviti", ru: "разработать" },
      { sr: "upravljati", ru: "управлять" },
      { sr: "implementirati", ru: "внедрить" },
      { sr: "tečno (govoriti)", ru: "свободно (говорить)" },
      { sr: "okruženje", ru: "среда, окружение" }
    ],
    reading: {
      sourceNote: "Originalan primer odlomka motivacionog pisma napisan za ovaj kurs (nivo B1).",
      textSr: "<p>Poštovani,<br>Obraćam se povodom konkursa za poziciju menadžera projekta. <span class=\"word\" data-ru=\"У меня пять лет опыта\">Imam pet godina iskustva</span> u IT sektoru, gde sam <span class=\"word\" data-ru=\"руководил командами\">vodio timove</span> od deset i više ljudi. <span class=\"word\" data-ru=\"Верю, что мой опыт\">Verujem da moje iskustvo</span> odgovara zahtevima ove pozicije. <span class=\"word\" data-ru=\"Был бы рад\">Rado bih</span> razgovarao o ovoj prilici.<br>S poštovanjem,<br>Ivan Petrović</p>",
      comprehension: [
        {
          questionRu: "На какую должность претендует автор письма?",
          options: ["Menadžer projekta.", "Programer.", "Direktor."],
          correctIndex: 0
        },
        {
          questionRu: "Сколько лет опыта у автора?",
          options: ["Pet godina.", "Deset godina.", "Dve godine."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kako se kaže 'опыт работы'?", options: ["radno iskustvo", "lični podaci", "obrazovanje"], correct: 0 },
    { type: "mc", q: "Kako se kaže 'навыки'?", options: ["veštine", "kvalifikacije", "preporuke"], correct: 0 },
    { type: "mc", q: "Koje vreme se koristi za opis iskustva u CV-u?", options: ["perfekat", "futur", "imperativ"], correct: 0 },
    { type: "mc", q: "Šta znači 'voditi tim'?", options: ["руководить командой", "присоединиться к команде", "покинуть команду"], correct: 0 },
    { type: "mc", q: "Šta znači 'razviti' (u CV-u)?", options: ["разработать", "уничтожить", "купить"], correct: 0 },
    { type: "mc", q: "Šta znači 'implementirati'?", options: ["внедрить", "отменить", "забыть"], correct: 0 },
    { type: "mc", q: "Šta znači 'sertifikat'?", options: ["сертификат", "диплом университета", "резюме"], correct: 0 },
    { type: "mc", q: "Šta znači 'preporuka'?", options: ["рекомендация", "жалоба", "вопрос"], correct: 0 },
    { type: "mc", q: "Koja je preporučena dužina CV-a?", options: ["1-2 strane", "5 strana", "10 strana"], correct: 0 },
    { type: "mc", q: "Šta znači 'prijava' (za posao)?", options: ["заявка", "отказ", "собеседование"], correct: 0 },
    { type: "mc", q: "Šta znači 'tečno govoriti jezik'?", options: ["свободно говорить на языке", "немного понимать язык", "не знать язык"], correct: 0 },
    { type: "mc", q: "Šta treba izbegavati u motivacionom pismu?", options: ["prosto ponavljanje CV-a", "objašnjenje motivacije", "uljudno zatvaranje"], correct: 0 },
    { type: "fill", q: "Dopuni: ___ sam novu strategiju. (razviti, muški rod)", answer: "Razvio", alt: ["razvio"] },
    { type: "fill", q: "Dopuni: Imam ___ iz projektnog menadžmenta. (sertifikat)", answer: "sertifikat", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я руководил командой из пяти человек.':", answer: "Vodio sam tim od pet ljudi.", alt: ["vodio sam tim od pet ljudi"] },
    { type: "fill", q: "Prevedi na srpski 'Спасибо за рассмотрение моей заявки.':", answer: "Hvala na razmatranju moje prijave.", alt: ["hvala na razmatranju moje prijave"] },
    { type: "fill", q: "Napiši reč za 'квалификации':", answer: "kvalifikacije", alt: [] },
    { type: "fill", q: "Napiši reč za 'среда, окружение':", answer: "okruženje", alt: ["okruzenje"] },
    { type: "fill", q: "Napiši reč za 'должность':", answer: "pozicija", alt: [] },
    { type: "fill", q: "Napiši reč za 'управлять':", answer: "upravljati", alt: [] }
  ]
};
