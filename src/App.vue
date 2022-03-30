<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @contextmenu.prevent="$rdcm($event,$root)">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <rd-cm :list="[{
      text: 'abc'
    }]" @rd-cm-click="onContextMenuClick"></rd-cm>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import RdCm from '../dist/rd-cm'
Vue.use(RdCm)

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    onContextMenuClick(item) {
      console.log(item)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
