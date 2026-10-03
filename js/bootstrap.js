/* =======================================================================
   BOOTSTRAP.JS — ucitava podatke konkretne lekcije (po ?slug= iz URL-a),
   pa zatim pokrece motor za iscrtavanje (js/lesson.js).
   Izdvojeno u poseban fajl jer inline <script> blokovi mogu biti
   blokirani Content-Security-Policy pravilima hostinga.
   ======================================================================= */

(function () {
  const params = new URLSearchParams(location.search);
  window.LESSON_SLUG = params.get("slug") || "";
  window.LESSON_LEVEL = params.get("level") || "";

  const dataScript = document.createElement("script");
  dataScript.src = "data/lessons/" + window.LESSON_SLUG + ".js";
  dataScript.onload = function () {
    const engine = document.createElement("script");
    engine.src = "js/lesson.js";
    document.body.appendChild(engine);
  };
  dataScript.onerror = function () {
    document.getElementById("lessonRoot").innerHTML =
      "<div class='panel'><p>Lekcija nije pronađena. <a href='index.html'>Nazad na početnu</a>.</p></div>";
  };
  document.body.appendChild(dataScript);
})();
