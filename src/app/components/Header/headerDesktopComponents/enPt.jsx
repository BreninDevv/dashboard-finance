import React, { useState } from "react";

const EnPt = () => {
  const [language, setLanguage] = useState(false);

  return (
    <>
      <div className="flex items-center gap-1.5 justify-between font-inter">
        <span className=" text-2xl">En/Pt</span>
        <div
          className={`xl:w-16 xl:h-8 lg:w-16 lg:h-8 w-12 h-8 ${
            language ? "bg-sky-500" : "bg-zinc-600"
          } rounded-2xl cursor-pointer`}
          onClick={() => setLanguage((prev) => !prev)}
        >
          <div
            className={`h-full w-8 bg-white rounded-full scale-80 ${
              language
                ? "xl:translate-x-8 lg:translate-x-8 translate-x-4 duration-200"
                : "translate-0 duration-200"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default EnPt;
