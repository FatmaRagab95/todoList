import { expect, test } from "vitest";
import { store } from "@/plugins/store";
import { addTaskToStore } from "@/code/globals";
import { iTask } from "@/code/models";
test("add task to store", () => {
  const data: iTask = {
    title: "test",
    description: "test",
    status: "todo",
    id: 1,
  };
  addTaskToStore(data);
  expect(store.state.tasks.filter((t) => t.id === data.id)).toBeTruthy();
});
