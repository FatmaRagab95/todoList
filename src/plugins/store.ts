import { iTask } from "@/code/models";
import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      tasks: [] as iTask[],
    };
  },
  getters: {
    doneTodos(state: { tasks: iTask[] }) {
      return state.tasks.filter((todo) => todo.status === "done");
    },
    inProgressTodos(state: { tasks: iTask[] }) {
      return state.tasks.filter((todo) => todo.status === "inprogress");
    },
    todoTodos(state: { tasks: iTask[] }) {
      return state.tasks.filter((todo) => todo.status === "todo");
    },
  },
  mutations: {
    addTask(state: { tasks: iTask[] }, task: iTask) {
      state.tasks.push(task);
    },
    addTasks(state: { tasks: iTask[] }, tasks: iTask[]) {
      state.tasks = [...state.tasks, ...tasks];
    },
    setTasks(state: { tasks: iTask[] }, tasks: iTask[]) {
      state.tasks = tasks;
    },
    editTask(state: { tasks: iTask[] }, task: iTask) {
      state.tasks = state.tasks.map((t) => (t.id === task.id ? task : t));
    },
    deleteTask(state: { tasks: iTask[] }, id: number) {
      state.tasks = state.tasks.filter((t) => t.id !== id);
    },
  },
});
