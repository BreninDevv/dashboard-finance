"use client";

import React from "react";
import { useLanguage } from "../../../i18n/languageContext";
import { useAuth } from "../../context/authContext";

const Saudacao = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  return (
    <>
      <div>
        <h1 className="text-4xl">
          {t.myBank} {user?.name}
        </h1>
      </div>
    </>
  );
};

export default Saudacao;
