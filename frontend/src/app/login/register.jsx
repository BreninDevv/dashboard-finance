"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();

    if (!email || !user || !password) {
      alert("Preencha todos os campos");
      return;
    }

    const res = await fetch("http://localhost:3333/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username: user, password }),
    });

    if (!res.ok) {
      alert("Erro ao registrar");
      return;
    }

    router.push("/login");
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
