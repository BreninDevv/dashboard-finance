import React from "react";

const Register = () => {
  return (
    <>
      <div className="p-7 text-xl text-gray-400 flex flex-col gap-4 duration-300">
        <div>
          <h1>Email</h1>
          <input
            type="text"
            placeholder="Register your email"
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <h1>User</h1>
          <input
            type="text"
            placeholder="Register your username"
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <h1>Password</h1>
          <input
            type="password"
            placeholder="Ex. 123"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex justify-center bg-purple-500 rounded-lg p-2 mt-2 cursor-pointer">
          <div className="text-white">Register</div>
        </div>
      </div>
    </>
  );
};

export default Register;
