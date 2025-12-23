import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="grid w-full max-w-4xl grid-cols-2 overflow-hidden rounded-3xl shadow-2xl">
          <div className="flex flex-col p-12 bg-[#1a1b23]">
            <div className="flex-1"></div>
          </div>

          <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-indigo-500 to-orange-500"></div>
        </div>
      </div>
    </>
  );
};

export default Page;
