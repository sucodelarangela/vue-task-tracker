<template>
  <div class="box has-text-weight-bold">
    <!-- slot works similarly as children in React -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'BoxComponent'
});
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>
