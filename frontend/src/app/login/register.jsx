"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (!email || !user || !password) {
      setMessage({ text: "Preencha todos os campos!", type: "error" });
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username: user, password }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        setMessage({
          text: data.message || "Erro ao registrar",
          type: "error",
        });
        return;
      }

      setMessage({ text: "Conta criada com sucesso!", type: "success" });
      setTimeout(() => router.push("/login"), 2000);
    } catch (error) {
      setMessage({ text: "Erro ao conectar com o servidor", type: "error" });
    }
  }

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h1 className="text-sm ml-1 text-gray-400">Email</h1>
        <input
          type="email"
          placeholder="Register your email"
          className="border rounded-lg p-2 w-full text-base bg-transparent border-white/10 text-gray-200 outline-none focus:border-purple-500 transition-colors"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-sm ml-1 text-gray-400">User</h1>
        <input
          type="text"
          placeholder="Register your username"
          className="border rounded-lg p-2 w-full text-base bg-transparent border-white/10 text-gray-200 outline-none focus:border-purple-500 transition-colors"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-sm ml-1 text-gray-400">Password</h1>
        <input
          type="password"
          placeholder="Ex. 123"
          className="border rounded-lg p-2 w-full text-base bg-transparent border-white/10 text-gray-200 outline-none focus:border-purple-500 transition-colors"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="h-10 flex items-center justify-center">
        {message.text && (
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full animate-in fade-in zoom-in duration-300 ${
              message.type === "success"
                ? "text-emerald-500 bg-emerald-500/10"
                : "text-red-500 bg-red-500/10"
            }`}
          >
            {message.text}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-purple-500 rounded-lg p-3 text-white font-bold hover:bg-purple-600 transition active:scale-95 shadow-lg shadow-purple-500/20"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
