import { useState } from "react";
import useTaskStore from "../store/TaskStore";
import "./Task.css";

const Tasks = () => {
  const { tasks, addTask, toggleTaskCompletion, removeTask } = useTaskStore();
  const [task, setTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTask(value);
  };

  const handleAddTask = () => {
    if (task.trim() === "") return;
    addTask(task.trim());
    setTask("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div>
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
        placeholder="Add a new task"
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleAddTask}>
        Add Task
      </button>

      {tasks.length > 0 &&
        tasks.map((task, index) => (
          <div key={task.title}>
            <p
              className={task.completed ? "COMPLETED" : "PENDING"}
              onClick={() => {
                toggleTaskCompletion(index);
              }}
            >
              {task.title}
            </p>
            <button type="button" onClick={() => removeTask(index)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default Tasks;
