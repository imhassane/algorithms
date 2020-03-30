import Vue from "vue";
import Router from "vue-router";


import Home from "./pages/home.vue";
import Djikstra from "./pages/djikstra";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: "http://localhost:8080/",
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'djikstra',
            path: '/algos/djikstra',
            component: Djikstra
        }
    ]
});