import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './components/About.vue'
import Index from './components/Index.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/about', component: About },
    { path: '/index', component: Index }
  ]
});

if (!window.__GARFISH__) {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}

let vm;
export function provider({ dom }) {
  return {
    render() {
      vm = new Vue({
        router,
        store,
        render: (h) => h(App),
      }).$mount();
      dom.appendChild(vm.$el);
    },
    destroy() {
      vm.$destroy();
      vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
    },
  };
}