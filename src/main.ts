import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { auth, getUserFirebase } from './services/userService';

import BaseButton from './components/ui/BaseButton.vue';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

// const app = createApp(App);

// app.use(store);
// app.use(router);

// app.component('base-button', BaseButton);
// app.component('scale-loader', ScaleLoader);

// app.mount('#app');

// @ts-ignore
let app;
auth.onAuthStateChanged((user) => {
	// @ts-ignore
    if (!app) {
        app = createApp(App);

        app.use(store);
        app.use(router);

        app.component('base-button', BaseButton);
        app.component('scale-loader', ScaleLoader);

        app.mount('#app');
    }

    if (user) {
        getUserFirebase(user.uid).then((u) => {
            store.dispatch('setCurrentUser', u);
        });
    }
});
