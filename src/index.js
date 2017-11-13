import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';

Vue.use(VueRouter);

const routers= [
    {path:'/goods',component:goods},
    {path:'/ratings',component:ratings}
];

const router = new VueRouter({
    routers
});

const app = new Vue({
    router,
    template: `<App />`,
    components: { App }
}).$mount('#app');

