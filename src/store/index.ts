import { InjectionKey } from 'vue';
import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import IProject from '@/interfaces/IProject';


interface State {
  projects: IProject[];
}

// Creating an access key for the store:
// In case Symbol shows as an error, include in `tsconfig.json`, the lib ["ES2015"]
export const key: InjectionKey<Store<State>> = Symbol();

// Global states, to be imported on `main.ts`
export const store = createStore<State>({
  state: {
    // Projects list
    projects: []
  },
  // Mutations are responsible for changing the states
  mutations: {
    'ADD_PROJECT'(state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName
      } as IProject;
      state.projects.push(project);
    },
    'EDIT_PROJECT'(state, project: IProject) {
      const index = state.projects.findIndex(proj => proj.id === project.id);
      state.projects[index] = project;
    }
  }
});

// We can setup the useStore(key) in a function to avoid repetition of ode in every component
// In this case, when using the global states, we only need to import this function
export function useStore(): Store<State> {
  return vuexUseStore(key);
}
