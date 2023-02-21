<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="description"
        />
        <!-- v-model links the value of the input with a state -->
      </div>
      <div class="column">
        <!-- when the timer is off, we want to end the task. 'onTimerOff' comes from the 'emits' of the Timer component -->
        <TimerComponent @onTimerOff="endTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// exporting the component
import {defineComponent} from 'vue';
import TimerComponent from './Timer.vue';

export default defineComponent({
  name: 'FormComponent',
  emits: ['onSavingTask'],
  components: {
    TimerComponent
  },
  data() {
    return {
      description: ''
    };
  },
  methods: {
    endTask(timeInSeconds: number): void {
      this.$emit('onSavingTask', {
        durationInSeconds: timeInSeconds,
        description: this.description
      });
      this.description = '';
    }
  }
});
</script>

<style></style>
