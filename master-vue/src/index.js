import Vue from 'vue'
import VueRouter from 'vue-router'
import Garfish from 'garfish'
import App from './App'
import { store } from "./store.js"

Vue.use(VueRouter)

Garfish.setExternal({
  'vue': Vue,
  'vue-router': VueRouter,
})

let apps = [
  {
    name: 'vue3-html',
    activeWhen: '/vue3-html',
    entry: `http://0.0.0.0:8093`,
  },
  {
    name: 'vue2',
    activeWhen: '/vue2',
    entry: `http://0.0.0.0:8092/index.js`,
  },
  {
    name: 'react16',
    activeWhen: '/react16',
    entry: `http://0.0.0.0:8094/index.js`,
  },
  {
    name: 'react17-html',
    activeWhen: '/react17-html',
    entry: `http://0.0.0.0:8095`,
  },
  {
    name: 'umi-html',
    activeWhen: '/umi',
    entry: `http://0.0.0.0:8000`,
  },
]

let basePath = 'vue-demo'


// 正式环境通过Garfish提供的方法获取本地资源列表
if (process.env.NODE_ENV === 'production') {
  apps = []
  basePath = '/garfish/vue-demo'
}


const router = new VueRouter({
  mode: "history",
  base: basePath,
})

Garfish.router.beforeEach((to, from, next)=>{
  console.log('beforeEach', to, from)
  next()
})
Garfish.router.afterEach((to, from, next)=>{
  console.log('afterEach', to, from)
  next()
})

Garfish.run({
  appID: 'garfish_react_demo',
  domGetter: '#submodule',
  basename: basePath,
  sandbox: true,
  autoRefreshApp: false,
  protectVariable: ['protectVal'],
  beforeLoad(){
    console.log('before sub app load')
  },
  beforeMount (){
    console.log('before sub app load')
  },
  afterUnmount(){
    console.log('after sub app unmount')
  },
  onNotMatchRouter (appPath) {
    console.log('not match router', appPath)
  },
  apps,
  props: {
    store,
  },
})

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
