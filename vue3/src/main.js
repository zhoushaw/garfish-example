import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import About from './components/About.vue'
import Index from './components/Index.vue'

const routes = [
  { path: '/about', component: About },
  { path: '/index', component: Index },
];

window.subGlobalVal = 'subGlobalVal';
if (window.Garfish) {
  window.Garfish.setGlobalValue('globalVal', 'globalVal');
}

setInterval(()=>{
  console.log('vue 3', window.subGlobalVal);
},5000);

window.addEventListener('click',()=>{
  console.log('listen vue 3 click')
});

if (!window.__GARFISH__) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}

export function provider({ dom, basename }) {
  let app = null
  return {
    render() {
      app = createApp(App)
      const router = createRouter({
        history: createWebHistory(basename),
        routes,
      });
      app.use(router)
      app.mount(dom? dom.querySelector('#app'): document.querySelector('#app'))
    },
    destroy() {
      if (app) {
        app.unmount(dom? dom.querySelector('#app'): document.querySelector('#app'))
      }
    },
  };
}