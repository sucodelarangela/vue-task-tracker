<template>
  <section>
    <strong class="display">
      <!-- using states in Vue -->
      {{ timeSpent }}
    </strong>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ChronoMeter',
  // receiving props from parent element:
  props: {
    timeInSeconds: {
      type: Number,
      default: 0
    }
  },
  // defining a computed property: this computed watches a state and reacts to its changes
  computed: {
    timeSpent(): string {
      // return the seconds spent in hh:mm:ss format
      return new Date(this.timeInSeconds * 1000).toISOString().substr(11, 8);
    }
  }
});
</script>

<style scoped>
.display {
  color: var(--primary-text);
}
</style>
