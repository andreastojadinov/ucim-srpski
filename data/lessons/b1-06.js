window.LESSONS = window.LESSONS || {};
window.LESSONS["b1-06"] = {
  slug: "b1-06",
  level: "B1",
  id: 6,
  titleSr: "Srpska kultura i običaji",
  titleRu: "Сербская культура и обычаи",

  intro: {
    sr: "Danas učimo o srpskim običajima — slavi, praznicima i pravilima gostoprimstva. Ovo nije gramatička lekcija, već kulturna, ali je jednako važna za život u Srbiji.",
    ru: "Эта тема не грамматическая, а культурная — но она не менее важна для жизни в Сербии. Многое покажется знакомым, ведь Сербская и Русская православные церкви имеют общие корни и традиции."
  },

  grammar: {
    titleRu: "Kultura i običaji",
    blocks: [
      {
        heading: "Slava — najvažniji srpski porodični praznik",
        explanationRu: "<b>Slava</b> — это уникальная сербская традиция: каждая семья отмечает день своего святого покровителя (<i>krsna slava</i>), передаваемый по мужской линии из поколения в поколение. В этот день готовят <b>slavski kolač</b> (особый хлеб) и <b>žito</b> (варёную пшеницу), зажигают свечу, и дом открыт для гостей без специального приглашения — друзья и соседи просто заходят поздравить.",
        examples: [
          { sr: "Srećna slava!", ru: "С праздником слава! (поздравление)" },
          { sr: "Danas je naša krsna slava.", ru: "Сегодня наша крестная слава." }
        ],
        drill: {
          type: "choice",
          question: "Šta je 'slava'?",
          options: ["Porodični praznik sveca zaštitnika", "Državni praznik", "Rođendan"],
          correctIndex: 0
        }
      },
      {
        heading: "Praznici u Srbiji",
        explanationRu: "Сербская православная церковь, как и Русская, использует юлианский календарь для религиозных праздников — поэтому сербское Рождество отмечается <b>7 января</b>, в тот же день, что и в России!",
        table: {
          headers: ["Praznik", "Datum", "Prevod"],
          rows: [
            ["Božić", "7. januar", "Рождество"],
            ["Nova godina", "1. januar", "Новый год"],
            ["Uskrs", "promenljiv datum", "Пасха"],
            ["Dan državnosti", "15. februar", "День государственности"]
          ]
        },
        drill: {
          type: "fill",
          question: "Kog datuma je srpski Božić? (broj)",
          answer: "7",
          alt: ["sedmog", "7."]
        }
      },
      {
        heading: "Gostoprimstvo i bonton",
        explanationRu: "Srbija je poznata po gostoprimstvu — несколько полезных привычек для гостя.",
        examples: [
          { sr: "Kada posetiš nečiju kuću, uobičajeno je poneti mali poklon.", ru: "Когда посещаешь чей-то дом, принято приносить небольшой подарок." },
          { sr: "'Hajde na kafu!' je čest poziv za druženje.", ru: "«Пойдём на кофе!» — частое приглашение пообщаться." },
          { sr: "Domaćin često insistira da gost pojede još.", ru: "Хозяин часто настаивает, чтобы гость съел ещё." }
        ],
        drill: {
          type: "choice",
          question: "Šta se obično nosi kada se posećuje nečija kuća?",
          options: ["Mali poklon", "Ništa, nije uobičajeno", "Novac"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Hristos se rodi! — Vaistinu se rodi!", ru: "Христос родился! — Воистину родился! (рождественское приветствие)" },
      { sr: "Hristos vaskrse! — Vaistinu vaskrse!", ru: "Христос воскрес! — Воистину воскрес! (пасхальное приветствие)" },
      { sr: "Čestitam slavu!", ru: "Поздравляю со славой!" },
      { sr: "Kafa je socijalni ritual u Srbiji.", ru: "Кофе — социальный ритуал в Сербии." },
      { sr: "Gosti se uvek dočekuju toplo.", ru: "Гостей всегда встречают тепло." },
      { sr: "Na slavi se pali sveća i seče kolač.", ru: "На славе зажигают свечу и режут пирог." },
      { sr: "Svaka porodica ima svog sveca zaštitnika.", ru: "У каждой семьи есть свой святой покровитель." },
      { sr: "Praznici se slave sa celom porodicom.", ru: "Праздники отмечают всей семьёй." },
      { sr: "Srbi vole duge razgovore uz kafu.", ru: "Сербы любят долгие разговоры за кофе." },
      { sr: "Gostoprimstvo je deo srpskog identiteta.", ru: "Гостеприимство — часть сербской идентичности." }
    ]
  },

  tips: {
    titleRu: "Советы",
    items: [
      "Традиция <b>slava</b> похожа на русские именины, но гораздо масштабнее — это целый семейный праздник с открытым домом для гостей.",
      "Поскольку сербское Рождество совпадает по дате с русским (7 января), вам будет легко ориентироваться в религиозном календаре.",
      "Если тебя пригласили на славу, достаточно просто прийти и поздравить — формального приглашения не нужно, двери открыты для всех знакомых.",
      "В гостях не стесняйся принять добавку еды — отказ может показаться невежливым, но можно вежливо сказать «Dosta mi je, hvala» (Мне достаточно, спасибо)."
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "slava", ru: "слава (семейный праздник)" },
      { sr: "praznik", ru: "праздник" },
      { sr: "običaj", ru: "обычай" },
      { sr: "gostoprimstvo", ru: "гостеприимство" },
      { sr: "poklon", ru: "подарок" },
      { sr: "sveća", ru: "свеча" },
      { sr: "kolač", ru: "пирог, калач" },
      { sr: "domaćin", ru: "хозяин" },
      { sr: "gost", ru: "гость" },
      { sr: "zaštitnik", ru: "покровитель" },
      { sr: "slaviti", ru: "праздновать" },
      { sr: "dočekati", ru: "встретить (гостя)" },
      { sr: "čestitati", ru: "поздравить" },
      { sr: "identitet", ru: "идентичность" },
      { sr: "insistirati", ru: "настаивать" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo B1).",
      textSr: "<p>Danas je <span class=\"word\" data-ru=\"крестная слава\">krsna slava</span> porodice Jovanović. Kuća je puna gostiju — <span class=\"word\" data-ru=\"соседи\">komšije</span>, prijatelji i rodbina dolaze tokom celog dana bez <span class=\"word\" data-ru=\"специального приглашения\">posebnog poziva</span>. Na stolu su <span class=\"word\" data-ru=\"пирог\">slavski kolač</span> i <span class=\"word\" data-ru=\"варёная пшеница\">žito</span>. Svako ko uđe kaže \"<span class=\"word\" data-ru=\"С праздником слава!\">Srećna slava</span>!\" i domaćini odgovaraju sa osmehom.</p>",
      comprehension: [
        {
          questionRu: "Чья сегодня слава по тексту?",
          options: ["Porodice Jovanović.", "Porodice Petrović.", "Suseda."],
          correctIndex: 0
        },
        {
          questionRu: "Что стоит на столе на славе?",
          options: ["Slavski kolač i žito.", "Samo kafa.", "Torta."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta je 'slava'?", options: ["Porodični praznik sveca zaštitnika", "Rođendan", "Državni praznik"], correct: 0 },
    { type: "mc", q: "Kog datuma je srpski Božić?", options: ["7. januara", "25. decembra", "1. januara"], correct: 0 },
    { type: "mc", q: "Koji kalendar koristi Srpska pravoslavna crkva za praznike?", options: ["Julijanski", "Gregorijanski", "Lunarni"], correct: 0 },
    { type: "mc", q: "Šta se obično nosi u posetu nečijoj kući?", options: ["Mali poklon", "Ništa", "Veliku sumu novca"], correct: 0 },
    { type: "mc", q: "Šta znači 'gostoprimstvo'?", options: ["гостеприимство", "праздник", "подарок"], correct: 0 },
    { type: "mc", q: "Šta znači 'domaćin'?", options: ["хозяин", "гость", "сосед"], correct: 0 },
    { type: "mc", q: "Kako se odgovara na 'Hristos se rodi'?", options: ["Vaistinu se rodi!", "Hvala!", "Srećna slava!"], correct: 0 },
    { type: "mc", q: "Šta znači 'sveća'?", options: ["свеча", "хлеб", "пшеница"], correct: 0 },
    { type: "mc", q: "Šta znači 'zaštitnik' (u kontekstu slave)?", options: ["покровитель", "гость", "сосед"], correct: 0 },
    { type: "mc", q: "Da li treba pozivnica da bi se došlo na nečiju slavu?", options: ["Ne, dovoljno je biti poznanik", "Da, uvek", "Samo pismena pozivnica"], correct: 0 },
    { type: "mc", q: "Šta znači 'čestitati'?", options: ["поздравить", "пригласить", "встретить"], correct: 0 },
    { type: "mc", q: "Šta je 'kolač' na slavi?", options: ["Poseban hleb", "Torta", "Keks"], correct: 0 },
    { type: "fill", q: "Dopuni pozdrav za slavu: Srećna ___!", answer: "slava", alt: [] },
    { type: "fill", q: "Napiši reč za 'обычай':", answer: "običaj", alt: ["obicaj"] },
    { type: "fill", q: "Prevedi na srpski 'С праздником слава!':", answer: "Srećna slava!", alt: ["srecna slava"] },
    { type: "fill", q: "Napiši reč za 'подарок':", answer: "poklon", alt: [] },
    { type: "fill", q: "Napiši reč za 'хозяин' (doma):", answer: "domaćin", alt: ["domacin"] },
    { type: "fill", q: "Napiši datum srpskog Božića (dan i mesec):", answer: "7. januar", alt: ["sedmi januar"] },
    { type: "fill", q: "Napiši reč za 'праздновать':", answer: "slaviti", alt: [] },
    { type: "fill", q: "Napiši reč za 'гость':", answer: "gost", alt: [] }
  ]
};
