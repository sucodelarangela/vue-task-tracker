<template>
  <!-- template using Bulma classes -->
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': activeDarkMode }">
    <div class="column is-one-quarter">
      <SideBar @onThemeChange="changeTheme" />
    </div>
    <div class="column is-three-quarters content">
      <Notifications />
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// importing components
import SideBar from './components/SideBar.vue';
import Notifications from './components/Notifications.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Notifications
  },
  // defining states
  data() {
    return {
      // returns an Array of Tasks
      activeDarkMode: false
    };
  },
  methods: {
    changeTheme(activeDarkMode: boolean) {
      this.activeDarkMode = activeDarkMode;
    }
  }
});
</script>

<style scoped>
main {
  --primary-bg: #fff;
  --primary-text: #000;
}

main.dark-mode {
  --primary-bg: #2b2d42;
  --primary-text: #ddd;
}

.content {
  background-color: var(--primary-bg);
}
</style>
