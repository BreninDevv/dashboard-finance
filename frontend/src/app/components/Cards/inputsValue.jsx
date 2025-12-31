"use client";

import { useLanguage } from "../../i18n/languageContext";
import Image from "next/image";
import React, { useState } from "react";
import Add from "../../components/icons/add-circle-line.svg";
import Send from "../../components/icons/send-plane-2-line.svg";

const InputsValue = ({ Name, balance = 0, onAdd }) => {
  const { t } = useLanguage();

  const [send, setSend] = useState(false);
  const [add, setAdd] = useState(false);

  const [sendCategory, setSendCategory] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [sendDesc, setSendDesc] = useState("");

  const [addCategory, setAddCategory] = useState("");
  const [addAmount, setAddAmount] = useState("");
  const [addDesc, setAddDesc] = useState("");

  const formatted = new Intl.NumberFormat("en-US").format(balance);

  return (
    <>
      <div className="bg-gradient-to-tr to-[#2E5BFF] from-[#6221D1] w-full h-40 rounded-[2rem] p-4 flex flex-col justify-between font-inter font-bold shadow-xl my-2 ">
        <div>
          <p className="font-normal text-xl text-white">{Name}</p>
        </div>
        <div className="pb-4">
          <span className="font-inter text-white text-3xl ">R${formatted}</span>
        </div>
        <div>
          <div className="flex justify-between px-8">
            <div
              className="flex-1 max-w-[100px] bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 py-2 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer sm:hidden text-white"
              onClick={() => setAdd((prev) => !prev)}
            >
              <Image
                src={Add}
                alt="Add icon"
                width={20}
                className="brightness-200"
              />
              <span className="text-[12px] font-black uppercase tracking-wider">
                Add
              </span>
            </div>

            <div
              className="flex-1 max-w-[100px] bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 py-2 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer sm:hidden text-white"
              onClick={() => setSend((prev) => !prev)}
            >
              <Image
                src={Send}
                alt="Send icon"
                width={18}
                className="brightness-200"
              />
              <span className="text-[12px] font-black uppercase tracking-wider">
                {t.send}
              </span>
            </div>
          </div>
        </div>
      </div>

      {add && (
        <div className="fixed inset-0 bg-white/20 dark:bg-black/60 backdrop-blur-md flex items-center justify-center z-[100] p-4">
          <div className="bg-white/90 dark:bg-[#0B0E14]/90 text-slate-900 dark:text-white backdrop-blur-2xl w-full max-w-[360px] rounded-[2.5rem] shadow-2xl border border-white/50 dark:border-white/10 py-8 px-8">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-extrabold tracking-tight">
                  {t.incomeCategory}
                </h2>
                <button
                  onClick={() => setAdd(false)}
                  className="text-slate-400 hover:text-white p-2 bg-black/5 dark:bg-white/5 rounded-full"
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
                <select
                  className="w-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 outline-none text-black dark:text-white"
                  value={addCategory}
                  onChange={(e) => setAddCategory(e.target.value)}
                >
                  <option
                    value=""
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.select}
                  </option>
                  <option
                    value="Salário"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.salary}
                  </option>
                  <option
                    value="Freelance"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    Freelance
                  </option>
                  <option
                    value="Extra"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    Extra
                  </option>
                  <option
                    value="Outros"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.others}
                  </option>
                </select>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className="w-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 font-bold outline-none"
                  value={addAmount}
                  onChange={(e) => setAddAmount(e.target.value)}
                />
                <input
                  type="text"
                  placeholder={t.incomeCategory}
                  className="w-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 outline-none"
                  value={addDesc}
                  onChange={(e) => setAddDesc(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <button
                  className="flex-[2] bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl py-4 font-black uppercase text-[10px] tracking-widest"
                  onClick={() => {
                    if (!addAmount || !addCategory) return;
                    onAdd &&
                      onAdd({
                        id: Date.now(),
                        date: new Date().toISOString().slice(0, 10),
                        amount: Number(addAmount),
                        category: addCategory,
                        description: addDesc,
                        isExpense: false,
                      });
                    setAdd(false);
                    setAddAmount("");
                    setAddCategory("");
                    setAddDesc("");
                  }}
                >
                  {t.confirm}
                </button>
                <button
                  className="flex-1 bg-black/5 dark:bg-white/5 text-slate-500 border border-white/10 rounded-2xl py-4 font-bold uppercase text-[10px] tracking-widest"
                  onClick={() => setAdd(false)}
                >
                  {t.cancel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {send && (
        <div className="fixed inset-0 bg-white/20 dark:bg-black/60 backdrop-blur-md flex items-center justify-center z-[100] p-4">
          <div className="bg-white/95 dark:bg-[#0B0E14]/95 text-slate-900 dark:text-white backdrop-blur-xl w-full max-w-[360px] rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/10 py-8 px-8">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-extrabold tracking-tight">
                  {t.expenseCategory}
                </h2>
                <button
                  onClick={() => setSend(false)}
                  className="text-slate-400 hover:text-white p-2 bg-slate-50 dark:bg-white/5 rounded-full"
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
                <select
                  className="w-full bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 outline-none text-black dark:text-white"
                  value={sendCategory}
                  onChange={(e) => setSendCategory(e.target.value)}
                >
                  <option
                    value=""
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.select}
                  </option>
                  <option
                    value="Alimentação"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.food}
                  </option>
                  <option
                    value="Transporte"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.transport}
                  </option>
                  <option
                    value="Compras"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.purshases}
                  </option>
                  <option
                    value="Lazer"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.leisures}
                  </option>
                  <option
                    value="Contas"
                    style={{ backgroundColor: "#1A1D23", color: "white" }}
                  >
                    {t.accounts}
                  </option>
                </select>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className="w-full bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 font-bold outline-none"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                />
                <input
                  type="text"
                  placeholder={t.nameOfExpense}
                  className="w-full bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 outline-none"
                  value={sendDesc}
                  onChange={(e) => setSendDesc(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <button
                  className="flex-[2] bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-2xl py-4 font-black uppercase text-[10px] tracking-widest"
                  onClick={() => {
                    if (!sendAmount || !sendCategory) return;
                    onAdd &&
                      onAdd({
                        id: Date.now(),
                        date: new Date().toISOString().slice(0, 10),
                        amount: Number(sendAmount),
                        category: sendCategory,
                        description: sendDesc,
                        isExpense: true,
                      });
                    setSend(false);
                    setSendAmount("");
                    setSendCategory("");
                    setSendDesc("");
                  }}
                >
                  {t.confirm}
                </button>
                <button
                  className="flex-1 bg-slate-100 dark:bg-white/5 text-slate-500 border border-slate-200 rounded-2xl py-4 font-bold uppercase text-[10px] tracking-widest"
                  onClick={() => setSend(false)}
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

export default InputsValue;
