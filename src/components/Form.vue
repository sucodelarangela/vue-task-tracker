<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" />
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>
              <!-- using states in Vue -->
              {{ timeSpent }}
            </strong>
          </section>
          <!-- @click is used to pass a 'onClick' method -->
          <button class="button" @click="startCount">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <!-- @click is used to pass a 'onClick' method -->
          <button class="button" @click="endCount">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// exporting the component
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormComponent',
  // passing states
  data() {
    return {
      timeInSeconds: 0,
      chronometer:  0
    };
  },
  // defining a computed property: this computed watches a state and reacts to its changes
  computed: {
    timeSpent(): string {
      // return the seconds spent in hh:mm:ss format
      return new Date(this.timeInSeconds * 1000).toISOString().substr(11,8)
    }
  },
  // passing methods/functions to the component
  methods: {
    startCount() {
      // setInterval returns a number. We'll save this number in a state and it will be an ID for the event
      this.chronometer = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000);
    },
    endCount() {
      // when clearing the interval, we use the ID for this specific setInterval
      clearInterval(this.chronometer)
    }
  }
});
</script>

<style></style>
