import * as React from "react";
import { Task } from "../../interfaces";
import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import {
  SaveAs as SaveIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

interface Props {
  handleUpdateTask: () => void;
  handleMarkAsDone: (taskId: number) => void;
  handleDeleteTask: (taskId: number) => void;
  handleEditTask: (taskId: number, taskText: string) => void;
  handleChangeEditText: (e) => void;
  tasks: Task[];
  editingTaskId: number | null;
  editingTaskText: string;
}

const TaskList = ({
  handleUpdateTask,
  handleMarkAsDone,
  handleDeleteTask,
  handleEditTask,
  handleChangeEditText,
  tasks,
  editingTaskId,
  editingTaskText,
}: Props) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} divider>
          <Checkbox onClick={() => handleMarkAsDone(task.id)} />
          <ListItemText
            primary={
              editingTaskId === task.id ? (
                <TextField
                  value={editingTaskText}
                  onChange={handleChangeEditText}
                />
              ) : (
                <span
                  style={{
                    textDecoration: task.done ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
              )
            }
          />
          <Box>
            <IconButton
              color="primary"
              onClick={() => handleUpdateTask()}
              disabled={editingTaskId === null}
            >
              <SaveIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => handleEditTask(task.id, task.text)}
              disabled={editingTaskId !== null}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              color="secondary"
              onClick={() => handleDeleteTask(task.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
