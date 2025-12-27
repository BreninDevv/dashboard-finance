"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    const res = await fetch("http://localhost:3333/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Erro ao logar");
      return;
    }

    localStorage.setItem("token", data.token);
    router.push("/dashboard");
  }

  return (
    <form
      onSubmit={handleLogin}
      className="py-11 text-xl text-gray-400 flex flex-col gap-6"
    >
      <div>
        <h1>Email</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded-lg p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
