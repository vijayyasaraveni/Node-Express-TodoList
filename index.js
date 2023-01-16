const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(cors());
app.use(morgan("combined"));

app.use(bodyParser.json());

const taskController = require("./controllers/task");

app.get("/tasks", taskController.getTasks);
app.post("/tasks", taskController.addTask);
app.put("/tasks/:id", taskController.updateTask);
app.delete("/tasks/:id", taskController.deleteTask);

// app.use(morgan("combined", { stream: accessLogStream }));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
