const express = require('express');
const connectDB = require('../config/db');
const userRoutes = require('../routes/userRoutes');
const categoryRoutes = require('../routes/categoryRoutes');
const taskRoutes = require('../routes/taskRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Usar as rotas
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
