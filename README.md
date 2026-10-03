# Ucim Srpski

Besplatan interaktivni kurs srpskog jezika za ruske govornike — nivoi A0, A1, A2 i B1.
Ciscom HTML/CSS/JS, bez build koraka — radi direktno na GitHub Pages ili bilo kom statickom hostingu.

Trenutno je u potpunosti popunjen nivo **A0** (10 lekcija). A1, A2 i B1 su vec u planu (vide se na
naslovnoj strani kao "uskoro") i popunjavaju se postepeno.

## Struktura projekta

```
index.html              naslovna strana — lista svih nivoa i lekcija, napredak
lesson.html              univerzalni prikaz jedne lekcije (ucitava podatke po ?slug=)
css/style.css            svi stilovi
js/app.js                logika naslovne strane
js/lesson.js             "motor" koji iscrtava lekciju (gramatika, primeri, kviz, itd.)
js/storage.js            cuvanje napretka u localStorage (lokalno, po uredjaju/browseru)
data/curriculum.js       spisak svih nivoa i lekcija (naslovi, redosled, da li je lekcija spremna)
data/lessons/a0-01.js... sadrzaj svake lekcije (gramatika, primeri, vokabular, kviz)
```

Napredak korisnika (koje su lekcije zavrsene, rezultat kviza) cuva se **lokalno u browseru**
(`localStorage`), bez servera i baze — zato sajt moze biti potpuno staticki.

## Pokretanje lokalno

Najjednostavnije je pokrenuti mali lokalni server (zbog bezbednosnih ogranicenja browsera na
`file://` putanjama za učitavanje skripti):

```bash
python -m http.server 8080
```

ili, ako imas Node.js:

```bash
npx serve .
```

Zatim otvori `http://localhost:8080/` u browseru.

## Hostovanje

### Opcija A — samostalan GitHub repo (GitHub Pages)

1. Napravi novi repozitorijum na GitHub-u, npr. `ucim-srpski`.
2. U ovom folderu pokreni:
   ```bash
   git init
   git add .
   git commit -m "Prva verzija kursa"
   git branch -M main
   git remote add origin https://github.com/<tvoj-username>/ucim-srpski.git
   git push -u origin main
   ```
3. Na GitHub-u: **Settings → Pages → Source: Deploy from branch → main / (root)**.
4. Sajt ce biti dostupan na `https://<tvoj-username>.github.io/ucim-srpski/`.
5. (Opciono) Ako hoces da ga vezes za poddomen tvog sajta (npr. `ucim.andreastojadinov.com`),
   dodaj CNAME zapis kod svog DNS provajdera i fajl `CNAME` sa tim domenom u ovaj folder.

### Opcija B — kao deo postojeceg portfolio sajta (andreastojadinov.com)

Ako portfolio sajt (andreastojadinov.com) vec zivi u svom GitHub repozitorijumu i hostovan je
preko GitHub Pages, najlakse je ovaj folder ubaciti kao **podfolder** tog repozitorijuma, npr.:

```
tvoj-portfolio-repo/
  index.html          ← postojeci portfolio
  ...
  ucim-srpski/        ← ovaj projekat, kopiran ovde kao podfolder
    index.html
    lesson.html
    css/...
    js/...
    data/...
```

Pošto ovaj kurs koristi samo relativne putanje (`css/style.css`, `js/app.js`, itd.), radice
ispravno na `https://andreastojadinov.com/ucim-srpski/` bez ikakvih izmena koda. Samo kopiraj
ceo folder u portfolio repo, komituj i pushuj.

### Opcija C — oba (preporuceno za pocetak)

Postavi ovaj projekat kao svoj samostalan repo/GitHub Pages sajt (Opcija A), a na portfolio sajtu
samo dodaj dugme/link ka njemu. Kasnije, ako zatreba, lako ga mozes premestiti u podfolder
portfolia (Opcija B) — kod se ne mora menjati.

## Kako dodati nove lekcije (A1, A2, B1...)

1. Otvori `data/curriculum.js` i pronadji lekciju koju zelis da popunis (vec ima naslov i `slug`,
   samo stoji `ready: false`).
2. Napravi novi fajl `data/lessons/<slug>.js` (npr. `data/lessons/a1-01.js`) po uzoru na postojece
   A0 lekcije — svaka ima:
   - `intro` (uvod, kratko),
   - `grammar.blocks` (gramaticka objasnjenja na ruskom, sa tabelama, primerima i mini-vezbama),
   - `examples` (flip-kartice za ponavljanje),
   - `tips` (saveti i izuzeci),
   - `vocab` (lista reci + kratak tekst za citanje sa klikabilnim recima + pitanja razumevanja),
   - `quiz` (15–25 pitanja, tipa `mc` — izbor odgovora, ili `fill` — dopuna teksta).
3. U `data/curriculum.js` promeni `ready: false` u `ready: true` za tu lekciju.
4. Osvezi stranicu — lekcija se automatski pojavljuje kao dostupna.

Nema potrebe za bilo kakvim build korakom — sve je cist HTML/CSS/JS.

## Napomena o sadrzaju za citanje

Tekstovi u delu "Vokabular" (za vezbanje citanja) su **originalno napisani za ovaj kurs**, a ne
prepisani iz pravih knjiga ili casopisa — to je uradjeno namerno, da bi se izbegli autorskopravni
problemi pri javnom objavljivanju. Ako kasnije zelis da ubacis stvarne odlomke iz knjiga/casopisa,
vodi racuna o autorskim pravima (kratki citati sa navodjenjem izvora su generalno u redu, ali
celi odlomci iz zasticenih dela nisu bezbedni za javno objavljivanje bez dozvole).
