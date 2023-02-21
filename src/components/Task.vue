<template>
  <Box>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || 'Tarefa sem descrição' }}
      </div>
      <div class="column">
        <Chronometer :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Chronometer from './Chronometer.vue';
import Box from './Box.vue';
import ITask from '@/interfaces/ITask';

export default defineComponent({
  name: 'TaskComponent',
  components: {
    Chronometer,
    Box
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  }
});
</script>

<style></style>
