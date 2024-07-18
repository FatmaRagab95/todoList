<template>
  <v-card
    :color="`${color}`"
    variant="outlined"
    max-width="420"
    class="mx-auto"
  >
    <v-card-title :class="`bg-${color} text-center`">
      {{ props.title }}
    </v-card-title>
    <v-sheet
      :color="`${color}-lighten-4`"
      height="calc(100vh - 120px)"
      class="overflow-auto pa-3"
      :id="randomId"
    >
      <v-card
        v-for="task in list"
        :key="task.id"
        density="compact"
        class="mb-3"
      >
        <v-row no-gutters class="align-center">
          <v-col cols="1" class="text-center">
            <v-icon>mdi-drag</v-icon>
          </v-col>
          <v-col cols="10">
            <v-card-title class="text-body-1 pt-2 d-flex align-center">
              <h3 class="text-truncate" :title="task.title">
                {{ task.title }}
              </h3>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn icon variant="plain" size="x-small" v-bind="props">
                    <v-icon x-small>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list density="compact">
                  <v-list-item
                    title="Edit"
                    class="text-success"
                    @click="openEdit(task)"
                  />
                  <v-list-item
                    title="Delete"
                    class="text-error"
                    @click="openDelete(task.id)"
                  />
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="text-caption pb-3">{{
              task.description
            }}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <template v-if="task.status !== 'todo'">
                <v-btn
                  color="warning"
                  variant="outlined"
                  size="small"
                  @click="editStatus(task, 'todo')"
                  >Todo</v-btn
                >
                <v-spacer></v-spacer>
              </template>
              <template v-if="task.status !== 'inprogress'">
                <v-btn
                  color="primary"
                  variant="outlined"
                  size="small"
                  @click="editStatus(task, 'inprogress')"
                >
                  Inprogress
                </v-btn>
              </template>
              <template v-if="task.status !== 'done'">
                <v-spacer></v-spacer>
                <v-btn
                  color="success"
                  variant="outlined"
                  size="small"
                  @click="editStatus(task, 'done')"
                  >Done</v-btn
                >
              </template>
            </v-card-actions>
          </v-col>
          <v-col cols="1"> </v-col>
        </v-row>
      </v-card>
    </v-sheet>
  </v-card>

  <v-dialog max-width="500" v-model="editDialog">
    <edit-task @close="editDialog = false" :task="editedTask" />
  </v-dialog>
  <v-dialog max-width="500" v-model="deleteDialog">
    <v-card title="Dialog">
      <v-card-text> Are you sure you want to delete this task? </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="Close"
          color="primary"
          @click="deleteDialog = false"
        ></v-btn>
        <v-btn text="Delete" color="error" @click="confirmDelete()"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { iTask } from "@/code/models";
import { store } from "@/plugins/store";
import { defineProps, onMounted, ref } from "vue";
import Sortable from "sortablejs";
import { deleteTaskFromStore } from "@/code/globals";
const props = defineProps({
  title: {
    type: String,
    default: "Kanban",
  },
  color: {
    type: String,
    default: "primary",
  },
  list: {
    type: Array as () => iTask[],
    default: [] as iTask[],
  },
});

// edit task
const editDialog = ref(false);
const editedTask = ref({} as iTask);
const openEdit = (task: iTask) => {
  editedTask.value = task;
  editDialog.value = true;
};

// edit status
const editStatus = (task: iTask, status: string) => {
  store.commit("editTask", { ...task, status: status });
};

// delete task
const deleteDialog = ref(false);
const deletedTaskId = ref(0);
const openDelete = (id: number) => {
  deletedTaskId.value = id;
  deleteDialog.value = true;
};
const confirmDelete = () => {
  deleteTaskFromStore(deletedTaskId.value);
  deleteDialog.value = false;
};

// sorting tasks
const randomId = Math.floor(Math.random() * 10000).toString();
onMounted(() => {
  const el = document.getElementById(randomId);
  if (!el) return;
  Sortable.create(el);
});
</script>
