const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
