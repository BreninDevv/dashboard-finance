import React from "react";
import InputsValue from "./components/inputsValue";
import Header from "./components/header";

const Page = () => {
  return (
    <>
      <div className="font-inter">
        <Header />
        <InputsValue Name={"Your salary"} />
        <InputsValue Name={"Your earnings"} />
        <InputsValue Name={"Your expenses"} />
      </div>
    </>
  );
};

export default Page;
