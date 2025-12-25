import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (!email || !user || !password) {
      alert("Preencha todos os campos");
      return;
    }

    console.log({
      email,
      user,
      password,
    });

    // conectar back dpsss
  }

  return (
    <form
      onSubmit={handleRegister}
      className="p-7 text-xl text-gray-400 flex flex-col gap-4"
    >
      <div>
        <h1>Email</h1>
        <input
          type="email"
          placeholder="Register your email"
          className="border rounded-lg p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <h1>User</h1>
        <input
          type="text"
          placeholder="Register your username"
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
        className="bg-purple-500 rounded-lg p-2 mt-2 text-white hover:bg-purple-600 transition"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
