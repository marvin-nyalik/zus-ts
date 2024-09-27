import { create } from "zustand";

interface Task {
  title: string;
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTaskCompletion: (index: number) => void;
  removeTask: (index: number) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => ({
      tasks: [...state.tasks, { title: title, completed: false }],
    })),
  toggleTaskCompletion: (index) =>
    set((state) => ({
      tasks: state.tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      ),
    })),

  removeTask: (index) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),
}));


export default useTaskStore;
