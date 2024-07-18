<template>
  <v-container fluid class="py-12 bg-primary-lighten-3">
    <v-row>
      <v-col cols="12" md="4" :class="{ 'py-0': $vuetify.display.mdAndUp }">
        <kanban-widget :color="'warning'" :title="'Todo'" :list="todoList" />
      </v-col>
      <v-col cols="12" md="4" :class="{ 'py-0': $vuetify.display.mdAndUp }">
        <kanban-widget
          :color="'primary'"
          :title="'Inprogress'"
          :list="inprogressList"
        />
      </v-col>
      <v-col cols="12" md="4" :class="{ 'py-0': $vuetify.display.mdAndUp }">
        <kanban-widget :color="'success'" :title="'Done'" :list="doneList" />
      </v-col>
    </v-row>

    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab
          v-bind="activatorProps"
          class="mx-4"
          icon="mdi-plus"
          location="bottom end"
          size="x-large"
          absolute
          offset
          color="primary"
        ></v-fab>
      </template>

      <template v-slot:default="{ isActive }">
        <create-task @close="isActive.value = false" />
      </template>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import { iTask } from "@/code/models";
import { store } from "@/plugins/store";
import { ref, watch } from "vue";
const todoList = ref<iTask[]>([]);
const inprogressList = ref<iTask[]>([]);
const doneList = ref<iTask[]>([]);
watch(
  () => store.state.tasks,
  () => {
    todoList.value = store.getters.todoTodos;
    inprogressList.value = store.getters.inProgressTodos;
    doneList.value = store.getters.doneTodos;
  },
  { deep: true }
);
const getTasks = async () => {
  fetch("https://mocki.io/v1/8393bf35-4c68-4c3d-8c92-e54bbc153a73")
    .then((res) => res.json())
    .then((json) => {
      store.commit("setTasks", json);
    });
};
getTasks();
</script>
