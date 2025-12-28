import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "Preencha todos os campos" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      username,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({ token, username: user.username });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
}
// Função para verificar se o e-mail existe antes de liberar a troca de senha
export async function checkEmail(req, res) {
  try {
    const { email } = req.query; // Pega o email da URL: ?email=teste@teste.com
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "E-mail não encontrado" });
    }

    return res.status(200).json({ exists: true });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao verificar e-mail" });
  }
}

export async function resetPassword(req, res) {
  try {
    const { email, newPassword } = req.body;

    if (!newPassword || newPassword.length < 3) {
      return res.status(400).json({ message: "Senha muito curta" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Senha alterada com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao redefinir senha" });
  }
}
