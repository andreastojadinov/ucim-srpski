window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-01"] = {
  slug: "a0-01",
  level: "A0",
  id: 1,
  titleSr: "Azbuka, izgovor i pozdravi",
  titleRu: "Алфавит, произношение и приветствия",

  intro: {
    sr: `Dobar dan! Danas počinjemo — pismo, izgovor i prvi pozdravi na srpskom.`,
    ru: `В этом уроке вы узнаете, как читается сербская латиница (srpska latinica), какие буквы звучат непривычно для русского уха, и выучите базовые приветствия. Всё сербское письмо в этом курсе дано латиницей — это один из двух официальных алфавитов сербского языка (второй — кириллица), и именно латиницей чаще всего пишут в объявлениях о работе, в чатах и в большинстве современных текстов.`
  },

  grammar: {
    titleRu: "Азбука и приветствия",
    blocks: [
      {
        heading: "Slova kojih nema u ruskom jeziku",
        explanationRu: `Сербская латиница почти полностью читается "как написано" — почти каждой букве соответствует ровно один звук, без йотации и смягчений, как в русском. Самое важное — выучить буквы, которых нет в латинском алфавите других языков и которые звучат непривычно.`,
        table: {
          headers: ["Slovo", "Izgovor (poređenje sa ruskim)", "Primer"],
          rows: [
            ["č", "как русское <b>ч</b>, но твёрже", "<b>č</b>aj — чай"],
            ["ć", "мягкое <b>ч</b>, почти как русское <b>ть</b>", "<b>ć</b>ao — привет/чао"],
            ["š", "как русское <b>ш</b>", "<b>š</b>kola — школа"],
            ["ž", "как русское <b>ж</b>", "<b>ž</b>ena — женщина"],
            ["đ", "мягкое <b>дж</b>, почти как русское <b>дь</b>+й", "<b>đ</b>ak — ученик"],
            ["dž", "твёрдое <b>дж</b>, как в слове «джинсы»", "<b>dž</b>ep — карман"],
            ["lj", "мягкое <b>ль</b>, слитно, один звук", "ko<b>lj</b>e — колья"],
            ["nj", "мягкое <b>нь</b>, слитно, один звук", "ko<b>nj</b> — конь"],
            ["c", "как русское <b>ц</b>", "<b>c</b>ena — цена"],
            ["j", "как русское <b>й</b>", "<b>j</b>a — я"],
            ["h", "как русское <b>х</b>", "<b>h</b>leb — хлеб"],
            ["r", "может быть «гласным», между согласными", "<b>prst</b> — палец"]
          ]
        },
        examples: [
          { sr: "čokolada, šuma, žuto, đubre, džak, ljubav, njegov", ru: "шоколад, лес, жёлтый, мусор, мешок, любовь, его" }
        ],
        drill: {
          type: "choice",
          question: "Kako se izgovara slovo 'š' u reči 'škola'?",
          options: ["Kao rusko Ш", "Kao rusko С", "Kao rusko Ч"],
          correctIndex: 0
        }
      },
      {
        heading: "Slogovno 'r' — reč bez samoglasnika",
        explanationRu: `Особенность сербского языка: буква <b>r</b> между согласными работает как гласный звук — слово читается без «вставки» лишней гласной, хотя русскому глазу кажется, что гласной не хватает. Это не ошибка написания!`,
        examples: [
          { sr: "srpski (не «сэрпски», а «српски» слитно)", ru: "сербский" },
          { sr: "trg", ru: "площадь" },
          { sr: "prst", ru: "палец" },
          { sr: "Krk (остров)", ru: "Крк (остров)" }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: srpski jezik se pise na latinici i ___ (drugo pismo, 6 slova).",
          answer: "cirilici",
          alt: ["ćirilici", "ćirilica", "cirilica"]
        }
      },
      {
        heading: "Pozdravi — formalno i neformalno",
        explanationRu: `Как и в русском, в сербском есть обращение на «ты» (<b>ti</b>) — неформально, с друзьями и ровесниками, и на «вы» (<b>vi</b>) — формально, с незнакомыми людьми, на работе, со старшими. От этого зависит, какое приветствие уместно.`,
        examples: [
          { sr: "Zdravo! / Ćao!", ru: "Привет! (неформально, друзьям)" },
          { sr: "Dobar dan!", ru: "Добрый день! (нейтрально-формально, в любое время дня кроме утра/вечера)" },
          { sr: "Dobro jutro!", ru: "Доброе утро! (до ~10–11 часов)" },
          { sr: "Dobro veče!", ru: "Добрый вечер!" },
          { sr: "Laku noć!", ru: "Спокойной ночи!" }
        ],
        drill: {
          type: "fill",
          question: "Dopuni formalni pozdrav ujutru: Dobro ___.",
          answer: "jutro",
          alt: ["Jutro"]
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod na ruski.",
    items: [
      { sr: "Zdravo!", ru: "Привет!" },
      { sr: "Ćao!", ru: "Привет! / Пока! (и при встрече, и при расставании)" },
      { sr: "Dobar dan!", ru: "Добрый день!" },
      { sr: "Dobro jutro!", ru: "Доброе утро!" },
      { sr: "Dobro veče!", ru: "Добрый вечер!" },
      { sr: "Kako si?", ru: "Как ты? (неформально)" },
      { sr: "Kako ste?", ru: "Как вы? (формально)" },
      { sr: "Dobro sam, hvala. A ti?", ru: "Я хорошо, спасибо. А ты?" },
      { sr: "Dovidjenja!", ru: "До свидания! (формально)" },
      { sr: "Vidimo se!", ru: "Увидимся! (неформально)" },
      { sr: "Prijatno!", ru: "Приятного! (при прощании, в магазине, после еды)" },
      { sr: "Hvala, prijatno i tebi / vama!", ru: "Спасибо, и тебе / вам того же!" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Reč <b>ćao</b> je u srpski dosla iz italijanskog (ciao) i koristi se i za "zdravo" i za "dovidjenja" — slicno kao u italijanskom jeziku. Koristi je samo sa ljudima sa kojima si na "ti".`,
      `<b>Dobar dan</b> je "univerzalni" formalni pozdrav — ako nisi siguran/na kog pozdrava da koristis, ovaj je najsigurniji izbor tokom dana.`,
      `Slova <b>đ</b> i <b>dž</b> se lako pobrkaju — <b>đ</b> je mekse (kao rusko дь), a <b>dž</b> je tvrdje (kao dž u "džem" - джем). Vezbaj razliku na recima: <i>đak</i> (ученик) i <i>džak</i> (мешок).`,
      `U svakodnevnom govoru, mladi i prijatelji skoro uvek koriste <b>ćao</b> i <b>zdravo</b>, dok se <b>dobar dan</b> i <b>dovidjenja</b> cuvaju za posao, prodavnice i nepoznate ljude — bas kao razlika između «привет» и «добрый день» у русских.`
    ]
  },

  vocab: {
    titleRu: "Osnovne reči iz ove lekcije",
    words: [
      { sr: "zdravo", ru: "привет" },
      { sr: "ćao", ru: "привет / пока" },
      { sr: "dobar dan", ru: "добрый день" },
      { sr: "dobro jutro", ru: "доброе утро" },
      { sr: "dobro veče", ru: "добрый вечер" },
      { sr: "laku noć", ru: "спокойной ночи" },
      { sr: "hvala", ru: "спасибо" },
      { sr: "molim", ru: "пожалуйста / прошу" },
      { sr: "izvini / izvinite", ru: "извини / извините" },
      { sr: "da", ru: "да" },
      { sr: "ne", ru: "нет" },
      { sr: "dobro", ru: "хорошо" },
      { sr: "kako", ru: "как" },
      { sr: "ime", ru: "имя" },
      { sr: "prijatelj", ru: "друг" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A0).",
      textSr: `<p>— <span class="word" data-ru="Добрый день!">Dobar dan</span>! Ja sam Ana.<br>
      — Dobar dan! Ja sam Pavle. <span class="word" data-ru="Как ты? / Как вы?">Kako ste</span>?<br>
      — <span class="word" data-ru="Хорошо, спасибо.">Dobro sam, hvala</span>. A vi?<br>
      — I ja sam dobro. <span class="word" data-ru="Приятно познакомиться.">Prijatno mi je</span>.<br>
      — <span class="word" data-ru="До свидания!">Dovidjenja</span>, Pavle!<br>
      — <span class="word" data-ru="Увидимся!">Vidimo se</span>, Ana!</p>
      <p><em>(Klikni na podvucene reči za prevod.)</em></p>`,
      comprehension: [
        {
          questionRu: "Как Ана поздоровалась с Павле — формально или неформально?",
          options: ["Formalno (Dobar dan)", "Neformalno (Ćao)"],
          correctIndex: 0
        },
        {
          questionRu: "Что ответил Павле на вопрос «Kako ste?»",
          options: ["Dobro sam, hvala.", "Ne znam.", "Laku noć."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kako se na srpskom kaže 'Привет' (neformalno)?", options: ["Zdravo", "Dobar dan", "Hvala"], correct: 0, explain: "Zdravo i Ćao su neformalni pozdravi." },
    { type: "mc", q: "Šta znači 'Dobro jutro'?", options: ["Доброе утро", "Добрый вечер", "Спокойной ночи"], correct: 0, explain: "Jutro = утро." },
    { type: "mc", q: "Koje slovo se izgovara kao rusko Ш?", options: ["š", "ž", "c"], correct: 0, explain: "š = ш, ž = ж, c = ц." },
    { type: "mc", q: "Koje slovo se izgovara kao rusko Ж?", options: ["ž", "š", "č"], correct: 0 },
    { type: "mc", q: "Šta je mekse — đ ili dž?", options: ["đ", "dž", "isto su"], correct: 0, explain: "đ je mekse (kao дь), dž je tvrdje (kao дж)." },
    { type: "mc", q: "Koju reč koristis i za 'zdravo' i za 'dovidjenja' u neformalnom razgovoru?", options: ["Ćao", "Hvala", "Molim"], correct: 0 },
    { type: "mc", q: "Koji pozdrav je najformalniji za rastanak?", options: ["Dovidjenja", "Ćao", "Vidimo se"], correct: 0 },
    { type: "mc", q: "Kada koristis 'Dobro veče'?", options: ["Uveče", "Ujutru", "U podne"], correct: 0 },
    { type: "mc", q: "Šta znači 'hvala'?", options: ["спасибо", "пожалуйста", "привет"], correct: 0 },
    { type: "mc", q: "Šta znači 'izvini'?", options: ["извини", "здравствуй", "до свидания"], correct: 0 },
    { type: "mc", q: "U reči 'prst' (палец), slovo r ponasa se kao:", options: ["samoglasnik", "suglasnik koji se ne cuje", "nema r u toj reči"], correct: 0 },
    { type: "mc", q: "Koja je razlika između 'ti' i 'vi' u obracanju?", options: ["ti = neformalno, vi = formalno", "ti = formalno, vi = neformalno", "nema razlike"], correct: 0 },
    { type: "fill", q: "Dopuni: ___, kako si? (neformalni pozdrav)", answer: "Zdravo", alt: ["Ćao", "ćao", "zdravo"], explain: "Oba su neformalna pozdrava." },
    { type: "fill", q: "Dopuni formalni pozdrav uveče: Dobro ___.", answer: "veče", alt: ["veče", "veca", "veče"], explain: "Dobro veče = добрый вечер." },
    { type: "fill", q: "Prevedi na srpski 'спасибо':", answer: "hvala", alt: [], explain: "" },
    { type: "fill", q: "Prevedi na srpski 'нет':", answer: "ne", alt: [], explain: "" },
    { type: "fill", q: "Prevedi na srpski 'друг':", answer: "prijatelj", alt: [], explain: "" },
    { type: "fill", q: "Dopuni: Dobar ___! (univerzalni formalni pozdrav tokom dana)", answer: "dan", alt: [], explain: "" },
    { type: "fill", q: "Napisi srpsko slovo koje se izgovara kao mekse 'ч' (blisko ruskom 'ть'):", answer: "ć", alt: ["c"], explain: "ć je mekse č." },
    { type: "fill", q: "Napisi kako se na srpskom kaže 'спокойной ночи':", answer: "laku noć", alt: ["laku noć"], explain: "" }
  ]
};
