import React from "react";
import { useDispatch } from "react-redux";
import { toggleTaskCompletion } from "../store/toDoList/toDoListThunks";

const TaskComponent = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <p
      onClick={handleToggleCompleted}
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      - {task.title}
    </p>
  );
};

export default TaskComponent;
