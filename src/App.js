import { useState } from "react";
import Competente from "./competente";
import CadreDidactice from "./cadreDidactice";
import Tutoriale from "./tutoriale";
import Informatii from "./informatii";
import TestInitial from "./testInitial";

import "./App.css";

function App() {
  const [whatToDisplay, setWhatToDisplay] = useState(1);

  return (
    <div className="">
      <div className="container p-0 mainDiv">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid pos-c">
            <p className="navbar-brand m-0 text-center">
              Instruire Asistată de Calculator - IAC
            </p>
            <p className="mb-3 text-center">
              Chircă Vlad - Postuniversitar - Modul 1 Psihopedagogic - IESC
              Calculatoare
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navigation-ul">
                <li
                  className="nav-item mx-4"
                  onClick={() => setWhatToDisplay(1)}
                >
                  Competențe
                </li>
                <li
                  className="nav-item mx-4"
                  onClick={() => setWhatToDisplay(2)}
                >
                  Cadre didactice
                </li>
                <li
                  className="nav-item mx-4"
                  onClick={() => setWhatToDisplay(3)}
                >
                  Tutoriale
                </li>
                <li
                  className="nav-item mx-4"
                  onClick={() => setWhatToDisplay(4)}
                >
                  Lecție TIC
                </li>
                <li
                  className="nav-item mx-4"
                  onClick={() => setWhatToDisplay(5)}
                >
                  Test inițial
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* CONTENT */}
        <div className="p-5">
          {/* COMPETENTE */}
          {whatToDisplay === 1 && <Competente />}
          {/* Cadre didactice */}
          {whatToDisplay === 2 && <CadreDidactice />}
          {/* Tutoriale */}
          {whatToDisplay === 3 && <Tutoriale />}
          {/* Informatii */}
          {whatToDisplay === 4 && <Informatii />}
          {/* Test initial */}
          {whatToDisplay === 5 && <TestInitial />}
        </div>
      </div>
    </div>
  );
}

export default App;
