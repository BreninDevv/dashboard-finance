"use client";

import { useLanguage } from "../../i18n/languageContext";
import React from "react";

function Transactions({ transactions = [], onDelete }) {
  const { t } = useLanguage();
  return (
    <div className="dark:bg-[#1E293B] duration-500 bg-white rounded-xl shadow-xl p-4 min-h-56 max-h-56 xl:min-h-56 xl:max-h-64">
      <div className="flex justify-between items-center pb-2">
        <h2 className="text-lg font-bold">{t.transactions}</h2>
        <span className="text-sm text-gray-500">{t.history}</span>
      </div>

      <div className="mt-4 max-h-30 overflow-auto">
        {transactions.length === 0 ? (
          <div className="flex justify-center text-center pt-5">
            <h1 className="font-medium text-gray-500 text-lg">
              {t.noTransactions}
            </h1>
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {transactions.map((t) => (
              <li
                key={t.id}
                className="flex justify-between items-center border rounded p-3 dark:hover:bg-[#20243c]  hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {t.description || t.category}
                  </div>
                  <div className="flex gap-2 items-center mt-1">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {t.category}
                    </span>
                    <span className="text-xs text-gray-500">{t.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={`font-bold whitespace-nowrap ${
                      t.isExpense ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {t.isExpense ? "-" : "+"}R${" "}
                    {Number(t.amount).toLocaleString()}
                  </div>
                  <button
                    onClick={() => onDelete && onDelete(t.id)}
                    className="text-xs text-gray-500 hover:text-red-500 transition-colors"
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
