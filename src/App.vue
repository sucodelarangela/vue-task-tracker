<template>
  <!-- template using Bulma classes -->
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar/>
    </div>
    <div class="column is-three-quarters">
      <FormComponent/>
      <!-- task list goes here -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// importing components
import SideBar from './components/SideBar.vue';
import FormComponent from './components/Form.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    FormComponent
  }
});
</script>

<style>
</style>
