"use client";

import Image from "next/image";
import React, { useState } from "react";
import Add from "../components/icons/add-circle-line.svg";
import Send from "../components/icons/send-plane-2-line.svg";

const InputsValue = ({ Name, Icon }) => {
  const [value, setValue] = useState("145000");
  const [send, setSend] = useState(false);
  const [add, setAdd] = useState(false);

  const formatted = new Intl.NumberFormat("en-US").format(value);

  return (
    <>
      <div className="bg-sky-500 w-full h-40 rounded-3xl p-4 flex flex-col justify-between font-inter font-bold shadow my-2">
        <div>
          <p className="font-normal text-xl text-white">{Name}</p>
        </div>
        <div className="pb-4">
          <span className="font-inter text-white text-3xl ">R${formatted}</span>
        </div>
        <div>
          <div className="flex justify-between px-12">
            <div
              className="bg-sky-300  w-20 text-center text-white rounded-2xl p-2 flex gap-2 justify-center items-center"
              onClick={() => setAdd((prev) => !prev)}
            >
              <Image src={Add} alt="Add icon" width={25} />
              Add
            </div>
            <div
              className="bg-sky-300 w-20 text-center rounded-2xl p-2 flex text-white gap-1 justify-center items-center  "
              onClick={() => setSend((prev) => !prev)}
            >
              <Image src={Send} alt="Send icon" width={20} />
              Send
            </div>
          </div>
        </div>
      </div>
      {send ? (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-[320px] h-auto rounded-xl shadow max-h-[90vh] overflow-auto py-4 px-6 ">
            <div className="flex flex-col gap-4 pb-6">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-lg">Categoria do gasto</p>
                  <select className="border rounded-md p-2">
                    <option value="Selecione">Selecione...</option>
                    <option value="Alimentação">Alimentação</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Compras">Compras</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Contas">Contas</option>
                  </select>
                </div>
                <div className="text-2xl" onClick={() => setSend(false)}>
                  X
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="number"
                    placeholder="R$120"
                    className="rounded-md border p-2"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Descrição do gasto"
                  className="rounded-md border p-2"
                />
              </div>
            </div>
            <div className="flex justify-start  gap-2">
              <div className="w-25 bg-green-400 text-center rounded-lg p-1 text-lg">
                Confirm
              </div>
              <div
                className="w-25 bg-gray-400 text-center rounded-lg p-1 text-lg"
                onClick={() => setSend(false)}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="hidden">Jesus é bom</p>
      )}
      {add ? (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-[320px] h-auto rounded-xl shadow max-h-[90vh] overflow-auto py-4 px-6 ">
            <div className="flex flex-col gap-4 pb-6">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-lg">Categoria do ganho</p>
                  <select className="border rounded-md p-2">
                    <option value="Selecione">Selecione...</option>
                    <option value="Alimentação">Salário</option>
                    <option value="Transporte">Freelance</option>
                    <option value="Compras">Extra</option>
                    <option value="Lazer">Outros</option>
                  </select>
                </div>
                <div className="text-2xl" onClick={() => setAdd(false)}>
                  X
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="number"
                    placeholder="R$120"
                    className="rounded-md border p-2"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Descrição do ganho"
                  className="rounded-md border p-2"
                />
              </div>
            </div>
            <div className="flex justify-start  gap-2">
              <div className="w-25 bg-green-400 text-center rounded-lg p-1 text-lg">
                Confirm
              </div>
              <div
                className="w-25 bg-gray-400 text-center rounded-lg p-1 text-lg"
                onClick={() => setAdd(false)}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="hidden">Jesus é bom</p>
      )}
    </>
  );
};

export default InputsValue;
