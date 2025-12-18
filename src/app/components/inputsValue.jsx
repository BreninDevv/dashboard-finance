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
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 "
          onClick={() => setSend(false)}
        >
          <div className="bg-white w-full max-w-[320px] h-auto rounded-xl shadow max-h-[90vh] overflow-auto">
            <h1>SLV</h1>
          </div>
        </div>
      ) : (
        <p className="hidden">Jesus é bom</p>
      )}
    </>
  );
};

export default InputsValue;
