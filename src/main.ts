import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BaseButton from './components/ui/BaseButton.vue';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-button', BaseButton);
app.component('scale-loader', ScaleLoader);

app.mount('#app');
