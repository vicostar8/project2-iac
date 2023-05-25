import React from "react";

const TestInitial = () => {
  return (
    <div className="pos-c-cc">
      <p className="testInițial-titlu text-center fs-1">Test inițial</p>
      <p className="testInițial-titlu text-center fs-3">
        Dacă nu se încarcă testul de mai jos, te rog sa apeși pe butonul de mai
        jos link
      </p>
      <button type="button" class="btn btn-primary testInițial-buton fs-5 mb-5">
        <a href="https://quilgo.com/t/AsyaNEuu5jmhmN2k" target="self">
          Acces test
        </a>
      </button>

      <div className="p-2 pos-c-cc">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfgHcrPjUiRjq_vB7s_1s21iaDDnXXcqPHcUWO3XiNxr35kBg/viewform?embedded=true"
          width="640"
          height="3182"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Se încarcă…
        </iframe>
      </div>
    </div>
  );
};

export default TestInitial;
