"use client";

import { useLanguage } from "../../i18n/languageContext";
import React, { useMemo, useState } from "react";
import { useTransactions } from "../../../context/TransactionsContext";
import Image from "next/image";
import Send from "../../components/icons/send-plane-2-line.svg";

export default function ExpensesCard() {
  const { t } = useLanguage();

  const { transactions, addTransaction } = useTransactions();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const totalExpenses = useMemo(() => {
    return transactions
      .filter((t) => t.isExpense)
      .reduce((sum, t) => sum + Number(t.amount), 0);
  }, [transactions]);

  const formatted = new Intl.NumberFormat("en-US").format(totalExpenses);

  function handleConfirm() {
    if (!amount || !category) return;
    const t = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      amount: Number(amount),
      category,
      description: desc,
      isExpense: true,
    };
    addTransaction(t);
    setShowModal(false);
    setAmount("");
    setCategory("");
    setDesc("");
  }

  return (
    <>
      <div className="group duration-500 bg-white dark:bg-[#161B22]/40 dark:backdrop-blur-md border border-slate-200 dark:border-white/10 w-full h-40 rounded-[2rem] p-6 flex flex-col justify-between font-inter shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl my-2 hidden sm:flex transition-all hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/10">
        <div>
          <p className="text-[#0F172A] dark:text-slate-400 font-semibold text-[10px] uppercase tracking-[0.2em]">
            {t.totalExpenses}
          </p>
        </div>
        <div className="pb-2">
          <span className="text-slate-900 dark:text-white font-extrabold text-4xl tracking-tight">
            R$ {formatted}
          </span>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-red-500 dark:bg-red-500/10 border border-red-100 dark:border-red-500/30 w-fit px-5 py-2 text-center text-white dark:text-red-500 rounded-xl flex gap-2 justify-center items-center cursor-pointer hover:bg-red-400 dark:hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] group/btn"
            onClick={() => setShowModal(true)}
          >
            <Image
              src={Send}
              alt="Send icon"
              width={16}
              className="dark:brightness-110 group-hover/btn:brightness-200 transition-all"
            />
            <span className="text-[11px] font-black uppercase tracking-wider">
              {t.send}
            </span>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/20 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all">
          <div className="bg-white/95 dark:bg-[#0B0E14]/80 text-slate-900 dark:text-white backdrop-blur-xl w-full max-w-[360px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden py-8 px-8 transform transition-all animate-in fade-in zoom-in duration-300">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">
                  {t.expenseCategory}
                </h2>
                <button
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors p-2 bg-slate-50 dark:bg-white/5 rounded-full"
                  onClick={() => setShowModal(false)}
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
                <div className="relative">
                  <select
                    className="w-full bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#2E5BFF]/30 outline-none transition-all appearance-none cursor-pointer font-medium text-slate-700 dark:text-slate-200"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="" className="bg-white dark:bg-[#0B0E14]">
                      {t.select}
                    </option>
                    <option
                      value="Alimentação"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.food}
                    </option>
                    <option
                      value="Transporte"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.transport}
                    </option>
                    <option
                      value="Compras"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.purshases}
                    </option>
                    <option
                      value="Lazer"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.leisures}
                    </option>
                    <option
                      value="Contas"
                      className="bg-white dark:bg-[#0B0E14]"
                    >
                      {t.accounts}
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                </div>

                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className="w-full bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#2E5BFF]/30 outline-none transition-all placeholder:text-slate-400 font-bold text-slate-800 dark:text-white"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <input
                  type="text"
                  placeholder={t.nameOfExpense}
                  className="w-full bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#2E5BFF]/30 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700 dark:text-white"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  className="flex-[2] bg-gradient-to-r from-[#2E5BFF] to-[#6221D1] text-white rounded-2xl py-4 font-black shadow-lg shadow-blue-500/20 hover:opacity-95 active:scale-95 transition-all uppercase text-[10px] tracking-[0.15em]"
                  onClick={handleConfirm}
                >
                  {t.confirm}
                </button>
                <button
                  className="flex-1 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/10 rounded-2xl py-4 font-bold hover:bg-slate-200 dark:hover:bg-white/10 active:scale-95 transition-all uppercase text-[10px] tracking-widest"
                  onClick={() => setShowModal(false)}
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
}
