"use client";

import Image from "next/image";
import React, { useState } from "react";
import SalaryIcon from "../components/icons/hand-coin-line.svg";
import SalaryEdit from "../components/icons/exchange-line.svg";

const InputsValue = ({ Name }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("145000");

  const formatted = new Intl.NumberFormat("en-US").format(value);

  return (
    <div className="bg-white w-70 h-40 rounded-3xl p-4 flex flex-col justify-between">
      <div className="flex justify-between">
        <div>
          <Image src={SalaryIcon} alt="Salary Icon" width={25} height={25} />
        </div>
        <div onClick={() => setEditing(!editing)}>
          <Image
            src={SalaryEdit}
            alt="Salary Edit"
            width={25}
            height={25}
            className="opacity-45"
          />
        </div>
      </div>
      <div>
        {editing ? (
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
        ) : (
          <h2 className="text-3xl font-bold">${formatted}</h2>
        )}
      </div>
      <p>{Name}</p>
    </div>
  );
};

export default InputsValue;
