window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-05"] = {
  slug: "a1-05",
  level: "A1",
  id: 5,
  titleSr: "Perfekt — uvod u prošlo vreme",
  titleRu: "Перфект — введение в прошедшее время",

  intro: {
    sr: `Danas učimo perfekt — najcesce koriscen oblik proslog vremena u srpskom.`,
    ru: `Хорошая новость: часть этой темы вы уже знаете из русского! В современном русском прошедшее время («делал, делала, делало, делали») — это, по происхождению, тот же самый «l-причастие», что и в сербском. Разница только одна: сербский <b>не потерял</b> вспомогательный глагол «быть» — он всё ещё нужен (<b>sam, si, je, smo, ste, su</b>), который мы уже выучили как настоящее время глагола biti.`
  },

  grammar: {
    titleRu: "Perfekt",
    blocks: [
      {
        heading: "Formula: BITI (kratko) + radni glagolski prilog",
        explanationRu: `Перфект = короткая форма <b>biti</b> (sam, si, je, smo, ste, su) + «l-причастие», образованное от инфинитива: <b>-o</b> (муж. ед.), <b>-la</b> (жен. ед.), <b>-lo</b> (сред. ед.), <b>-li/-le/-la</b> (мн. число). Само причастие (radio/radila/radilo/radili) выглядит <b>точь-в-точь</b> как русское прошедшее время (делал/делала/делало/делали) — просите просто не забывайте добавить «sam/si/je...».`,
        table: {
          headers: ["Lice", "raditi → radio/-la/-lo"],
          rows: [
            ["ja (m./ž.)", "radio sam / radila sam"],
            ["ti (m./ž.)", "radio si / radila si"],
            ["on/ona/ono", "radio je / radila je / radilo je"],
            ["mi (m./ž.)", "radili smo / radile smo"],
            ["vi (m./ž.)", "radili ste / radile ste"],
            ["oni/one/ona", "radili su / radile su / radila su"]
          ]
        },
        examples: [
          { sr: "Ja sam radio ceo dan.", ru: "Я (м.) работал весь день." },
          { sr: "Ona je gledala film.", ru: "Она смотрела фильм." },
          { sr: "Mi smo pisali pismo.", ru: "Мы писали письмо." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni (ženski rod, jednina): Ona je ___ knjigu. (čitati → čitala)",
          answer: "čitala",
          alt: ["čitala"]
        }
      },
      {
        heading: "Red reči — klitika 'sam/si/je...'",
        explanationRu: `Как и формы глагола <b>biti</b> в настоящем времени, вспомогательная частица перфекта — клитика: она «опирается» на соседнее слово и часто стоит на втором месте в предложении. Both порядка возможны и означают одно и то же: <b>Ja sam radio</b> = <b>Radio sam</b>.`,
        examples: [
          { sr: "Radio sam juče.", ru: "Я работал вчера." },
          { sr: "Juče sam radio.", ru: "Вчера я работал." },
          { sr: "Video sam Marka.", ru: "Я видел Марка." }
        ],
        drill: {
          type: "choice",
          question: "Koji red reči je ispravan?",
          options: ["Radio sam juče. / Juče sam radio. (oba tačna)", "Samo 'Radio sam juče' je tačno", "Samo 'Juče sam radio' je tačno"],
          correctIndex: 0
        }
      },
      {
        heading: "Negacija: NISAM + radni glagolski prilog",
        explanationRu: `Отрицание строится уже знакомой формой <b>nisam, nisi, nije, nismo, niste, nisu</b> (вы выучили её в уроке о глаголе biti) + l-причастие.`,
        examples: [
          { sr: "Nisam video taj film.", ru: "Я не видел этот фильм." },
          { sr: "Nije došla na vreme.", ru: "Она не пришла вовремя." },
          { sr: "Nismo jeli ništa.", ru: "Мы ничего не ели." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'Я не видел этот фильм' (musko rod)?",
          options: ["Nisam video taj film.", "Ne sam video taj film.", "Nisam video taj filma."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Juče sam učio srpski.", ru: "Вчера я учил сербский." },
      { sr: "On je otišao kući.", ru: "Он пошёл домой. (ići → otišao, nepravilno)" },
      { sr: "Jeli smo u restoranu.", ru: "Мы ели в ресторане." },
      { sr: "Pila je kafu ujutru.", ru: "Она пила кофе утром." },
      { sr: "Doveli su prijatelje.", ru: "Они привели друзей." },
      { sr: "Da li si spavao dobro?", ru: "Ты хорошо спал?" },
      { sr: "Nisam znao odgovor.", ru: "Я не знал ответа." },
      { sr: "Deca su se igrala u parku.", ru: "Дети играли в парке." },
      { sr: "Kupila sam novu haljinu.", ru: "Я купила новое платье." },
      { sr: "Gde si bio sinoć?", ru: "Где ты был вчера вечером?" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `L-particip (radio/radila/radilo/radili) odgovara tačno ruskom prošlom vremenu po slaganju roda/broja — jedina razlika je dodatna klitika "sam/si/je...".`,
      `Glagol <b>ići</b> ima nepravilan particip: <b>išao / išla / išlo / išli</b> (ne "idio") — vrlo frekventna reč, vredna pamcenja.`,
      `Klitika "sam/si/je..." može stajati i posle prvog naglasenog dela rečenice, ne samo posle subjekta — zato "Juče sam radio" zvuci prirodnije nego "Juče ja sam radio".`,
      `Za muški rod jednine, l-particip se završava na suglasnik <b>-o</b> (radio), sto nekad zbunjuje jer izgleda kao da se završava na samoglasnik — zapravo je to istorijsko "l" koje je prešlo u "o" na kraju reči.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "juče", ru: "вчера" },
      { sr: "sinoć", ru: "вчера вечером" },
      { sr: "prošle nedelje", ru: "на прошлой неделе" },
      { sr: "otići (išao)", ru: "уйти / пойти" },
      { sr: "doći (došao)", ru: "прийти" },
      { sr: "spavati", ru: "спать" },
      { sr: "igrati se", ru: "играть" },
      { sr: "kupiti", ru: "купить" },
      { sr: "jesti (jeo)", ru: "есть (кушать)" },
      { sr: "piti (pio)", ru: "пить" },
      { sr: "znati", ru: "знать" },
      { sr: "odgovor", ru: "ответ" },
      { sr: "haljina", ru: "платье" },
      { sr: "park", ru: "парк" },
      { sr: "restoran", ru: "ресторан" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A1) — iz dnevnika.",
      textSr: `<p>Juče sam imao <span class="word" data-ru="интересный день">interesantan dan</span>. Ujutru <span class="word" data-ru="я пил кофе">pio sam kafu</span> i <span class="word" data-ru="читал новости">čitao sam vesti</span>. Posle sam <span class="word" data-ru="пошёл на работу">otišao na posao</span>. Uveče smo <span class="word" data-ru="мы ели">jeli</span> u restoranu sa prijateljima i <span class="word" data-ru="много говорили">puno smo pričali</span>. <span class="word" data-ru="Я не спал">Nisam spavao</span> dovoljno, ali bio je dobar dan.</p>`,
      comprehension: [
        {
          questionRu: "Что автор делал утром?",
          options: ["Pio kafu i čitao vesti.", "Spavao.", "Igrao se u parku."],
          correctIndex: 0
        },
        {
          questionRu: "Где они ели вечером?",
          options: ["U restoranu.", "Kod kuće.", "Na poslu."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Od čega se gradi perfekt?", options: ["biti (kratko) + l-particip", "hteti + infinitiv", "samo l-particip"], correct: 0 },
    { type: "mc", q: "Koji je završetak l-participa za muški rod jednine?", options: ["-o", "-la", "-li"], correct: 0 },
    { type: "mc", q: "Koji je završetak l-participa za ženski rod jednine?", options: ["-la", "-o", "-lo"], correct: 0 },
    { type: "mc", q: "Koji je l-particip glagola 'ići' (muški rod)?", options: ["išao", "idio", "išo"], correct: 0 },
    { type: "mc", q: "Kako se kaže 'Я не видел' (muški rod)?", options: ["Nisam video.", "Ne sam video.", "Nisam vidim."], correct: 0 },
    { type: "mc", q: "Šta se slaže sa subjektom u perfektu?", options: ["l-particip (rod i broj)", "samo klitika sam/si/je", "nista se ne slaže"], correct: 0 },
    { type: "mc", q: "Koja rečenica je tačna za ženski rod množine 'raditi'?", options: ["Radile su.", "Radili su.", "Radila su."], correct: 0 },
    { type: "mc", q: "Šta znači 'juče'?", options: ["вчера", "сегодня", "завтра"], correct: 0 },
    { type: "mc", q: "Šta znači 'spavati'?", options: ["спать", "есть", "пить"], correct: 0 },
    { type: "mc", q: "Koji red reči je tačan?", options: ["Oba: 'Radio sam juče' i 'Juče sam radio'", "Samo 'Radio sam juče'", "Samo 'Juče sam radio'"], correct: 0 },
    { type: "mc", q: "Šta znači 'otišao'?", options: ["ушёл", "пришёл", "вернулся"], correct: 0 },
    { type: "mc", q: "Koji particip ide uz 'oni' (muški rod) od 'pisati'?", options: ["pisali", "pisala", "pisao"], correct: 0 },
    { type: "fill", q: "Dopuni: Ja sam ___ kafu. (piti, muški rod)", answer: "pio", alt: [] },
    { type: "fill", q: "Dopuni: Ona je ___ pismo. (pisati, ženski rod)", answer: "pisala", alt: [] },
    { type: "fill", q: "Dopuni: Mi smo ___ u restoranu. (jesti, muški rod množina)", answer: "jeli", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Я не знал.' (muški rod):", answer: "Nisam znao.", alt: ["nisam znao"] },
    { type: "fill", q: "Napisi l-particip glagola 'doći' (muški rod jednina):", answer: "došao", alt: ["dosao"] },
    { type: "fill", q: "Napisi perfekt za 'ti' (ženski rod) od glagola 'gledati':", answer: "gledala si", alt: ["gledala si"] },
    { type: "fill", q: "Prevedi na srpski 'Они играли в парке.':", answer: "Igrali su se u parku.", alt: ["igrali su se u parku"] },
    { type: "fill", q: "Napisi negaciju perfekta za 'ona' (dolaziti → nije dosla):", answer: "nije došla", alt: ["nije dosla"] }
  ]
};
