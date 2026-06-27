const express = require("express");
const router = require("./routes/tasks.routes");
const app = express();


app.use(express.json());
app.use('/', router)

app.listen('8080', (req, res) => console.log('Server listening on PORT:8080'));