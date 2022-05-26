import React, { useState } from "react";
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "./services/taskService";

export default function Tasks () {
    const [tasks, setTasks] = useState([])
}