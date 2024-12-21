const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  status: { type: String, enum: ['pendente', 'concluída'], default: 'pendente' },
  categoryName: { type: String, required: true },
  priority: { type: String, enum: ['baixa', 'média', 'alta'], default: 'média' },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
