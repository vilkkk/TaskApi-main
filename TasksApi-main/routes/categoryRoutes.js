const express = require('express');
const Category = require('../models/category');
const User = require('../models/user');

const router = express.Router();

// CRUD de Categorias
router.post('/', async (req, res) => {
  try {
    const { email, name, description, color } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('Usuário não encontrado');

    const category = new Category({ email, name, description, color });
    await category.save();
    res.status(201).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
