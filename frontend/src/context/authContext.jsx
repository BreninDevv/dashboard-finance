"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Inicialização "Lazy": o código dentro da função só roda UMA vez
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      try {
        return savedUser ? JSON.parse(savedUser) : null;
      } catch (error) {
        console.error("Erro ao ler o usuário:", error);
        return null;
      }
    }
    return null;
  });

  // Remova o useEffect antigo que estava dando erro!

  function login(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
