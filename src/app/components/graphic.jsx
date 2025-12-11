"use client";

import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Jan", value: 0 },
  { name: "Fev", value: 0 },
  { name: "Mar", value: 0 },
  { name: "Abr", value: 800 },
  { name: "Mai", value: 1900 },
  { name: "Jun", value: 1200 },
  { name: "Jul", value: 900 },
  { name: "Aug", value: 1600 },
  { name: "Sep", value: 800 },
  { name: "Oct", value: 1900 },
  { name: "Nov", value: 800 },
  { name: "Dec", value: 1900 },
];

function Graphic() {
  return (
    <div className="w-full h-64 bg-white p-4 rounded-xl shadow ">
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
