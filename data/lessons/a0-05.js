window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-05"] = {
  slug: "a0-05",
  level: "A0",
  id: 5,
  titleSr: "Brojevi 0–100 i cene",
  titleRu: "Числа 0–100 и цены",

  intro: {
    sr: `Danas učimo brojeve od 0 do 100 i kako da pitas i kažeš cenu neceg.`,
    ru: `Числа нужны постоянно — в магазине, по телефону, при обсуждении возраста и времени. В этом уроке — числа 0–100 и то, как спросить и назвать цену. Обратите внимание: число «1» и «2» в сербском согласуются по роду, как и в русском («один/одна/одно», «два/две»).`
  },

  grammar: {
    titleRu: "Brojevi i cene",
    blocks: [
      {
        heading: "Brojevi 0–20",
        explanationRu: `Числа 1 и 2 имеют формы рода: <b>jedan</b> (м.р.) / <b>jedna</b> (ж.р.) / <b>jedno</b> (с.р.), и <b>dva</b> (м.р./с.р.) / <b>dve</b> (ж.р.) — совсем как в русском «один/одна/одно» и «два/две». Числа от 5 и выше не меняются по родам.`,
        table: {
          headers: ["Broj", "Reč"],
          rows: [
            ["0", "nula"], ["1", "jedan / jedna / jedno"], ["2", "dva / dve"], ["3", "tri"], ["4", "četiri"],
            ["5", "pet"], ["6", "šest"], ["7", "sedam"], ["8", "osam"], ["9", "devet"],
            ["10", "deset"], ["11", "jedanaest"], ["15", "petnaest"], ["20", "dvadeset"]
          ]
        },
        drill: {
          type: "fill",
          question: "Napiši broj 7 na srpskom:",
          answer: "sedam",
          alt: []
        }
      },
      {
        heading: "Desetice 20–100",
        explanationRu: `Десятки образуются похоже на русский («двадцать», «тридцать»...). Числа между десятками строятся так же, как в русском: десяток + число, например <b>dvadeset jedan</b> (двадцать один), <b>dvadeset pet</b> (двадцать пять).`,
        table: {
          headers: ["Broj", "Reč"],
          rows: [
            ["20", "dvadeset"], ["30", "trideset"], ["40", "četrdeset"], ["50", "pedeset"],
            ["60", "šezdeset"], ["70", "sedamdeset"], ["80", "osamdeset"], ["90", "devedeset"], ["100", "sto"]
          ]
        },
        examples: [
          { sr: "dvadeset jedan (21)", ru: "двадцать один" },
          { sr: "trideset pet (35)", ru: "тридцать пять" },
          { sr: "devedeset devet (99)", ru: "девяносто девять" }
        ],
        drill: {
          type: "fill",
          question: "Napiši broj 45 na srpskom (rečima):",
          answer: "četrdeset pet",
          alt: ["cetrdeset pet"]
        }
      },
      {
        heading: "Brojevi i imenice — slaganje (osnovno)",
        explanationRu: `Как и в русском («один дом, два дома, пять домов»), в сербском форма существительного после числа зависит от числа: после <b>1</b> — обычная форма единственного числа; после <b>2, 3, 4</b> — особая «счётная» форма (похожая на множественное число); после <b>5</b> и далее — особая форма родительного падежа множественного числа. Подробно падежи разберём позже — сейчас достаточно запомнить образец на знакомом слове.`,
        examples: [
          { sr: "jedna knjiga", ru: "одна книга" },
          { sr: "dve knjige", ru: "две книги" },
          { sr: "pet knjiga", ru: "пять книг" }
        ],
        drill: {
          type: "choice",
          question: "Koji oblik ide uz broj 'dve'?",
          options: ["dve knjige", "dve knjiga", "dve knjigu"],
          correctIndex: 0
        }
      },
      {
        heading: "Cene — Koliko košta?",
        explanationRu: `Чтобы спросить цену, используется глагол <b>koštati</b> («стоить»): <b>Koliko košta?</b> — «Сколько стоит?». В Сербии в быту часто говорят о ценах и в <b>dinar</b> (динарах, местная валюта, сокращённо RSD) и в <b>evro</b> (евро) для крупных сумм вроде аренды жилья.`,
        examples: [
          { sr: "Koliko košta hleb?", ru: "Сколько стоит хлеб?" },
          { sr: "Košta dvesta dinara.", ru: "Стоит двести динаров." },
          { sr: "To je skupo / jeftino.", ru: "Это дорого / дешёво." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Koliko ___ ovaj hleb? (koštati)",
          answer: "košta",
          alt: ["kosta"]
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Imam trideset godina.", ru: "Мне тридцать лет." },
      { sr: "Moj broj telefona je nula-šest-pet...", ru: "Мой номер телефона — ноль-шесть-пять..." },
      { sr: "Koliko košta kafa?", ru: "Сколько стоит кофе?" },
      { sr: "Kafa košta sto pedeset dinara.", ru: "Кофе стоит сто пятьдесят динаров." },
      { sr: "To je previše skupo.", ru: "Это слишком дорого." },
      { sr: "Imate li kusur?", ru: "У вас есть мелочь / сдача?" },
      { sr: "Platiću karticom.", ru: "Я заплачу картой." },
      { sr: "Račun, molim.", ru: "Счёт, пожалуйста." },
      { sr: "Dvadeset evra, molim.", ru: "Двадцать евро, пожалуйста." },
      { sr: "Deset dinara je jeftino.", ru: "Десять динаров — это дёшево." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Номера телефонов сербы обычно произносят по цифре или парами — похоже на русский.`,
      `Слово <b>evro</b> (евро) используется для крупных сумм (аренда, зарплаты), а <b>dinar</b> — для повседневных мелких покупок — полезно знать оба.`,
      `Фраза <b>Koliko košta?</b> работает и в единственном, и во множественном контексте — для нескольких предметов спрашивают «Koliko košta ovo?», указывая на предмет, без изменения глагола.`,
      `Согласование чисел с существительными (1 / 2-4 / 5+) выглядит похоже на русское, но формы существительных отличаются — это подробно изучим через падежи на уровне A1.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "nula – deset", ru: "ноль – десять (видите таблицу выше)" },
      { sr: "dvadeset", ru: "двадцать" },
      { sr: "sto", ru: "сто" },
      { sr: "koštati", ru: "стоить" },
      { sr: "cena", ru: "цена" },
      { sr: "novac", ru: "деньги" },
      { sr: "dinar", ru: "динар (валюта)" },
      { sr: "evro", ru: "евро" },
      { sr: "platiti", ru: "заплатить" },
      { sr: "jeftino", ru: "дёшево" },
      { sr: "skupo", ru: "дорого" },
      { sr: "koliko", ru: "сколько" },
      { sr: "račun", ru: "счёт" },
      { sr: "kusur", ru: "сдача, мелочь" },
      { sr: "kartica", ru: "карта (банковская)" }
    ],
    reading: {
      sourceNote: "Originalan kratak dijalog napisan za ovaj kurs (nivo A0) — scena u prodavnici.",
      textSr: `<p>— Dobar dan! <span class="word" data-ru="Сколько стоит этот хлеб?">Koliko košta ovaj hleb</span>?<br>
      — <span class="word" data-ru="Стоит сто двадцать динаров.">Košta sto dvadeset dinara</span>.<br>
      — A ova kafa?<br>
      — <span class="word" data-ru="Двести динаров.">Dvesta dinara</span>.<br>
      — <span class="word" data-ru="Хорошо, я заплачу картой.">Dobro, platiću karticom</span>.<br>
      — Nema problema. <span class="word" data-ru="Пожалуйста, вот ваш чек.">Izvolite račun</span>.</p>`,
      comprehension: [
        {
          questionRu: "Сколько стоит хлеб в диалоге?",
          options: ["Sto dvadeset dinara.", "Dvesta dinara.", "Deset evra."],
          correctIndex: 0
        },
        {
          questionRu: "Как покупатель платит?",
          options: ["Karticom.", "Kešom.", "Ne plaća."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kako se kaže broj 5?", options: ["pet", "pedeset", "deset"], correct: 0 },
    { type: "mc", q: "Kako se kaže broj 50?", options: ["pedeset", "pet", "petnaest"], correct: 0 },
    { type: "mc", q: "Kako se kaže broj 15?", options: ["petnaest", "pedeset", "pet"], correct: 0 },
    { type: "mc", q: "Koji oblik broja 1 ide uz 'knjiga' (ženski rod)?", options: ["jedna", "jedan", "jedno"], correct: 0 },
    { type: "mc", q: "Koji oblik broja 2 ide uz 'knjiga' (ženski rod)?", options: ["dve", "dva", "dvoje"], correct: 0 },
    { type: "mc", q: "Šta znači 'Koliko košta?'", options: ["Сколько стоит?", "Сколько лет?", "Где это?"], correct: 0 },
    { type: "mc", q: "Šta je 'dinar'?", options: ["valuta Srbije", "valuta Rusije", "vrsta hleba"], correct: 0 },
    { type: "mc", q: "Šta znači 'skupo'?", options: ["дорого", "дёшево", "бесплатно"], correct: 0 },
    { type: "mc", q: "Šta znači 'jeftino'?", options: ["дёшево", "дорого", "дорогой"], correct: 0 },
    { type: "mc", q: "Šta znači 'račun' u prodavnici?", options: ["счёт/чек", "мелочь", "карта"], correct: 0 },
    { type: "mc", q: "Kako se kaže 100?", options: ["sto", "sedam", "šest"], correct: 0 },
    { type: "mc", q: "Kako se kaže 'deset' na ruskom?", options: ["десять", "десятка", "десятый"], correct: 0 },
    { type: "fill", q: "Napiši reč za broj 30:", answer: "trideset", alt: [] },
    { type: "fill", q: "Napiši reč za broj 90:", answer: "devedeset", alt: [] },
    { type: "fill", q: "Napiši reč za broj 12:", answer: "dvanaest", alt: [] },
    { type: "fill", q: "Dopuni: Kafa ___ sto dinara. (koštati)", answer: "košta", alt: ["kosta"] },
    { type: "fill", q: "Prevedi na srpski 'Сколько стоит?':", answer: "Koliko košta?", alt: ["koliko kosta", "Koliko kosta?"] },
    { type: "fill", q: "Napiši broj 21 rečima:", answer: "dvadeset jedan", alt: [] },
    { type: "fill", q: "Napiši broj 100 rečju:", answer: "sto", alt: [] },
    { type: "fill", q: "Prevedi na srpski reč 'деньги':", answer: "novac", alt: [] }
  ]
};
