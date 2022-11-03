import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/ContadorConIVA.vue";
import HelloWorld from "./components/ContadorSinIva.vue";
import ContadorSinIVA from './components/ContadorSinIVA.vue'
import ContadorConIVA from './components/ContadorConIVA.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/contador-sin-iva", component: ContadorSinIVA },
    { path: "/contador-con-iva", component: ContadorConIVA },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;