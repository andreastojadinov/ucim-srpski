window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-09"] = {
  slug: "a1-09",
  level: "A1",
  id: 9,
  titleSr: "Komparacija prideva",
  titleRu: "Сравнение прилагательных",

  intro: {
    sr: `Danas učimo komparativ (lepši, bolji...) i superlativ (najlepši, najbolji...).`,
    ru: `Хорошая новость: самые частые сравнительные формы — <b>неправильные</b>, и они почти зеркально совпадают с русскими неправильными формами: <i>bolji</i> (лучше), <i>gori</i> (хуже), <i>veći</i> (больше), <i>manji</i> (меньше). Это даёт вам готовый список для запоминания практически бесплатно.`
  },

  grammar: {
    titleRu: "Komparativ i superlativ",
    blocks: [
      {
        heading: "Komparativ — nepravilni oblici (najčešći!)",
        explanationRu: `Это самые частотные прилагательные в сравнении, и у всех неправильная форма — точно как в русском.`,
        table: {
          headers: ["Positiv", "Komparativ", "Prevod"],
          rows: [
            ["dobar", "bolji", "лучше (как «хороший → лучше»)"],
            ["loš / zao", "gori", "хуже"],
            ["velik", "veći", "больше"],
            ["mali", "manji", "меньше"]
          ]
        },
        drill: {
          type: "choice",
          question: "Kako se kaže 'лучше' (komparativ od dobar)?",
          options: ["bolji", "dobriji", "najbolji"],
          correctIndex: 0
        }
      },
      {
        heading: "Komparativ — pravilni obrasci (-iji / -ši / -ji)",
        explanationRu: `Большинство других прилагательных образуют компаратив суффиксом <b>-iji</b>, или более короткими <b>-ši/-ji</b> с изменением последнего согласного (похожие звуковые чередования встречаются и в русском: друг → дружеский).`,
        table: {
          headers: ["Positiv", "Komparativ", "Prevod"],
          rows: [
            ["lep", "lepši", "красивее"],
            ["mlad", "mlađi", "моложе"],
            ["brz", "brži", "быстрее"],
            ["pametan", "pametniji", "умнее"],
            ["zanimljiv", "zanimljiviji", "интереснее"]
          ]
        },
        drill: {
          type: "fill",
          question: "Dopuni komparativ: pametan → pametn___. (-iji)",
          answer: "iji",
          alt: ["pametniji"]
        }
      },
      {
        heading: "Superlativ (NAJ-) i poređenje sa OD",
        explanationRu: `Суперлатив — это просто приставка <b>naj-</b> перед компаративом: <i>najbolji</i> (самый лучший), <i>najveći</i> (самый большой). Для сравнения «чем» используется предлог <b>od</b> + genitiv — ещё одна падежная конструкция для практики!`,
        examples: [
          { sr: "Marko je viši od Petra.", ru: "Марко выше Петра. (od + genitiv)" },
          { sr: "Ovo je najbolji restoran u gradu.", ru: "Это лучший ресторан в городе." },
          { sr: "Ana je najpametnija u razredu.", ru: "Анна самая умная в классе." }
        ],
        drill: {
          type: "choice",
          question: "Koji predlog + padež znači 'чем' u poređenju ('viši ___ Petra')?",
          options: ["od + genitiv", "sa + instrumental", "u + lokativ"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Ovaj grad je veći od onog.", ru: "Этот город больше того." },
      { sr: "Ona je bolja studentkinja od mene.", ru: "Она лучшая студентка, чем я." },
      { sr: "Danas je hladnije nego juče.", ru: "Сегодня холоднее, чем вчера." },
      { sr: "On je najstariji u porodici.", ru: "Он самый старший в семье." },
      { sr: "Ovo je najjeftinija opcija.", ru: "Это самый дешёвый вариант." },
      { sr: "Moj brat je viši od mene.", ru: "Мой брат выше меня." },
      { sr: "Ovaj film je gori od prethodnog.", ru: "Этот фильм хуже предыдущего." },
      { sr: "To je najlepši grad koji sam videla.", ru: "Это самый красивый город, который я видела." },
      { sr: "Beograd je veći od Niša.", ru: "Белград больше Ниша." },
      { sr: "Ovo je najbrži način.", ru: "Это самый быстрый способ." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Запомни <b>bolji/gori/veći/manji</b> как «пакет» — они идентичны по логике русским лучше/хуже/больше/меньше, только другие буквы.`,
      `<b>Naj-</b> всегда стоит прямо перед компаративом, без пробела: najbolji, не «naj bolji».`,
      `После <b>od</b> в сравнении идёт родительный падеж (Marko je viši od Petra = od + Petra в родительном), а после <b>nego</b> может идти и именительный, когда сравниваешь целые предложения/местоимения (bolja je nego ja).`,
      `У многих компаративов меняется последняя согласная (d→đ, z→ž, p→pš) — это старые звуковые изменения, легче всего выучить их на примерах, а не по правилам.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "bolji", ru: "лучше" },
      { sr: "gori", ru: "хуже" },
      { sr: "veći", ru: "больше" },
      { sr: "manji", ru: "меньше" },
      { sr: "lepši", ru: "красивее" },
      { sr: "mlađi", ru: "моложе" },
      { sr: "brži", ru: "быстрее" },
      { sr: "pametniji", ru: "умнее" },
      { sr: "najbolji", ru: "самый лучший" },
      { sr: "najveći", ru: "самый большой" },
      { sr: "od (poređenje)", ru: "чем (сравнение, + генитив)" },
      { sr: "nego", ru: "чем" },
      { sr: "opcija", ru: "вариант" },
      { sr: "razred", ru: "класс" },
      { sr: "hladnije", ru: "холоднее" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A1).",
      textSr: `<p>Beograd je <span class="word" data-ru="больше Ниша">veći od Niša</span>, ali mnogi kažu da je Niš <span class="word" data-ru="интереснее для туристов">zanimljiviji za turiste</span>. Moj brat misli da je Beograd <span class="word" data-ru="самый лучший город">najbolji grad</span> u Srbiji, dok ja mislim da je <span class="word" data-ru="самый красивый">najlepši</span> Novi Sad. U svakom slucaju, svi se slažu da je leto <span class="word" data-ru="лучше, чем зима">bolje od zime</span>.</p>`,
      comprehension: [
        {
          questionRu: "Какой город, по мнению брата автора, самый лучший?",
          options: ["Beograd.", "Niš.", "Novi Sad."],
          correctIndex: 0
        },
        {
          questionRu: "С чем все согласны в тексте?",
          options: ["Da je leto bolje od zime.", "Da je Niš najveći.", "Da je zima bolja."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji je komparativ od 'dobar'?", options: ["bolji", "dobriji", "najdobar"], correct: 0 },
    { type: "mc", q: "Koji je komparativ od 'loš'?", options: ["gori", "lošiji", "najgori"], correct: 0 },
    { type: "mc", q: "Koji je komparativ od 'velik'?", options: ["veći", "velikiji", "najveći"], correct: 0 },
    { type: "mc", q: "Koji je komparativ od 'mali'?", options: ["manji", "maliji", "najmanji"], correct: 0 },
    { type: "mc", q: "Koji je komparativ od 'lep'?", options: ["lepši", "lepiji", "najlepši"], correct: 0 },
    { type: "mc", q: "Kako se gradi superlativ?", options: ["naj- + komparativ", "naj- + positiv", "komparativ + naj"], correct: 0 },
    { type: "mc", q: "Koji predlog + padež znači 'than' u poređenju?", options: ["od + genitiv", "sa + instrumental", "za + akuzativ"], correct: 0 },
    { type: "mc", q: "Šta znači 'najbolji'?", options: ["самый лучший", "лучше", "хуже"], correct: 0 },
    { type: "mc", q: "Šta znači 'Marko je viši od Petra'?", options: ["Марко выше Петра.", "Марко и Петр одного роста.", "Петр выше Марко."], correct: 0 },
    { type: "mc", q: "Koji je komparativ od 'mlad'?", options: ["mlađi", "mladiji", "najmladi"], correct: 0 },
    { type: "mc", q: "Koji je komparativ od 'brz'?", options: ["brži", "brziji", "najbrzi"], correct: 0 },
    { type: "mc", q: "Šta znači 'opcija'?", options: ["вариант", "выбор (действие)", "решение"], correct: 0 },
    { type: "fill", q: "Dopuni: Ovaj grad je ___ od onog. (velik, komparativ)", answer: "veći", alt: ["veci"] },
    { type: "fill", q: "Dopuni: Ona je ___ u razredu. (pametan, superlativ, ženski rod)", answer: "najpametnija", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Это самый быстрый способ.' (način, m. rod):", answer: "Ovo je najbrži način.", alt: ["ovo je najbrzi nacin"] },
    { type: "fill", q: "Napisi komparativ od 'pametan':", answer: "pametniji", alt: [] },
    { type: "fill", q: "Napisi superlativ od 'dobar':", answer: "najbolji", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Сегодня холоднее, чем вчера.':", answer: "Danas je hladnije nego juče.", alt: ["danas je hladnije nego juče"] },
    { type: "fill", q: "Napisi komparativ od 'mlad':", answer: "mlađi", alt: ["mladji"] },
    { type: "fill", q: "Napisi reč koja znači 'чем' uz genitiv:", answer: "od", alt: [] }
  ]
};
