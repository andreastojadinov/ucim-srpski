window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-04"] = {
  slug: "a1-04",
  level: "A1",
  id: 4,
  titleSr: "Futur I — buduće vreme",
  titleRu: "Будущее время (футур I)",

  intro: {
    sr: `Danas učimo kako se gradi buduce vreme (futur I) — sa glagolom hteti i infinitivom.`,
    ru: `Отличная новость: сербский футур I строится почти <b>так же, как русское будущее время</b> — вспомогательный глагол (здесь — короткие формы <b>hteti</b>: ću, ćeš, će...) + инфинитив, прямо как русское «буду/будешь/будет + инфинитив». Главная новая сложность — не грамматика, а <b>орфография</b>: в одном порядке слов эти две части сливаются в одно слово.`
  },

  grammar: {
    titleRu: "Futur I",
    blocks: [
      {
        heading: "Futur I — dva reda reči, jedno značenje",
        explanationRu: `Футур I = клитика глагола <b>hteti</b> (ću, ćeš, će, ćemo, ćete, će) + инфинитив. Если инфинитив стоит <b>первым</b>, то он срастается с клитикой в <b>одно слово</b>, теряя конечное -i: <i>raditi</i> + <i>ću</i> → <b>radiću</b>. Если перед инфинитивом есть другое слово (например, подлежащее "ja"), части остаются <b>раздельными</b> и инфинитив не меняется.`,
        table: {
          headers: ["Lice", "Rastavljeno", "Spojeno (infinitiv + ću)"],
          rows: [
            ["ja", "ja ću raditi", "radiću"],
            ["ti", "ti ćeš raditi", "radićeš"],
            ["on/ona/ono", "on će raditi", "radiće"],
            ["mi", "mi ćemo raditi", "radićemo"],
            ["vi", "vi ćete raditi", "radićete"],
            ["oni/one/ona", "oni će raditi", "radiće"]
          ]
        },
        examples: [
          { sr: "Radiću sutra.", ru: "Я буду работать завтра." },
          { sr: "Ona će putovati.", ru: "Она будет путешествовать." },
          { sr: "Mi ćemo doći na vreme.", ru: "Мы придём вовремя." }
        ],
        drill: {
          type: "fill",
          question: "Spoji u jednu reč: 'Ja ću gledati' → 'Gleda___.'",
          answer: "ću",
          alt: ["gledaću"]
        }
      },
      {
        heading: "Negacija futura — NEĆU",
        explanationRu: `Отрицательная форма — особое слитное слово <b>neću, nećeš, neće, nećemo, nećete, neće</b> (никогда «ne ću» раздельно!) + инфинитив, который в этом случае <b>всегда остаётся полным и отдельным</b>.`,
        examples: [
          { sr: "Neću raditi sutra.", ru: "Я не буду работать завтра." },
          { sr: "Neće doći na vreme.", ru: "Он не придёт вовремя." },
          { sr: "Nećemo putovati ove godine.", ru: "Мы не будем путешествовать в этом году." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'Я не буду путешествовать'?",
          options: ["Neću putovati.", "Ne ću putovati.", "Putovaću ne."],
          correctIndex: 0
        }
      },
      {
        heading: "Futur u pitanjima",
        explanationRu: `В вопросах тоже два варианта, как и в обычных да/нет-вопросах: <b>Da li ćeš...</b> или <b>Hoćeš li...</b> + инфинитив.`,
        examples: [
          { sr: "Da li ćeš doći?", ru: "Ты придёшь?" },
          { sr: "Hoćeš li doći?", ru: "Ты придёшь? (тот же смысл)" },
          { sr: "Šta ćeš raditi večeras?", ru: "Что ты будешь делать вечером?" }
        ],
        drill: {
          type: "choice",
          question: "Koja rečenica pita 'Придёшь ли ты?'",
          options: ["Hoćeš li doći?", "Hoćeš doći li?", "Li hoćeš doći?"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Sutra ćemo putovati u Niš.", ru: "Завтра мы поедем в Ниш." },
      { sr: "Videćemo se uskoro.", ru: "Увидимся скоро." },
      { sr: "Pozvaću te večeras.", ru: "Я позвоню тебе вечером." },
      { sr: "Oni će se preseliti u maju.", ru: "Они переедут в мае." },
      { sr: "Da li ćeš jesti sa nama?", ru: "Ты будешь есть с нами?" },
      { sr: "Neću zaboraviti.", ru: "Я не забуду." },
      { sr: "Šta ćeš kupiti?", ru: "Что ты купишь?" },
      { sr: "Bićemo tamo u pet.", ru: "Мы будем там в пять." },
      { sr: "On će studirati medicinu.", ru: "Он будет изучать медицину." },
      { sr: "Nećemo stići na vreme.", ru: "Мы не успеем вовремя." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Ovo gradivo je gotovo <b>kopija</b> ruskog "буду + infinitiv" — razmisljaj o ću/ćeš/će tačno kao o буду/будешь/будет.`,
      `Pravilo spajanja (radiću, ne "radim ću") je samo <b>pravopisno</b> — izgovor je gotovo isti, samo se pise zajedno kad infinitiv dolazi prvi.`,
      `Negacija <b>nikad</b> ne zadrzava infinitiv spojen — uvek "Neću raditi", nikad "Radićeneću" ili slicno.`,
      `U svakodnevnom govoru, blizak buduci dogadjaj se često izrazava i prezentom (kao "Sutra idem kod lekara" umesto "Sutra ću ići kod lekara") — potpuno kao u ruskom razgovornom jeziku.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "sutra", ru: "завтра" },
      { sr: "uskoro", ru: "скоро" },
      { sr: "večeras", ru: "сегодня вечером" },
      { sr: "planirati", ru: "планировать" },
      { sr: "nameravati", ru: "намереваться" },
      { sr: "putovati", ru: "путешествовать" },
      { sr: "doći", ru: "прийти" },
      { sr: "stići", ru: "успеть, прибыть" },
      { sr: "zaboraviti", ru: "забыть" },
      { sr: "pozvati", ru: "позвонить / позвать" },
      { sr: "preseliti se", ru: "переехать" },
      { sr: "studirati", ru: "учиться (в вузе)" },
      { sr: "buducnost", ru: "будущее" },
      { sr: "kupiti", ru: "купить" },
      { sr: "na vreme", ru: "вовремя" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A1) — planovi za sledecu nedelju.",
      textSr: `<p>Sledece nedelje <span class="word" data-ru="у меня будет много планов">imaću puno planova</span>. U ponedeljak <span class="word" data-ru="я буду работать">radiću</span> do kasno. U sredu <span class="word" data-ru="мы путешествуем">putovaćemo</span> u Novi Sad da posetimo baku. <span class="word" data-ru="Не забуду">Neću zaboraviti</span> da joj kupim cveće. U petak <span class="word" data-ru="мы увидимся">videćemo se</span> sa prijateljima i <span class="word" data-ru="мы будем говорить">pričaćemo</span> o planovima za leto.</p>`,
      comprehension: [
        {
          questionRu: "Куда едет автор в среду?",
          options: ["U Novi Sad.", "U Beograd.", "Na more."],
          correctIndex: 0
        },
        {
          questionRu: "Что автор не забудет сделать?",
          options: ["Kupiti cveće za baku.", "Pozvati prijatelje.", "Ići na posao."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Od kog glagola se gradi futur I?", options: ["hteti", "biti", "moći"], correct: 0 },
    { type: "mc", q: "Koji je spojen oblik za 'ja ću raditi'?", options: ["radiću", "ćuradi", "radim ću"], correct: 0 },
    { type: "mc", q: "Koja je negacija futura za 'ja'?", options: ["neću", "ne ću", "nisam ću"], correct: 0 },
    { type: "mc", q: "Šta se desava sa infinitivom kad je spojen sa 'ću'?", options: ["gubi zavrsno -i", "dobija -i", "ostaje nepromenjen"], correct: 0 },
    { type: "mc", q: "Kako se kaže 'Я не буду работать'?", options: ["Neću raditi.", "Ne ću raditi.", "Radiću ne."], correct: 0 },
    { type: "mc", q: "Koja rečenica je tačna za 'Мы придём вовремя'?", options: ["Doćićemo na vreme.", "Doćemo na vreme ćemo.", "Na vreme doćićemo ćemo."], correct: 0 },
    { type: "mc", q: "Šta znači 'sutra'?", options: ["завтра", "сегодня", "вчера"], correct: 0 },
    { type: "mc", q: "Šta znači 'uskoro'?", options: ["скоро", "давно", "никогда"], correct: 0 },
    { type: "mc", q: "Kako pitas 'Ты придёшь?' (dva nacina su moguca, izaberi jedan)", options: ["Hoćeš li doći?", "Hoćeš doći?", "Doći hoćeš?"], correct: 0 },
    { type: "mc", q: "Šta znači 'zaboraviti'?", options: ["забыть", "помнить", "знать"], correct: 0 },
    { type: "mc", q: "Šta znači 'preseliti se'?", options: ["переехать", "путешествовать", "вернуться"], correct: 0 },
    { type: "mc", q: "Kada se ostavlja infinitiv nespojen sa 'ću'?", options: ["kad nešto drugo dolazi prvo (npr. 'ja')", "nikad", "uvek"], correct: 0 },
    { type: "fill", q: "Spoji: 'Ja ću pisati' →", answer: "Pisaću", alt: ["pisacu"] },
    { type: "fill", q: "Dopuni negaciju: Mi ___ putovati ove godine. (neću oblik za 'mi')", answer: "nećemo", alt: ["necemo"] },
    { type: "fill", q: "Prevedi na srpski 'Увидимся скоро.':", answer: "Videćemo se uskoro.", alt: ["videcemo se uskoro"] },
    { type: "fill", q: "Prevedi na srpski 'Он не придёт.':", answer: "Neće doći.", alt: ["nece doći"] },
    { type: "fill", q: "Napisi spojeni futur za 'ona ce raditi':", answer: "radiće", alt: ["radice"] },
    { type: "fill", q: "Napisi futur za 'vi' od glagola 'kupiti' (rastavljeno):", answer: "vi ćete kupiti", alt: ["vi cete kupiti"] },
    { type: "fill", q: "Prevedi na srpski 'Что ты купишь?':", answer: "Šta ćeš kupiti?", alt: ["šta ces kupiti"] },
    { type: "fill", q: "Napisi negaciju futura za 'oni':", answer: "neće", alt: ["nece"] }
  ]
};
