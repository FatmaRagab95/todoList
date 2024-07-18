// editTask.spec.ts
import { expect, test } from "vitest";
import { store } from "@/plugins/store";
import { editTaskInStore } from "@/code/globals";
import { iTask } from "@/code/models";

test("edit task in store", () => {
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

  // Edit the task
  const updatedData: iTask = {
    ...data,
    title: "updated test",
    description: "updated description",
  };
  editTaskInStore(updatedData);

  // Ensure the task was edited
  const editedTask = store.state.tasks.find((t) => t.id === data.id);
  expect(editedTask).toBeTruthy();
  expect(editedTask?.title).toBe("updated test");
  expect(editedTask?.description).toBe("updated description");
});
