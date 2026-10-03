window.LESSONS = window.LESSONS || {};
window.LESSONS["a0-08"] = {
  slug: "a0-08",
  level: "A0",
  id: 8,
  titleSr: "Boje i pokazne zamenice",
  titleRu: "Цвета и указательные местоимения",

  intro: {
    sr: `Danas učimo boje i pokazne zamenice ovaj/taj/onaj (etot/tot).`,
    ru: `Цвета — это тоже прилагательные, значит они согласуются по роду, как вы уже видели. А указательные местоимения в сербском устроены интереснее, чем в русском: вместо двух вариантов «этот/тот» здесь целых три — в зависимости от того, где находится предмет.`
  },

  grammar: {
    titleRu: "Boje i pokazne zamenice",
    blocks: [
      {
        heading: "Boje",
        explanationRu: `Большинство цветов — обычные прилагательные с формами по роду. Но заимствованные цвета, такие как <b>braon</b> (коричневый) и <b>roze</b> (розовый), не изменяются вообще — одна форма на все рода.`,
        table: {
          headers: ["Muški", "Ženski", "Srednji", "Prevod"],
          rows: [
            ["crven", "crvena", "crveno", "красный"],
            ["plav", "plava", "plavo", "синий / голубой"],
            ["zelen", "zelena", "zeleno", "зелёный"],
            ["žut", "žuta", "žuto", "жёлтый"],
            ["beo", "bela", "belo", "белый (неправильная форма)"],
            ["crn", "crna", "crno", "чёрный"],
            ["braon (sve isto)", "braon", "braon", "коричневый (не menja se)"]
          ]
        },
        drill: {
          type: "choice",
          question: "Koja je zenska forma boje 'crven'?",
          options: ["crvena", "crveno", "crveni"],
          correctIndex: 0
        }
      },
      {
        heading: "Pokazne zamenice — ovaj, taj, onaj",
        explanationRu: `В русском обычно два варианта («этот» / «тот»), а в сербском — три, по степени удалённости: <b>ovaj/ova/ovo</b> — рядом со мной (говорящим); <b>taj/ta/to</b> — рядом с собеседником или уже упомянутое; <b>onaj/ona/ono</b> — далеко от обоих.`,
        table: {
          headers: ["", "Muški", "Ženski", "Srednji"],
          rows: [
            ["blizu mene (near me)", "ovaj", "ova", "ovo"],
            ["blizu sagovornika (near you)", "taj", "ta", "to"],
            ["daleko (far / that over there)", "onaj", "ona", "ono"]
          ]
        },
        examples: [
          { sr: "Ovaj auto je crven.", ru: "Эта машина (рядом со мной) красная." },
          { sr: "Ta knjiga je zanimljiva.", ru: "Та книга (у тебя / уже упомянутая) интересная." },
          { sr: "Onaj čovek je visok.", ru: "Тот человек (вдалеке) высокий." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: ___ auto je crven. (pokazna zamenica za 'ovaj', muški rod)",
          answer: "Ovaj",
          alt: ["ovaj"]
        }
      },
      {
        heading: "Slaganje: pokazna zamenica + pridev + imenica",
        explanationRu: `Все три слова в цепочке «указательное местоимение + прилагательное + существительное» должны быть одного рода.`,
        examples: [
          { sr: "Ova crvena kuća je lepa.", ru: "Этот красный дом красивый. (ж.р.: kuća)" },
          { sr: "Taj žuti auto je nov.", ru: "Та жёлтая машина новая." },
          { sr: "Ono belo dete...", ru: "То беленькое дитя... (напр. в сказке)" }
        ],
        drill: {
          type: "choice",
          question: "Koji oblik ide uz 'kuća' (ženski rod) — '___ crvena kuća'?",
          options: ["Ova", "Ovaj", "Ovo"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Nebo je plavo.", ru: "Небо синее." },
      { sr: "Trava je zelena.", ru: "Трава зелёная." },
      { sr: "Imam crvenu jaknu.", ru: "У меня красная куртка." },
      { sr: "Ovaj sto je crn.", ru: "Этот стол чёрный." },
      { sr: "Ta haljina je bela.", ru: "То платье белое." },
      { sr: "Onaj auto je žut.", ru: "Та машина (вдали) жёлтая." },
      { sr: "Volim braon cipele.", ru: "Я люблю коричневые туфли." },
      { sr: "Ova knjiga je moja.", ru: "Эта книга моя." },
      { sr: "To je dobra ideja.", ru: "Это хорошая идея." },
      { sr: "Onoliko ljudi!", ru: "Сколько (вон тех) людей! (изредка встречающаяся форма)" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `<b>Beo → bela → belo</b> je nepravilno (očekivali bismo "bel/bela/belo") — ovo je stara promena koju jednostavno treba zapamtiti.`,
      `Pozajmljene boje kao <b>braon</b>, <b>roze</b>, <b>bordo</b> se <b>ne menjaju</b> po rodu — uvek ista reč, bez obzira na imenicu.`,
      `Sistem ovaj/taj/onaj nema tačan ekvivalent u ruskom (koji ima samo этот/тот) — u praksi, ako nisi siguran, <b>taj/ta/to</b> je najcesci i "najsigurniji" izbor za opste "тот/та/то".`,
      `U svakodnevnom govoru <b>ovaj</b> se često koristi i kao "poštapalica" (слово-паразит) kad razmisljas šta dalje reči — slicno ruskom "это самое".`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "crven / crvena / crveno", ru: "красный" },
      { sr: "plav / plava / plavo", ru: "синий / голубой" },
      { sr: "zelen / zelena / zeleno", ru: "зелёный" },
      { sr: "žut / žuta / žuto", ru: "жёлтый" },
      { sr: "beo / bela / belo", ru: "белый" },
      { sr: "crn / crna / crno", ru: "чёрный" },
      { sr: "braon", ru: "коричневый" },
      { sr: "roze", ru: "розовый" },
      { sr: "ljubičast / -a / -o", ru: "фиолетовый" },
      { sr: "narandžast / -a / -o", ru: "оранжевый" },
      { sr: "ovaj / ova / ovo", ru: "этот / эта / это" },
      { sr: "taj / ta / to", ru: "тот / та / то (ближе к собеседнику)" },
      { sr: "onaj / ona / ono", ru: "тот / та / то (далеко)" },
      { sr: "boja", ru: "цвет" },
      { sr: "nebo", ru: "небо" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A0).",
      textSr: `<p>Danas je lep dan. <span class="word" data-ru="Небо голубое">Nebo je plavo</span>, a <span class="word" data-ru="трава зелёная">trava je zelena</span>. <span class="word" data-ru="Эта машина, рядом со мной">Ovaj auto</span> pored mene je <span class="word" data-ru="красная">crven</span>, a <span class="word" data-ru="та машина, вдалеке">onaj auto</span> tamo dalje je <span class="word" data-ru="жёлтая">žut</span>. Nosim <span class="word" data-ru="коричневые туфли">braon cipele</span> i <span class="word" data-ru="белую рубашку">belu majicu</span>.</p>`,
      comprehension: [
        {
          questionRu: "Какого цвета машина рядом с автором?",
          options: ["Crven.", "Žut.", "Plav."],
          correctIndex: 0
        },
        {
          questionRu: "Какого цвета обувь у автора?",
          options: ["Braon.", "Crna.", "Bela."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Šta znači 'crven'?", options: ["красный", "синий", "зелёный"], correct: 0 },
    { type: "mc", q: "Šta znači 'žut'?", options: ["жёлтый", "белый", "чёрный"], correct: 0 },
    { type: "mc", q: "Koja boja se NE menja po rodu?", options: ["braon", "crven", "plav"], correct: 0 },
    { type: "mc", q: "Koji je ženski oblik boje 'beo'?", options: ["bela", "belo", "beloa"], correct: 0 },
    { type: "mc", q: "Koju pokaznu zamenicu koristis za nešto blizu tebe (govorniku)?", options: ["ovaj", "taj", "onaj"], correct: 0 },
    { type: "mc", q: "Koju pokaznu zamenicu koristis za nešto daleko od oboje?", options: ["onaj", "ovaj", "taj"], correct: 0 },
    { type: "mc", q: "Koji oblik od 'taj' ide uz srednji rod?", options: ["to", "taj", "ta"], correct: 0 },
    { type: "mc", q: "Koji oblik od 'ovaj' ide uz ženski rod?", options: ["ova", "ovaj", "ovo"], correct: 0 },
    { type: "mc", q: "Šta znači 'nebo je plavo'?", options: ["Небо синее.", "Трава зелёная.", "Машина красная."], correct: 0 },
    { type: "mc", q: "Koliko 'nivoa udaljenosti' ima srpski pokazni sistem?", options: ["tri", "dva", "cetiri"], correct: 0 },
    { type: "mc", q: "Šta znači 'zelen'?", options: ["зелёный", "жёлтый", "коричневый"], correct: 0 },
    { type: "mc", q: "Šta znači 'boja'?", options: ["цвет", "форма", "размер"], correct: 0 },
    { type: "fill", q: "Dopuni: ___ knjiga je zanimljiva. (taj, ženski rod)", answer: "Ta", alt: ["ta"] },
    { type: "fill", q: "Napisi musku formu pridjeva 'красный':", answer: "crven", alt: [] },
    { type: "fill", q: "Napisi srednju formu pridjeva 'белый':", answer: "belo", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'тот человек (вдалеке)':", answer: "onaj čovek", alt: ["onaj čovek"] },
    { type: "fill", q: "Napisi boju koja znači 'коричневый' (nepromenljiva reč):", answer: "braon", alt: [] },
    { type: "fill", q: "Dopuni: ___ auto je žut. (ovaj, muški rod)", answer: "Ovaj", alt: ["ovaj"] },
    { type: "fill", q: "Napisi zensku formu pridjeva 'чёрный':", answer: "crna", alt: [] },
    { type: "fill", q: "Prevedi na srpski reč 'небо':", answer: "nebo", alt: [] }
  ]
};
