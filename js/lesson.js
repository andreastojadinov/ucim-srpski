/* =======================================================================
   LESSON.JS — "motor" koji iscrtava lekciju i obradjuje interaktivnost
   (gramatika sa mini-provezbavanjima, flip-kartice za primere, čitanje sa
   rečnikom i kviz sa automatskom provizijom odgovora).
   ======================================================================= */

(function () {
  const lesson = window.LESSONS && window.LESSONS[window.LESSON_SLUG];
  const root = document.getElementById("lessonRoot");

  if (!lesson) {
    root.innerHTML = "<div class='panel'><p>Lekcija nije pronađena. <a href='index.html'>Nazad na početnu</a>.</p></div>";
    return;
  }

  const level = (window.CURRICULUM || []).find((l) => l.code === lesson.level);
  document.getElementById("lessonTitle").textContent =
    (level ? level.code + " · " : "") + lesson.titleSr;
  document.title = lesson.titleSr + " — Učim Srpski";

  const STEPS = [
    { key: "intro", label: "Uvod" },
    { key: "grammar", label: "Gramatika" },
    { key: "examples", label: "Primeri" },
    { key: "tips", label: "Saveti" },
    { key: "vocab", label: "Vokabular" },
    { key: "quiz", label: "Kviz" }
  ];

  let progress = getLessonProgress(lesson.slug);
  let currentStepIndex = 0;
  let quizState = (lesson.quiz || []).map(() => ({ answered: false, correct: false }));
  let quizFinished = !!progress.completed;

  /* ---------------- helpers ---------------- */

  function normalizeText(s) {
    return (s || "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[.,!?;:()"']/g, "")
      .replace(/č|ć/g, "c")
      .replace(/š/g, "s")
      .replace(/ž/g, "z")
      .replace(/đ/g, "dj")
      .replace(/\s+/g, " ");
  }

  function fillIsCorrect(userText, item) {
    const accepted = [item.answer].concat(item.alt || []);
    const norm = normalizeText(userText);
    if (!norm) return false;
    return accepted.some((a) => normalizeText(a) === norm);
  }

  function escapeHtml(s) {
    return (s || "").toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function navRow(opts) {
    opts = opts || {};
    const isFirst = currentStepIndex === 0;
    const isLast = currentStepIndex === STEPS.length - 1;
    return `<div class="nav-row">
      <button class="btn secondary" id="prevBtn" ${isFirst ? "disabled" : ""}>&larr; Prethodno</button>
      ${isLast ? "" : `<button class="btn" id="nextBtn">Sledece &rarr;</button>`}
    </div>`;
  }

  /* ---------------- step tabs ---------------- */

  function renderStepTabs() {
    const wrap = document.getElementById("stepTabs");
    wrap.innerHTML = STEPS.map((s, i) => {
      let cls = "step-tab";
      if (i === currentStepIndex) cls += " active";
      else if (i <= Math.max(progress.lastStep || 0, currentStepIndex)) cls += " visited";
      return `<div class="${cls}" data-step="${i}">${i + 1}. ${s.label}</div>`;
    }).join("");
    wrap.querySelectorAll(".step-tab").forEach((el) => {
      el.addEventListener("click", () => goToStep(parseInt(el.dataset.step, 10)));
    });
  }

  function goToStep(i) {
    currentStepIndex = Math.max(0, Math.min(STEPS.length - 1, i));
    if (currentStepIndex > (progress.lastStep || 0)) {
      progress = setLessonProgress(lesson.slug, { lastStep: currentStepIndex });
    }
    renderStepTabs();
    renderCurrentStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- INTRO ---------------- */

  function renderIntro() {
    const i = lesson.intro || {};
    return `
      <div class="panel">
        <h2>Uvod u lekciju</h2>
        ${i.sr ? `<p class="sr-example"><span class="sr">${i.sr}</span></p>` : ""}
        <div class="ru-box"><span class="lbl">На русском</span>${i.ru || ""}</div>
        ${navRow()}
      </div>
    `;
  }

  /* ---------------- GRAMMAR ---------------- */

  function renderDrillHtml(drill, uid) {
    if (!drill) return "";
    if (drill.type === "choice") {
      const opts = drill.options.map((opt, idx) =>
        `<button class="opt-btn" data-uid="${uid}" data-idx="${idx}">${escapeHtml(opt)}</button>`
      ).join("");
      return `
        <div class="drill" data-drill="${uid}" data-correct="${drill.correctIndex}">
          <div class="drill-q">Probaj sam: ${escapeHtml(drill.question)}</div>
          <div class="drill-options">${opts}</div>
          <div class="feedback" data-fb="${uid}"></div>
        </div>
      `;
    }
    if (drill.type === "fill") {
      return `
        <div class="drill" data-drill="${uid}">
          <div class="drill-q">Probaj sam: ${escapeHtml(drill.question)}</div>
          <div class="text-check-row">
            <input type="text" placeholder="Upiši odgovor..." data-input="${uid}">
            <button class="btn" data-check="${uid}">Provera</button>
          </div>
          <div class="feedback" data-fb="${uid}"></div>
        </div>
      `;
    }
    return "";
  }

  function renderGrammar() {
    const g = lesson.grammar || {};
    let blocksHtml = (g.blocks || []).map((b, bi) => {
      let tableHtml = "";
      if (b.table) {
        tableHtml = `<table class="conj"><tr>${b.table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr>` +
          b.table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("") +
          `</table>`;
      }
      let examplesHtml = "";
      if (b.examples && b.examples.length) {
        examplesHtml = `<ul class="example-list">` + b.examples.map(ex =>
          `<li><div class="ex-sr">${ex.sr}</div><div class="ex-ru">${ex.ru}</div></li>`
        ).join("") + `</ul>`;
      }
      const drillHtml = renderDrillHtml(b.drill, `g${bi}`);
      return `
        <h3>${b.heading}</h3>
        <div class="ru-box"><span class="lbl">Объяснение</span>${b.explanationRu}</div>
        ${tableHtml}
        ${examplesHtml}
        ${drillHtml}
      `;
    }).join("");

    return `
      <div class="panel">
        <h2>Gramatika</h2>
        ${blocksHtml}
        ${navRow()}
      </div>
    `;
  }

  /* ---------------- EXAMPLES (flip cards) ---------------- */

  function renderExamples() {
    const ex = lesson.examples || { items: [] };
    const cards = (ex.items || []).map((item, idx) => `
      <div class="flip-card" data-flip="${idx}">
        <div class="front">${item.sr}</div>
        <div class="back">${item.ru}</div>
        <div class="hint">Klikni za prevod / Нажми для перевода</div>
      </div>
    `).join("");
    return `
      <div class="panel">
        <h2>Primeri</h2>
        ${ex.titleRu ? `<div class="ru-box"><span class="lbl">Как использовать</span>${ex.titleRu}</div>` : ""}
        ${cards}
        ${navRow()}
      </div>
    `;
  }

  /* ---------------- TIPS ---------------- */

  function renderTips() {
    const t = lesson.tips || { items: [] };
    const items = (t.items || []).map((txt) => `<div class="ru-box tip"><span class="lbl">Совет / Savet</span>${txt}</div>`).join("");
    return `
      <div class="panel">
        <h2>Saveti i izuzeci</h2>
        ${items || "<p>Nema dodatnih napomena za ovu lekciju.</p>"}
        ${navRow()}
      </div>
    `;
  }

  /* ---------------- VOCAB ---------------- */

  function renderVocab() {
    const v = lesson.vocab || {};
    const wordsHtml = (v.words || []).map((w) =>
      `<tr><td class="w-sr">${w.sr}</td><td class="w-ru">${w.ru}</td></tr>`
    ).join("");

    let readingHtml = "";
    if (v.reading) {
      readingHtml = `
        <h3>Kratak tekst za vežbanje čitanja</h3>
        <div class="reading-excerpt">
          ${v.reading.textSr}
          <span class="source">${v.reading.sourceNote || ""}</span>
        </div>
        ${(v.reading.comprehension || []).map((c, ci) => renderDrillHtml(
          { type: "choice", question: c.questionRu, options: c.options, correctIndex: c.correctIndex },
          `r${ci}`
        )).join("")}
      `;
    }

    return `
      <div class="panel">
        <h2>Vokabular</h2>
        ${v.titleRu ? `<div class="ru-box"><span class="lbl">Слова этого урока</span>${v.titleRu}</div>` : ""}
        <table class="vocab-table">${wordsHtml}</table>
        ${readingHtml}
        ${navRow()}
      </div>
    `;
  }

  /* ---------------- QUIZ ---------------- */

  function renderQuizItem(item, idx) {
    const state = quizState[idx];
    let body = "";
    if (item.type === "mc") {
      const opts = item.options.map((opt, oi) =>
        `<button class="opt-btn" data-qidx="${idx}" data-oidx="${oi}">${escapeHtml(opt)}</button>`
      ).join("");
      body = `<div class="drill-options" data-qopts="${idx}">${opts}</div>
        <div class="quiz-check-wrap">
          <button class="btn" data-qcheck="${idx}" disabled>Provera</button>
        </div>`;
    } else if (item.type === "fill") {
      body = `
        <div class="quiz-check-wrap">
          <input type="text" placeholder="Upiši odgovor..." data-qinput="${idx}" ${state.answered ? "disabled" : ""}>
          <button class="btn" data-qcheck="${idx}" ${state.answered ? "disabled" : ""}>Provera</button>
        </div>
      `;
    }
    return `
      <div class="quiz-item" data-qitem="${idx}">
        <div class="q-num">Pitanje ${idx + 1} / ${lesson.quiz.length}</div>
        <div class="q-text">${item.q}</div>
        ${body}
        <div class="feedback" data-qfb="${idx}"></div>
      </div>
    `;
  }

  function renderQuiz() {
    if (quizFinished && progress.quizScore !== null && progress.quizScore !== undefined && !quizRetryActive) {
      return `<h2 class="quiz-done-heading">Kviz</h2>` + renderQuizSummaryFromProgress();
    }
    const items = lesson.quiz.map((item, idx) => renderQuizItem(item, idx)).join("");
    return `
      <div class="panel">
        <h2>Kviz</h2>
        <p class="quiz-intro-note">Odaberi odgovor ili upiši reč, pa klikni <b>Provera</b>. / Выбери ответ или допиши слово, затем нажми «Provera».</p>
        ${items}
        <div class="nav-row">
          <button class="btn secondary" id="prevBtn">&larr; Prethodno</button>
          <button class="btn" id="finishQuizBtn">Završi kviz</button>
        </div>
      </div>
    `;
  }

  function renderQuizSummaryFromProgress() {
    const total = progress.quizTotal;
    const score = progress.quizScore;
    const pct = Math.round((score / total) * 100);
    return `
      <div class="panel quiz-summary">
        <div>Tvoj rezultat / Твой результат</div>
        <div class="score">${score} / ${total}</div>
        <div>${pct}%</div>
        <p class="quiz-summary-actions">
          <button class="btn secondary" id="retryQuizBtn">Pokušaj ponovo</button>
          <a class="btn btn-link-inline" href="index.html">Nazad na sve lekcije</a>
        </p>
      </div>
    `;
  }

  let quizRetryActive = false;

  /* ---------------- master render ---------------- */

  function renderCurrentStep() {
    const key = STEPS[currentStepIndex].key;
    if (key === "intro") root.innerHTML = renderIntro();
    else if (key === "grammar") root.innerHTML = renderGrammar();
    else if (key === "examples") root.innerHTML = renderExamples();
    else if (key === "tips") root.innerHTML = renderTips();
    else if (key === "vocab") root.innerHTML = renderVocab();
    else if (key === "quiz") root.innerHTML = renderQuiz();
    wireStep(key);
  }

  function wireCommonNav() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    if (prevBtn) prevBtn.addEventListener("click", () => goToStep(currentStepIndex - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goToStep(currentStepIndex + 1));
  }

  function wireDrills(scope) {
    scope.querySelectorAll(".drill").forEach((drillEl) => {
      const uid = drillEl.dataset.drill;
      const correctIdx = drillEl.dataset.correct;
      const fb = scope.querySelector(`[data-fb="${uid}"]`);

      // choice buttons
      drillEl.querySelectorAll(`.opt-btn[data-uid="${uid}"]`).forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = btn.dataset.idx;
          const isCorrect = String(idx) === String(correctIdx);
          drillEl.querySelectorAll(".opt-btn").forEach((b) => b.classList.remove("correct", "wrong"));
          if (isCorrect) {
            btn.classList.add("correct");
            fb.textContent = "Tačno! / Правильно!";
            fb.className = "feedback show ok";
          } else {
            btn.classList.add("wrong");
            const correctBtn = drillEl.querySelector(`.opt-btn[data-idx="${correctIdx}"]`);
            if (correctBtn) correctBtn.classList.add("correct");
            fb.textContent = "Nije tačno. Tačan odgovor je oznacen zeleno. / Неверно — правильный ответ отмечен зелёным.";
            fb.className = "feedback show bad";
          }
        });
      });

      // fill check
      const checkBtn = scope.querySelector(`[data-check="${uid}"]`);
      if (checkBtn) {
        checkBtn.addEventListener("click", () => {
          const input = scope.querySelector(`[data-input="${uid}"]`);
          const val = input.value;
          const correctInfo = drillAnswerMap[uid];
          const isOk = correctInfo ? fillIsCorrect(val, correctInfo) : false;
          if (isOk) {
            fb.textContent = "Tačno! / Правильно!";
            fb.className = "feedback show ok";
          } else {
            fb.textContent = `Nije tačno. Tačan odgovor: "${correctInfo ? correctInfo.answer : ""}". / Неверно. Правильный ответ: "${correctInfo ? correctInfo.answer : ""}".`;
            fb.className = "feedback show bad";
          }
        });
      }
    });
  }

  // map uid -> {answer, alt} for fill drills (filled while rendering)
  let drillAnswerMap = {};

  function collectDrillAnswers() {
    drillAnswerMap = {};
    (lesson.grammar && lesson.grammar.blocks || []).forEach((b, bi) => {
      if (b.drill && b.drill.type === "fill") {
        drillAnswerMap[`g${bi}`] = { answer: b.drill.answer, alt: b.drill.alt || [] };
      }
    });
  }
  collectDrillAnswers();

  function wireFlipCards(scope) {
    scope.querySelectorAll(".flip-card").forEach((card) => {
      card.addEventListener("click", () => card.classList.toggle("open"));
    });
  }

  function wireReadingWords(scope) {
    scope.querySelectorAll(".reading-excerpt .word").forEach((w) => {
      w.addEventListener("click", (e) => {
        e.stopPropagation();
        const wasOpen = w.classList.contains("open");
        scope.querySelectorAll(".reading-excerpt .word.open").forEach((o) => o.classList.remove("open"));
        if (!wasOpen) w.classList.add("open");
      });
    });
  }

  function wireQuiz(scope) {
    lesson.quiz.forEach((item, idx) => {
      const state = quizState[idx];
      const fb = scope.querySelector(`[data-qfb="${idx}"]`);
      if (item.type === "mc") {
        const optsWrap = scope.querySelector(`[data-qopts="${idx}"]`);
        const checkBtn = scope.querySelector(`[data-qcheck="${idx}"]`);
        let selected = null;
        optsWrap.querySelectorAll(".opt-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            if (state.answered) return;
            selected = parseInt(btn.dataset.oidx, 10);
            optsWrap.querySelectorAll(".opt-btn").forEach((b) => b.classList.remove("selected"));
            btn.classList.add("selected");
            checkBtn.disabled = false;
          });
        });
        checkBtn.addEventListener("click", () => {
          if (state.answered || selected === null) return;
          state.answered = true;
          state.correct = selected === item.correct;
          optsWrap.querySelectorAll(".opt-btn").forEach((b) => b.classList.remove("selected"));
          optsWrap.querySelectorAll(".opt-btn").forEach((b, oi) => {
            if (oi === item.correct) b.classList.add("correct");
            else if (oi === selected) b.classList.add(state.correct ? "correct" : "wrong");
          });
          checkBtn.disabled = true;
          if (state.correct) {
            fb.textContent = "Tačno! / Правильно! " + (item.explain || "");
            fb.className = "feedback show ok";
          } else {
            fb.textContent = `Nije tačno. Tačan odgovor: "${item.options[item.correct]}". ${item.explain || ""}`;
            fb.className = "feedback show bad";
          }
        });
      } else if (item.type === "fill") {
        const input = scope.querySelector(`[data-qinput="${idx}"]`);
        const checkBtn = scope.querySelector(`[data-qcheck="${idx}"]`);
        checkBtn.addEventListener("click", () => {
          if (state.answered) return;
          state.answered = true;
          state.correct = fillIsCorrect(input.value, item);
          input.disabled = true;
          checkBtn.disabled = true;
          if (state.correct) {
            fb.textContent = "Tačno! / Правильно! " + (item.explain || "");
            fb.className = "feedback show ok";
          } else {
            fb.textContent = `Nije tačno. Tačan odgovor: "${item.answer}". ${item.explain || ""}`;
            fb.className = "feedback show bad";
          }
        });
      }
    });

    const finishBtn = document.getElementById("finishQuizBtn");
    if (finishBtn) {
      finishBtn.addEventListener("click", () => {
        const total = lesson.quiz.length;
        const score = quizState.reduce((acc, s) => acc + (s.correct ? 1 : 0), 0);
        quizFinished = true;
        quizRetryActive = false;
        progress = setLessonProgress(lesson.slug, {
          lastStep: STEPS.length - 1,
          completed: true,
          quizScore: score,
          quizTotal: total
        });
        renderCurrentStep();
      });
    }

    const retryBtn = document.getElementById("retryQuizBtn");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        quizState = lesson.quiz.map(() => ({ answered: false, correct: false }));
        quizRetryActive = true;
        renderCurrentStep();
      });
    }
  }

  function wireStep(key) {
    wireCommonNav();
    if (key === "grammar") wireDrills(root);
    if (key === "examples") wireFlipCards(root);
    if (key === "vocab") {
      wireDrills(root);
      wireReadingWords(root);
    }
    if (key === "quiz") {
      const hasItems = root.querySelector("[data-qitem]");
      if (hasItems) {
        wireQuiz(root);
      } else {
        const retryBtn = document.getElementById("retryQuizBtn");
        if (retryBtn) {
          retryBtn.addEventListener("click", () => {
            quizState = lesson.quiz.map(() => ({ answered: false, correct: false }));
            quizRetryActive = true;
            renderCurrentStep();
          });
        }
      }
    }
  }

  /* ---------------- init ---------------- */

  currentStepIndex = 0;
  renderStepTabs();
  renderCurrentStep();
})();
