"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuHamburguer from "../components/icons/menu-line.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="min-w-screen h-20 bg-[#f0f0f6] flex justify-between items-center p-2">
        <div>
          <h1 className="font-medium text-xl">Good Morning, Name!</h1>
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <Image src={MenuHamburguer} alt="Menu Hamburguer" width={30} />
        </div>
      </header>

      {isOpen ? (
        <div className="absolute h-full bg-white shadow-lg w-40 left-0 top-0"></div>
      ) : (
        <p className="hidden">Jesus é bom</p>
      )}
    </>
  );
};

export default Header;
