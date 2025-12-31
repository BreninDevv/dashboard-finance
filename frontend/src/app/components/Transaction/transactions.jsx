"use client";

import { useLanguage } from "../../i18n/languageContext";
import React from "react";

function Transactions({ transactions = [], onDelete }) {
  const { t } = useLanguage();
  return (
    <div className="dark:bg-[#161B22]/40 bg-[#ffffff] duration-500 rounded-xl border border-slate-200 dark:border-white/10 shadow-xl p-4 min-h-56 max-h-56 xl:min-h-56 xl:max-h-56 flex flex-col overflow-hidden">
      <div className="flex justify-between items-center pb-3 border-b border-gray-300 dark:border-slate-700 flex-shrink-0">
        <h2 className="text-lg font-bold text-[#0F172A] dark:text-white">
          {t.transactions}
        </h2>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400   transition-colors">
          {t.history}
        </span>
      </div>

      <div className="mt-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
        {transactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full opacity-40 py-5">
            <div className="p-3 bg-slate-300 dark:bg-slate-800 rounded-full mb-2">
              <svg
                className="w-6 h-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <p className="font-medium text-slate-700">{t.noTransactions}</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3 pb-2">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="group flex justify-between items-center p-3 rounded-xl bg-slate-50/50 dark:bg-white/5 border border-transparent hover:border-blue-500/30 dark:hover:bg-[#20243c] transition-all"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.isExpense
                        ? "bg-red-500/10 text-red-500"
                        : "bg-emerald-500/10 text-emerald-500"
                    }`}
                  >
                    {transaction.isExpense ? (
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                      </svg>
                    )}
                  </div>

                  <div className="flex flex-col truncate">
                    <span className="font-bold text-sm text-slate-700 dark:text-white truncate">
                      {transaction.description || transaction.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">
                        {transaction.category}
                      </span>
                      <span className="text-[10px] text-slate-400">•</span>
                      <span className="text-[10px] text-slate-400">
                        {transaction.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 ml-2">
                  <span
                    className={`font-black text-sm whitespace-nowrap ${
                      transaction.isExpense
                        ? "text-red-500"
                        : "text-emerald-500"
                    }`}
                  >
                    {transaction.isExpense ? "-" : "+"} R${" "}
                    {Number(transaction.amount).toLocaleString()}
                  </span>
                  <button
                    onClick={() => onDelete && onDelete(transaction.id)}
                    className=" group-hover:opacity-100 text-[10px] font-bold text-slate-400 hover:text-red-500 transition-all uppercase tracking-tighter"
                  >
                    {t.delete}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Transactions;
