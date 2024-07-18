// removeTask.spec.ts
import { expect, test } from "vitest";
import { store } from "@/plugins/store";
import { deleteTaskFromStore } from "@/code/globals";
import { iTask } from "@/code/models";

test("remove task from store", () => {
  const data: iTask = {
    title: "test",
    description: "test",
    status: "todo",
    id: 1,
  };

  // Add the task first
  store.commit("addTask", data);

  // Ensure the task was added
  expect(store.state.tasks.filter((t) => t.id === data.id)).toHaveLength(1);

  // Remove the task
  deleteTaskFromStore(data.id);

  // Ensure the task was removed
  expect(store.state.tasks.filter((t) => t.id === data.id)).toHaveLength(0);
});
