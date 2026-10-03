window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-10"] = {
  slug: "a2-10",
  level: "A2",
  id: 10,
  titleSr: "Pisanje mejla i formalna komunikacija",
  titleRu: "Написание письма и формальное общение",

  intro: {
    sr: `Zadnja lekcija A2 nivoa! Danas učimo kako da napišemo formalan mejl — korisno za posao i zvanične situacije.`,
    ru: `Последний урок уровня A2. Формальная переписка пригодится на работе и при официальном общении. Хорошая новость: структура очень похожа на русскую деловую переписку, включая написание «Vi/Vas/Vaš» с большой буквы — точно как уважительное «Вы» в русских официальных письмах!`
  },

  grammar: {
    titleRu: "Formalna komunikacija",
    blocks: [
      {
        heading: "Formalno obraćanje",
        explanationRu: `В формальном письме местоимение <b>Vi/Vas/Vaš</b> пишется с <b>заглавной буквы</b>, когда обращаются к одному человеку уважительно — абсолютно как русское уважительное «Вы» в письмах.`,
        examples: [
          { sr: "Poštovani gospodine Petroviću,", ru: "Уважаемый господин Петрович," },
          { sr: "Poštovana gospođo Jovanović,", ru: "Уважаемая госпожа Йованович," },
          { sr: "Poštovani / Poštovana, (kad ne znaš ime)", ru: "Уважаемый/ая, (если имя неизвестно)" }
        ],
        drill: {
          type: "choice",
          question: "Kako počinje formalan mejl kad ne znas ime primaoca?",
          options: ["Poštovani / Poštovana,", "Ćao!", "Zdravo druže,"],
          correctIndex: 0
        }
      },
      {
        heading: "Struktura formalnog mejla",
        explanationRu: `Tipičan skelet formalnog mejla — pozdrav, uvodna rečenica, telo poruke, zatvaranje.`,
        examples: [
          { sr: "Pišem Vam povodom konkursa za posao.", ru: "Пишу Вам по поводу вакансии." },
          { sr: "Obraćam se Vama u vezi sa...", ru: "Обращаюсь к Вам по поводу..." },
          { sr: "Unapred zahvalan/zahvalna na odgovoru.", ru: "Заранее благодарю за ответ." },
          { sr: "S poštovanjem,", ru: "С уважением," }
        ],
        drill: {
          type: "fill",
          question: "Dopuni formalno zatvaranje mejla: S ___,",
          answer: "poštovanjem",
          alt: ["postovanjem"]
        }
      },
      {
        heading: "Korisne fraze za formalnu komunikaciju",
        explanationRu: `Fraze koje ce ti dobro doći pri pisanju bilo kog zvanicnog mejla.`,
        examples: [
          { sr: "Da li biste mogli da mi pošaljete više informacija?", ru: "Не могли бы вы прислать мне больше информации?" },
          { sr: "Molim Vas za informaciju o radnom vremenu.", ru: "Прошу информацию о рабочем времени." },
          { sr: "Očekujem Vaš odgovor.", ru: "Жду Вашего ответа." },
          { sr: "U prilogu Vam šaljem svoju biografiju.", ru: "Во вложении отправляю своё резюме." }
        ],
        drill: {
          type: "choice",
          question: "Šta znači 'U prilogu Vam šaljem...'?",
          options: ["Во вложении отправляю...", "Жду Вашего ответа.", "С уважением,"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Poštovani, obraćam se povodom slobodnog radnog mesta.", ru: "Уважаемый, обращаюсь по поводу вакансии." },
      { sr: "Zahvaljujem se na prilici.", ru: "Благодарю за возможность." },
      { sr: "Molim Vas da potvrdite prijem ovog mejla.", ru: "Прошу подтвердить получение этого письма." },
      { sr: "Da li bismo mogli zakazati sastanak?", ru: "Не могли бы мы назначить встречу?" },
      { sr: "U nadi da ćemo uskoro sarađivati.", ru: "В надежде на скорое сотрудничество." },
      { sr: "Ostajem na raspolaganju za dodatna pitanja.", ru: "Остаюсь в вашем распоряжении для дополнительных вопросов." },
      { sr: "Srdačan pozdrav,", ru: "С наилучшими пожеланиями," }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Заглавная буква для <b>Vi/Vas/Vaš</b> используется только в <b>письме/имейле</b> и только когда обращаешься к одному человеку формально — в устной речи разница «не слышна», так что не ошибка, если забудешь в повседневном тексте.`,
      `<b>S poštovanjem</b> — самое формальное и самое безопасное завершение письма — соответствует русскому «С уважением».`,
      `Фраза <b>Da li biste mogli...?</b> (кондиционал) — стандарт для вежливых формальных просьб — избегай прямых императивов в формальной переписке.`,
      `Этот урок — хорошая подготовка к уровню B1, где подробно разберём написание резюме, мотивационного письма и подготовку к собеседованию.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "poštovani / poštovana", ru: "уважаемый / уважаемая" },
      { sr: "obraćati se", ru: "обращаться" },
      { sr: "povodom", ru: "по поводу" },
      { sr: "prilog", ru: "вложение" },
      { sr: "odgovor", ru: "ответ" },
      { sr: "unapred", ru: "заранее" },
      { sr: "zahvalan / zahvalna", ru: "благодарный / -ая" },
      { sr: "s poštovanjem", ru: "с уважением" },
      { sr: "zakazati sastanak", ru: "назначить встречу" },
      { sr: "konkurs za posao", ru: "вакансия, конкурс на должность" },
      { sr: "potvrditi", ru: "подтвердить" },
      { sr: "prijem", ru: "получение" },
      { sr: "saradnja", ru: "сотрудничество" },
      { sr: "raspolaganje", ru: "распоряжение" },
      { sr: "prilika", ru: "возможность, случай" }
    ],
    reading: {
      sourceNote: "Originalan primer formalnog mejla napisan za ovaj kurs (nivo A2).",
      textSr: `<p><span class="word" data-ru="Уважаемая госпожа Йованович,">Poštovana gospođo Jovanović</span>,<br>
      <span class="word" data-ru="Пишу Вам по поводу вакансии">Pišem Vam povodom konkursa za posao</span> programera koji sam video na Vašem sajtu. <span class="word" data-ru="Во вложении отправляю">U prilogu Vam šaljem</span> svoju biografiju i motivaciono pismo.<br>
      <span class="word" data-ru="Заранее благодарю">Unapred zahvalan</span> na odgovoru.<br>
      <span class="word" data-ru="С уважением">S poštovanjem</span>,<br>
      Nikolaj Petrov</p>`,
      comprehension: [
        {
          questionRu: "По какому поводу пишет автор?",
          options: ["Povodom konkursa za posao programera.", "Povodom stana.", "Povodom intervjua."],
          correctIndex: 0
        },
        {
          questionRu: "Что отправлено во вложении?",
          options: ["Biografija i motivaciono pismo.", "Fotografija.", "Ugovor."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kako počinje formalan mejl kad znas prezime primaoca (muški rod)?", options: ["Poštovani gospodine [prezime],", "Ćao [ime]!", "Zdravo!"], correct: 0 },
    { type: "mc", q: "Kako se formalno završava mejl?", options: ["S poštovanjem,", "Ćao!", "Vidimo se!"], correct: 0 },
    { type: "mc", q: "Kada se pise Vi/Vas/Vaš velikim slovom?", options: ["u formalnom pismu, jednoj osobi", "uvek", "nikad"], correct: 0 },
    { type: "mc", q: "Šta znači 'povodom'?", options: ["по поводу", "несмотря на", "вместо"], correct: 0 },
    { type: "mc", q: "Šta znači 'prilog' (u mejlu)?", options: ["вложение", "подпись", "тема"], correct: 0 },
    { type: "mc", q: "Šta znači 'unapred zahvalan'?", options: ["заранее благодарен", "очень рад", "не уверен"], correct: 0 },
    { type: "mc", q: "Šta znači 'zakazati sastanak'?", options: ["назначить встречу", "отменить встречу", "пропустить встречу"], correct: 0 },
    { type: "mc", q: "Šta znači 'konkurs za posao'?", options: ["вакансия", "зарплата", "отпуск"], correct: 0 },
    { type: "mc", q: "Šta znači 'potvrditi prijem'?", options: ["подтвердить получение", "отправить письмо", "удалить письмо"], correct: 0 },
    { type: "mc", q: "Šta znači 'saradnja'?", options: ["сотрудничество", "конкуренция", "встреча"], correct: 0 },
    { type: "mc", q: "Koja fraza je najuljudnija molba u mejlu?", options: ["Da li biste mogli da...?", "Moraš da...", "Uradi to!"], correct: 0 },
    { type: "mc", q: "Šta znači 'raspolaganje' (ostajem na raspolaganju)?", options: ["распоряжение", "отпуск", "решение"], correct: 0 },
    { type: "fill", q: "Dopuni: Poštovani, pišem Vam ___ konkursa. (povodom)", answer: "povodom", alt: [] },
    { type: "fill", q: "Dopuni: U ___ Vam šaljem biografiju. (prilog, lokativ)", answer: "prilogu", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Жду Вашего ответа.':", answer: "Očekujem Vaš odgovor.", alt: ["ocekujem vas odgovor"] },
    { type: "fill", q: "Prevedi na srpski 'С уважением,':", answer: "S poštovanjem,", alt: ["s postovanjem"] },
    { type: "fill", q: "Napisi reč za 'вложение' (u mejlu):", answer: "prilog", alt: [] },
    { type: "fill", q: "Napisi reč za 'сотрудничество':", answer: "saradnja", alt: [] },
    { type: "fill", q: "Napisi formalni pozdrav na pocetku pisma kad ne znas ime:", answer: "Poštovani", alt: ["postovani", "Poštovana"] },
    { type: "fill", q: "Prevedi na srpski 'Не могли бы Вы прислать мне информацию?':", answer: "Da li biste mogli da mi pošaljete informaciju?", alt: ["da li biste mogli da mi posaljete informaciju"] }
  ]
};
