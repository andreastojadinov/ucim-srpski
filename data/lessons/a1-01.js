window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-01"] = {
  slug: "a1-01",
  level: "A1",
  id: 1,
  titleSr: "Padeži — uvod (nominativ i akuzativ)",
  titleRu: "Падежи — введение (именительный и винительный)",

  intro: {
    sr: `Dobrodosli na A1 nivo! Danas pocinjemo najvazniju temu srpske gramatike — padeze.`,
    ru: `Отличная новость для вас: сербский язык, как и русский, — падежный язык! У него 7 падежей (в русском — 6), и логика очень похожа. В этом уроке — первый шаг: <b>nominativ</b> (именительный, который вы уже используете) и <b>akuzativ</b> (винительный, падеж прямого дополнения).`
  },

  grammar: {
    titleRu: "Uvod u padeze",
    blocks: [
      {
        heading: "Zašto padeži? Pregled sistema",
        explanationRu: `В сербском 7 падежей. Вот они с русскими аналогами — видите, почти всё знакомо:`,
        table: {
          headers: ["Srpski padež", "Ruski ekvivalent", "Pitanje"],
          rows: [
            ["Nominativ", "Именительный", "ko? šta? (кто? что?)"],
            ["Genitiv", "Родительный", "koga? čega? (кого? чего?)"],
            ["Dativ", "Дательный", "kome? čemu? (кому? чему?)"],
            ["Akuzativ", "Винительный", "koga? šta? (кого? что?)"],
            ["Vokativ", "(zvanje — u ruskom skoro izumro)", "obraćanje (обращение)"],
            ["Instrumental", "Творительный", "s kim? čime? (с кем? чем?)"],
            ["Lokativ", "Предложный", "gde? o kome/čemu? (где? о ком/чём?)"]
          ]
        },
        drill: {
          type: "choice",
          question: "Koji srpski padez odgovara ruskom 'винительному' padezu?",
          options: ["Akuzativ", "Dativ", "Lokativ"],
          correctIndex: 0
        }
      },
      {
        heading: "Akuzativ — padež direktnog objekta",
        explanationRu: `Аккузатив отвечает на вопрос «кого? что?» и чаще всего обозначает прямой объект действия. Это <b>почти точная копия</b> русского винительного падежа — включая самое важное правило: у мужского рода одушевлённые существительные получают окончание <b>-a</b>, а неодушевлённые остаются как в номинативе (точно как в русском «вижу город» vs «вижу брата»!).`,
        table: {
          headers: ["Rod", "Nominativ", "Akuzativ", "Napomena"],
          rows: [
            ["M. (neživo)", "grad", "grad", "isto kao nominativ"],
            ["M. (živo)", "brat", "brata", "dodaje se -a (kao u ruskom!)"],
            ["Ž.", "žena", "ženu", "-a → -u"],
            ["Ž.", "kuća", "kuću", "-a → -u"],
            ["S.", "selo", "selo", "isto kao nominativ"]
          ]
        },
        examples: [
          { sr: "Vidim grad.", ru: "Я вижу город. (неодушевлённый, как в номинативе)" },
          { sr: "Vidim brata.", ru: "Я вижу брата. (одушевлённый, +a — точно как в русском!)" },
          { sr: "Volim ženu.", ru: "Я люблю женщину." },
          { sr: "Gledam selo.", ru: "Я смотрю на деревню." }
        ],
        drill: {
          type: "fill",
          question: "Dopuni akuzativ: Imam sestr___. (sestra → akuzativ)",
          answer: "u",
          alt: ["sestru"]
        }
      },
      {
        heading: "Akuzativ uz predloge U i NA (pravac kretanja)",
        explanationRu: `Еще одна точная параллель с русским: предлоги <b>u</b> (в) и <b>na</b> (на), когда обозначают направление движения («куда?»), требуют винительного падежа — абсолютно как в русском «иду в город», «иду на работу».`,
        examples: [
          { sr: "Idem u grad.", ru: "Я иду в город." },
          { sr: "Idem na posao.", ru: "Я иду на работу." },
          { sr: "Stavljam knjigu na sto.", ru: "Я кладу книгу на стол." }
        ],
        drill: {
          type: "choice",
          question: "Koji je padez imenice posle 'Idem u ___' (pravac kretanja)?",
          options: ["Akuzativ", "Lokativ", "Genitiv"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Klikni na karticu da vidis prevod.",
    items: [
      { sr: "Čitam knjigu.", ru: "Я читаю книгу." },
      { sr: "Volim kafu.", ru: "Я люблю кофе." },
      { sr: "Gledam film.", ru: "Я смотрю фильм." },
      { sr: "Imam brata i sestru.", ru: "У меня есть брат и сестра." },
      { sr: "Zovem prijatelja.", ru: "Я звоню другу. (буквально «зову друга»)" },
      { sr: "Idem u školu.", ru: "Я иду в школу." },
      { sr: "Idem na more.", ru: "Я иду / еду на море." },
      { sr: "Pišem pismo.", ru: "Я пишу письмо." },
      { sr: "Tražim posao.", ru: "Я ищу работу." },
      { sr: "Vidim grad sa brda.", ru: "Я вижу город с холма." }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Pravilo "zivo muski rod dobija -a u akuzativu" je <b>identicno</b> ruskom pravilu — ovo je vasa najveca prednost u ucenju srpskih padeza.`,
      `Ženski rod na <b>-a</b> u akuzativu skoro uvek prelazi u <b>-u</b> — isto kao rusko -а → -у (мама → маму).`,
      `Srednji rod se <b>nikad</b> ne menja između nominativa i akuzativa u jednini — to je lakse nego u ruskom, gde bi ocekivali promenu.`,
      `Predlozi <b>u</b> i <b>na</b> traze akuzativ samo kad opisuju <b>pravac</b> (kuda?); kada opisuju <b>mesto</b> (gde?), traze lokativ — to učimo u sledecoj lekciji.`
    ]
  },

  vocab: {
    titleRu: "Reci iz ove lekcije",
    words: [
      { sr: "padez", ru: "падеж" },
      { sr: "nominativ", ru: "именительный падеж" },
      { sr: "akuzativ", ru: "винительный падеж" },
      { sr: "grad", ru: "город" },
      { sr: "posao", ru: "работа" },
      { sr: "knjiga", ru: "книга" },
      { sr: "film", ru: "фильм" },
      { sr: "pismo", ru: "письмо" },
      { sr: "tražiti", ru: "искать" },
      { sr: "zvati", ru: "звать / звонить" },
      { sr: "pravac", ru: "направление" },
      { sr: "mesto", ru: "место" },
      { sr: "stavljati", ru: "класть, ставить" },
      { sr: "brdo", ru: "холм" },
      { sr: "videti", ru: "видеть" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A1).",
      textSr: `<p>Danas idem <span class="word" data-ru="в город (винительный, направление)">u grad</span>. Prvo idem <span class="word" data-ru="на работу (вин. падеж)">na posao</span>, a posle posla zovem <span class="word" data-ru="друга (одуш., +a)">prijatelja</span> Marka. Zajedno gledamo <span class="word" data-ru="фильм (вин. падеж)">film</span> i citamo <span class="word" data-ru="книгу">knjigu</span>. Kasnije pisem <span class="word" data-ru="письмо">pismo</span> mojoj <span class="word" data-ru="сестре">sestri</span>.</p>`,
      comprehension: [
        {
          questionRu: "Куда идёт автор в первую очередь?",
          options: ["Na posao.", "U školu.", "Na more."],
          correctIndex: 0
        },
        {
          questionRu: "Что автор пишет в конце?",
          options: ["Pismo.", "Knjigu.", "Film."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Na koje pitanje odgovara akuzativ?", options: ["koga? šta?", "kome? čemu?", "gde?"], correct: 0 },
    { type: "mc", q: "Koji padez odgovara ruskom 'предложному'?", options: ["Lokativ", "Akuzativ", "Dativ"], correct: 0 },
    { type: "mc", q: "Koji je akuzativ reci 'grad' (nezivo, muski rod)?", options: ["grad", "grada", "gradu"], correct: 0 },
    { type: "mc", q: "Koji je akuzativ reci 'brat' (zivo, muski rod)?", options: ["brata", "brat", "bratu"], correct: 0 },
    { type: "mc", q: "Koji je akuzativ reci 'žena'?", options: ["ženu", "žena", "ženi"], correct: 0 },
    { type: "mc", q: "Koji je akuzativ reci 'selo' (srednji rod)?", options: ["selo", "sela", "selu"], correct: 0 },
    { type: "mc", q: "Koji padez traze predlozi 'u/na' kad opisuju PRAVAC kretanja?", options: ["Akuzativ", "Lokativ", "Instrumental"], correct: 0 },
    { type: "mc", q: "Sta znaci 'Idem u grad'?", options: ["Я иду в город.", "Я в городе.", "Я из города."], correct: 0 },
    { type: "mc", q: "Sta znaci 'Vidim brata'?", options: ["Я вижу брата.", "Я вижу город.", "Я вижу книгу."], correct: 0 },
    { type: "mc", q: "Koliko padeza ima srpski jezik?", options: ["sedam", "sest", "pet"], correct: 0 },
    { type: "mc", q: "Koji padez NEMA direktan ekvivalent u ruskom (kao zaseban oblik)?", options: ["Vokativ", "Akuzativ", "Nominativ"], correct: 0 },
    { type: "mc", q: "Sta znaci 'tražiti'?", options: ["искать", "находить", "терять"], correct: 0 },
    { type: "fill", q: "Dopuni akuzativ: Čitam knjig___. (knjiga)", answer: "u", alt: ["knjigu"] },
    { type: "fill", q: "Dopuni akuzativ: Volim svoj___ grad___. (svoj grad, nezivo, bez promene)", answer: "svoj grad", alt: [] },
    { type: "fill", q: "Dopuni akuzativ: Zovem svog prijatelj___. (prijatelj, zivo)", answer: "a", alt: ["prijatelja"] },
    { type: "fill", q: "Prevedi na srpski 'Я смотрю фильм.':", answer: "Gledam film.", alt: ["gledam film"] },
    { type: "fill", q: "Prevedi na srpski 'Я иду на работу.':", answer: "Idem na posao.", alt: ["idem na posao"] },
    { type: "fill", q: "Napisi akuzativ reci 'sestra':", answer: "sestru", alt: [] },
    { type: "fill", q: "Napisi akuzativ reci 'selo':", answer: "selo", alt: [] },
    { type: "fill", q: "Napisi koji padez odgovara pitanju 'koga? šta?':", answer: "akuzativ", alt: [] }
  ]
};
