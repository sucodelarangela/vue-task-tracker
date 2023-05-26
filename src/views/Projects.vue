<template>
  <section class="projects">
    <h1 class="title">Projetos</h1>
    <!-- Listening to the submit event preventing the default behavior (event handling) -->
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="projectName" id="projectName">
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    <table class="table is-full-width">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
// import IProject from '../interfaces/IProject';
import { useStore } from '@/store';

export default defineComponent({
  name: 'ProjectsView',
  data() {
    return {
      projectName: '',
      // After configuring the Vuex Store, we don't need to use this local state
      // projects: [] as IProject[]
    };
  },
  methods: {
    save() {
      // const project: IProject = {
      //   name: this.projectName,
      //   id: new Date().toISOString()
      // };
      // this.projects.push(project);
      // After configuring the Vuex Store, we can save the project directly in it, by using the method `commit` to execute a mutation (it receives the name of the mutation and the project name)
      this.store.commit('ADD_PROJECT', this.projectName);
      this.projectName = '';
    }
  },
  // 
  setup() {
    const store = useStore();
    return {
      store,
      projects: computed(() => store.state.projects)
    };
  }
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
