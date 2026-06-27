const express = require("express");
const { getAllTasks, createNewTask } = require("../controllers/task.controller");
const router = express.Router()

router.get('/tasks', getAllTasks);

router.post('/task', createNewTask);

module.exports = router;