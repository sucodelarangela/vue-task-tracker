<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="description" />
        <!-- v-model links the value of the input with a state -->
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Selecione o projeto</option>
            <option :value="project.id" v-for="project in projects" :key="project.id">
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <!-- when the timer is off, we want to end the task. 'onTimerOff' comes from the 'emits' of the Timer component -->
        <TimerComponent @onTimerOff="endTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// exporting the component
import { computed, defineComponent } from 'vue';
import TimerComponent from './Timer.vue';
import { useStore } from '@/store';
// import { NOTIFY } from '@/store/mutation-types';
import { NotificationType } from '@/interfaces/INotifications';
// import { notificationMixin } from '@/mixins/notify';
import useNotificator from '@/hooks/notificator';
// import { useStore } from 'vuex';
// import { key } from '@/store';

export default defineComponent({
  name: 'FormComponent',
  emits: ['onSavingTask'],
  components: {
    TimerComponent
  },
  data() {
    return {
      description: '',
      projectId: ''
    };
  },
  // mixins --> replaced by custom hook
  // mixins: [notificationMixin],
  methods: {
    endTask(timeInSeconds: number): void {
      const project = this.projects.find(proj => proj.id === this.projectId);
      if (!project) {
        // this.store.commit(NOTIFY, {
        //   title: 'Ops!',
        //   text: 'Selecione um projeto antes de finalizar a tarefa!',
        //   type: NotificationType.FAILURE
        // });
        // Usando mixins
        this.notify(NotificationType.FAILURE, 'Ops!', 'Selecione um projeto antes de finalizar a tarefa!');
        return;
      }
      this.$emit('onSavingTask', {
        durationInSeconds: timeInSeconds,
        description: this.description,
        // finding the current project according to the selected one from the store (setup below)
        project: this.projects.find(proj => proj.id === this.projectId)
      });
      this.description = '';
    }
  },
  // using the global states configured in the Vuex Store the most modern way: with composition API setup() and `computed`
  setup() {
    // const store = useStore(key);
    // Replacing the useStore above for our custom useStore:
    const store = useStore();
    // using custom hook
    const { notify } = useNotificator();
    return {
      store,
      notify,
      projects: computed(() => store.state.projects)
    };
  }
});
</script>

<style scoped>
.form {
  color: var(--primary-text);
  background-color: var(--primary-bg);
}
</style>
