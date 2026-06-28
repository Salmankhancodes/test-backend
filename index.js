const express = require("express");
const router = require("./routes/tasks.routes");
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use('/', router)

app.listen('8080', (req, res) => console.log('Server listening on PORT:8080'));