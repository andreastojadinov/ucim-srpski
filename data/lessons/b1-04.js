window.LESSONS = window.LESSONS || {};
window.LESSONS["b1-04"] = {
  slug: "b1-04",
  level: "B1",
  id: 4,
  titleSr: "Izražavanje mišljenja i argumentacija",
  titleRu: "Выражение мнения и аргументация",

  intro: {
    sr: "Danas učimo fraze za izražavanje mišljenja, slaganje/neslaganje i izgradnju argumenta — korisno za diskusije i eseje.",
    ru: "Эти фразы понадобятся в дискуссиях, на собеседованиях и при письме эссе. Они не требуют новой грамматики — в основном это готовые конструкции, которые стоит выучить как блоки."
  },

  grammar: {
    titleRu: "Izražavanje mišljenja",
    blocks: [
      {
        heading: "Osnovne fraze za mišljenje",
        explanationRu: "Основные способы выразить своё мнение — от нейтрального до более личного/мягкого.",
        table: {
          headers: ["Fraza", "Prevod"],
          rows: [
            ["Mislim da...", "Я думаю, что..."],
            ["Smatram da...", "Я считаю, что..."],
            ["Po mom mišljenju...", "По моему мнению..."],
            ["Čini mi se da...", "Мне кажется, что..."],
            ["Verujem da...", "Я верю, что..."]
          ]
        },
        examples: [
          { sr: "Mislim da je ovo dobra ideja.", ru: "Я думаю, что это хорошая идея." },
          { sr: "Po mom mišljenju, trebalo bi da promenimo plan.", ru: "По моему мнению, нам стоит изменить план." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni: Čini mi se ___ greši. (da)",
          answer: "da",
          alt: []
        }
      },
      {
        heading: "Slaganje i neslaganje",
        explanationRu: "Fraze za reakciju na tuđe mišljenje.",
        examples: [
          { sr: "Slažem se sa tobom.", ru: "Я согласен с тобой." },
          { sr: "Ne slažem se u potpunosti.", ru: "Я не совсем согласен." },
          { sr: "Imaš pravo.", ru: "Ты прав." },
          { sr: "Delimično se slažem, ali...", ru: "Я частично согласен, но..." },
          { sr: "Naprotiv, mislim da je obrnuto.", ru: "Напротив, я думаю, что наоборот." }
        ],
        drill: {
          type: "choice",
          question: "Kako kažeš 'Ты прав'?",
          options: ["Imaš pravo.", "Imaš istinu.", "Si u pravu."],
          correctIndex: 0
        }
      },
      {
        heading: "Argumentacija — povezivanje ideja",
        explanationRu: "Konektori koji organizuju argument u logičan niz — ključni za eseje i formalne diskusije.",
        examples: [
          { sr: "Prvo... Drugo... Na kraju...", ru: "Во-первых... Во-вторых... Наконец..." },
          { sr: "S jedne strane..., s druge strane...", ru: "С одной стороны..., с другой стороны..." },
          { sr: "Osim toga, treba uzeti u obzir...", ru: "Кроме того, нужно учесть..." },
          { sr: "Međutim, postoji i drugo mišljenje.", ru: "Однако существует и другое мнение." },
          { sr: "Zbog toga mislim da...", ru: "Поэтому я думаю, что..." }
        ],
        drill: {
          type: "choice",
          question: "Koji izraz znači 'однако' (kontrast)?",
          options: ["Međutim", "Zbog toga", "Osim toga"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Po mom mišljenju, obrazovanje je najvažnije.", ru: "По моему мнению, образование самое важное." },
      { sr: "Smatram da treba više da radimo na tome.", ru: "Я считаю, что нам нужно больше над этим работать." },
      { sr: "Delimično se slažem sa ovim stavom.", ru: "Я частично согласен с этой позицией." },
      { sr: "Na primer, mnoge zemlje su već to uradile.", ru: "Например, многие страны уже это сделали." },
      { sr: "S jedne strane je skupo, s druge strane je korisno.", ru: "С одной стороны дорого, с другой стороны полезно." },
      { sr: "Međutim, ne slažu se svi sa tim.", ru: "Однако не все с этим согласны." },
      { sr: "Zbog toga je važno da razmislimo ponovo.", ru: "Поэтому важно подумать снова." },
      { sr: "Argument nije dovoljno ubedljiv.", ru: "Аргумент недостаточно убедителен." },
      { sr: "Postoje jaki dokazi za ovu tvrdnju.", ru: "Есть веские доказательства этого утверждения." },
      { sr: "U svakom slučaju, vredi probati.", ru: "В любом случае, стоит попробовать." }
    ]
  },

  tips: {
    titleRu: "Советы",
    items: [
      "<b>Čini mi se da...</b> звучит мягче и более субъективно, чем <b>mislim da...</b> — хорошо подходит, когда не хочешь звучать слишком категорично.",
      "Для эссе и формальных текстов полезно выучить тройку <b>Prvo... Drugo... Na kraju...</b> как готовый каркас для структурирования аргументов.",
      "<b>Međutim</b> и <b>ali</b> оба означают «но/однако», но <b>međutim</b> более формальный и обычно ставится в начале нового предложения.",
      "Эта тема — хорошая подготовка к следующим урокам о деловом общении и собеседовании, где такие фразы встречаются постоянно."
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "mišljenje", ru: "мнение" },
      { sr: "stav", ru: "позиция, точка зрения" },
      { sr: "argument", ru: "аргумент" },
      { sr: "dokaz", ru: "доказательство" },
      { sr: "tvrdnja", ru: "утверждение" },
      { sr: "suprotno", ru: "противоположное" },
      { sr: "slagati se", ru: "соглашаться" },
      { sr: "razlog", ru: "причина" },
      { sr: "ubedljiv", ru: "убедительный" },
      { sr: "uzeti u obzir", ru: "учесть" },
      { sr: "obrazovanje", ru: "образование" },
      { sr: "korisno", ru: "полезно" },
      { sr: "ipak", ru: "всё же" },
      { sr: "u svakom slučaju", ru: "в любом случае" },
      { sr: "ubediti", ru: "убедить" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo B1) — mini-esej.",
      textSr: "<p><span class=\"word\" data-ru=\"По моему мнению\">Po mom mišljenju</span>, učenje stranog jezika menja način razmišljanja. <span class=\"word\" data-ru=\"С одной стороны\">S jedne strane</span>, otvara nove mogućnosti za posao. <span class=\"word\" data-ru=\"С другой стороны\">S druge strane</span>, zahteva mnogo vremena i strpljenja. <span class=\"word\" data-ru=\"Однако\">Međutim</span>, <span class=\"word\" data-ru=\"я считаю\">smatram</span> da je trud uvek vredan rezultata. <span class=\"word\" data-ru=\"Поэтому\">Zbog toga</span> savetujem svima da probaju.</p>",
      comprehension: [
        {
          questionRu: "Что, по мнению автора, меняет изучение языка?",
          options: ["Način razmišljanja.", "Finansijsku situaciju.", "Mesto stanovanja."],
          correctIndex: 0
        },
        {
          questionRu: "Что автор советует в конце?",
          options: ["Da svi probaju da uče jezik.", "Da odustanu.", "Da čekaju bolje vreme."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Kako kažeš 'Я думаю, что...'?", options: ["Mislim da...", "Mislim što...", "Ja misli da..."], correct: 0 },
    { type: "mc", q: "Kako kažeš 'По моему мнению'?", options: ["Po mom mišljenju", "Po moj mišljenje", "Moje mišljenje je"], correct: 0 },
    { type: "mc", q: "Kako kažeš 'Я согласен'?", options: ["Slažem se", "Slažem ja", "Imam slaganje"], correct: 0 },
    { type: "mc", q: "Kako kažeš 'Однако'?", options: ["Međutim", "Osim toga", "Zbog toga"], correct: 0 },
    { type: "mc", q: "Kako kažeš 'Кроме того'?", options: ["Osim toga", "Međutim", "Na primer"], correct: 0 },
    { type: "mc", q: "Šta znači 'argument'?", options: ["аргумент", "вопрос", "ответ"], correct: 0 },
    { type: "mc", q: "Šta znači 'dokaz'?", options: ["доказательство", "сомнение", "вопрос"], correct: 0 },
    { type: "mc", q: "Šta znači 'slagati se'?", options: ["соглашаться", "спорить", "сомневаться"], correct: 0 },
    { type: "mc", q: "Šta znači 'ubedljiv'?", options: ["убедительный", "сомнительный", "скучный"], correct: 0 },
    { type: "mc", q: "Koja fraza zvuči mekše/subjektivnije?", options: ["Čini mi se da...", "Mislim da...", "Tvrdim da..."], correct: 0 },
    { type: "mc", q: "Šta znači 'razlog'?", options: ["причина", "результат", "вопрос"], correct: 0 },
    { type: "mc", q: "Šta znači 'uzeti u obzir'?", options: ["учесть", "забыть", "отвергнуть"], correct: 0 },
    { type: "fill", q: "Dopuni: ___ se sa tobom. (slagati, ja)", answer: "Slažem", alt: ["slazem"] },
    { type: "fill", q: "Dopuni: Imaš ___. (pravo)", answer: "pravo", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я считаю, что это важно.':", answer: "Smatram da je to važno.", alt: ["smatram da je to vazno"] },
    { type: "fill", q: "Prevedi na srpski 'С одной стороны..., с другой стороны...':", answer: "S jedne strane..., s druge strane...", alt: ["s jedne strane s druge strane"] },
    { type: "fill", q: "Napiši reč za 'мнение':", answer: "mišljenje", alt: ["misljenje"] },
    { type: "fill", q: "Napiši reč za 'убедить':", answer: "ubediti", alt: [] },
    { type: "fill", q: "Napiši frazu za 'Во-первых':", answer: "Prvo", alt: ["prvo"] },
    { type: "fill", q: "Napiši reč za 'причина':", answer: "razlog", alt: [] }
  ]
};
