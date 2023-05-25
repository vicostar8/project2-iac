import React from "react";

const Tutoriale = () => {
  return (
    <div className="">
      <p className="tutoriale-titlu text-center fs-1">Tutoriale</p>
      <div className="pos-c-cc text-center">
        <p className="mb-2 fs-3 fw-bold pos-c-sc">Microsoft Office Word</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c8zqF6Rrs0E"
          title="YouTube video player 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className="m-0 fs-3">
          <span className="fw-bold">Autor:</span> Aldu
        </p>
        <p className="m-0 fs-3">
          <span className="fw-bold">Durată:</span> 19:09
        </p>
        <p className="m-0 fs-3">
          <span className="fw-bold">Descriere:</span> Acest tutorial explică
          modul de folosire al aplicației Microsoft word pe înțelesul
          începătorilor. Urmărind acest tutorial vă veți familiariza cu
          funcțiile de bază ale Microsoft Word, precum editarea de text,
          încadrarea unui text în pagină și alte opțiuni care vă vor ajuta să vă
          editați documentele într-un mod simplu și rapid.
        </p>
      </div>
      {/*  */}
      <hr></hr>
      <div className="pos-c-cc text-center">
        <p className="mb-2 fs-3 fw-bold pos-c-sc">Microsoft Office Excel</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Gqt71gtMbes"
          title="YouTube video player 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className="m-0 fs-3">
          <span className="fw-bold">Autor:</span> Aldu
        </p>
        <p className="m-0 fs-3">
          <span className="fw-bold">Durată:</span> 19:33
        </p>
        <p className="m-0 fs-3">
          <span className="fw-bold">Descriere:</span> Pe lângă Microsoft Word,
          este util să cunoașteți și aplicația Microsoft Excel, care vă ajută să
          centralizați ușor orice fel de date, să realizați tabele în mod rapid,
          să editați tabele și să aveți o evidență clară a informațiilor pe care
          le gestionați. Urmărind tutorialul dedicat acestei aplicații veți
          învăța rapid să utilizați Excel și funcțiile acestuia, astfel încât să
          vă simplificați munca.
        </p>
      </div>
    </div>
  );
};

export default Tutoriale;
