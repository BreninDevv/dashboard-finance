"use client";

import { useLanguage } from "../../i18n/languageContext";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MenuHamburguer from "../icons/menu-line.svg";
import MenuHamburguerWhite from "../icons/menu-line-white.svg";
import Avatar from "./headerDesktopComponents/avatar";
import DarkMode from "./headerDesktopComponents/darkMode";
import EnPt from "./headerDesktopComponents/enPt";

const Header = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="w-full h-20 dark:bg-[#1a1c26] bg-white flex justify-between items-center px-6 shadow-sm fixed top-0 left-0 z-40 border-b dark:border-white/5 border-gray-100">
        <h1 className="font-bold text-2xl tracking-tight dark:text-white text-gray-900">
          {t.myBank}
        </h1>

        <button onClick={() => setIsOpen(!isOpen)} className="p-2 outline-none">
          <Image
            src={MenuHamburguer}
            alt="Menu"
            width={28}
            className="dark:hidden"
          />
          <Image
            src={MenuHamburguerWhite}
            alt="Menu"
            width={28}
            className="hidden dark:block"
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto backdrop-blur-sm"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div
        className={`fixed h-screen dark:bg-[#1a1c26] bg-white shadow-2xl w-60 left-0 top-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="pt-10 pb-6 px-8 flex flex-col items-start gap-2 w-full border-b dark:border-white/5 border-gray-300">
            <Avatar />
          </div>

          <div className="flex flex-col gap-8 pt-8 px-8 items-start">
            <div className="flex flex-col gap-2 items-start w-full">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                {t.theme}
              </span>
              <div className="flex justify-start">
                <DarkMode />
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start w-full">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                {t.language}
              </span>
              <div className="flex justify-start">
                <EnPt />
              </div>
            </div>
          </div>

          <div className="mt-auto p-8 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
              Online
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
