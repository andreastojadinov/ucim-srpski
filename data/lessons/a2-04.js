window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-04"] = {
  slug: "a2-04",
  level: "A2",
  id: 4,
  titleSr: "Imperativ — zapovedni način",
  titleRu: "Императив — повелительное наклонение",

  intro: {
    sr: `Danas učimo imperativ — kako da izdaš naredbu, zamoliš ili pozoveš nekoga na akciju.`,
    ru: `Императив (повелительное наклонение — «Иди!», «Сделай!») строится от основы настоящего времени. Вы уже знаете три модели презента (из урока A0-10), и сейчас мы используем их же, чтобы построить императив.`
  },

  grammar: {
    titleRu: "Tvorba imperativa",
    blocks: [
      {
        heading: "Pravilni imperativ — tri obrasca",
        explanationRu: `Правило: возьмите форму 3-го лица единственного числа настоящего времени (<i>on/ona</i>) и посмотрите на последнюю букву. Если она <b>-a</b> → добавьте <b>-j</b> (gleda → gledaj!). Если <b>-i</b> или <b>-e</b> → поставьте/замените на <b>-i</b> (govori → govori!, piše → piši!).`,
        table: {
          headers: ["Prezent (on/ona)", "Imperativ (ti)", "Imperativ (vi)"],
          rows: [
            ["gleda", "gledaj!", "gledajte!"],
            ["čita", "čitaj!", "čitajte!"],
            ["radi", "radi!", "radite!"],
            ["govori", "govori!", "govorite!"],
            ["piše", "piši!", "pišite!"],
            ["ide", "idi!", "idite!"]
          ]
        },
        drill: {
          type: "fill",
          question: "Napravi imperativ (ti) od 'čitati' (prezent: čita):",
          answer: "čitaj",
          alt: []
        }
      },
      {
        heading: "Nepravilni imperativi",
        explanationRu: `Nekoliko veoma čestih glagola ima nepravilan imperativ koji vredi naučiti napamet.`,
        table: {
          headers: ["Infinitiv", "Imperativ (ti)", "Imperativ (vi)"],
          rows: [
            ["biti", "budi!", "budite!"],
            ["reći", "reči!", "recite!"],
            ["uzeti", "uzmi!", "uzmite!"],
            ["dati", "daj!", "dajte!"],
            ["doći", "dođi!", "dođite!"]
          ]
        },
        examples: [
          { sr: "Budi strpljiv!", ru: "Будь терпеливым!" },
          { sr: "Reči mi istinu.", ru: "Скажи мне правду." },
          { sr: "Uzmi kišobran!", ru: "Возьми зонт!" }
        ],
        drill: {
          type: "choice",
          question: "Koji je imperativ (ti) glagola 'dati'?",
          options: ["daj!", "dati!", "dao!"],
          correctIndex: 0
        }
      },
      {
        heading: "Negativni imperativ — NEMOJ + DA",
        explanationRu: `Важное отличие от русского: отрицательная команда почти всегда строится через <b>nemoj / nemojte</b> + <b>da</b> + презент, а не прямым отрицанием императива (хотя так тоже иногда можно сказать, звучит резче).`,
        examples: [
          { sr: "Nemoj da zakasniš!", ru: "Не опаздывай!" },
          { sr: "Nemojte da brinete.", ru: "Не волнуйтесь." },
          { sr: "Nemoj to da radiš.", ru: "Не делай этого." }
        ],
        drill: {
          type: "choice",
          question: "Kako se kaže 'Не опаздывай!'?",
          options: ["Nemoj da zakasniš!", "Ne zakasni!", "Nemoj zakasniti!"],
          correctIndex: 0
        }
      }
    ]
  },

  examples: {
    titleRu: "Нажми на карточку, чтобы увидеть перевод.",
    items: [
      { sr: "Dođi ovamo!", ru: "Иди сюда!" },
      { sr: "Sedi, molim te.", ru: "Сядь, пожалуйста." },
      { sr: "Pazi na stepenice!", ru: "Осторожно, ступеньки!" },
      { sr: "Pomozi mi, molim te.", ru: "Помоги мне, пожалуйста." },
      { sr: "Hajde da idemo!", ru: "Давай пойдём!" },
      { sr: "Slušaj pažljivo.", ru: "Слушай внимательно." },
      { sr: "Ne brini, biće sve u redu.", ru: "Не волнуйся, всё будет хорошо." },
      { sr: "Zatvori vrata, molim te.", ru: "Закрой дверь, пожалуйста." },
      { sr: "Pišite čitko.", ru: "Пишите разборчиво." },
      { sr: "Nemojte zaboraviti karte!", ru: "Не забудьте билеты!" }
    ]
  },

  tips: {
    titleRu: "Saveti",
    items: [
      `Reč <b>Hajde!</b> (давай!) je izuzetno česta u govoru — koristi se i kao poziv na akciju i kao ohrabrenje, bez stroge gramatičke konjugacije.`,
      `Imperativ za "vi" se koristi i kao množina (vama, ljudi) i kao formalno obraćanje jednoj osobi — isto kao "vi" u drugim kontekstima.`,
      `"Nemoj" + da + prezent je mnogo prirodniji nacin za zabranu nego direktno negiranje imperativa — koristi ga kao podrazumevani obrazac.`,
      `U svakodnevnom govoru, imperativ često prati "molim te" (ti) ili "molim vas" (vi) da bi zvucao ljubaznije, a ne kao stroga naredba.`
    ]
  },

  vocab: {
    titleRu: "Слова этого урока",
    words: [
      { sr: "sedeti → sedi!", ru: "сидеть → сядь!" },
      { sr: "ustati → ustani!", ru: "встать → встань!" },
      { sr: "dati → daj!", ru: "дать → дай!" },
      { sr: "uzeti → uzmi!", ru: "взять → возьми!" },
      { sr: "doći → dođi!", ru: "прийти → приди!" },
      { sr: "čekati → čekaj!", ru: "ждать → жди!" },
      { sr: "hajde", ru: "давай" },
      { sr: "nemoj / nemojte", ru: "не надо / не делайте" },
      { sr: "pažljivo", ru: "внимательно, осторожно" },
      { sr: "strpljiv", ru: "терпеливый" },
      { sr: "istina", ru: "правда" },
      { sr: "kišobran", ru: "зонт" },
      { sr: "stepenice", ru: "лестница, ступеньки" },
      { sr: "zatvoriti", ru: "закрыть" },
      { sr: "zaboraviti", ru: "забыть" }
    ],
    reading: {
      sourceNote: "Originalan kratak tekst napisan za ovaj kurs (nivo A2) — savet roditelja.",
      textSr: `<p>— <span class="word" data-ru="Вставай">Ustani</span>, sine, vreme je za školu!<br>
      — <span class="word" data-ru="Приду">Dolazim</span>, mama.<br>
      — <span class="word" data-ru="Не забудь">Nemoj da zaboraviš</span> knjige! I <span class="word" data-ru="возьми">uzmi</span> kišobran, napolju pada kiša.<br>
      — <span class="word" data-ru="Не волнуйся">Nemoj da brineš</span>, sve sam spakovao.<br>
      — <span class="word" data-ru="Будь осторожен">Budi pažljiv</span> na putu!</p>`,
      comprehension: [
        {
          questionRu: "Что мама просит не забыть?",
          options: ["Knjige i kišobran.", "Novac.", "Telefon."],
          correctIndex: 0
        },
        {
          questionRu: "Почему нужен зонт?",
          options: ["Napolju pada kiša.", "Hladno je.", "Sunčano je."],
          correctIndex: 0
        }
      ]
    }
  },

  quiz: [
    { type: "mc", q: "Koji je imperativ (ti) od 'gledati' (prezent: gleda)?", options: ["gledaj", "gledi", "gleda"], correct: 0 },
    { type: "mc", q: "Koji je imperativ (ti) od 'pisati' (prezent: piše)?", options: ["piši", "pisaj", "pisi"], correct: 0 },
    { type: "mc", q: "Koji je imperativ (ti) od 'raditi' (prezent: radi)?", options: ["radi", "radij", "radaj"], correct: 0 },
    { type: "mc", q: "Koji je imperativ (ti) od 'biti'?", options: ["budi", "bi", "bio"], correct: 0 },
    { type: "mc", q: "Koji je imperativ (ti) od 'reći'?", options: ["reči", "reki", "reče"], correct: 0 },
    { type: "mc", q: "Koji je imperativ (ti) od 'uzeti'?", options: ["uzmi", "uzi", "uzmij"], correct: 0 },
    { type: "mc", q: "Kako se gradi negativni imperativ?", options: ["nemoj + da + prezent", "ne + imperativ uvek", "nikad + imperativ"], correct: 0 },
    { type: "mc", q: "Šta znači 'Hajde!'?", options: ["давай!", "стоп!", "привет!"], correct: 0 },
    { type: "mc", q: "Šta znači 'Nemoj da zakasniš!'?", options: ["Не опаздывай!", "Опаздывай!", "Ты опоздал!"], correct: 0 },
    { type: "mc", q: "Šta znači 'pažljivo'?", options: ["внимательно", "быстро", "медленно"], correct: 0 },
    { type: "mc", q: "Šta znači 'zatvoriti'?", options: ["закрыть", "открыть", "сломать"], correct: 0 },
    { type: "mc", q: "Koji je imperativ (vi) od 'doći'?", options: ["dođite", "dođete", "doćete"], correct: 0 },
    { type: "fill", q: "Dopuni: ___ vrata, molim te! (zatvoriti, imperativ ti)", answer: "Zatvori", alt: ["zatvori"] },
    { type: "fill", q: "Dopuni: ___ pažljivo! (slušati, imperativ ti)", answer: "Slušaj", alt: ["slusaj"] },
    { type: "fill", q: "Prevedi na srpski 'Не волнуйтесь.' (vi):", answer: "Nemojte da brinete.", alt: ["nemojte da brinete"] },
    { type: "fill", q: "Prevedi na srpski 'Возьми зонт!':", answer: "Uzmi kišobran!", alt: ["uzmi kisobran"] },
    { type: "fill", q: "Napisi imperativ (ti) glagola 'dati':", answer: "daj", alt: [] },
    { type: "fill", q: "Napisi imperativ (vi) glagola 'raditi':", answer: "radite", alt: [] },
    { type: "fill", q: "Prevedi na srpski 'Сядь, пожалуйста.':", answer: "Sedi, molim te.", alt: ["sedi, molim te"] },
    { type: "fill", q: "Napisi reč za 'терпеливый':", answer: "strpljiv", alt: [] }
  ]
};
