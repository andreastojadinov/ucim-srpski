window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-06"] = {
  slug: "a1-06",
  level: "A1",
  id: 6,
  titleSr: "Hrana i narudžbina u restoranu",
  titleRu: "Еда и заказ в ресторане",

  intro: {
    sr: `Danas učimo reči za hranu i fraze koje su potrebne da naruciš jelo u restoranu.`,
    ru: `Практичный урок: слова для еды и напитков, и фразы для заказа в ресторане. Мы также закрепим аккузатив (винительный падеж) из урока A1-01 — ведь всё, что вы «заказываете» или «едите», стоит именно в этом падеже.`
  },

  grammar: {
    titleRu: "Naručivanje i hrana",
    blocks: [
      {
        heading: "Naručivanje — osnovne fraze",
        explanationRu: `Эти фразы покрывают 90% ситуаций в кафе и ресторане. <b>Želim</b> (я хочу) — нейтрально-вежливо; <b>Mogu li da dobijem...?</b> (могу я получить...?) — чуть более вежливо и чаще используется с официантом.`,
        examples: [
          { sr: "Želim supu, molim.", ru: "Я хочу суп, пожалуйста." },
          { sr: "Mogu li da dobijem račun?", ru: "Могу я получить счёт?" },
          { sr: "Imate li vode?", ru: "У вас есть вода?" },
          { sr: "Šta preporučujete?", ru: "Что вы рекомендуете?" }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: ___ supu, molim. (želim)",
          answer: "Želim",
          alt: ["želim"]
        }
      },
      {
        heading: "Hrana i piće — vežbanje akuzativa",
        explanationRu: `Напоминание из урока A1-01: всё, что мы заказываем или едим, — прямой объект, то есть аккузатив. Неодушевлённые существительные мужского рода не меняются; женский род на -a меняет окончание на -u.`,
        table: {
          headers: ["Nominativ", "Akuzativ (naručujem/jedem...)", "Prevod"],
          rows: [
            ["pivo (s.)", "pivo", "пиво"],
            ["supa (ž.)", "supu", "суп"],
            ["salata (ž.)", "salatu", "салат"],
            ["riba (ž.)", "ribu", "рыба"],
            ["hleb (m.)", "hleb", "хлеб"],
            ["sok (m.)", "sok", "сок"]
          ]
        },
        examples: [
          { sr: "Naručujem pivo.", ru: "Я заказываю пиво." },
          { sr: "Jedem salatu.", ru: "Я ем салат." },
          { sr: "Želim ribu i pirinač.", ru: "Я хочу рыбу и рис." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni akuzativ: Jedem salat___. (salata)",
          answer: "u",
          alt: ["salatu"]
        }
      },
      {
        heading: "U restoranu — korisni izrazi",
        explanationRu: `Полезные слова для работы с официантом (<b>konobar / konobarica</b>) и для случаев с особыми потребностями.`,
        examples: [
          { sr: "Imam alergiju na kikiriki.", ru: "У меня аллергия на арахис." },
          { sr: "Konobar, račun molim!", ru: "Официант, счёт, пожалуйста!" },
          { sr: "Živeli!", ru: "Ваше здоровье! (тост)" },
          { sr: "Bilo je veoma ukusno.", ru: "Было очень вкусно." }
        ],
        drill: {
          type: "choice",
          question: "Šta kažeš kad nazdravljas (tost) u Srbiji?",
          options: ["Živeli!", "Dovidjenja!", "Izvinite!"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod.",
    items: [
      { sr: "Da li imate vegetarijansku hranu?", ru: "У вас есть вегетарианская еда?" },
      { sr: "Molim vas, jelovnik.", ru: "Пожалуйста, меню." },
      { sr: "Šta je ovo jelo?", ru: "Что это за блюдо?" },
      { sr: "Previše je slano.", ru: "Слишком солёно." },
      { sr: "Da li je ljuto?", ru: "Это острое?" },
      { sr: "Mogu li da platim karticom?", ru: "Могу я заплатить картой?" },
      { sr: "Rezervisao sam sto za dvoje.", ru: "Я зарезервировал столик на двоих." },
      { sr: "Ovo je bilo odlično.", ru: "Это было отлично." },
      { sr: "Konobarica je veoma ljubazna.", ru: "Официантка очень приветливая." },
      { sr: "Čašu vode, molim.", ru: "Стакан воды, пожалуйста." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `<b>Živeli!</b> je standardni tost — koristi se bukvalno uvek kad se nazdravlja, bez obzira na prilike.`,
      `Napojnica (bakšiš) u Srbiji nije obavezna kao u SAD, ali je uobicajeno zaokruziti racun ili ostaviti 10% ako je usluga dobra.`,
      `Fraza <b>Mogu li da...?</b> + prezent je svestrana i radi za skoro svaku uljudnu molbu u restoranu, prodavnici ili na poslu.`,
      `Reč <b>jelovnik</b> (меню) je dobra da znas odmah — konobar/konobarica ce ti ga doneti kad sednes, često i bez da trazis.`
    ]
  },

  vocab: {
    titleRu: "Reči iz ove lekcije",
    words: [
      { sr: "jelovnik", ru: "меню" },
      { sr: "konobar / konobarica", ru: "официант / официантка" },
      { sr: "račun", ru: "счёт" },
      { sr: "supa", ru: "суп" },
      { sr: "salata", ru: "салат" },
      { sr: "riba", ru: "рыба" },
      { sr: "meso", ru: "мясо" },
      { sr: "povrće", ru: "овощи" },
      { sr: "voće", ru: "фрукты" },
      { sr: "hleb", ru: "хлеб" },
      { sr: "pirinač", ru: "рис" },
      { sr: "sok", ru: "сок" },
      { sr: "ukusno", ru: "вкусно" },
      { sr: "ljuto", ru: "острое" },
      { sr: "slano", ru: "солёное" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A1).",
      textSr: `<p>— Dobro veče! <span class="word" data-ru="Что вы рекомендуете?">Šta preporučujete</span>?<br>
      — Riba je odlicna danas.<br>
      — <span class="word" data-ru="Я хочу рыбу и салат.">Želim ribu i salatu</span>, molim.<br>
      — A za piće?<br>
      — <span class="word" data-ru="Стакан воды, пожалуйста.">Čašu vode, molim</span>.<br>
      (posle jela)<br>
      — <span class="word" data-ru="Было очень вкусно!">Bilo je veoma ukusno</span>! <span class="word" data-ru="Счёт, пожалуйста!">Račun, molim</span>!</p>`,
      comprehension: [
        {
          questionRu: "Что заказал гость?",
          options: ["Ribu i salatu.", "Supu i hleb.", "Meso i pirinač."],
          correctIndex: 0
        },
        {
          questionRu: "Что гость попросил в конце?",
          options: ["Račun.", "Jelovnik.", "Desert."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta znači 'jelovnik'?", options: ["меню", "счёт", "столик"], correct: 0 },
    { type: "mc", q: "Šta znači 'konobar'?", options: ["официант", "повар", "гость"], correct: 0 },
    { type: "mc", q: "Kako trazis racun?", options: ["Račun, molim.", "Jelovnik, molim.", "Hvala, dovidjenja."], correct: 0 },
    { type: "mc", q: "Šta se kaže kad nazdravljas?", options: ["Živeli!", "Prijatno!", "Dobar dan!"], correct: 0 },
    { type: "mc", q: "Koji je akuzativ reči 'supa'?", options: ["supu", "supa", "supi"], correct: 0 },
    { type: "mc", q: "Koji je akuzativ reči 'hleb' (neživo, muški rod)?", options: ["hleb", "hleba", "hlebu"], correct: 0 },
    { type: "mc", q: "Šta znači 'ukusno'?", options: ["вкусно", "горько", "солёно"], correct: 0 },
    { type: "mc", q: "Šta znači 'ljuto'?", options: ["острое", "сладкое", "кислое"], correct: 0 },
    { type: "mc", q: "Šta znači 'povrće'?", options: ["овощи", "фрукты", "мясо"], correct: 0 },
    { type: "mc", q: "Kako pitas 'У вас есть вода?'", options: ["Imate li vode?", "Imam vodu?", "Dajete vodu?"], correct: 0 },
    { type: "mc", q: "Šta znači 'alergija'?", options: ["аллергия", "болезнь", "вкус"], correct: 0 },
    { type: "mc", q: "Šta znači 'preporučiti'?", options: ["рекомендовать", "заказывать", "платить"], correct: 0 },
    { type: "fill", q: "Dopuni: ___ supu, molim. (želim)", answer: "Želim", alt: ["želim"] },
    { type: "fill", q: "Dopuni akuzativ: Jedem rib___. (riba)", answer: "u", alt: ["ribu"] },
    { type: "fill", q: "Prevedi na srpski 'Могу я получить счёт?':", answer: "Mogu li da dobijem račun?", alt: ["mogu li da dobijem racun"] },
    { type: "fill", q: "Prevedi na srpski 'Это было очень вкусно.':", answer: "Bilo je veoma ukusno.", alt: ["bilo je veoma ukusno"] },
    { type: "fill", q: "Napisi reč za 'официантка':", answer: "konobarica", alt: [] },
    { type: "fill", q: "Napisi akuzativ reči 'salata':", answer: "salatu", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'У вас есть вегетарианская еда?':", answer: "Da li imate vegetarijansku hranu?", alt: ["imate li vegetarijansku hranu"] },
    { type: "fill", q: "Napisi srpsku reč za 'стакан':", answer: "čaša", alt: ["casa"] }
  ]
};
