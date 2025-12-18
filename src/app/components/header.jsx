"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MenuHamburguer from "../components/icons/menu-line.svg";

const Header = () => {
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
      <header className="min-w-screen h-20 bg-white flex justify-between items-center p-2 shadow-lg fixed z-40">
        <div>
          <h1 className="font-bold text-xl ">Good Morning, Name!</h1>
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <Image src={MenuHamburguer} alt="Menu Hamburguer" width={30} />
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
        className={`absolute h-full bg-white shadow-lg w-40 left-0 top-0 z-50 transform transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>
    </>
  );
};

export default Header;
