<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <!-- importing the ChronoMeter component here and passing props -->
    <Chronometer :timeInSeconds="timeInSeconds" />
    <Button
      @clicked="startCount"
      icon="fas fa-play"
      text="play"
      :disabled="chronometerOn"
    />
    <Button
      @clicked="endCount"
      icon="fas fa-stop"
      text="stop"
      :disabled="!chronometerOn"
    />
  </div>
</template>

<script lang="ts">
// exporting the component
import {defineComponent} from 'vue';
import Chronometer from './Chronometer.vue';
import Button from './Button.vue';

export default defineComponent({
  name: 'TimerComponent',
  // indicating that this component will emit something
  emits: ['onTimerOff'],
  components: {
    Chronometer,
    Button
  },
  // passing states
  data() {
    return {
      timeInSeconds: 0,
      chronometer: 0,
      chronometerOn: false
    };
  },
  // passing methods/functions to the component
  methods: {
    startCount() {
      this.chronometerOn = true;
      // setInterval returns a number. We'll save this number in a state and it will be an ID for the event
      this.chronometer = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000);
    },
    endCount() {
      this.chronometerOn = false;
      // when clearing the interval, we use the ID for this specific setInterval
      clearInterval(this.chronometer);
      // emitting the event to the parent element. Emit receives two parameters: the name of the event and the payload (the data that will be sent)
      this.$emit('onTimerOff', this.timeInSeconds);
      // when the timer is off, we reset the timer
      this.timeInSeconds = 0;
    }
  }
});
</script>
