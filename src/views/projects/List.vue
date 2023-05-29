<template>
  <section>
    <RouterLink to="/projects/new" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </RouterLink>
    <!-- Listening to the submit event preventing the default behavior (event handling) -->
    <table class="table is-full-width">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>
            <RouterLink :to="`/projects/${project.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </RouterLink>
            <button class="button ml-2 is-danger" @click="deleteProj(project.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import { DELETE_PROJECT } from '@/store/mutation-types';

export default defineComponent({
  name: 'ListView',
  methods: {
    deleteProj(id: string) {
      this.store.commit(DELETE_PROJECT, id);
    }
  },
  setup() {
    const store = useStore();
    return {
      store,
      projects: computed(() => store.state.projects)
    };
  }
});
</script>
