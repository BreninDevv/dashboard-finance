import React from "react";
import DarkMode from "./headerDesktopComponents/darkMode";
import EnPt from "./headerDesktopComponents/enPt";
import Avatar from "./headerDesktopComponents/avatar";
import Saudacao from "./headerDesktopComponents/saudacao";

const HeaderDesktop = () => {
  return (
    <>
      <div className="font-inter flex gap-12 justify-between">
        <div>
          <Saudacao />
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
