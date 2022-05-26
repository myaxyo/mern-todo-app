const tasks = require("./routes/tasks");
const express = require("express");
const app = express();
const connection = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());
connection();
app.use('api/tasks', tasks)
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
