const mongoose = require('mongoose');
require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {  // Usa a variável de ambiente
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB!');
  } catch (err) {
    console.error('Erro na conexão:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
