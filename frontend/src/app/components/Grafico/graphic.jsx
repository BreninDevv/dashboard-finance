"use client";

import { useLanguage } from "../../i18n/languageContext";
import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

function Graphic({ data }) {
  const { t } = useLanguage();
  return (
    <div className="w-full h-64 dark:bg-[#161B22]/40 border-white/10 border duration-500 bg-white p-4 rounded-xl shadow-xl ">
      <h1 className="font-inter font-bold">{t.balanceHistory}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="value" barSize={20} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graphic;
