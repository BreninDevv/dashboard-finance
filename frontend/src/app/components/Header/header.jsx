"use client";

// import { useAuth } from "../../context/authContext";
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
    const original =
      typeof window !== "undefined" ? document.body.style.overflow : null;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (original !== null) {
      document.body.style.overflow = original;
    }

    return () => {
      if (original !== null) document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <>
      <header className="min-w-screen h-20 dark:bg-[#202433] duration-500 dark:text-white bg-white flex justify-between items-center p-2 shadow-lg fixed z-40">
        <div className="px-4">
          <h1 className="font-bold text-3xl ">{t.myBank}</h1>
        </div>
        <div
          className="block dark:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image src={MenuHamburguer} alt="Menu Hamburguer" width={30} />
        </div>
        <div
          className="hidden dark:block"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image src={MenuHamburguerWhite} alt="Menu Hamburguer" width={30} />
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div
        className={`absolute h-full dark:bg-[#202433] bg-white shadow-lg w-40 left-0 top-0 z-50 transform transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" py-6 px-2 ">
          <div className="gap-8 flex flex-col ">
            <div>
              <Avatar />
            </div>
            <div>
              <DarkMode />
            </div>
            <div>
              <EnPt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
