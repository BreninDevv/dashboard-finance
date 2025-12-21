import React from "react";

const HeaderDesktop = () => {
  return (
    <>
      <div className="font-inter  flex justify-between">
        <div>
          <h1 className="text-4xl">My Bank</h1>
        </div>
        <div className="flex gap-12">
          <div className="flex items-center gap-1.5">
            <span>Dark Mode</span>
            <div className="w-16 h-8 bg-blue-950 rounded-2xl cursor-pointer">
              <div className="h-full w-8 bg-white rounded-full scale-80"></div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span>En/Pt</span>
            <div className="w-16 h-8 bg-blue-950 rounded-2xl cursor-pointer">
              <div className="h-full w-8 bg-white rounded-full scale-80"></div>
            </div>
          </div>
          <div>
            <div className="w-10 h-10 border-2 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
