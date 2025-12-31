import Todo from "../models/todo.js";

export const getUsers = async (req, res) => {
  try {
    res.status(200).json({ message: "Rota de usuários funcionando!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários!" });
  }
};

export const createUser = async (req, res) => {
  try {
    res.status(201).json({ message: "Usuário criado!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o usuário!" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json({ message: `Usuário ${id} atualizado!` });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o usuário!" });
  }
};
export const getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.userId });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const newTodo = await Todo.create({ ...req.body, userId: req.userId });
  res.status(201).json(newTodo);
};

export const deleteTodo = async (req, res) => {
  await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Removido" });
};
