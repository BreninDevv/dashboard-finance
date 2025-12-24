"use client";

import React, { useState } from "react";

const Page = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-900 pb-20 font-inter">
        <div className="grid w-full max-w-4xl h-120  grid-cols-2 overflow-hidden rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-800 to-pink-200">
            <div className="pb-40 flex flex-col gap-2">
              <div>
                <h1 className="text-white font-medium text-4xl text-center">
                  Dashboard Finance
                </h1>
              </div>
              <div className="flex items-center">
                <p className="text-white font-medium text-sm text-center font-inter">
                  Se organize com simplicidade e funcionalidade em um design
                  elegante e intuitivo.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-[#1a1b23]">
            <div className="flex-1 flex justify-center pb-20">
              <div className="w-60 h-10 bg-[#2d2f3d] flex justify-center rounded-xl text-gray-300">
                <div
                  className={`text-center pt-2 w-30 rounded-xl  ${
                    !login
                      ? "bg-[#3b3e52] duration-500 "
                      : "bg-[#2d2f3d] duration-500 cursor-pointer"
                  } `}
                  onClick={() => setLogin(false)}
                >
                  Login
                </div>
                <div
                  className={`text-center pt-2 w-30 rounded-xl ${
                    login
                      ? "bg-[#3b3e52] duration-500 "
                      : "bg-[#2d2f3d] duration-500 cursor-pointer"
                  }`}
                  onClick={() => setLogin(true)}
                >
                  Register
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
