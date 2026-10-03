window.LESSONS = window.LESSONS || {};
window.LESSONS["b1-05"] = {
  slug: "b1-05",
  level: "B1",
  id: 5,
  titleSr: "Poslovna komunikacija",
  titleRu: "Деловое общение",

  intro: {
    sr: "Danas učimo fraze za sastanke, prezentacije i pregovore — svakodnevni jezik kancelarije.",
    ru: "Этот урок — набор готовых фраз для реальной рабочей обстановки: встречи, презентации, переговоры. Грамматика уже знакома — акцент на словарном запасе и устойчивых выражениях."
  },

  grammar: {
    titleRu: "Poslovne fraze",
    blocks: [
      {
        heading: "Sastanci i dogovori",
        explanationRu: "Основные фразы для организации встреч.",
        examples: [
          { sr: "Zakažimo sastanak za sredu.", ru: "Давайте назначим встречу на среду." },
          { sr: "Kada vam odgovara?", ru: "Когда вам удобно?" },
          { sr: "Predlažem da se vidimo u deset.", ru: "Предлагаю встретиться в десять." },
          { sr: "Možemo li pomeriti sastanak za petak?", ru: "Можем ли мы перенести встречу на пятницу?" }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: ___ vam odgovara sutra? (kada)",
          answer: "Kada",
          alt: ["kada"]
        }
      },
      {
        heading: "Prezentacije i izveštavanje",
        explanationRu: "Fraze za predstavljanje informacija kolegama ili klijentima.",
        examples: [
          { sr: "Danas ću predstaviti rezultate projekta.", ru: "Сегодня я представлю результаты проекта." },
          { sr: "Kao što možete videti na slajdu...", ru: "Как вы можете видеть на слайде..." },
          { sr: "Rezultati pokazuju pozitivan trend.", ru: "Результаты показывают положительную тенденцию." },
          { sr: "Imate li pitanja?", ru: "У вас есть вопросы?" }
        ],
        drill: {
          type: "choice",
          question: "Kako pitaš publiku na kraju prezentacije?",
          options: ["Imate li pitanja?", "Jeste li razumeli?", "Da li ste zainteresovani?"],
          correctIndex: 0
        }
      },
      {
        heading: "Pregovori",
        explanationRu: "Фразы для переговоров и обсуждения условий.",
        examples: [
          { sr: "Predlažemo sledeće uslove.", ru: "Мы предлагаем следующие условия." },
          { sr: "Da li možemo postići dogovor?", ru: "Можем ли мы достичь соглашения?" },
          { sr: "Prihvatamo vašu ponudu.", ru: "Мы принимаем ваше предложение." },
          { sr: "Nažalost, ne možemo se složiti sa tim.", ru: "К сожалению, мы не можем с этим согласиться." }
        ],
        drill: {
          type: "choice",
          question: "Kako kažeš 'Мы принимаем ваше предложение'?",
          options: ["Prihvatamo vašu ponudu.", "Odbijamo vašu ponudu.", "Razmatramo vašu ponudu."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Molim vas, pošaljite mi izveštaj do petka.", ru: "Пожалуйста, пришлите мне отчёт до пятницы." },
      { sr: "Rok za projekat je sledeća nedelja.", ru: "Срок проекта — следующая неделя." },
      { sr: "Budžet je veći nego što smo planirali.", ru: "Бюджет больше, чем мы планировали." },
      { sr: "Potreban nam je dodatni sastanak.", ru: "Нам нужна дополнительная встреча." },
      { sr: "Klijent je zadovoljan rezultatima.", ru: "Клиент доволен результатами." },
      { sr: "Moramo revidirati plan.", ru: "Нам нужно пересмотреть план." },
      { sr: "Hvala na vašem vremenu.", ru: "Спасибо за ваше время." },
      { sr: "Pošaljite mi podsetnik, molim vas.", ru: "Отправьте мне напоминание, пожалуйста." },
      { sr: "Ugovor je potpisan juče.", ru: "Договор подписан вчера." },
      { sr: "Imamo konferencijski poziv u tri.", ru: "У нас конференц-звонок в три." }
    ]
  },

  tips: {
    titleRu: "Советы",
    items: [
      "В деловом общении используется формальное <b>vi</b> почти всегда, даже с коллегами, если нет близких отношений.",
      "Фраза <b>Kao što možete videti</b> — стандартное начало, когда показываешь график, таблицу или слайд.",
      "Для отказа лучше использовать мягкие формы вроде <b>Nažalost, ne možemo...</b>, а не прямое «Ne!» — это звучит вежливее в деловом контексте.",
      "Эта тема напрямую связана со следующими уроками — написанием резюме и подготовкой к собеседованию."
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "sastanak", ru: "встреча, совещание" },
      { sr: "dogovor", ru: "договорённость" },
      { sr: "ponuda", ru: "предложение" },
      { sr: "uslovi", ru: "условия" },
      { sr: "izveštaj", ru: "отчёт" },
      { sr: "slajd", ru: "слайд" },
      { sr: "prezentacija", ru: "презентация" },
      { sr: "pregovarati", ru: "вести переговоры" },
      { sr: "rok", ru: "срок" },
      { sr: "budžet", ru: "бюджет" },
      { sr: "ugovor", ru: "договор" },
      { sr: "klijent", ru: "клиент" },
      { sr: "podsetnik", ru: "напоминание" },
      { sr: "revidirati", ru: "пересмотреть" },
      { sr: "dodatni", ru: "дополнительный" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo B1) — sastanak na poslu.",
      textSr: "<p>— Dobro jutro svima. <span class=\"word\" data-ru=\"Сегодня я представлю\">Danas ću predstaviti</span> rezultate prošlog kvartala.<br>— Odlično, <span class=\"word\" data-ru=\"у вас есть вопросы?\">imate li pitanja</span> pre nego što počnemo?<br>— Da, <span class=\"word\" data-ru=\"когда срок\">kada je rok</span> za sledeću fazu?<br>— <span class=\"word\" data-ru=\"Срок — следующая неделя.\">Rok je sledeća nedelja</span>. <span class=\"word\" data-ru=\"Пожалуйста, пришлите мне отчёт\">Molim vas da mi pošaljete izveštaj</span> do tada.<br>— Naravno, biće gotovo na vreme.</p>",
      comprehension: [
        {
          questionRu: "Что представляет говорящий на встрече?",
          options: ["Rezultate prošlog kvartala.", "Novi ugovor.", "Budžet za sledeću godinu."],
          correctIndex: 0
        },
        {
          questionRu: "Какой срок для следующей фазы?",
          options: ["Sledeća nedelja.", "Sledeći mesec.", "Danas."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kako kažeš 'Давайте назначим встречу'?", options: ["Zakažimo sastanak.", "Imamo sastanak.", "Otkažimo sastanak."], correct: 0 },
    { type: "mc", q: "Kako kažeš 'Когда вам удобно?'", options: ["Kada vam odgovara?", "Kada dolazite?", "Koliko je sati?"], correct: 0 },
    { type: "mc", q: "Kako kažeš 'У вас есть вопросы?'", options: ["Imate li pitanja?", "Imate li odgovore?", "Razumete li?"], correct: 0 },
    { type: "mc", q: "Šta znači 'izveštaj'?", options: ["отчёт", "договор", "предложение"], correct: 0 },
    { type: "mc", q: "Šta znači 'rok'?", options: ["срок", "бюджет", "договор"], correct: 0 },
    { type: "mc", q: "Šta znači 'ponuda'?", options: ["предложение", "отказ", "вопрос"], correct: 0 },
    { type: "mc", q: "Šta znači 'pregovarati'?", options: ["вести переговоры", "соглашаться", "отказываться"], correct: 0 },
    { type: "mc", q: "Kako kažeš 'Мы принимаем ваше предложение'?", options: ["Prihvatamo vašu ponudu.", "Odbijamo vašu ponudu.", "Šaljemo vam ponudu."], correct: 0 },
    { type: "mc", q: "Šta znači 'ugovor'?", options: ["договор", "отчёт", "встреча"], correct: 0 },
    { type: "mc", q: "Šta znači 'klijent'?", options: ["клиент", "коллега", "начальник"], correct: 0 },
    { type: "mc", q: "Šta znači 'revidirati plan'?", options: ["пересмотреть план", "отменить план", "написать план"], correct: 0 },
    { type: "mc", q: "Šta znači 'budžet'?", options: ["бюджет", "срок", "отчёт"], correct: 0 },
    { type: "fill", q: "Dopuni: Molim vas, pošaljite mi ___ do petka. (izveštaj)", answer: "izveštaj", alt: ["izvestaj"] },
    { type: "fill", q: "Dopuni: Da li možemo postići ___? (dogovor)", answer: "dogovor", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Спасибо за ваше время.':", answer: "Hvala na vašem vremenu.", alt: ["hvala na vasem vremenu"] },
    { type: "fill", q: "Prevedi na srpski 'К сожалению, мы не можем согласиться.':", answer: "Nažalost, ne možemo se složiti.", alt: ["nazalost, ne mozemo se sloziti"] },
    { type: "fill", q: "Napiši reč za 'переговоры' (glagol):", answer: "pregovarati", alt: [] },
    { type: "fill", q: "Napiši reč za 'договорённость':", answer: "dogovor", alt: [] },
    { type: "fill", q: "Napiši reč za 'напоминание':", answer: "podsetnik", alt: [] },
    { type: "fill", q: "Napiši frazu za 'Как вы можете видеть':", answer: "Kao što možete videti", alt: ["kao sto mozete videti"] }
  ]
};
