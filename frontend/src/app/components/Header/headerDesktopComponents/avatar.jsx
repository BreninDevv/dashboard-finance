"use client";
import React, { useEffect, useState } from "react";

const Avatar = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");

    // Só chama o setName se savedName for uma string válida (não null)
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <div className="flex items-center gap-3 border-l border-white/10 pl-10 h-full">
      <div className="flex flex-col items-end">
        <span className="text-[9px] font-medium text-slate-500 uppercase tracking-[0.2em] leading-tight">
          Usuário Logado
        </span>
        <span className="text-[13px] font-bold text-white leading-none mt-1">
          {name || "Visitante"}
        </span>
      </div>

      {/* Círculo do Avatar com Gradiente do seu Dashboard */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-indigo-500/10 cursor-pointer hover:scale-105 transition-transform border border-white/10">
        {name ? name.charAt(0).toUpperCase() : "U"}
      </div>
    </div>
  );
};

export default Avatar;
