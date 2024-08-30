const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();

// Middleware para registrar requisições HTTP
app.use(morgan('dev'));

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

connectDB();

// Configura as rotas para a API de tarefas
app.use('/tasks', taskRoutes);

// Define a porta e inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});