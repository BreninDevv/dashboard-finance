"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (!email || !password) {
      setMessage({ text: "Preencha todos os campos", type: "error" });
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage({ text: data.message || "Erro ao logar", type: "error" });
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.username);
      router.push("/dashboard");
    } catch (err) {
      setMessage({ text: "Falha na conexão com o servidor", type: "error" });
    }
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h1 className="text-sm ml-1 text-gray-400">Email</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded-lg p-2 w-full text-base bg-transparent border-white/10 text-gray-200 outline-none focus:border-purple-500 transition-colors"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

      <div className="h-[68px]" />

      <div className="h-10 flex items-center justify-center">
        {message.text && (
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full animate-in fade-in zoom-in duration-300 ${
              message.type === "error"
                ? "text-red-500 bg-red-500/10"
                : "text-emerald-500 bg-emerald-500/10"
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
        Login
      </button>

      <span className="text-sm text-center mt-2 text-gray-400">
        I forgot my{" "}
        <Link
          href="/forgot-password"
          title="Recover Password"
          className="text-purple-500 hover:underline"
        >
          password
        </Link>
        .
      </span>
    </form>
  );
};

export default Login;
