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
      <div className="dark:bg-[#202433] duration-500 bg-white w-full h-40 rounded-3xl p-4  flex-col justify-between font-inter font-bold shadow-xl my-2 hidden sm:block">
        <div>
          <p className="dark:text-white font-normal text-xl text-black">
            {t.totalExpenses}
          </p>
        </div>
        <div className="pb-4">
          <span className="dark:text-white font-inter text-black text-3xl">
            R${formatted}
          </span>
        </div>
        <div className="flex justify-end">
          <div
            className="bg-red-400 w-20 text-center text-white rounded-2xl p-2 flex gap-1 justify-start items-center cursor-pointer hover:opacity-80"
            onClick={() => setShowModal(true)}
          >
            <Image src={Send} alt="Send icon" width={20} />
            {t.send}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 ">
          <div className=" dark:bg-[#202433] duration-500 dark:text-white bg-white w-full max-w-[320px] h-auto rounded-xl shadow max-h-[90vh] overflow-auto py-4 px-6">
            <div className="flex flex-col gap-4 pb-6">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-lg">{t.expenseCategory}</p>
                  <select
                    className="border rounded-md p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option className="dark:bg-[#151722] " value="">
                      {t.select}
                    </option>
                    <option className="dark:bg-[#151722] " value="Alimentação">
                      {t.food}
                    </option>
                    <option className="dark:bg-[#151722] " value="Transporte">
                      {t.transport}
                    </option>
                    <option className="dark:bg-[#151722] " value="Compras">
                      {t.purshases}
                    </option>
                    <option className="dark:bg-[#151722] " value="Lazer">
                      {t.leisures}
                    </option>
                    <option className="dark:bg-[#151722] " value="Contas">
                      {t.accounts}
                    </option>
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
                  placeholder={t.nameOfExpense}
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
                {t.confirm}
              </div>
              <div
                className="w-25 bg-gray-400 text-center rounded-lg p-1 text-lg cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                {t.cancel}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
