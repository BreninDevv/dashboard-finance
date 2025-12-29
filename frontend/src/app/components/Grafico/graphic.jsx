"use client";

import { useLanguage } from "../../i18n/languageContext";
import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

function Graphic({ data }) {
  const { t } = useLanguage();
  return (
    <div className="w-full h-64 bg-white dark:bg-[#161B22]/40 border border-[#E2E8F0] dark:border-white/10 rounded-xl shadow-sm duration-500 p-4 flex flex-col overflow-hidden">
      <h1 className="font-inter font-bold text-[#0F172A] dark:text-white text-sm mb-2">
        {t.balanceHistory}
      </h1>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            dy={10}
          />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(8px)",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#0F172A",
            }}
            itemStyle={{ color: "#6366F1" }}
          />

          <Bar
            dataKey="value"
            fill="#6366F1"
            barSize={18}
            radius={[4, 4, 0, 0]}
            className="fill-indigo-500 dark:fill-indigo-400 opacity-90 hover:opacity-100 transition-opacity"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graphic;
