import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { key, store } from './store';

// importing fortawesome icons
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app');
