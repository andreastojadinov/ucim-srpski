/* =======================================================================
   APP.JS — logika naslovne strane (lista nivoa i lekcija)
   ======================================================================= */

(function () {
  function countLessons() {
    let total = 0, ready = 0;
    window.CURRICULUM.forEach((lvl) => {
      lvl.lessons.forEach((l) => {
        total++;
        if (l.ready) ready++;
      });
    });
    return { total, ready };
  }

  function renderStats() {
    const { completedCount } = getOverallStats();
    const { total, ready } = countLessons();
    const bar = document.getElementById("statsBar");
    bar.innerHTML = `
      <div class="stat-pill">Dostupno lekcija / Доступно уроков: <b>${ready}</b> / ${total}</div>
      <div class="stat-pill">Završeno / Завершено: <b>${completedCount}</b></div>
    `;
  }

  function lessonCardHtml(level, lesson) {
    const prog = getLessonProgress(lesson.slug);
    let badge = "";
    let statusLine = "";

    if (!lesson.ready) {
      badge = `<span class="badge soon">uskoro / скоро</span>`;
    } else if (prog.completed) {
      const pct = prog.quizTotal ? Math.round((prog.quizScore / prog.quizTotal) * 100) : null;
      badge = `<span class="badge done">završeno / готово${pct !== null ? " · " + pct + "%" : ""}</span>`;
    } else if (prog.lastStep > 0) {
      badge = `<span class="badge progress">u toku / в процессе</span>`;
    } else {
      badge = `<span class="badge new">novo / новое</span>`;
    }

    if (lesson.ready) {
      const fakeTotalSteps = 6;
      const rawPct = prog.completed ? 100 : Math.min(100, Math.round((prog.lastStep / fakeTotalSteps) * 100));
      const bucket = Math.round(rawPct / 10) * 10;
      statusLine = `<div class="progress-track"><div class="progress-fill w${bucket}"></div></div>`;
    }

    const cls = "lesson-card " + (lesson.ready ? "ready" : "locked");
    const dataAttrs = lesson.ready ? ` data-level="${level.code}" data-slug="${lesson.slug}"` : "";

    return `
      <div class="${cls}"${dataAttrs}>
        <div class="lesson-num">${level.code} · Lekcija ${lesson.id}</div>
        <div class="lesson-title">${lesson.titleSr}</div>
        <div class="lesson-title-ru">${lesson.titleRu}</div>
        <div class="lesson-status">${badge}</div>
        ${statusLine}
      </div>
    `;
  }

  function renderLevels() {
    const wrap = document.getElementById("levels");
    wrap.innerHTML = window.CURRICULUM.map((level) => `
      <section class="level-block">
        <div class="level-head">
          <h2 class="lvl-color-${level.code}">${level.name}</h2>
        </div>
        <p class="level-desc">${level.description}<span class="ru">${level.descriptionRu}</span></p>
        <div class="lesson-grid">
          ${level.lessons.map((l) => lessonCardHtml(level, l)).join("")}
        </div>
      </section>
    `).join("");

    wrap.querySelectorAll(".lesson-card.ready").forEach((card) => {
      card.addEventListener("click", () => {
        location.href = "lesson.html?level=" + card.dataset.level + "&slug=" + card.dataset.slug;
      });
    });
  }

  renderStats();
  renderLevels();
})();
