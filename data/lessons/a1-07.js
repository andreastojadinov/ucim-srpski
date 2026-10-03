window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-07"] = {
  slug: "a1-07",
  level: "A1",
  id: 7,
  titleSr: "Kupovina i brojevi uz padeže",
  titleRu: "Покупки и числа с падежами",

  intro: {
    sr: `Danas učimo kako brojevi 5 i vise "trazi" genitiv množine, i korisne fraze za kupovinu.`,
    ru: `В уроке A0-05 вы уже писали «pet godina», «pet sati», не зная почему. Сегодня раскроем секрет: после чисел 5 и больше существительное стоит в <b>genitiv množine</b> (родительный падеж множественного числа) — точно как в русском «пять яблок» (не «яблоки»)! Это та же логика, просто с сербскими окончаниями.`
  },

  grammar: {
    titleRu: "Genitiv množine uz brojeve",
    blocks: [
      {
        heading: "Brojevi i imenice — potpuna slika",
        explanationRu: `Напомним и завершим правило из A0-05: <b>1</b> → обычная форма единственного числа; <b>2, 3, 4</b> → особая счётная форма (похожая на им. падеж мн. числа); <b>5 и больше</b> → <b>genitiv množine</b>. Это абсолютно та же логика, что в русском «один дом / два дома / пять домов».`,
        table: {
          headers: ["Broj", "jabuka (ž.)", "paradajz (m.)", "jaje (s.)"],
          rows: [
            ["1", "jabuka", "paradajz", "jaje"],
            ["2–4", "jabuke", "paradajza", "jaja"],
            ["5+", "jabuka (genitiv mn.)", "paradajza (genitiv mn.)", "jaja (genitiv mn.)"]
          ]
        },
        drill: {
          type: "fill",
          question: "Dopuni: Imam pet ___. (jabuka, 5+, genitiv množine)",
          answer: "jabuka",
          alt: []
        }
      },
      {
        heading: "Zamka: genitiv množine ženskog roda izgleda kao jednina!",
        explanationRu: `Важная ловушка: у существительных женского рода на <b>-a</b> генитив множественного числа часто выглядит <b>точно как форма 1 (единственное число)</b> — "jabuka" и "jabuka" пишутся одинаково! Разница видна только по числу перед словом: <b>jedna jabuka</b> (одно яблоко) vs <b>pet jabuka</b> (пять яблок, генитив мн. ч.) — то же "совпадение формы", что иногда бывает и в русском у некоторых слов.`,
        examples: [
          { sr: "Imam jednu jabuku. (akuzativ, 1)", ru: "У меня одно яблоко." },
          { sr: "Imam pet jabuka. (genitiv mn., 5+)", ru: "У меня пять яблок." },
          { sr: "Kilogram jabuka košta sto dinara.", ru: "Килограмм яблок стоит сто динаров." }
        ],
        drill: {
          type: "choice",
          question: "U rečenici 'Kupujem pet banana', oblik 'banana' je:",
          options: ["genitiv množine", "nominativ jednine", "akuzativ jednine"],
          correctIndex: 0
        }
      },
      {
        heading: "Kupovina — korisne fraze sa količinama",
        explanationRu: `Слова количества (<b>kilogram, litar, komad, malo, mnogo, nekoliko</b>) тоже требуют после себя genitiv — часто genitiv množine, как и после чисел 5+.`,
        examples: [
          { sr: "Molim kilogram krompira.", ru: "Пожалуйста, килограмм картофеля." },
          { sr: "Treba mi malo šećera.", ru: "Мне нужно немного сахара." },
          { sr: "Dajte mi nekoliko jaja.", ru: "Дайте мне несколько яиц." },
          { sr: "Litar mleka, molim.", ru: "Литр молока, пожалуйста." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Molim kilogram krompir___. (krompir, genitiv)",
          answer: "a",
          alt: ["krompira"]
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Koliko košta kilogram jabuka?", ru: "Сколько стоит килограмм яблок?" },
      { sr: "Imate li popust?", ru: "У вас есть скидка?" },
      { sr: "Dajte mi dve flaše vode, molim.", ru: "Дайте мне две бутылки воды, пожалуйста." },
      { sr: "Treba mi kesa.", ru: "Мне нужен пакет." },
      { sr: "Ovo je sveže?", ru: "Это свежее?" },
      { sr: "Pola kilograma sira, molim.", ru: "Полкило сыра, пожалуйста." },
      { sr: "Imam samo karticu.", ru: "У меня только карта." },
      { sr: "Gde je pijaca?", ru: "Где рынок?" },
      { sr: "Ovo je skuplje nego juče.", ru: "Это дороже, чем вчера." },
      { sr: "Hoćete li kesu?", ru: "Вам нужен пакет?" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Genitiv množine je jedan od najkorisnijih padeža u svakodnevnoj kupovini — vredi ga uvezbati na recima koje najcesce kupujes.`,
      `Kad nisi siguran kakav je genitiv množine neke reči, slobodno koristi osnovni (nominativ) oblik — ljudi ce te razumeti, iako nije savrseno gramaticki.`,
      `<b>Pijaca</b> (open-air market) je mesto gde su cene često nize i gde je normalno pregovarati malo o ceni — drugacije nego u supermarketu.`,
      `Fraza "Treba mi..." (мне нужно...) + genitiv je vrlo korisna i van kupovine — radi za gotovo sve svakodnevne potrebe.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "jabuka", ru: "яблоко" },
      { sr: "banana", ru: "банан" },
      { sr: "paradajz", ru: "помидор" },
      { sr: "krompir", ru: "картофель" },
      { sr: "jaje", ru: "яйцо" },
      { sr: "mleko", ru: "молоко" },
      { sr: "šećer", ru: "сахар" },
      { sr: "sir", ru: "сыр" },
      { sr: "kilogram", ru: "килограмм" },
      { sr: "litar", ru: "литр" },
      { sr: "kesa", ru: "пакет" },
      { sr: "pijaca", ru: "рынок" },
      { sr: "popust", ru: "скидка" },
      { sr: "sveže", ru: "свежее" },
      { sr: "nekoliko", ru: "несколько" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A1) — na pijaci.",
      textSr: `<p>— Dobar dan! <span class="word" data-ru="Сколько стоит килограмм яблок?">Koliko košta kilogram jabuka</span>?<br>
      — Sto dinara.<br>
      — Dobro, <span class="word" data-ru="дайте мне пять яблок">dajte mi pet jabuka</span> i <span class="word" data-ru="немного помидоров">malo paradajza</span>.<br>
      — Izvolite. Treba li vam još nešto?<br>
      — <span class="word" data-ru="Да, литр молока и несколько яиц.">Da, litar mleka i nekoliko jaja</span>.<br>
      — Evo. <span class="word" data-ru="Вам нужен пакет?">Hoćete li kesu</span>?<br>
      — Da, hvala!</p>`,
      comprehension: [
        {
          questionRu: "Сколько яблок покупает покупатель?",
          options: ["Pet.", "Dve.", "Deset."],
          correctIndex: 0
        },
        {
          questionRu: "Что ещё покупатель берёт кроме яблок и помидоров?",
          options: ["Mleko i jaja.", "Sir i hleb.", "Bananu."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji padež ide uz brojeve 5 i vise?", options: ["genitiv množine", "akuzativ jednine", "nominativ množine"], correct: 0 },
    { type: "mc", q: "Kako izgleda genitiv množine 'jabuka' (ž. rod na -a)?", options: ["jabuka (isto kao 1)", "jabukama", "jabuke"], correct: 0 },
    { type: "mc", q: "U 'pet banana', 'banana' je:", options: ["genitiv množine", "nominativ jednine", "dativ"], correct: 0 },
    { type: "mc", q: "Koji padež trazi reč 'kilogram' (kolicina)?", options: ["genitiv", "akuzativ", "lokativ"], correct: 0 },
    { type: "mc", q: "Šta znači 'popust'?", options: ["скидка", "цена", "вес"], correct: 0 },
    { type: "mc", q: "Šta znači 'sveže'?", options: ["свежее", "старое", "дорогое"], correct: 0 },
    { type: "mc", q: "Šta znači 'pijaca'?", options: ["рынок", "магазин", "ресторан"], correct: 0 },
    { type: "mc", q: "Šta znači 'kesa'?", options: ["пакет", "коробка", "бутылка"], correct: 0 },
    { type: "mc", q: "Koliko jabuka ima u frazi 'dve jabuke'?", options: ["dve", "pet", "jedna"], correct: 0 },
    { type: "mc", q: "Šta znači 'nekoliko'?", options: ["несколько", "много", "мало"], correct: 0 },
    { type: "mc", q: "Šta znači 'treba mi'?", options: ["мне нужно", "я хочу", "я имею"], correct: 0 },
    { type: "mc", q: "Koji oblik ide uz 'jedna' (1) jabuka?", options: ["jabuka (nominativ jednine)", "jabuka (genitiv množine)", "jabuke"], correct: 0 },
    { type: "fill", q: "Dopuni: Imam pet ___. (jaje, genitiv množine)", answer: "jaja", alt: [] },
    { type: "fill", q: "Dopuni: Treba mi malo ___. (šećer, genitiv)", answer: "šećera", alt: ["secera"] },
    { type: "fill", q: "Prevedi na srpski 'Сколько стоит килограмм картофеля?':", answer: "Koliko košta kilogram krompira?", alt: ["koliko kosta kilogram krompira"] },
    { type: "fill", q: "Prevedi na srpski 'Дайте мне несколько яиц.':", answer: "Dajte mi nekoliko jaja.", alt: ["dajte mi nekoliko jaja"] },
    { type: "fill", q: "Napisi genitiv množine reči 'paradajz' (m. rod):", answer: "paradajza", alt: [] },
    { type: "fill", q: "Napisi reč za 'рынок':", answer: "pijaca", alt: [] },
    { type: "fill", q: "Napisi reč za 'скидка':", answer: "popust", alt: [] },
    { type: "fill", q: "Dopuni: Litar ___, molim. (mleko, genitiv)", answer: "mleka", alt: [] }
  ]
};
