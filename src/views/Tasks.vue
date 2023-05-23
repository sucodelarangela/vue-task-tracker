<template>
  <FormComponent @onSavingTask="saveTask" />
  <!-- task list goes here -->
  <div class="list">
    <!-- dynamic rendering in Vue (using v-for) -->
    <Task v-for="(task, index) in tasks" :key="index" :task="task" />
    <!-- if the task list is empty, renders this message instead -->
    <Box v-if="isListEmpty"> Você não está muito produtivo hoje :( </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// importing components
import FormComponent from '../components/Form.vue';
import Task from '../components/Task.vue';
import Box from '../components/Box.vue';
import ITask from '../interfaces/ITask';

export default defineComponent({
  name: 'App',
  components: {
    FormComponent,
    Task,
    Box
  },
  // defining states
  data() {
    return {
      // returns an Array of Tasks
      tasks: [] as ITask[],
    };
  },
  // checks if the list of tasks is empty
  computed: {
    isListEmpty(): boolean {
      return this.tasks.length === 0;
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
  }
});
</script>

<style scoped>
.list {
  padding: 1.25rem;
}
</style>
