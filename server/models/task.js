const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  dateAdded: {
    type: Date,
    default: new Date
  }
})

const Task = model('Task', taskSchema);


module.exports = Task;