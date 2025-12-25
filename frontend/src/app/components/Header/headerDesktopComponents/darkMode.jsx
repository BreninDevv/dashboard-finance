"use client";
import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <div className="flex items-center gap-1.5 justify-between font-inter">
        <span className=" text-xl">Dark Mode</span>
        <div
          className={`xl:w-16 xl:h-8 lg:w-16 lg:h-8 w-12 h-8  rounded-2xl cursor-pointer ${
            dark ? "bg-sky-500" : "bg-zinc-600"
          }`}
          onClick={() => setDark(!dark)}
        >
          <div
            className={`h-full w-8 bg-white rounded-full scale-80 ${
              dark
                ? "xl:translate-x-8 lg:translate-x-8 translate-x-3 duration-200"
                : " translate-0 duration-200"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default DarkMode;
