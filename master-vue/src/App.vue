<template>
  <div>
    <div class="header">
      <span>Garfish demo</span>
      <!-- <a onClick="store.increment()">increment</a> -->
      <span class="master-store">store: {{ JSON.stringify(store) }} total: {{ store.total }}</span>
    </div>
    <div class="menu">
      <ul class="demo-menu">
        <li class="demo-menu-item">
          <a onClick="window.Garfish.router.push({path: '/vue3-html/'})">Vue 3</a>
        </li>
        <li class="demo-menu-item">
          <a onClick="window.Garfish.router.push({path: '/vue3-html/index'})">Vue 3 Index</a>
        </li>
        <li class="demo-menu-item">
          <a onClick="window.Garfish.router.push({path: '/vue2/#/'})">Vue 2</a>
        </li>
        <li class="demo-menu-item">
          <a onClick="window.Garfish.router.push({path: '/vue2/#/about'})">Vue 2 About</a>
        </li>
        <li class="demo-menu-item">
          <a onClick="window.Garfish.router.push({path: '/react16'})">React 16</a>
        </li>
        <li class="demo-menu-item">
          <a onClick="window.Garfish.router.push({path: '/react16/about'})">React 16 About</a>
        </li>
        <li class="demo-menu-item">
          <a onClick="window.Garfish.router.push({path: '/react17-html'})">React 17</a>
        </li>
        <li class="demo-menu-item">
          <a onClick="window.Garfish.router.push({path: '/react17-html/about'})">react 17 About</a>
        </li>
      </ul>
    </div>
    <div id="submodule" />
  </div>
</template>
<script>
import { observer } from "mobx-vue"
import { store } from "./store.js"
export default {
  name: 'Todo',
  data() {
    return { store }
  },
}
</script>

