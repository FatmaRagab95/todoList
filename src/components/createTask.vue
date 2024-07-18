<template>
  <v-card title="Create Task">
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="title.value.value"
          :counter="10"
          :error-messages="title.errorMessage.value"
          label="Name"
        ></v-text-field>

        <v-textarea
          v-model="description.value.value"
          :error-messages="description.errorMessage.value"
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
      <v-btn class="bg-primary" text="Save" @click="createTask()"></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { defineEmits, ref } from "vue";
import { GenericObject, useField, useForm } from "vee-validate";
import { store } from "@/plugins/store";
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
const description = useField("description");
const status = useField("status");

const items = ref(["Todo", "Inprogress", "Done"]);

// create task
const createTask = handleSubmit((values: GenericObject) => {
  store.commit("addTask", {
    ...values,
    id: Math.random(),
    status: values.status.toLowerCase(),
  });
  emit("close");
});
</script>
