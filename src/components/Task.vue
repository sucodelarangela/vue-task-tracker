<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ task.description }}</div>
      <div class="column">
        <Chronometer :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Chronometer from './Chronometer.vue';
import ITask from '@/interfaces/ITask';

export default defineComponent({
  name: 'TaskComponent',
  components: {
    Chronometer
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  }
});
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>
