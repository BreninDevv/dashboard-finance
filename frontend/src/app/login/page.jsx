"use client";

import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

const Page = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 font-inter">
      <div className="grid w-full max-w-4xl min-h-[500px] md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl">
        <div className="hidden md:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-800 to-pink-200">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-medium text-4xl text-center">
              Dashboard Finance
            </h1>
            <p className="text-white font-medium text-sm text-center font-inter max-w-[280px]">
              Se organize com simplicidade e funcionalidade em um design
              elegante e intuitivo.
            </p>
          </div>
        </div>

        <div className="flex flex-col p-6 md:p-8 bg-[#1a1b23] justify-center w-full">
          <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-[240px] h-10 bg-[#2d2f3d] flex justify-center rounded-xl text-gray-300 mb-6">
              <div
                className={`flex-1 text-center pt-2 rounded-xl transition-all duration-300 cursor-pointer ${
                  !login ? "bg-[#3b3e52] text-white" : "hover:text-white"
                }`}
                onClick={() => setLogin(false)}
              >
                Login
              </div>
              <div
                className={`flex-1 text-center pt-2 rounded-xl transition-all duration-300 cursor-pointer ${
                  login ? "bg-[#3b3e52] text-white" : "hover:text-white"
                }`}
                onClick={() => setLogin(true)}
              >
                Register
              </div>
            </div>

            <div className="w-full min-h-[380px] flex flex-col justify-start">
              {!login ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
