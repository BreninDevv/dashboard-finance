"use client";

import Image from "next/image";
import React, { useState } from "react";
import BlackEdit from "../../components/icons/edit-box-line-black.svg";
import TrashWhite from "../../components/icons/delete-bin-6-line-white.svg";
import Check from "../../components/icons/check-line.svg";
import Right from "../../components/icons/checkbox-circle-line-white.svg";

const Desires = () => {
  const [desires, setDesires] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [currentDesire, setCurrentDesire] = useState(null);
  const [addValue, setAddValue] = useState("");

  function createDesire() {
    if (!name || !price) return;

    const newDesire = {
      id: Date.now(),
      name,
      price: Number(price),
      current: 0,
    };

    setDesires([...desires, newDesire]);

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

    const updated = desires.map((d) =>
      d.id === currentDesire.id
        ? { ...d, current: Math.min(d.current + Number(addValue), d.price) }
        : d
    );

    setDesires(updated);

    setAddValue("");
    setCurrentDesire(null);
    setAddModalOpen(false);
  }
  function deleteDesire(id) {
    setDesires(desires.filter((d) => d.id !== id));
  }

  return (
    <>
      <div
        className={`bg-black min-w-40 max-h-56 min-h-56 xl:max-h-64 xl:min-h-56 rounded-xl shadow-xl px-4 mb-4 gap-y-2 py-4 w-full ${
          desires.length > 0 ? "overflow-y-scroll" : ""
        }`}
      >
        <div className="flex justify-between">
          <div>Jes</div>
          <div>
            <h1 className="text-white text-xl">Desires Status</h1>
          </div>

          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="cursor-pointer"
            >
              <Image src={BlackEdit} alt="Black Edit" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          {desires.length === 0 && (
            <div className="flex flex-col items-center py-12 opacity-50">
              <div>
                <Image src={Right} alt="Check logo" />
              </div>
              <div>
                <p className="text-white">Sem desejos por aqui...</p>
              </div>
            </div>
          )}

          <div className="w-full mt-4 flex flex-col gap-y-3">
            {desires.map((d) => {
              const percent = Math.min((d.current / d.price) * 100, 100);
              const isCompleted = d.current >= d.price;

              return (
                <div
                  key={d.id}
                  className="bg-gray-900 p-3 rounded text-white flex flex-col gap-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span>{d.name}</span>

                    <span>
                      {isCompleted
                        ? "COMPLETED!"
                        : `R$ ${d.price.toLocaleString()}`}
                    </span>

                    <button onClick={() => deleteDesire(d.id)}>
                      <Image
                        src={isCompleted ? Check : TrashWhite}
                        alt={isCompleted ? "Completed" : "Trash"}
                      />
                    </button>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                    <div
                      style={{ width: `${percent}%` }}
                      className={`h-3 rounded-full transition-all ${
                        isCompleted ? "bg-green-500" : "bg-white"
                      }`}
                    ></div>
                  </div>

                  {!isCompleted && (
                    <button
                      onClick={() => openAddModal(d)}
                      className="bg-white text-black px-3 py-1 rounded mt-2"
                    >
                      Adicionar dinheiro
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 ">
          <div className="bg-white p-6 rounded-lg w-80 flex flex-col gap-3 max-h-[90vh] overflow-auto">
            <h2 className="text-xl font-semibold">Criar Desejo</h2>

            <input
              type="text"
              placeholder="Nome do desejo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded"
            />

            <input
              type="number"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 rounded"
            />

            <div className="flex justify-end gap-2 mt-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>

              <button
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={createDesire}
              >
                Criar
              </button>
            </div>
          </div>
        </div>
      )}

      {addModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 ">
          <div className="bg-white p-6 rounded-lg w-80 flex flex-col gap-3 max-h-[90vh] overflow-auto">
            <h2 className="text-xl font-semibold">
              Adicionar dinheiro para:{" "}
              <span className="font-bold">{currentDesire?.name}</span>
            </h2>

            <input
              type="number"
              placeholder="Valor a adicionar"
              value={addValue}
              onChange={(e) => setAddValue(e.target.value)}
              className="border p-2 rounded"
            />

            <div className="flex justify-end gap-2 mt-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setAddModalOpen(false)}
              >
                Cancelar
              </button>

              <button
                className="px-4 py-2 bg-green-600 text-white rounded"
                onClick={addMoney}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Desires;
