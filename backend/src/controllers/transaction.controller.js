import Transaction from "../models/transaction.js";

export const createTransaction = async (req, res) => {
  try {
    const { title, amount, type, category } = req.body;

    const newTransaction = await Transaction.create({
      userId: req.userId,
      title,
      amount,
      type,
      category,
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar transação" });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar transações" });
  }
};
export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findOneAndDelete({
      _id: id,
      userId: req.userId,
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transação não encontrada" });
    }

    return res.status(200).json({ message: "Deletado com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar" });
  }
};
