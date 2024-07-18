import { store } from "@/plugins/store";
import { iTask } from "./models";

export const addTaskToStore = (task: iTask) => {
  store.commit("addTask", {
    ...task,
    id: Math.random(),
    status: task.status.toLowerCase(),
  });
};

export const deleteTaskFromStore = (taskId: number) => {
  store.commit("deleteTask", taskId);
};

export const editTaskInStore = (updatedTask: iTask) => {
  store.commit("editTask", updatedTask);
};
