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
