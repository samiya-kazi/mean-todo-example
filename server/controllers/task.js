const Task = require("../models/task");

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200);
    res.send(tasks);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function postTask(req, res) {
  try {
    const { name } = req.body;
    const dateAdded = new Date();
    const result = await Task.create({ name, dateAdded });
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

async function deleteTask(req, res) {
  try {
    const { id } = req.params
    const result = await Task.findByIdAndDelete(id);
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function taskDone(req, res) {
  try {
    const { id } = req.params
    const result = await Task.findByIdAndUpdate(id, {$set: {done: true}});
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


module.exports = { getAllTasks, postTask, deleteTask, taskDone }