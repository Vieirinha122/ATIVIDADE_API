const Task = require('../models/taskModel'); 

async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find(); 
        res.json(tasks);
    } catch (error) {
        res.status(500).send(error.message); 
    }
}

async function getTaskById(req, res) {
    try {
        const task = await Task.findById(req.params.id); 
        if (task) {
            res.json(task);
        } else {
            res.status(404).send('Tarefa não encontrada'); 
        }
    }   catch (error) {
        res.status(500).send(error.message); 
    }
}

async function addTask(req, res) {
    const {title, description, completed} = req.body;
    try {
        const task = new Task({
          title, description, completed
        }); 
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).send(error.message); 
    }
}

async function updateTask(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (task) {
        res.json(task);
      } else {
        res.status(404).send('Tarefa não encontrada');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
}

async function deleteTask(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (task) {
        res.status(204).send();
      } else {
        res.status(404).send('Tarefa não encontrada');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
}

module.exports = { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
