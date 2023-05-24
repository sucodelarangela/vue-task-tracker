<template>
  <header>
    <h1 class="has-text-centered">
      <img src="../assets/logo.png" alt="logo alura-tracker" />
    </h1>
    <div class="has-text-centered">
      <button class="button" @click="changeTheme">{{ buttonText }}</button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <RouterLink to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
// exporting the component
import { defineComponent } from 'vue';

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
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #FAF0CA;
}

.link.router-link-active {
  color: #FAF0CA;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
