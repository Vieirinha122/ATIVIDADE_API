const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();


app.use(morgan('dev'));

app.use(express.json());

connectDB();

app.use('/tasks', taskRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});