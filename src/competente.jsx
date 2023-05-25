import React from "react";

const Competente = () => {
  return (
    <div className="">
      <p className="competente-titlu text-center fs-1">
        Competențe - Informatică Tic
      </p>

      {/* COMPETENTE GENERALE */}
      <p className="fs-3">
        <u>Competențe generale</u>
      </p>
      <ol className="fs-5">
        <li>
          Utilizarea responsabilă și eficientă a tehnologiei informației și
          comunicațiilor
        </li>
        <li>
          Rezolvarea unor probleme elementare prin metode intuitive de
          prelucrare a informației
        </li>
        <li>
          Elaborarea creativă de mini proiecte care vizează aspecte sociale,
          culturale și personale, respectând creditarea informației și
          drepturile de autor
        </li>
      </ol>

      {/* COMPETENTE SPECIFICE */}
      <p className="fs-3">
        <u>Competențe specifice</u>
      </p>

      <div className="accordion" id="accordionExample">
        {/* CLASA A 5-a */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Clasa a V-a
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-5">
              <ol>
                <li className="fw-bold">
                  Utilizarea responsabilă și eficientă a tehnologiei informației
                  și comunicațiilor
                </li>
                <ol>
                  <li className="fw-semibold">
                    Utilizarea eficientă şi în condiţii de siguranţă a
                    dispozitivelor de calcul
                  </li>
                  <ul>
                    <li>
                      descrierea momentelor principale în evoluția sistemelor de
                      calcul și de comunicații (prin
                      imagini/desene/grafice/filme didactice etc.) cu
                      identificarea caracteristicilor dispozitivelor actuale
                    </li>
                    <li>
                      identificarea componentelor hardware (de exemplu
                      utilizând: componente ale unor calculatoare dezasamblate,
                      simulatoare virtuale, filme didactice, planşe etc.) cu
                      evidenţierea rolului componentelor hardware și a
                      interacțiunilor dintre acestea
                    </li>
                    <li>
                      exersarea utilizării corecte a unui calculator sau a unor
                      dispozitive mobile (tabletă, telefon, consolă, laptop), cu
                      evidenţierea efectelor asupra stării de sănătate și a
                      pericolelor ce pot apărea în cazul unei utilizări
                      incorecte, inclusiv identificarea riscurilor asociate cu
                      implicarea excesivă a divertismentului digital sau
                      utilizarea excesivă a platformelor și resurselor de
                      divertisment digital
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Utilizarea eficientă a unor componente software
                  </li>
                  <ul>
                    <li>
                      exersarea utilizării elementelor de interfață, într-o
                      aplicație specifică sistemului de operare folosit (de
                      exemplu un editor de texte simplu sau un editor grafic),
                      cu evidenţierea rolului unui sistem de operare
                    </li>
                    <li>
                      descrierea modului de organizare a informațiilor pe suport
                      extern și exersarea modalităților de lucru cu fișiere și
                      directoare
                    </li>
                    <li>
                      realizarea într-o aplicație specifică sistemului de
                      operare sau într-un utilitar specializat a principalelor
                      operații cu fișiere și directoare (creare, ștergere,
                      redenumire, copiere, mutare, căutare) în vederea
                      organizării resurselor digitale personale
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Utilizarea eficientă şi în siguranță a Internetului ca sursă
                    de documentare
                  </li>
                  <ul>
                    <li>
                      identificarea unor servicii ale rețelei Internet și
                      descrierea rolului acestora în satisfacerea unor nevoi din
                      viața de zi cu zi
                    </li>
                    <li>
                      căutarea unor informații pe Internet, salvarea
                      informațiilor căutate (text/imagini) cu evidențierea
                      normelor referitoare la drepturile de autor, licențe
                      software și drepturi de utilizare aferente conținuturilor
                      digitale
                    </li>
                    <li>
                      analizarea unor situații în care Internetul poate genera
                      pericole și identificarea unor soluții posibile, a unor
                      metode de a evita astfel de situații (utilizând jocuri de
                      rol, filme didactice etc.)
                    </li>
                    <li>
                      stabilirea unor reguli pentru o navigare sigură şi
                      eficientă pe Internet și discutarea credibilității
                      resurselor Web în scopul identificării unor resurse
                      relevante pentru teme disciplinare/interdisciplinare
                    </li>
                  </ul>
                </ol>
                <li className="fw-bold">
                  Rezolvarea unor probleme elementare prin metode intuitive de
                  prelucrare a informației
                </li>
                <ol>
                  <li className="fw-semibold">
                    Identificarea unor modalități algoritmice pentru rezolvarea
                    unor situații din viața cotidiană, exprimate în limbaj
                    natural
                  </li>
                  <ul>
                    <li>
                      prezentarea unor algoritmi întâlniți în viața cotidiană
                      bazați pe o secvență de operații (de exemplu: prepararea
                      unui ceai etc)
                    </li>
                    <li>
                      prezentarea unor algoritmi întâlniți în viața cotidiană
                      bazați pe decizii (traversarea străzii, asamblarea unui
                      obiect compus din piese pe baza unor indicaţii specificate
                      etc.)
                    </li>
                    <li>
                      analizarea unor formulări în scopul identificării
                      proprietăților algoritmilor și respectării acestora (de
                      exemplu, formularea „dacă plouă stau acasă sau merg la
                      film” este lipsită de claritate; formularea „se afişează
                      numerele naturale pare” este lipsită de finitudine)
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Identificarea datelor cu care lucrează algoritmii în scopul
                    utilizării acestora în prelucrări
                  </li>
                  <ul>
                    <li>
                      analizarea unor situaţii cunoscute (viaţa în şcoală,
                      mersul la cumpărături, conversii ale unor mărimi în
                      diferite unităţi de măsură etc.) în scopul identificării
                      datelor de intrare și a datelor de ieșire, cu
                      diferenţierea variabilelor de constante
                    </li>
                    <li>
                      determinarea datelor de ieșire, pe baza unui set dat de
                      date de intrare, pentru o problemă din viața cotidiană sau
                      de la matematică
                    </li>
                    <li>
                      formularea în limbaj natural a unor propoziții care să
                      conțină operații aritmetice, relaţionale, logice sau
                      negarea acestor propoziții (de exemplu: ”în pauza mare
                      mănânc mere sau pere”, “în pauza mare nu mănânc nici mere
                      și nici pere”) în scopul identificării rolului acestora în
                      prelucrări algoritmice
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Descrierea în limbaj natural a unor algoritmi cu ajutorul
                    secvențelor de operații și a deciziilor pentru rezolvarea
                    unor probleme simple
                  </li>
                  <ul>
                    <li>
                      analizarea unei probleme simple în scopul identificării
                      unei secvențe de pași și a deciziilor necesare pentru
                      rezolvarea acesteia (planificarea unei excursii,
                      realizarea temelor, deplasarea unui personaj grafic
                      într-un labirint, traversarea străzii, determinarea celei
                      mai scumpe/ieftine jucării din două/trei variante de preţ,
                      identificarea unei posibile coliziuni dintre un personaj
                      grafic şi un alt obiect din animație, în scopul evitării
                      acesteia, asocierea unei acţiuni unui personaj grafic, în
                      funcţie de apariţia unui eveniment etc.)
                    </li>
                    <li>
                      urmărirea pas cu pas a algoritmilor descriși pentru
                      diferite seturi de date de intrare, selectate astfel încât
                      fiecare caz posibil să fie executat (secvențe de operații)
                    </li>
                    <li>
                      urmărirea pas cu pas a algoritmilor descriși pentru
                      diferite seturi de date de intrare, cu identificarea
                      eventualelor cazuri speciale (decizii)
                    </li>
                  </ul>
                </ol>
                <li className="fw-bold">
                  Elaborarea creativă de mini proiecte care vizează aspecte
                  sociale, culturale și personale, respectând creditarea
                  informației și drepturile de autor
                </li>
                <ol>
                  <li className="fw-semibold">
                    Aplicarea operațiilor specifice editoarelor grafice în
                    vederea realizării unor materiale digitale
                  </li>
                  <ul>
                    <li>
                      realizarea unor personaje grafice, 2D sau 3D, utilizând
                      editoare specializate, prin participarea la concursuri de
                      creație
                    </li>
                    <li>
                      realizarea și utilizarea unor personaje grafice pentru
                      ilustrarea unei povești
                    </li>
                    <li>
                      realizarea unei felicitări, a unui afiș publicitar, a unui
                      logo etc.
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Implementarea unui algoritm care conţine structura
                    secvenţială şi/sau alternativă într-un mediu grafic
                    interactiv
                  </li>
                  <ul>
                    <li>
                      utilizarea unui mediu interactiv care permite
                      implementarea structurii secvențiale și alternative
                      folosind elemente grafice (de exemplu, Scratch, Blockly,
                      Alice, aplicații existente pe platforma educațională de
                      tip code.org etc.) pentru a crea aplicații cu structura
                      secvențială prin operații de mișcare, sunete, vizualizare
                      text etc.
                    </li>
                    <li>
                      analizarea exemplelor existente pe Internet specifice
                      mediului grafic selectat și modificarea acestora pentru a
                      îndeplini alte funcțiuni
                    </li>
                    <li>
                      identificarea necesității utilizării unei structuri de
                      decizie (alternative) și introducerea în aplicația creată
                      a unor astfel de structuri
                    </li>
                    <li>
                      realizarea de aplicații, individual sau în echipă,
                      utilizând un mediu grafic, eventual prin participarea la
                      un concurs (de exemplu: crearea unui joc individual)
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Manifestarea creativă prin utilizarea unor aplicații simple
                    de construire a unor jocuri digitale
                  </li>
                  <ul>
                    <li>
                      participarea la evenimente de tip: „Hour of Code”, Europe
                      CodeWeek (codeweek.eu), Scratch Day (day.scratch.mit.edu),
                      Google Science Fair etc.
                    </li>
                    <li>
                      implicarea în activități colaborative utilizând
                      aplicațiile studiate (de exemplu, participarea la un joc
                      didactic de echipă, crearea în echipă a unui joc
                      educațional/povești etc.)
                    </li>
                    <li>
                      analizarea codului unui joc simplu în scopul identificării
                      modului de realizare a funcţionalității acestuia,
                      modificarea codului pentru a obține alte efecte şi analiza
                      comparativă a efectelor obţinute printr-un schimb liber de
                      idei
                    </li>
                  </ul>
                </ol>
              </ol>
            </div>
          </div>
        </div>

        {/* CLASA A 6-a */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Clasa a VI-a
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-5">
              <ol>
                <li className="fw-bold">
                  Utilizarea responsabilă și eficientă a tehnologiei informației
                  și comunicațiilor
                </li>
                <ol>
                  <li className="fw-semibold">
                    Utilizarea eficientă a instrumentelor specializate în scopul
                    realizării unei prezentări
                  </li>
                  <ul>
                    <li>
                      explorarea elementelor de interfață ale unei aplicații de
                      prezentare în scopul identificării principalelor
                      facilități ale acesteia
                    </li>
                    <li>
                      analiza unei prezentări model din perspectiva structurii
                      și efectelor utilizate și modificarea acesteia la nivel de
                      conținut și de aspect
                    </li>
                    <li>
                      realizarea unei prezentări noi, pe o temă atractivă,
                      aplicând efecte de animație obiectelor și de tranziție
                      diapozitivelor și expunerea prezentării
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Utilizarea eficientă a instrumentelor specializate în scopul
                    realizării unei animații grafice
                  </li>
                  <ul>
                    <li>
                      explorarea elementelor de interfață ale unei aplicații
                      pentru copii dedicate animațiilor 3D în scopul
                      identificării principalelor facilități ale acesteia
                    </li>
                    <li>
                      realizarea unei animații care să ilustreze un
                      fenomen/model cu 2-3 obiecte, cu efecte de poziționare,
                      mișcare, sunet
                    </li>
                    <li>testarea și depanarea unor animații</li>
                  </ul>
                  <li className="fw-semibold">
                    Aplicarea operațiilor specifice pentru comunicarea prin
                    Internet
                  </li>
                  <ul>
                    <li>
                      identificarea elementelor de interfață ale unei aplicații
                      de comunicare prin Internet
                    </li>
                    <li>
                      crearea unui cont de poștă electronică și comunicarea cu
                      colegii aplicând neticheta
                    </li>
                    <li>
                      exersarea funcțiilor de atașare de fișiere, retrimitere și
                      redirecționare, de organizare a mesajelor existente în
                      contul de email în dosare și categorii
                    </li>
                    <li>
                      ilustrarea principalelor caracteristici ale virușilor și
                      malware, utilizarea programelor antivirus
                    </li>
                    <li>
                      identificarea unor bune practici pentru protecția
                      împotriva furtului de identitate în mediul virtual
                    </li>
                  </ul>
                </ol>
                <li className="fw-bold">
                  Rezolvarea unor probleme elementare prin metode intuitive de
                  prelucrare a informației
                </li>
                <ol>
                  <li className="fw-semibold">
                    Utilizarea unui mediu grafic-interactiv pentru exersarea
                    algoritmilor
                  </li>
                  <ul>
                    <li>
                      rularea unor algoritmi model, modificarea lor conform unor
                      cerințe și crearea unor algoritmi noi, prin utilizarea
                      instrumentelor specifice
                    </li>
                    <li>
                      identificarea efectelor aplicării unor algoritmi cu
                      valențe practice sau de joc
                    </li>
                    <li>
                      rezolvarea unor probleme-joc prin aplicarea unor
                      instrumente interactive specifice
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Aplicarea etapelor de rezolvare pentru cerințe simple,
                    corespunzătoare unor situații familiare
                  </li>
                  <ul>
                    <li>
                      discutarea unei cerințe de prelucrare (tema
                      prezentării/scopul animației/cerința algoritmică) și
                      identificarea rezultatelor așteptate deduse din aceasta
                    </li>
                    <li>
                      stabilirea unor strategii de rezolvare și alegerea uneia
                      pentru rezolvarea unei teme: un material cu conținut
                      educațional la biologie, un desen la matematică
                      (geometrie), aflarea soluțiilor naturale, dintr-un
                      interval dat, ale unei ecuații prin încercări etc.
                    </li>
                    <li>
                      exersarea urmăririi pas cu pas, modificării, completării,
                      restructurării unui algoritm pentru a obține un algoritm
                      cu o cerință dată
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    {" "}
                    Reprezentarea algoritmilor de prelucrare a informației
                    pentru rezolvarea unor situații problemă
                  </li>
                  <ul>
                    <li>
                      urmărirea traseelor de prelucrare pe o reprezentare cu
                      blocuri grafice a unui algoritm în funcție de diferite
                      valori ale datelor de intrare
                    </li>
                    <li>
                      reprezentarea unui algoritm, descris în limbaj natural, cu
                      ajutorul blocurilor grafice
                    </li>
                    <li>
                      construirea, pentru o cerință dată, a unui algoritm ce
                      utilizează în mod repetat o secvență de prelucrare
                    </li>
                  </ul>
                </ol>
                <li className="fw-bold">
                  Elaborarea creativă de mini proiecte care vizează aspecte
                  sociale, culturale și personale, respectând creditarea
                  informației și drepturile de autor
                </li>
                <ol>
                  <li className="fw-semibold">
                    Elaborarea de prezentări folosind operații specifice, pentru
                    a ilustra diverse teme
                  </li>
                  <ul>
                    <li>
                      proiectarea unei prezentări pe o temă dată, aplicând norme
                      elementare de estetică și ergonomie în elaborarea
                      produselor informatice
                    </li>
                    <li>
                      realizarea unei prezentări după un scenariu dat, cu
                      obiecte și efecte date, alegând formate adecvate în
                      funcție de auditoriu și tematică: prezentarea unui joc,
                      film, prezentare pe o temă de geografie etc
                    </li>
                    <li>
                      susținerea în fața colegilor a unei prezentări realizate,
                      cu respectarea regulilor de ținută, comportament,
                      exprimare etc.
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Elaborarea de animații grafice și modele 3D folosind
                    operații specifice pentru a ilustra dinamic diverse teme
                  </li>
                  <ul>
                    <li>
                      realizarea unui banner, logo al clasei, unei povești
                      animate etc.
                    </li>
                    <li>
                      realizarea unei animații grafice în care se utilizează
                      tastatura pentru a manipula obiectele animate și
                      integrarea acesteia într-o prezentare tematică
                    </li>
                    <li>
                      alegerea unor formate adecvate în funcție de auditoriu și
                      de tematică: realizarea unei animații grafice pentru
                      identificarea literelor alfabetului etc
                    </li>
                    <li>
                      realizarea unei aplicații de tip VR (Virtual Reality)
                      folosind un mediu utilizabil de către copii
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Utilizarea unor instrumente specializate pentru obținerea
                    unor materiale digitale
                  </li>
                  <ul>
                    <li>
                      realizarea unui schimb de mesaje pentru dezbaterea unei
                      teme („Cum să învăț eficient? „Prin ce se remarcă profesia
                      de medic?” etc.) și folosirea mesajelor multiple pentru
                      anunțuri importante într-un grup (clasă)
                    </li>
                    <li>
                      alegerea din mai multe variante de mesaj, a formulărilor
                      adecvate trimiterii unui mesaj, în funcție de scop și
                      context (invitație la aniversare, solicitare de înscriere
                      la un curs, scrisoare, comentarea unui film/meci cu
                      colegul de bancă etc.)
                    </li>
                    <li>
                      alegerea unei aplicații adecvate pentru o cerință dată
                      (anunț de interes public, evoluția floare-fruct, afișarea
                      tablei înmulțirii cu un număr etc.) realizarea unor
                      proiecte 3D (de exemplu, proiectarea unui ansamblu de
                      clădiri) și prezentarea acestora în fața colegilor
                    </li>
                  </ul>
                </ol>
              </ol>
            </div>
          </div>
        </div>

        {/* CLASA A 7-a */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Clasa a VII-a
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-5">
              <ol>
                <li className="fw-bold">
                  Utilizarea responsabilă și eficientă a tehnologiei informației
                  și comunicațiilor
                </li>
                <ol>
                  <li className="fw-semibold">
                    Editarea/tehnoredactarea de documente utilizând aplicații
                    specializate
                  </li>
                  <ul>
                    <li>
                      explorarea elementelor de interfață ale unei aplicații de
                      editare a textelor în scopul identificării principalelor
                      facilități ale acesteia
                    </li>
                    <li>
                      editarea unui document prin aplicarea operațiilor
                      specifice
                    </li>
                    <li>
                      formatarea unui document utilizând instrumente dedicate
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Documentarea pe diferite teme prin utilizarea aplicațiilor
                    audio respectiv audio-video
                  </li>
                  <ul>
                    <li>
                      realizarea de interviuri pe o temă dată între colegi cu
                      înregistrare în format audio respectiv audio-video
                    </li>
                    <li>
                      realizarea unui clip tematic prin editarea unei aplicații
                      audio respectiv audio-video aplicând operațiile specifice
                    </li>
                    <li>
                      prelucrarea unei aplicații audio, audio-video prin
                      utilizarea instrumentelor specializate
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Utilizarea aplicațiilor colaborative în scopul dezvoltării
                    în echipă a unor materiale digitale
                  </li>
                  <ul>
                    <li>
                      realizarea de povești cu autor colectiv (pe grupe sau pe
                      clase) utilizând aplicații colaborative, pagini wiki sau
                      participarea în bloguri la nivel de școală pe teme
                      specifice unor discipline școlare
                    </li>
                    <li>
                      vizualizarea contribuției individuale a membrilor
                      colectivului de autori prin utilizarea funcției de istoric
                      de editare în scopul autoevaluării și interevaluării
                    </li>
                    <li>
                      introducerea unor elemente de identitate locală (imaginea
                      școlii sau a locului de rezidență, informații de interes
                      public/turistic etc.) în sisteme informaționale geografice
                      – GIS
                    </li>
                    <li>
                      identificarea principalelor elemente de diferențiere în
                      activitatea hackerilor și a crackerilor în scopul
                      protejării împotriva potențialelor fraude în mediul
                      colaborativ online
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Utilizarea unui mediu de programare pentru implementarea
                    algoritmilor
                  </li>
                  <ul>
                    <li>
                      explorarea elementelor de interfață ale unui mediu de
                      programare în scopul identificării principalelor
                      facilități ale acestuia
                    </li>
                    <li>
                      aplicarea etapelor pentru dezvoltarea unei aplicații
                      folosind un mediu de programare: editare cod sursă,
                      compilare, executare, testare și depanare prin analogie cu
                      mediile interactive care utilizează blocuri grafice
                    </li>
                    <li>
                      utilizarea unui mediu virtual pentru programarea de roboți
                      cu scop didactic, vizualizarea și utilizarea valorilor
                      citite de senzori ai robotului virtual (de exemplu, senzor
                      ultrasonic pentru detectarea obstacolelor, senzor de
                      culoare, senzor de presiune, microfon, senzor infraroșu,
                      senzor giroscopic, busolă etc.)
                    </li>
                  </ul>
                </ol>
                <li className="fw-bold">
                  Rezolvarea unor probleme elementare prin metode intuitive de
                  prelucrare a informației
                </li>
                <ol>
                  <li className="fw-semibold">
                    Analizarea enunțului unei probleme simple în vederea
                    rezolvării ei printr-un algoritm
                  </li>
                  <ul>
                    <li>
                      identificarea datelor de intrare și ieșire pentru o
                      problemă familiară la una dintre disciplinele
                      studiate/hobby personal
                    </li>
                    <li>
                      identificarea operațiilor necesare pentru rezolvarea
                      problemei prin analiza elementelor structurale
                    </li>
                    <li>
                      identificarea unui algoritm de rezolvare a unei probleme
                      alese
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Construirea unor algoritmi elementari care combină
                    structurile secvențiale, alternative, repetitive în scopul
                    rezolvării unor probleme
                  </li>
                  <ul>
                    <li>
                      realizarea unor secvențe de operații descrise prin blocuri
                      grafice pentru prelucrarea unor date numerice (de exemplu,
                      suma cifrelor, cifra minimă/maximă a unui număr etc.)
                    </li>
                    <li>
                      realizarea, prin blocuri grafice a unor algoritmi pentru
                      rezolvarea unor probleme elementare de divizibilitate (de
                      exemplu, determinarea divizorilor unui număr, determinarea
                      celui mai mare divizor comun, identificarea unui număr
                      prim)
                    </li>
                    <li>
                      realizarea unui algoritm plecând de la problema
                      gestionării eficiente a bugetului de cumpărături sau a
                      altor calcule simple (de exemplu, numărări, sume, produse)
                    </li>
                  </ul>
                </ol>
                <li className="fw-bold">
                  Elaborarea creativă de mini proiecte care vizează aspecte
                  sociale, culturale și personale, respectând creditarea
                  informației și drepturile de autor
                </li>
                <ol>
                  <li className="fw-semibold">
                    Elaborarea unor documente utile în situații cotidiene
                    folosind aplicațiile studiate
                  </li>
                  <ul>
                    <li>
                      tehnoredactarea unor lucrări tematice după model și reguli
                      simple, specificate
                    </li>
                    <li>
                      realizarea unor documente de tip scrisoare, carte de
                      vizită, diplomă, felicitare etc.
                    </li>
                    <li>
                      realizarea în echipă a unui afiș, pliant etc, folosind
                      aplicații colaborative
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Elaborarea unor materiale audio-video pentru a ilustra o
                    temă dată, folosind aplicații dedicate
                  </li>
                  <ul>
                    <li>
                      realizarea unui montaj audio-video pe baza unui scenariu
                    </li>
                    <li>
                      integrarea fișierelor audio respectiv audio-video în alte
                      produse: prezentări, aplicații colaborative etc
                    </li>
                    <li>
                      realizarea unui videoclip cu fundal muzical, având ca temă
                      prezentarea unei activități desfășurate în școală
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Implementarea algoritmilor într-un mediu de programare în
                    scopul rezolvării creative a unor probleme având caracter
                    aplicativ
                  </li>
                  <ul>
                    <li>
                      realizarea codului sursă prin transcrierea structurilor
                      unui algoritm model cu ajutorul instrucțiunilor/comenzilor
                      specifice limbajului
                    </li>
                    <li>
                      rularea linie cu linie a unei surse existente pentru
                      urmărirea valorilor variabilelor din program, respectiv
                      pentru identificarea erorilor de implementare sau de
                      proiectare a algoritmului{" "}
                    </li>
                    <li>
                      realizarea unor aplicații interdisciplinare elementare (de
                      exemplu: calculul vitezei de deplasare a unui mobil în
                      mișcare rectilinie și uniformă, a ariei și perimetrului
                      unui pătrat, triunghi, trapez)
                    </li>
                    <li>
                      elaborarea codului sursă pentru controlul robotului
                      didactic virtual prin precizarea succesiunii de comenzi
                      corespunzătoare deplasării pe o traiectorie prestabilită
                    </li>
                  </ul>
                </ol>
              </ol>
            </div>
          </div>
        </div>

        {/* CLASA A 8-a */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Clasa a VIII-a
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body fs-5">
              <ol>
                <li className="fw-bold">
                  Utilizarea responsabilă și eficientă a tehnologiei informației
                  și comunicațiilor
                </li>
                <ol>
                  <li className="fw-semibold">
                    Utilizarea foilor de calcul tabelar în vederea rezolvării
                    unor situații problemă simple
                  </li>
                  <ul>
                    <li>
                      identificarea elementelor specifice de adresare şi
                      formatare prin realizarea unui tabel de colectare a
                      datelor (prin formular/chestionar sau prin introducere
                      directă) pentru experimente simple colaborative (exemplu:
                      urmărirea dezvoltării plantelor în diferite condiții de
                      umiditate, luminozitate, sol etc.)
                    </li>
                    <li>
                      extragerea unor concluzii pe baza datelor colectate și
                      prin utilizarea unor funcții specifice (grafice, formule)
                    </li>
                    <li>
                      publicarea rezultatelor în formă accesibilă auditoriului
                      prin exemplificare grafică
                    </li>
                    <li>
                      rezolvarea unor probleme la diferite discipline prin
                      utilizarea formulelor, funcţiilor, diagramelorși seriilor
                      specifice calculului tabelar
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Utilizarea unui editor dedicat pentru realizarea unor pagini
                    web cu diverse teme
                  </li>
                  <ul>
                    <li>
                      vizitarea unor pagini web pentru identificarea elementelor
                      specifice, vizând protecția utilizatorului împotriva
                      fraudelor informatice realizate prin inginerie socială
                    </li>
                    <li>
                      explorarea elementelor de interfață ale unei aplicații de
                      editare a paginilor web în scopul identificării
                      principalelor facilități ale acesteia
                    </li>
                    <li>
                      analiza unor pagini model cu scopul de a identifica
                      elementele de structură: antet, titlu, corp
                    </li>
                    <li>
                      editarea unei pagini web pe o temă dată (anotimpuri,
                      sportul preferat, pagina clasei etc.)
                    </li>
                  </ul>
                </ol>
                <li className="fw-bold">
                  Rezolvarea unor probleme elementare prin metode intuitive de
                  prelucrare a informației
                </li>
                <ol>
                  <li className="fw-semibold">
                    Identificarea șirurilor de valori în diferite contexte de
                    prelucrare în vederea construirii algoritmilor
                  </li>
                  <ul>
                    <li>
                      analiza unor exemple de prelucrări în care intervine un
                      număr variabil de date de intrare în situații întâlnite la
                      diferite discipline
                    </li>
                    <li>
                      identificarea unor șiruri de valori pe baza unei
                      proprietăți (valori pare/impare, pozitive/negative etc.)
                    </li>
                    <li>
                      generarea unui șir de valori pe baza unei reguli (de
                      exemplu, fiecare termen este dublul precedentului, este
                      suma celor doi termeni care îl precedă etc.)
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Rezolvarea unor probleme simple prin construirea unor
                    algoritmi de prelucrare a șirurilor de valori
                  </li>
                  <ul>
                    <li>
                      construirea unei secvențe algoritmice pentru introducerea
                      unui șir de valori utilizând operația de citire în cadrul
                      unei structuri repetitive
                    </li>
                    <li>
                      construirea unui algoritm de parcurgere a numerelor
                      întregi dintr-un interval și afișarea celor care
                      îndeplinesc o anumită condiție
                    </li>
                    <li>
                      construirea unui algoritm de generare și afișare a unui
                      șir de valori după o regulă dată (de exemplu, șirul
                      primelor 20 de valori impare/pare, șirul numerelor de două
                      cifre divizibile cu 3 etc.)
                    </li>
                  </ul>
                </ol>
                <li className="fw-bold">
                  Elaborarea creativă de mini proiecte care vizează aspecte
                  sociale, culturale și personale, respectând creditarea
                  informației și drepturile de autor
                </li>
                <ol>
                  <li className="fw-semibold">
                    Elaborarea de produse informatice utilizând aplicaţii de
                    calcul tabelar
                  </li>
                  <ul>
                    <li>
                      realizarea unor foi de calcul cu date din viața reală:
                      clasamentul mediilor elevilor din clasă, tabel de
                      cheltuieli, calculul TVA dintr-un bon fiscal etc.
                    </li>
                    <li>
                      realizarea unui tabel cu situaţia şcolară la o disciplină
                      dată şi determinarea notei minime, respectiv maxime
                    </li>
                    <li>
                      utilizarea formulelor de calcul pentru rezolvarea unor
                      calcule specifice la disciplina fizică, Informatică şi TIC
                      – clasele a V-a - a VIII-a 14matematică, chimie, geografie
                      etc.
                    </li>
                    <li>
                      alegerea unor tipuri de grafice adecvate în funcție de
                      auditoriu și de tematică (de exemplu,graficul mediilor
                      elevilor din clasă, reprezentarea grafică a valorilor unei
                      funcții liniare prin anumite puncte)
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Elaborarea/actualizarea de pagini web conform unor
                    specificaţii date
                  </li>
                  <ul>
                    <li>
                      realizarea unei pagini web cu o tematică la alegere (de
                      exemplu, promovarea rezultatelor unui proiect)
                    </li>
                    <li>
                      realizarea unui site web al clasei care să conțină mai
                      multe pagini personale ale elevilor
                    </li>
                    <li>
                      alegerea unui aspect și conținut adecvate în funcție de
                      auditoriu și de tematică (de exemplu,pagină web despre
                      jocurile preferate, pagină web despre Munții Carpați etc.)
                    </li>
                  </ul>
                  <li className="fw-semibold">
                    Implementarea algoritmilor într-un mediu de programare
                  </li>
                  <ul>
                    <li>
                      editarea codului sursă corespunzător unor algoritmi de
                      prelucrare a șirurilor de valori
                    </li>
                    <li>
                      executarea și testarea unui program care prelucrează un
                      șir de valori
                    </li>
                    <li>
                      implementarea unor aplicații care să prelucreze șiruri de
                      valori (de exemplu, numărul elevilor care au nota maximă
                      la o disciplină, temperatura medie dintr-un interval de
                      timp etc.)
                    </li>
                    <li>
                      elaborarea codului sursă pentru controlul robotului
                      didactic virtual prin utilizarea și interpretarea datelor
                      primite de la senzorii acestuia: evitarea obstacolelor,
                      menținerea echilibrului, reacții specifice la detectarea
                      luminii sau a identificării unui traseu marcat etc.
                    </li>
                  </ul>
                </ol>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competente;
