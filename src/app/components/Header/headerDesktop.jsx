import React from "react";
import DarkMode from "./headerDesktopComponents/darkMode";
import EnPt from "./headerDesktopComponents/enPt";
import Avatar from "./headerDesktopComponents/avatar";

const HeaderDesktop = () => {
  return (
    <>
      <div className="font-inter  flex justify-between">
        <div>
          <h1 className="text-4xl">My Bank</h1>
        </div>
        <div className="flex gap-12">
          <DarkMode />
          <EnPt />
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
