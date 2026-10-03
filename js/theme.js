/* =======================================================================
   THEME.JS — svetla/tamna tema. Ucitava se rano (u <head>) da izbegne
   "trepkanje" pogresne teme pri ucitavanju stranice. Cuva izbor u
   localStorage, uz podrazumevano postovanje sistemske (OS) teme.
   ======================================================================= */

(function () {
  const STORAGE_KEY = "ucimSrpski.theme";

  function getPreferredTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {
      /* privatni mod ili blokiran storage - ignorisi */
    }
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    } catch (e) {
      /* ignorisi */
    }
    return "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  applyTheme(getPreferredTheme());

  function wireToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    function updateIcon() {
      const current = document.documentElement.getAttribute("data-theme");
      btn.textContent = current === "dark" ? "☀️" : "🌙";
    }
    updateIcon();

    btn.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* ignorisi */
      }
      updateIcon();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireToggle);
  } else {
    wireToggle();
  }
})();
