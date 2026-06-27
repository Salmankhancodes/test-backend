const DB_TASKS = [{
  id: 1,
  task: 'task 1'
},
{
  id: 2,
  task: 'task 2'
},
]

exports.getAllTasks = (req, res) => {
  res.json(DB_TASKS);
}

exports.createNewTask = (req, res) => {
  const { task } = req?.body || {};
  if (!task || task === '')
    return res.status(400).json({
      Error: "task is required"
    })
  const id = DB_TASKS.length + 1
  const newTask = {
    id,
    task
  };
  DB_TASKS.push(newTask);
  res.status(201).json({
    message: 'Task created successfully !'
  })
}