<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo alura-tracker" />
    </h1>
    <button class="button" @click="changeTheme">{{ buttonText }}</button>
  </header>
</template>

<script lang="ts">
// exporting the component
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SideBar',
  emits: ['onThemeChange'],
  data() {
    return {
      activeDarkMode: false
    };
  },
  computed: {
    buttonText() {
      if (this.activeDarkMode) {
        return 'Desativar modo escuro';
      }
      return 'Ativar modo escuro';
    }
  },
  methods: {
    changeTheme() {
      this.activeDarkMode = !this.activeDarkMode;
      this.$emit('onThemeChange', this.activeDarkMode);
    }
  }
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
