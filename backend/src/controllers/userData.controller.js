import Todo from "../models/todo.js";
import Desire from "../models/desire.js";

const getUserId = (req) => req.userId || (req.user && req.user.id);

export const getUserData = async (req, res) => {
  try {
    const userId = getUserId(req);
    const [todos, desires] = await Promise.all([
      Todo.find({ userId }),
      Desire.find({ userId }),
    ]);

    res.json({ todos, desires });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do usuário" });
  }
};

export const getTodos = async (req, res) => {
  try {
    const userId = getUserId(req);
    const todos = await Todo.find({ userId });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { task, type, price } = req.body;
    const userId = getUserId(req);

    if (!task) {
      return res.status(400).json({ error: "A tarefa é obrigatória" });
    }

    const newTodo = await Todo.create({
      task,
      type: type || "Contas",
      price: Number(price) || 0,
      userId,
    });

    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Erro ao criar Todo:", error);
    res.status(500).json({ error: "Erro interno ao criar tarefa" });
  }
};

export const addTodo = createTodo;

export const deleteTodo = async (req, res) => {
  try {
    const userId = getUserId(req);
    await Todo.findOneAndDelete({ _id: req.params.id, userId });
    res.json({ message: "Removido" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
};

export const getDesires = async (req, res) => {
  try {
    const userId = getUserId(req);
    const desires = await Desire.find({ userId });
    res.json(desires);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar desejos" });
  }
};

export const createDesire = async (req, res) => {
  try {
    const userId = getUserId(req);
    const newDesire = await Desire.create({ ...req.body, userId });
    res.status(201).json(newDesire);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar desejo" });
  }
};

export const updateDesire = async (req, res) => {
  try {
    const { id } = req.params;
    const { current } = req.body;
    const userId = getUserId(req);

    const updatedDesire = await Desire.findOneAndUpdate(
      { _id: id, userId },
      { current: Number(current) },
      { new: true }
    );

    if (!updatedDesire)
      return res.status(404).json({ message: "Não encontrado" });

    res.status(200).json(updatedDesire);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor", error: error.message });
  }
};

export const deleteDesire = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = getUserId(req);
    const deleted = await Desire.findOneAndDelete({ _id: id, userId });

    if (!deleted) {
      return res.status(404).json({ message: "Desejo não encontrado" });
    }

    res.status(200).json({ message: "Deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar", error: error.message });
  }
};
