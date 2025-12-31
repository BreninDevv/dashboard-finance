"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [desires, setDesires] = useState([]);
  const API_URL = "http://localhost:3333/api";

  const loadUserData = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const response = await fetch(`${API_URL}/user-data`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setTodos(data.todos || []);
        setDesires(data.desires || []);
      }
    } catch (err) {
      console.error("Erro ao carregar dados iniciais:", err);
    }
  }, []);

  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  const getHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });

  const addTodo = async (todoData) => {
    try {
      const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
          task: todoData.task || todoData.name,
          type: todoData.type,
          price: Number(todoData.price) || 0,
        }),
      });
      if (res.ok) {
        const newTodo = await res.json();
        setTodos((prev) => [...prev, newTodo]);
      } else {
        console.error(
          "Erro 500/400 ao adicionar Todo: Verifique os campos no backend"
        );
      }
    } catch (err) {
      console.error("Erro de rede ao adicionar Todo:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (res.ok) {
        setTodos((prev) => prev.filter((t) => (t._id || t.id) !== id));
      }
    } catch (err) {
      console.error("Erro ao deletar Todo:", err);
    }
  };

  const addDesire = async (desireData) => {
    try {
      const res = await fetch(`${API_URL}/desires`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
          name: desireData.name,
          price: Number(desireData.price) || 0,
          current: 0,
        }),
      });
      if (res.ok) {
        const newDesire = await res.json();
        setDesires((prev) => [...prev, newDesire]);
      } else {
        console.error(
          "Erro ao criar Desejo. Verifique se a rota POST existe no controller."
        );
      }
    } catch (err) {
      console.error("Erro de rede ao adicionar Desejo:", err);
    }
  };

  const updateDesire = async (id, updateData) => {
    const cleanId = String(id).trim();
    try {
      const res = await fetch(`${API_URL}/desires/${cleanId}`, {
        method: "PATCH",
        headers: getHeaders(),
        body: JSON.stringify({ current: Number(updateData.current) }),
      });

      if (res.ok) {
        const updated = await res.json();
        setDesires((prev) =>
          prev.map((d) => ((d._id || d.id) === cleanId ? updated : d))
        );
      }
    } catch (err) {
      console.error("Erro ao atualizar Desejo:", err);
    }
  };

  const deleteDesire = async (id) => {
    if (!id) return;
    const cleanId = String(id).trim();

    try {
      const res = await fetch(`${API_URL}/desires/${cleanId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        setDesires((prev) => prev.filter((d) => (d._id || d.id) !== cleanId));
      } else {
        console.error(
          "Erro 404: Rota DELETE /desires/:id não encontrada no servidor."
        );
      }
    } catch (err) {
      console.error("Erro de rede ao deletar desejo:", err);
    }
  };

  return (
    <UserDataContext.Provider
      value={{
        todos,
        desires,
        addTodo,
        deleteTodo,
        addDesire,
        updateDesire,
        deleteDesire,
        loadUserData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
