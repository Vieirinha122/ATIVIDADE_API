const express = require('express');
const { getAllTasks, addTask, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.route('/')
    .get(getAllTasks)
    .post(addTask);

router.route('/:id')
    .get(getTaskById)
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;
