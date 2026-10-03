/* =======================================================================
   CURRICULUM.JS
   Opis cele strukture kursa: nivoi (A0, A1, A2, B1) i lekcije u njima.
   "ready: true"  -> lekcija ima kompletan sadrzaj (data/lessons/<slug>.js)
   "ready: false" -> lekcija je samo najavljena u planu (dolazi kasnije)
   ======================================================================= */

window.CURRICULUM = [
  {
    code: "A0",
    name: "A0 — Apsolutni pocetnik",
    nameRu: "Для начинающих с нуля",
    color: "#2e9e5b",
    description:
      "Osnove: azbuka, izgovor, pozdravi, glagoli BITI i IMATI, brojevi, vreme, porodica, boje i prva prezent gramatika.",
    descriptionRu:
      "Основы: алфавит, произношение, приветствия, глаголы «быть» и «иметь», числа, время, семья, цвета и первые основы настоящего времени.",
    lessons: [
      { id: 1, slug: "a0-01", titleSr: "Azbuka, izgovor i pozdravi", titleRu: "Алфавит, произношение и приветствия", ready: true },
      { id: 2, slug: "a0-02", titleSr: "Glagol BITI i licne zamenice", titleRu: "Глагол «быть» и личные местоимения", ready: true },
      { id: 3, slug: "a0-03", titleSr: "Glagol IMATI i predstavljanje", titleRu: "Глагол «иметь» и знакомство", ready: true },
      { id: 4, slug: "a0-04", titleSr: "Rod i broj imenica", titleRu: "Род и число существительных", ready: true },
      { id: 5, slug: "a0-05", titleSr: "Brojevi 0–100 i cene", titleRu: "Числа 0–100 и цены", ready: true },
      { id: 6, slug: "a0-06", titleSr: "Dani, meseci i koliko je sati", titleRu: "Дни, месяцы и время (который час)", ready: true },
      { id: 7, slug: "a0-07", titleSr: "Porodica i osnovni pridevi", titleRu: "Семья и основные прилагательные", ready: true },
      { id: 8, slug: "a0-08", titleSr: "Boje i pokazne zamenice", titleRu: "Цвета и указательные местоимения", ready: true },
      { id: 9, slug: "a0-09", titleSr: "Upitne reci i negacija", titleRu: "Вопросительные слова и отрицание", ready: true },
      { id: 10, slug: "a0-10", titleSr: "Prezent — uvod u glagolske grupe", titleRu: "Настоящее время — введение в группы глаголов", ready: true }
    ]
  },
  {
    code: "A1",
    name: "A1 — Osnovni nivo",
    nameRu: "Базовый уровень",
    color: "#2272c9",
    description:
      "Padezi (nominativ, akuzativ, lokativ), proslo i buduce vreme, hrana, kupovina i svakodnevne situacije.",
    descriptionRu:
      "Падежи (именительный, винительный, местный), прошедшее и будущее время, еда, покупки и повседневные ситуации.",
    lessons: [
      { id: 1, slug: "a1-01", titleSr: "Padezi — uvod (nominativ i akuzativ)", titleRu: "Падежи — введение (именительный и винительный)", ready: false },
      { id: 2, slug: "a1-02", titleSr: "Lokativ — gde se nalazi?", titleRu: "Местный падеж — где находится?", ready: false },
      { id: 3, slug: "a1-03", titleSr: "Prisvojne zamenice i pridevi", titleRu: "Притяжательные местоимения и прилагательные", ready: false },
      { id: 4, slug: "a1-04", titleSr: "Futur I — buduce vreme", titleRu: "Будущее время (футур I)", ready: false },
      { id: 5, slug: "a1-05", titleSr: "Perfekt — uvod u proslo vreme", titleRu: "Перфект — введение в прошедшее время", ready: false },
      { id: 6, slug: "a1-06", titleSr: "Hrana i narudzbina u restoranu", titleRu: "Еда и заказ в ресторане", ready: false },
      { id: 7, slug: "a1-07", titleSr: "Kupovina i brojevi uz padeze", titleRu: "Покупки и числа с падежами", ready: false },
      { id: 8, slug: "a1-08", titleSr: "Dnevna rutina i povratni glagoli", titleRu: "Распорядок дня и возвратные глаголы", ready: false },
      { id: 9, slug: "a1-09", titleSr: "Komparacija prideva", titleRu: "Сравнение прилагательных", ready: false },
      { id: 10, slug: "a1-10", titleSr: "Putovanja i javni transport", titleRu: "Путешествия и общественный транспорт", ready: false }
    ]
  },
  {
    code: "A2",
    name: "A2 — Pred-srednji nivo",
    nameRu: "Предсредний уровень",
    color: "#c97a22",
    description:
      "Svi padezi u praksi, perfekt detaljno, futur II, kondicional, imperativ, glagolski vid i posao.",
    descriptionRu:
      "Все падежи на практике, перфект подробно, футур II, условное наклонение, императив, глагольный вид и работа.",
    lessons: [
      { id: 1, slug: "a2-01", titleSr: "Svi padezi — pregled i upotreba", titleRu: "Все падежи — обзор и употребление", ready: false },
      { id: 2, slug: "a2-02", titleSr: "Perfekt — detaljno", titleRu: "Перфект — подробно", ready: false },
      { id: 3, slug: "a2-03", titleSr: "Futur II i kondicional", titleRu: "Футур II и условное наклонение", ready: false },
      { id: 4, slug: "a2-04", titleSr: "Imperativ — zapovedni nacin", titleRu: "Императив — повелительное наклонение", ready: false },
      { id: 5, slug: "a2-05", titleSr: "Glagolski vid — svrseni i nesvrseni", titleRu: "Глагольный вид — совершенный и несовершенный", ready: false },
      { id: 6, slug: "a2-06", titleSr: "Posao i profesije", titleRu: "Работа и профессии", ready: false },
      { id: 7, slug: "a2-07", titleSr: "Zdravlje i kod lekara", titleRu: "Здоровье и у врача", ready: false },
      { id: 8, slug: "a2-08", titleSr: "Stan, kuca i pravci kretanja", titleRu: "Квартира, дом и направления движения", ready: false },
      { id: 9, slug: "a2-09", titleSr: "Veznici i slozene recenice", titleRu: "Союзы и сложные предложения", ready: false },
      { id: 10, slug: "a2-10", titleSr: "Pisanje mejla i formalna komunikacija", titleRu: "Написание письма и формальное общение", ready: false }
    ]
  },
  {
    code: "B1",
    name: "B1 — Srednji nivo",
    nameRu: "Средний уровень",
    color: "#7a3fc9",
    description:
      "Pasiv, participi, indirektni govor, poslovna komunikacija, intervju za posao i priprema za zivot u Srbiji.",
    descriptionRu:
      "Пассив, причастия, косвенная речь, деловое общение, собеседование на работу и подготовка к жизни в Сербии.",
    lessons: [
      { id: 1, slug: "b1-01", titleSr: "Pasiv — trpni glagolski oblik", titleRu: "Пассив — страдательный залог", ready: false },
      { id: 2, slug: "b1-02", titleSr: "Glagolski prilozi i participi", titleRu: "Деепричастия и причастия", ready: false },
      { id: 3, slug: "b1-03", titleSr: "Indirektni govor", titleRu: "Косвенная речь", ready: false },
      { id: 4, slug: "b1-04", titleSr: "Izrazavanje misljenja i argumentacija", titleRu: "Выражение мнения и аргументация", ready: false },
      { id: 5, slug: "b1-05", titleSr: "Poslovna komunikacija", titleRu: "Деловое общение", ready: false },
      { id: 6, slug: "b1-06", titleSr: "Srpska kultura i obicaji", titleRu: "Сербская культура и обычаи", ready: false },
      { id: 7, slug: "b1-07", titleSr: "Vesti i mediji", titleRu: "Новости и СМИ", ready: false },
      { id: 8, slug: "b1-08", titleSr: "Idiomi i frazeologija", titleRu: "Идиомы и фразеология", ready: false },
      { id: 9, slug: "b1-09", titleSr: "Pisanje CV-a i motivacionog pisma", titleRu: "Составление резюме и мотивационного письма", ready: false },
      { id: 10, slug: "b1-10", titleSr: "Intervju za posao — simulacija", titleRu: "Собеседование на работу — симуляция", ready: false }
    ]
  }
];
