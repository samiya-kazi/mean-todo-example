const router = require('express').Router();
const taskController = require('./controllers/task');

router.get('/todos', taskController.getAllTasks)
router.post('/todos', taskController.postTask)
router.delete('/todos/:id', taskController.deleteTask)
router.put('/todos/:id/done', taskController.taskDone);

module.exports = router;