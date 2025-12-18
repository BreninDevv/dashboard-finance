"use client";

import React from "react";

function Transactions({ transactions = [], onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-center pb-2">
        <h2 className="text-lg font-bold">Transactions</h2>
        <span className="text-sm text-gray-500">History</span>
      </div>

      <div className="mt-4 max-h-48 overflow-auto">
        {transactions.length === 0 ? (
          <p className="text-sm text-gray-500">No transactions yet</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {transactions.map((t) => (
              <li
                key={t.id}
                className="flex justify-between items-center border rounded p-2"
              >
                <div>
                  <div className="text-sm text-gray-600">{t.category}</div>
                  <div className="text-sm">{t.date}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={`font-bold ${
                      t.isExpense ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {t.isExpense ? "-" : "+"}R${" "}
                    {Number(t.amount).toLocaleString()}
                  </div>
                  <button
                    onClick={() => onDelete && onDelete(t.id)}
                    className="text-xs text-gray-500 hover:text-red-500"
                  >
                    Delete
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
