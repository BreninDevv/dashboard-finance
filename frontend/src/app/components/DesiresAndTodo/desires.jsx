"use client";

import { useLanguage } from "../../i18n/languageContext";
import { useUserData } from "../../../context/userDataContext";
import Image from "next/image";
import React, { useState } from "react";
import WhiteEdit from "../../components/icons/edit-box-line-white.svg";
import TrashWhite from "../../components/icons/delete-bin-6-line-white.svg";
import Check from "../../components/icons/check-line.svg";
import Right from "../../components/icons/checkbox-circle-line-white.svg";

const Desires = () => {
  const { t } = useLanguage();
  const { desires, addDesire, deleteDesire, updateDesire } = useUserData();

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [currentDesire, setCurrentDesire] = useState(null);
  const [addValue, setAddValue] = useState("");

  function createDesire() {
    const cleanName = name.trim();
    const numPrice = Number(price);

    if (!cleanName || isNaN(numPrice) || numPrice <= 0) return;

    addDesire({
      name: cleanName,
      price: numPrice,
      current: 0,
    });

    setName("");
    setPrice("");
    setModalOpen(false);
  }

  function openAddModal(desire) {
    setCurrentDesire(desire);
    setAddModalOpen(true);
  }

  function addMoney() {
    if (!addValue || !currentDesire) return;

    const desireId = String(currentDesire._id || currentDesire.id).trim();
    const valorAtualNoBanco = Number(currentDesire.current) || 0;
    const valorParaAdicionar = Number(addValue);
    const precoTotal = Number(currentDesire.price);

    const newCurrentValue = Math.min(
      valorAtualNoBanco + valorParaAdicionar,
      precoTotal
    );

    updateDesire(desireId, { current: newCurrentValue });

    setAddValue("");
    setCurrentDesire(null);
    setAddModalOpen(false);
  }

  const handleDelete = (id) => {
    if (!id) return;
    const cleanId = String(id).trim();
    deleteDesire(cleanId);
  };

  return (
    <>
      <div className="bg-gradient-to-tl to-[#374b6e] from-[#204a99] dark:bg-gradient-to-bl dark:to-[#111827] dark:from-[#1f2937] border-[#577886] border min-h-56 max-h-56 rounded-xl shadow-xl px-4 py-4 w-full flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h1 className="text-white text-xl font-bold">{t.desiresStatus}</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="cursor-pointer p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
          >
            <Image src={WhiteEdit} alt="Edit" />
          </button>
        </div>

        <div className="flex flex-col gap-2 pb-4 bg-white/5 dark:border-white/5 rounded-2xl min-h-32 max-h-36 p-2 overflow-auto custom-scrollbar">
          {!desires || desires.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-4 h-full">
              <Image
                src={Right}
                alt="Empty"
                width={32}
                className="opacity-50"
              />
              <p className="text-sm font-medium text-white mt-1">
                {t.noDesires}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-y-1.5 pb-1">
              {desires.map((d) => {
                const id = d._id || d.id;
                const dPrice = Number(d.price) || 0;
                const dCurrent = Number(d.current) || 0;
                const percent =
                  dPrice > 0 ? Math.min((dCurrent / dPrice) * 100, 100) : 0;
                const isCompleted = dCurrent >= dPrice;

                return (
                  <div
                    key={id}
                    className="group bg-[#161B22]/40 border border-white/10 p-2 rounded-lg transition-all duration-300 hover:border-indigo-500/30"
                  >
                    <div className="flex justify-between items-center mb-1 gap-2">
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-bold text-[12px] text-white truncate leading-tight">
                          {d.name}
                        </span>
                        <span className="text-[9px] text-slate-400 font-medium truncate">
                          {isCompleted
                            ? "OK!"
                            : `Faltam: R$ ${(dPrice - dCurrent).toLocaleString(
                                "pt-BR",
                                { minimumFractionDigits: 2 }
                              )}`}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className={`text-[10px] font-black ${
                            isCompleted ? "text-emerald-400" : "text-indigo-400"
                          }`}
                        >
                          {percent.toFixed(0)}%
                        </span>

                        <button
                          onClick={() => handleDelete(id)}
                          className=" group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded"
                        >
                          <Image
                            src={isCompleted ? Check : TrashWhite}
                            alt="Ação"
                            width={12}
                            height={12}
                            className="opacity-50 hover:opacity-100 transition-opacity"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="w-full bg-white/5 rounded-full h-[4px] overflow-hidden mb-1">
                      <div
                        style={{ width: `${percent}%` }}
                        className={`h-full rounded-full transition-all duration-1000 ${
                          isCompleted
                            ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                            : "bg-indigo-500"
                        }`}
                      ></div>
                    </div>

                    {!isCompleted && (
                      <button
                        onClick={() => openAddModal(d)}
                        className="w-full mt-1 bg-white/5 hover:bg-white hover:text-[#0B0E14] text-white text-[8px] font-black uppercase py-1 rounded-md transition-all border border-white/5 tracking-tighter"
                      >
                        {t.addMoney}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {modalOpen && (
        <div
          className="fixed inset-0 bg-white/20 dark:bg-black/60 backdrop-blur-md flex items-center justify-center z-[999] p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white/90 dark:bg-[#0B0E14]/90 backdrop-blur-2xl text-slate-900 dark:text-white w-full max-w-[340px] rounded-[2.5rem] shadow-2xl border border-white/50 dark:border-white/10 py-8 px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-black tracking-tight">
                  {t.createDesire}
                </h2>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-slate-400 hover:text-white p-2 bg-white/5 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mb-2">
                    {t.desireName}
                  </p>
                  <input
                    type="text"
                    placeholder="Ex: Novo iPhone"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-emerald-500/30 text-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mb-2">
                    {t.price}
                  </p>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-emerald-500/30 font-bold text-slate-800 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="flex-[2] bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl py-4 font-black shadow-lg uppercase text-[11px]"
                  onClick={createDesire}
                >
                  {t.create}
                </button>
                <button
                  className="flex-1 bg-slate-100 dark:bg-white/5 text-slate-500 border border-slate-200 dark:border-white/10 rounded-2xl py-4 font-bold uppercase text-[11px]"
                  onClick={() => setModalOpen(false)}
                >
                  {t.cancel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {addModalOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-md flex items-center justify-center z-[999] p-4"
          onClick={() => setAddModalOpen(false)}
        >
          <div
            className="bg-white/90 dark:bg-[#161B22]/90 backdrop-blur-2xl w-full max-w-[340px] rounded-[2.5rem] shadow-2xl border border-white/50 dark:border-white/10 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-black tracking-tight text-slate-800 dark:text-white">
                {t.AddMoneyFor}{" "}
                <span className="block text-emerald-500 text-lg">
                  {currentDesire?.name}
                </span>
              </h2>
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 block">
                  {t.valueToAdd}
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={addValue}
                  onChange={(e) => setAddValue(e.target.value)}
                  className="w-full bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-emerald-500/30 font-bold text-slate-800 dark:text-white"
                />
              </div>
              <div className="flex gap-3">
                <button
                  className="flex-[2] bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl py-4 font-black shadow-lg uppercase text-[11px]"
                  onClick={addMoney}
                >
                  {t.add || "Add"}
                </button>
                <button
                  className="flex-1 bg-slate-100 dark:bg-white/5 text-slate-500 border border-slate-200 dark:border-white/10 rounded-2xl py-4 font-bold uppercase text-[11px]"
                  onClick={() => setAddModalOpen(false)}
                >
                  {t.cancel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Desires;
