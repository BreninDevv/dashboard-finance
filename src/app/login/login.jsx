import React from "react";

const Login = () => {
  return (
    <>
      <div className="py-11 text-xl text-gray-400 flex flex-col gap-6 duration-300">
        <div>
          <h1>User</h1>
          <input
            type="text"
            placeholder="Enter your username"
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
        <div className="flex justify-center bg-purple-500 rounded-lg p-2 cursor-pointer">
          <div className="text-white">Login</div>
        </div>
        <div>
          <span className="text-sm">
            I forgot my{" "}
            <a href="#" className="text-purple-500">
              password
            </a>
            .
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
