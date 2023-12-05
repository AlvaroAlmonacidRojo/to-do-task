import * as React from "react";
import { Task, User } from "../../interfaces";
import { AccountCircle, LogoutRounded } from "@mui/icons-material";
import { useAuth } from "../../hooks/auth";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import {
  SaveAs as SaveIcon,
  Edit as EditIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
  Add as AddIcon
} from "@mui/icons-material";
import { useState } from "react";
import TaskList from "./TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTaskText, setEditingTaskText] = useState<string>("");

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      text: newTaskText,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const handleUpdateTask = () => {
    if (editingTaskId !== null) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTaskId ? { ...task, text: editingTaskText } : task
      );
      setTasks(updatedTasks);
      setEditingTaskId(null);
      setEditingTaskText("");
    }
  };

  const handleMarkAsDone = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId: number, taskText: string) => {
    setEditingTaskId(taskId);
    setEditingTaskText(taskText);
  };

  return (
    <Grid item>
      <Card>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <TextField
            required
            label="New Task"
            variant="outlined"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <IconButton color="primary" onClick={handleAddTask} disabled={!(newTaskText.length >= 1)}>
            <AddIcon />
          </IconButton>
        </Box>
        <Divider />
        <TaskList 
            handleUpdateTask={handleUpdateTask}
            handleMarkAsDone={handleMarkAsDone}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleChangeEditText={(e) => setEditingTaskText(e.target.value)}
            tasks={tasks}
            editingTaskId={editingTaskId}
            editingTaskText={editingTaskText}
        />
      </Card>
    </Grid>
  );
};

export default TaskManager;
