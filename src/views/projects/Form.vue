<template>
  <section>
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
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'FormView',
  // receiving the :id from the url as props
  props: {
    id: {
      type: String
    }
  },
  // when the component is mounted, use the :id to find the project in the global state
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(proj => proj.id === this.id);
      this.projectName = project?.name || '';
    }
  },
  data() {
    return {
      projectName: '',
    };
  },
  methods: {
    save() {
      if (this.id) {
        this.store.commit('EDIT_PROJECT', {
          id: this.id,
          name: this.projectName
        });
      } else {
        this.store.commit('ADD_PROJECT', this.projectName);
      }
      this.projectName = '';
      this.$router.push('/projects');
    }
  },
  // 
  setup() {
    const store = useStore();
    return {
      store,
    };
  }
});
</script>
