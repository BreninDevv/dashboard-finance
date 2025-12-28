"use client";

import React from "react";
import { useLanguage } from "../../../i18n/languageContext";

const Saudacao = () => {
  const { t } = useLanguage();
  return (
    <>
      <div>
        <h1 className="text-4xl text-[#0a091b] dark:text-white font-bold">
          {t.myBank}
        </h1>
      </div>
    </>
  );
};

export default Saudacao;
