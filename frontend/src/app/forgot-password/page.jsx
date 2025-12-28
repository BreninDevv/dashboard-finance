"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // 1: Pedir e-mail, 2: Digitar nova senha
  const [message, setMessage] = useState({ text: "", type: "" });
  const router = useRouter();

  // Função para verificar se o e-mail existe
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    // Chamada real para o backend
    const res = await fetch(
      `http://localhost:3333/auth/check-email?email=${email}`
    );

    if (res.ok) {
      setStep(2); // Se o e-mail existe, libera o campo da nova senha
      setMessage({
        text: "E-mail encontrado! Digite a nova senha.",
        type: "success",
      });
    } else {
      setMessage({ text: "E-mail não cadastrado.", type: "error" });
    }
  };

  // Função para salvar a nova senha
  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3333/auth/reset-password", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword }), // Envia o email e a nova senha
    });

    if (res.ok) {
      setMessage({
        text: "Senha alterada! Indo para o login...",
        type: "success",
      });
      setTimeout(() => router.push("/login"), 2000);
    } else {
      setMessage({
        text: "Erro ao atualizar. Tente novamente.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0E14] p-4 font-sans">
      <div className="w-full max-w-md bg-[#151722] rounded-[2rem] p-8 border border-white/10 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
        <p className="text-gray-400 text-sm mb-6">
          {step === 1
            ? "Enter your email to verify account."
            : "Enter your new password below."}
        </p>

        <form
          onSubmit={step === 1 ? handleVerifyEmail : handleUpdatePassword}
          className="flex flex-col gap-4"
        >
          {/* Campo de E-mail (Sempre visível ou desabilitado no step 2) */}
          <input
            type="email"
            placeholder="your@email.com"
            disabled={step === 2}
            className={`border rounded-lg p-3 w-full bg-[#0B0E14] border-white/10 text-white outline-none focus:border-purple-500 transition-all ${
              step === 2 ? "opacity-50" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Campo de Nova Senha (Só aparece no Step 2) */}
          {step === 2 && (
            <input
              type="password"
              placeholder="New Password"
              autoFocus
              className="border rounded-lg p-3 w-full bg-[#0B0E14] border-white/10 text-white outline-none focus:border-purple-500 transition-all animate-in slide-in-from-top-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          )}

          {/* Mensagens de Feedback */}
          {message.text && (
            <div
              className={`text-xs font-bold text-center p-2 rounded-lg ${
                message.type === "error"
                  ? "bg-red-500/10 text-red-500"
                  : "bg-emerald-500/10 text-emerald-500"
              }`}
            >
              {message.text}
            </div>
          )}

          <button
            type="submit"
            className="bg-purple-500 text-white font-bold py-3 rounded-xl hover:bg-purple-600 transition active:scale-95"
          >
            {step === 1 ? "Verify Email" : "Update Password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm text-purple-500 hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
