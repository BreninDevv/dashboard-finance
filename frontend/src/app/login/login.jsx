import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!user || !password) {
      alert("Preencha todos os campos");
      return;
    }

    console.log("User:", user);
    console.log("Password:", password);

    // linkar com back dpss
  }

  return (
    <form
      onSubmit={handleLogin}
      className="py-11 text-xl text-gray-400 flex flex-col gap-6"
    >
      <div>
        <h1>User</h1>
        <input
          type="text"
          placeholder="Enter your username"
          className="border rounded-lg p-2 w-full"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <div>
        <h1>Password</h1>
        <input
          type="password"
          placeholder="Ex. 123"
          className="border rounded-lg p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-purple-500 rounded-lg p-2 text-white hover:bg-purple-600 transition"
      >
        Login
      </button>

      <span className="text-sm">
        I forgot my{" "}
        <a href="#" className="text-purple-500">
          password
        </a>
        .
      </span>
    </form>
  );
};

export default Login;
