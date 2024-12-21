const express = require('express');
const Task = require('../models/task');
const Category = require('../models/category');

const router = express.Router();

// CRUD de Tarefas
router.post('/', async (req, res) => {
  try {
    const { title, description, dueDate, status, categoryName, priority } = req.body;

    const category = await Category.findOne({ name: categoryName });
    if (!category) return res.status(404).send('Categoria não encontrada');

    const task = new Task({ title, description, dueDate, status, categoryName, priority });
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar tarefas por e-mail do usuário
router.get('/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const categories = await Category.find({ email });
    if (categories.length === 0) {
      return res.status(200).send([]);
    }

    const categoryNames = categories.map(cat => cat.name);
    const tasks = await Task.find({ categoryName: { $in: categoryNames } });

    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
