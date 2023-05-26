import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
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
    projects: [
      {
        id: new Date().toISOString(),
        name: 'TypeScript'
      },
      {
        id: new Date().toISOString(),
        name: 'Vue'
      },
      {
        id: new Date().toISOString(),
        name: 'Vuex'
      },
    ]
  }
});
