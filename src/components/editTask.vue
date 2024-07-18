<template>
  <v-card :title="`Edit | ${task.title}`">
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="title.value.value"
          :error-messages="title.errorMessage.value"
          label="Name"
        ></v-text-field>

        <v-textarea
          v-model="description.value.value"
          :error-messages="description.errorMessage.value"
          rows="3"
          label="Description"
        ></v-textarea>

        <v-select
          v-model="status.value.value"
          :error-messages="status.errorMessage.value"
          :items="items"
          label="Status"
        ></v-select>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" text="Close" @click="$emit('close')"></v-btn>
      <v-btn class="bg-primary" text="Save" @click="editTask()"></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { defineEmits, ref } from "vue";
import { GenericObject, useField, useForm } from "vee-validate";
import { store } from "@/plugins/store";
import { iTask } from "@/code/models";
import { editTaskInStore } from "@/code/globals";
const props = defineProps({
  task: {
    type: Object as () => iTask,
    required: true,
  },
});
const emit = defineEmits(["close"]);
// Fields and validation
const { handleSubmit } = useForm({
  validationSchema: {
    title(value: string) {
      if (value?.length >= 2) return true;

      return "Input needs to be at least 2 characters.";
    },
    description(value: string) {
      if (value?.length >= 2) return true;

      return "Input needs to be at least 2 characters.";
    },
    status(value: string) {
      if (value) return true;

      return "Select an item.";
    },
  },
});
const title = useField("title");
title.setValue(props.task.title);
const description = useField("description");
description.setValue(props.task.description);
const status = useField("status");
status.setValue(props.task.status);

const items = ref(["Todo", "Inprogress", "Done"]);

// edit task
const editTask = handleSubmit((values: GenericObject) => {
  editTaskInStore({
    ...props.task,
    ...values,
    status: values.status.toLowerCase(),
  } as iTask);
  emit("close");
});
</script>
