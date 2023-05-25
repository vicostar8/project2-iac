import React from "react";
import word1 from "./images/word1.png";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Informatii = () => {
  const data = [
    { year: 2017, val: 110, yAxe: 0 },
    { year: 2018, val: 150, yAxe: 0 },
    { year: 2019, val: 200, yAxe: 0 },
    { year: 2020, val: 220, yAxe: 0 },
    { year: 2021, val: 280, yAxe: 0 },
    { year: 2022, val: 310, yAxe: 0 },
    { year: 2023, val: 340, yAxe: 400 },
  ];

  return (
    <div>
      <p className="informatii-titlu text-center fs-1">Lecție TIC</p>
      <p className="informatii-titlu text-center fs-2">Microsoft Word</p>
      <div className="row my-3">
        <div className="col-lg-8">
          <p className="informatii-titlu text-center fs-3">
            Obiectivele lecției
          </p>
          <div className="row m-0 p-3 fs-5">
            <div className="col-6">
              <ul>
                <li>lansarea și închiderea Microsoft Word</li>
                <li>identificarea elementelor de ecran comune</li>
                <li>crearea, salvarea și deschiderea documentelor</li>
                <li>modificarea opțiunilor de vizualizare a documentelor</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  inserarea, selectarea, modificarea și formatare a textului
                </li>
                <li>gestionarea textelor utilizând caracteristicile comune</li>
                <li>
                  utilizarea riglei pentru crearea, modificarea sau ștergerea
                  tabulatorilor
                </li>
                <li>
                  modificarea marginilor, a dimensiunii paginiisau a orientării
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <img src="https://img.freepik.com/free-icon/word_318-674258.jpg?w=360" />
        </div>
      </div>
      {/*  */}
      <div className="row my-3">
        <div className="col-lg-4 pos-c-cc">
          <img src={word1} className="w-100" />
        </div>
        <div className="col-lg-8">
          <p className="informatii-titlu text-center fs-3">
            Identificarea caracteristicilor comune
          </p>
          <p className="fs-5">
            Multe programe de tip aplicație conțin o serie de elemente comune.
            Multe dintre acestea apar în aceeași locație de pe ecran.
          </p>
          <p className="fs-5">
            De asemenea, multe programe de tip aplicație conțin seturi
            “standard” identice de acțiuni pentru realizarea sarcinilor de bază,
            indiferent de tipul de program. Programele de tip aplicație și
            sistemele de operare aplică multe combinații de taste identice,
            atribuite în mod implicit
          </p>
        </div>
      </div>
      {/*  */}
      <div className="row my-3">
        <div className="col-lg-8">
          <p className="informatii-titlu text-center fs-3">
            Creșterea numărului de useri
          </p>
          <p className="fs-5">
            Microsoft has been cagey about providing data about the Office 365
            number of users recently. A year ago, Microsoft stopped discussing
            active users (monthly or daily) and began focusing on paid seats. At
            the time, they claimed “Office 365 now has nearly 300 million paid
            seats.” Now, the Office 365 user number is “nearly 345 million,”
            broadly aligning with the 17% year-over-year increase in Office 365
            commercial revenue. The number of active users is always less than
            those with paid licenses. I’ve tried to keep track of the active
            user number using growth numbers given by Microsoft and calculate
            that the active user number is now around 321 million (Figure 2).
            But only Microsoft knows, and they’re not saying.
          </p>
        </div>
        <div className="col-lg-4 pos-c-cc">
          <div id="chart_div">
            <LineChart width={400} height={300} data={data}>
              <Line type="monotone" dataKey="val" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="year" />
              <YAxis dataKey="yAxe" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informatii;
