const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Registro de Usuário
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('Usuário já registrado');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).send({ message: 'Usuário registrado com sucesso', email: newUser.email });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login de Usuário
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Usuário não encontrado');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Senha incorreta');

    const token = jwt.sign({ email: user.email }, 'secretKey', { expiresIn: '1h' });
    res.status(200).send({ token, email: user.email });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
