window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-10"] = {
  slug: "a1-10",
  level: "A1",
  id: 10,
  titleSr: "Putovanja i javni transport",
  titleRu: "Путешествия и общественный транспорт",

  intro: {
    sr: `Zadnja lekcija A1 nivoa! Danas ucimo reci za putovanje, transport i snalazenje u gradu.`,
    ru: `Последний урок уровня A1. Вы выучите слова для путешествий и — как бонус — познакомитесь с <b>instrumental</b> (творительным падежом), который используется для обозначения средства передвижения, совсем как в русском «ехать поездом».`
  },

  grammar: {
    titleRu: "Transport i snalaženje",
    blocks: [
      {
        heading: "Instrumental — čime putujemo?",
        explanationRu: `Чтобы сказать «на чём» едем, используется <b>instrumental</b> без предлога — точно как русское «ехать поездом» (без «на»). Окончания: <b>-om</b> (муж./сред. род), <b>-om</b> (жен. род тоже, через другую основу).`,
        table: {
          headers: ["Nominativ", "Instrumental", "Prevod"],
          rows: [
            ["autobus", "autobusom", "автобусом / на автобусе"],
            ["voz", "vozom", "поездом"],
            ["avion", "avionom", "самолётом"],
            ["auto", "autom", "машиной"],
            ["bicikl", "biciklom", "велосипедом"]
          ]
        },
        examples: [
          { sr: "Putujem vozom.", ru: "Я путешествую поездом." },
          { sr: "Idem na posao autobusom.", ru: "Я езжу на работу автобусом." },
          { sr: "Stigli smo avionom.", ru: "Мы прилетели самолётом." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni instrumental: Putujem voz___. (voz)",
          answer: "om",
          alt: ["vozom"]
        }
      },
      {
        heading: "SA + instrumental — 'sa kim putuješ?'",
        explanationRu: `Когда речь о компании («с кем»), используется предлог <b>sa</b> + instrumental — тоже прямая параллель с русским «с другом» (творительный + «с»). Разница с предыдущим правилом: без «sa» — средство передвижения, с «sa» — сопровождение.`,
        examples: [
          { sr: "Putujem sa prijateljem.", ru: "Я путешествую с другом." },
          { sr: "Idem sa porodicom.", ru: "Я иду с семьёй." }
        ],
        drill: {
          type: "choice",
          question: "Koja recenica znaci 'Я еду поездом' (sredstvo, bez 'sa')?",
          options: ["Putujem vozom.", "Putujem sa vozom.", "Putujem voz."],
          correctIndex: 0
        }
      },
      {
        heading: "Na stanici/aerodromu i pravci",
        explanationRu: `Полезные слова и фразы для вокзала, аэропорта и ориентирования в городе.`,
        examples: [
          { sr: "Gde je stanica?", ru: "Где станция?" },
          { sr: "Kada polazi voz?", ru: "Когда отправляется поезд?" },
          { sr: "Skreni levo, pa pravo.", ru: "Поверни налево, потом прямо." },
          { sr: "To je blizu / daleko.", ru: "Это близко / далеко." }
        ],
        drill: {
          type: "choice",
          question: "Sta znaci 'Skreni levo'?",
          options: ["Поверни налево.", "Иди прямо.", "Поверни направо."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod.",
    items: [
      { sr: "Koliko traje put do Novog Sada?", ru: "Сколько длится путь до Нового Сада?" },
      { sr: "Karta za voz, molim.", ru: "Билет на поезд, пожалуйста." },
      { sr: "Let kasni.", ru: "Рейс задерживается." },
      { sr: "Gde je čekaonica?", ru: "Где зал ожидания?" },
      { sr: "Prijava za let je na drugom spratu.", ru: "Регистрация на рейс на втором этаже." },
      { sr: "Idite pravo, pa skrenite desno.", ru: "Идите прямо, потом поверните направо." },
      { sr: "Peron broj pet.", ru: "Платформа номер пять." },
      { sr: "Koliko košta karta?", ru: "Сколько стоит билет?" },
      { sr: "Vozim se biciklom na posao.", ru: "Я езжу на велосипеде на работу." },
      { sr: "Stigli smo na vreme.", ru: "Мы приехали вовремя." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Instrumental bez predloga za sredstvo transporta (vozom, autobusom) je gotovo identicno ruskom "ехать поездом" — koristi tu naviku direktno.`,
      `Ne mesaj: <b>vozom</b> (sredstvo, bez "sa") i <b>sa prijateljem</b> (drustvo, uz "sa") — oba su instrumental, ali razlicita upotreba.`,
      `Fraza <b>Koliko traje...?</b> (Сколько длится...?) je korisna za bilo koju vremensku duzinu, ne samo putovanja.`,
      `Cestitamo na zavrsetku A1 nivoa! Sada znas osnovne padeze (nominativ, akuzativ, lokativ, i uvod u genitiv i instrumental), buduce i proslo vreme. A2 nivo ce sistematizovati sve padeze zajedno.`
    ]
  },

  vocab: {
    titleRu: "Reci iz ove lekcije",
    words: [
      { sr: "autobus", ru: "автобус" },
      { sr: "voz", ru: "поезд" },
      { sr: "avion", ru: "самолёт" },
      { sr: "bicikl", ru: "велосипед" },
      { sr: "stanica", ru: "станция" },
      { sr: "aerodrom", ru: "аэропорт" },
      { sr: "karta", ru: "билет" },
      { sr: "peron", ru: "платформа" },
      { sr: "let", ru: "рейс, полёт" },
      { sr: "levo / desno", ru: "налево / направо" },
      { sr: "pravo", ru: "прямо" },
      { sr: "blizu / daleko", ru: "близко / далеко" },
      { sr: "polazak", ru: "отправление" },
      { sr: "dolazak", ru: "прибытие" },
      { sr: "čekaonica", ru: "зал ожидания" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A1) — na stanici.",
      textSr: `<p>— Dobar dan, <span class="word" data-ru="где касса?">gde je šalter za karte</span>?<br>
      — Tamo levo.<br>
      — Hvala. <span class="word" data-ru="Когда отправляется поезд в Нови-Сад?">Kada polazi voz za Novi Sad</span>?<br>
      — U deset i trideset, <span class="word" data-ru="платформа номер три">peron broj tri</span>.<br>
      — <span class="word" data-ru="Сколько длится поездка?">Koliko traje put</span>?<br>
      — Oko sat vremena. <span class="word" data-ru="Приятного пути!">Prijatan put</span>!</p>`,
      comprehension: [
        {
          questionRu: "Куда едет пассажир?",
          options: ["U Novi Sad.", "U Niš.", "Na aerodrom."],
          correctIndex: 0
        },
        {
          questionRu: "Сколько длится поездка по словам кассира?",
          options: ["Oko sat vremena.", "Dva sata.", "Pola sata."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji padez se koristi za sredstvo transporta (vozom)?", options: ["instrumental", "akuzativ", "lokativ"], correct: 0 },
    { type: "mc", q: "Koji je instrumental reci 'voz'?", options: ["vozom", "voza", "vozu"], correct: 0 },
    { type: "mc", q: "Koji je instrumental reci 'autobus'?", options: ["autobusom", "autobusu", "autobusa"], correct: 0 },
    { type: "mc", q: "Sta znaci 'sa prijateljem'?", options: ["с другом", "другом (sredstvo)", "без друга"], correct: 0 },
    { type: "mc", q: "Sta znaci 'skreni levo'?", options: ["поверни налево", "иди прямо", "поверни направо"], correct: 0 },
    { type: "mc", q: "Sta znaci 'blizu'?", options: ["близко", "далеко", "быстро"], correct: 0 },
    { type: "mc", q: "Sta znaci 'karta' (u kontekstu putovanja)?", options: ["билет", "карта (geografska)", "меню"], correct: 0 },
    { type: "mc", q: "Sta znaci 'peron'?", options: ["платформа", "вокзал", "билет"], correct: 0 },
    { type: "mc", q: "Sta znaci 'let kasni'?", options: ["рейс задерживается", "рейс отменён", "рейс прибыл"], correct: 0 },
    { type: "mc", q: "Sta znaci 'čekaonica'?", options: ["зал ожидания", "касса", "платформа"], correct: 0 },
    { type: "mc", q: "Kako pitas 'Сколько длится путь?'", options: ["Koliko traje put?", "Koliko košta put?", "Gde je put?"], correct: 0 },
    { type: "mc", q: "Sta znaci 'polazak'?", options: ["отправление", "прибытие", "билет"], correct: 0 },
    { type: "fill", q: "Dopuni instrumental: Putujem avion___. (avion)", answer: "om", alt: ["avionom"] },
    { type: "fill", q: "Dopuni: Idem na posao ___. (bicikl, instrumental)", answer: "biciklom", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Когда отправляется поезд?':", answer: "Kada polazi voz?", alt: ["kada polazi voz"] },
    { type: "fill", q: "Prevedi na srpski 'Где станция?':", answer: "Gde je stanica?", alt: ["gde je stanica"] },
    { type: "fill", q: "Napisi rec za 'аэропорт':", answer: "aerodrom", alt: [] },
    { type: "fill", q: "Napisi rec za 'направо':", answer: "desno", alt: [] },
    { type: "fill", q: "Napisi rec za 'прямо' (pravac)):", answer: "pravo", alt: [] },
    { type: "fill", q: "Napisi instrumental reci 'auto':", answer: "autom", alt: [] }
  ]
};
