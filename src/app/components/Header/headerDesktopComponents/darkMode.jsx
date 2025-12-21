import React from "react";

const DarkMode = () => {
  return (
    <>
      <div className="flex items-center gap-1.5 justify-between font-inter">
        <span className="text-xl">Dark Mode</span>
        <div className="xl:w-16 xl:h-8 lg:w-16 lg:h-8 w-12 h-8 bg-sky-500 rounded-2xl cursor-pointer">
          <div className="h-full w-8 bg-white rounded-full scale-80"></div>
        </div>
      </div>
    </>
  );
};

export default DarkMode;
