window.LESSONS = window.LESSONS || {};
window.LESSONS["b1-03"] = {
  slug: "b1-03",
  level: "B1",
  id: 3,
  titleSr: "Indirektni govor",
  titleRu: "Косвенная речь",

  intro: {
    sr: "Danas učimo kako da prepričamo tuđe reči — direktni govor 'Dolazim sutra' postaje indirektni 'Rekao je da dolazi sutra'.",
    ru: "Хорошая новость: в сербском, как и в русском, при переводе прямой речи в косвенную <b>время глагола не меняется</b> (в отличие от английского, где есть обязательный сдвиг времён). Это значительно упрощает тему!"
  },

  grammar: {
    titleRu: "Indirektni govor",
    blocks: [
      {
        heading: "Direktni naspram indirektnog govora",
        explanationRu: "Косвенная речь строится союзом <b>da</b> + глагол в <b>том же времени</b>, что и в прямой речи — глагольное время не сдвигается назад, совсем как в русском.",
        table: {
          headers: ["Direktni govor", "Indirektni govor"],
          rows: [
            ["\"Dolazim sutra.\"", "Rekao je da dolazi sutra."],
            ["\"Radio sam ceo dan.\"", "Rekao je da je radio ceo dan."],
            ["\"Doći ću uveče.\"", "Rekao je da će doći uveče."]
          ]
        },
        examples: [
          { sr: "On kaže: 'Umoran sam.' → On kaže da je umoran.", ru: "Он говорит: «Я устал». → Он говорит, что устал." }
        ],
        drill: {
          type: "fill",
          question: "Pretvori u indirektni govor: 'Gladan sam.' → Rekao je ___ je gladan.",
          answer: "da",
          alt: []
        }
      },
      {
        heading: "Indirektna pitanja",
        explanationRu: "В косвенных вопросах да/нет используется <b>da li</b>; в вопросах с вопросительным словом (где, когда, почему) это слово просто сохраняется.",
        examples: [
          { sr: "\"Dolaziš li?\" → Pitao me je da li dolazim.", ru: "«Ты придёшь?» → Он спросил, приду ли я." },
          { sr: "\"Gde živiš?\" → Pitao me je gde živim.", ru: "«Где ты живёшь?» → Он спросил, где я живу." }
        ],
        drill: {
          type: "choice",
          question: "Kako glasi indirektno pitanje za 'Imaš li vremena?'",
          options: ["Pitao je da li imam vremena.", "Pitao je imam li vremena da li.", "Pitao je da imam vremena."],
          correctIndex: 0
        }
      },
      {
        heading: "Indirektne zapovesti",
        explanationRu: "Чтобы передать команду (императив) в косвенной речи, императив заменяется на <b>da</b> + презент.",
        examples: [
          { sr: "\"Dođi!\" → Rekao mi je da dođem.", ru: "«Приди!» → Он сказал мне, чтобы я пришёл." },
          { sr: "\"Budite tihi!\" → Zamolio nas je da budemo tihi.", ru: "«Будьте тихими!» → Он попросил нас быть тихими." }
        ],
        drill: {
          type: "choice",
          question: "Kako glasi indirektna zapovest za 'Sedi!'",
          options: ["Rekao mi je da sednem.", "Rekao mi je sedi.", "Rekao mi je da sedeti."],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Rekla je da je umorna.", ru: "Она сказала, что устала." },
      { sr: "Pitao je da li znam odgovor.", ru: "Он спросил, знаю ли я ответ." },
      { sr: "Objasnio je zašto kasni.", ru: "Он объяснил, почему опаздывает." },
      { sr: "Tvrdi da nije kriv.", ru: "Он утверждает, что не виноват." },
      { sr: "Izjavila je da podržava projekat.", ru: "Она заявила, что поддерживает проект." },
      { sr: "Pitala me je koliko imam godina.", ru: "Она спросила меня, сколько мне лет." },
      { sr: "Rekao mi je da ne brinem.", ru: "Он сказал мне, чтобы я не волновался." },
      { sr: "Pomenuo je da će doći kasnije.", ru: "Он упомянул, что придёт позже." },
      { sr: "Obećala je da će pozvati.", ru: "Она пообещала, что позвонит." },
      { sr: "Priznao je da je pogrešio.", ru: "Он признал, что ошибся." }
    ]
  },

  tips: {
    titleRu: "Советы",
    items: [
      "Главное отличие от английского: сербский (как и русский) <b>не сдвигает время</b> в косвенной речи — прямая речь «Dolazim» остаётся «dolazi», не превращается в прошедшее время.",
      "Запомни три модели: обычное утверждение → <b>da</b> + глагол; вопрос да/нет → <b>da li</b>; вопрос со словом → само вопросительное слово сохраняется.",
      "Императив в косвенной речи всегда превращается в <b>da</b> + презент — императивная форма никогда не используется в пересказе.",
      "Глаголы типа <b>tvrditi</b> (утверждать), <b>izjaviti</b> (заявить), <b>priznati</b> (признать) часто встречаются в новостях при пересказе чьих-то слов."
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "reći da", ru: "сказать, что" },
      { sr: "pitati da li", ru: "спросить, ли" },
      { sr: "tvrditi", ru: "утверждать" },
      { sr: "izjaviti", ru: "заявить" },
      { sr: "priznati", ru: "признать" },
      { sr: "pomenuti", ru: "упомянуть" },
      { sr: "objasniti", ru: "объяснить" },
      { sr: "obećati", ru: "пообещать" },
      { sr: "podržavati", ru: "поддерживать" },
      { sr: "kriv", ru: "виноватый" },
      { sr: "pogrešiti", ru: "ошибиться" },
      { sr: "zamoliti", ru: "попросить" },
      { sr: "odgovor", ru: "ответ" },
      { sr: "projekat", ru: "проект" },
      { sr: "kasniti", ru: "опаздывать" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo B1).",
      textSr: "<p>Marko mi je rekao da <span class=\"word\" data-ru=\"он придёт\">dolazi</span> sutra ujutru. Pitao me je <span class=\"word\" data-ru=\"знаю ли я\">da li znam</span> gde je stanica. Objasnio sam mu i on je <span class=\"word\" data-ru=\"поблагодарил\">zahvalio</span>. Na kraju je rekao da <span class=\"word\" data-ru=\"позвонит\">će pozvati</span> kad stigne, i zamolio me <span class=\"word\" data-ru=\"чтобы я подождал\">da ga sačekam</span> ispred zgrade.</p>",
      comprehension: [
        {
          questionRu: "Когда придёт Марко?",
          options: ["Sutra ujutru.", "Danas uveče.", "Prekosutra."],
          correctIndex: 0
        },
        {
          questionRu: "О чём он попросил автора?",
          options: ["Da ga sačeka ispred zgrade.", "Da mu pošalje adresu.", "Da ga pozove."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Da li se vreme glagola menja u indirektnom govoru?", options: ["Ne, ostaje isto", "Da, uvek ide u prošlost", "Samo kod pitanja"], correct: 0 },
    { type: "mc", q: "Kako se prenosi pitanje 'Dolaziš li?' indirektno?", options: ["Pitao je da li dolazim.", "Pitao je dolazim li da.", "Pitao je da dolazim."], correct: 0 },
    { type: "mc", q: "Kako se prenosi 'Gde živiš?' indirektno?", options: ["Pitao je gde živim.", "Pitao je da li gde živim.", "Pitao je živim gde."], correct: 0 },
    { type: "mc", q: "Kako se prenosi imperativ 'Dođi!' indirektno?", options: ["Rekao je da dođem.", "Rekao je dođi.", "Rekao je da doći."], correct: 0 },
    { type: "mc", q: "Šta znači 'tvrditi'?", options: ["утверждать", "сомневаться", "забывать"], correct: 0 },
    { type: "mc", q: "Šta znači 'priznati'?", options: ["признать", "отрицать", "скрывать"], correct: 0 },
    { type: "mc", q: "Šta znači 'obećati'?", options: ["пообещать", "отказаться", "забыть"], correct: 0 },
    { type: "mc", q: "Šta znači 'izjaviti'?", options: ["заявить", "спросить", "попросить"], correct: 0 },
    { type: "mc", q: "Koji veznik uvodi obično indirektno tvrđenje?", options: ["da", "da li", "ako"], correct: 0 },
    { type: "mc", q: "Koja reč se koristi za indirektno pitanje da/ne?", options: ["da li", "da", "što"], correct: 0 },
    { type: "mc", q: "Šta znači 'kriv'?", options: ["виноватый", "правый", "честный"], correct: 0 },
    { type: "mc", q: "Šta znači 'pomenuti'?", options: ["упомянуть", "забыть", "скрыть"], correct: 0 },
    { type: "fill", q: "Pretvori u indirektni govor: 'Umoran sam.' → Kaže ___ je umoran.", answer: "da", alt: [] },
    { type: "fill", q: "Pretvori u indirektni govor: 'Imaš li vremena?' → Pitao je ___ imam vremena.", answer: "da li", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Он сказал, что придёт.':", answer: "Rekao je da dolazi.", alt: ["rekao je da dolazi"] },
    { type: "fill", q: "Prevedi na srpski 'Он спросил, где я живу.':", answer: "Pitao je gde živim.", alt: ["pitao je gde zivim"] },
    { type: "fill", q: "Napiši indirektnu zapovest za 'Sedi!':", answer: "da sednem", alt: [] },
    { type: "fill", q: "Napiši reč za 'объяснить':", answer: "objasniti", alt: [] },
    { type: "fill", q: "Napiši reč za 'опаздывать':", answer: "kasniti", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Она заявила, что поддерживает проект.':", answer: "Izjavila je da podržava projekat.", alt: ["izjavila je da podrzava projekat"] }
  ]
};
