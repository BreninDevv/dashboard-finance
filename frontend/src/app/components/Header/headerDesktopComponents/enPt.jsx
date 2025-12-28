"use client";
import React from "react";
import { useLanguage } from "../../../i18n/languageContext";

const EnPt = () => {
  const { lang, setLang } = useLanguage();

  const isPt = lang === "pt";

  return (
    <div className="flex items-center gap-1.5 justify-between font-inter">
      <span className="text-2xl text-[#0a091b] dark:text-white font-medium">
        En / Pt
      </span>

      <div
        className={`xl:w-16 xl:h-8 lg:w-16 lg:h-8 w-12 h-8 rounded-2xl cursor-pointer ${
          isPt ? "bg-sky-500" : "bg-zinc-600"
        }`}
        onClick={() => setLang(isPt ? "en" : "pt")}
      >
        <div
          className={`h-full w-8 bg-white rounded-full scale-80 duration-200 ${
            isPt
              ? "xl:translate-x-8 lg:translate-x-8 translate-x-4"
              : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default EnPt;
