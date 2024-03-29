import { InjectionKey } from 'vue';
import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import IProject from '@/interfaces/IProject';
import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT, NOTIFY } from './mutation-types';
import { INotification } from '@/interfaces/INotifications';


interface State {
  projects: IProject[];
  notifications: INotification[];
}

// Creating an access key for the store:
// In case Symbol shows as an error, include in `tsconfig.json`, the lib ["ES2015"]
export const key: InjectionKey<Store<State>> = Symbol();

// Global states, to be imported on `main.ts`
export const store = createStore<State>({
  state: {
    // Projects list
    projects: [],
    notifications: []
  },
  // Mutations are responsible for changing the states
  mutations: {
    [ADD_PROJECT](state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName
      } as IProject;
      state.projects.push(project);
    },
    [EDIT_PROJECT](state, project: IProject) {
      const index = state.projects.findIndex(proj => proj.id === project.id);
      state.projects[index] = project;
    },
    [DELETE_PROJECT](state, id: string) {
      state.projects = state.projects.filter(proj => proj.id !== id);
    },
    [NOTIFY](state, newNotification: INotification) {
      newNotification.id = new Date().getTime();
      state.notifications.push(newNotification);
      setTimeout(() => {
        state.notifications = state.notifications.filter(notif => notif.id !== newNotification.id);
      }, 3000);
    }
  }
});

// We can setup the useStore(key) in a function to avoid repetition of ode in every component
// In this case, when using the global states, we only need to import this function
export function useStore(): Store<State> {
  return vuexUseStore(key);
}
