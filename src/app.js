// app.js
import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router'

const TestComponent = {
    template: `<div>TestComponent</div>`
};

Vue.component('TestComponent', TestComponent);

export function createServerApp () {
    const router = createRouter();

    const app = new Vue({
        router,
        render: h => h(App)
    });

    return { app, router }
}

export function createClientApp () {
    const app = new Vue();

    return { app };
}
