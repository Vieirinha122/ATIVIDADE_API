const express = require('express');
const { getAllTasks, addTask, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

// Define rotas para tarefas
router.route('/tasks')
    .get(getAllTasks)
    .post(addTask);

router.route('/:id')
    .get(getTaskById)
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;
