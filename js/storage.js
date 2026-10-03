/* =======================================================================
   STORAGE.JS
   Cuva napredak korisnika u localStorage (lokalno u browseru, po uredjaju).
   Struktura:
   {
     "a0-01": { lastStep: 2, completed: true, quizScore: 18, quizTotal: 20 },
     ...
   }
   ======================================================================= */

const STORAGE_KEY = "ucimSrpski.progress.v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    /* privatni mod ili puna memorija - tiho ignorisemo */
  }
}

function getLessonProgress(slug) {
  const all = loadProgress();
  return all[slug] || { lastStep: 0, completed: false, quizScore: null, quizTotal: null };
}

function setLessonProgress(slug, patch) {
  const all = loadProgress();
  all[slug] = Object.assign({}, all[slug] || {}, patch);
  saveProgress(all);
  return all[slug];
}

function getOverallStats() {
  const all = loadProgress();
  const slugs = Object.keys(all);
  const completed = slugs.filter((s) => all[s].completed).length;
  return { startedCount: slugs.length, completedCount: completed };
}
