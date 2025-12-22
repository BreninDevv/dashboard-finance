"use client";

import React, { useMemo, useState } from "react";
import { useTransactions } from "../../../context/TransactionsContext";
import Image from "next/image";
import Add from "../../components/icons/add-circle-line.svg";

export default function IncomeCard() {
  const { transactions, addTransaction } = useTransactions();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const totalIncome = useMemo(() => {
    return transactions
      .filter((t) => !t.isExpense)
      .reduce((sum, t) => sum + Number(t.amount), 0);
  }, [transactions]);

  const formatted = new Intl.NumberFormat("en-US").format(totalIncome);

  function handleConfirm() {
    if (!amount || !category) return;
    const t = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      amount: Number(amount),
      category,
      description: desc,
      isExpense: false,
    };
    addTransaction(t);
    setShowModal(false);
    setAmount("");
    setCategory("");
    setDesc("");
  }

  return (
    <>
      <div className="bg-white w-full h-40 rounded-3xl p-4 flex-col justify-between font-inter font-bold shadow-xl my-2 hidden sm:block ">
        <div>
          <p className="font-normal text-xl text-black">Total Income</p>
        </div>
        <div className="pb-4">
          <span className="font-inter text-black text-3xl">R${formatted}</span>
        </div>
        <div className="flex justify-end">
          <div
            className="bg-green-500 w-20 text-center text-white rounded-2xl p-2 flex gap-1 justify-center items-center cursor-pointer hover:opacity-80"
            onClick={() => setShowModal(true)}
          >
            <Image src={Add} alt="Add icon" width={25} />
            Add
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 ">
          <div className="bg-white w-full max-w-[320px] h-auto rounded-xl shadow max-h-[90vh] overflow-auto py-4 px-6">
            <div className="flex flex-col gap-4 pb-6">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-lg">Income category</p>
                  <select
                    className="border rounded-md p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="Salário">Salary</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Extra">Extra</option>
                    <option value="Outros">Others</option>
                  </select>
                </div>
                <div
                  className="text-2xl cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  X
                </div>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="R$120"
                  className="rounded-md border p-2 w-full"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name of Earnings"
                  className="rounded-md border p-2 w-full"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-start gap-2">
              <div
                className="w-25 bg-green-400 text-center rounded-lg p-1 text-lg cursor-pointer"
                onClick={handleConfirm}
              >
                Confirm
              </div>
              <div
                className="w-25 bg-gray-400 text-center rounded-lg p-1 text-lg cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
