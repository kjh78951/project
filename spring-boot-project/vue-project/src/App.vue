<template>
  <div id="app">
    <a href="/home">
    <img alt="Vue logo" src="./assets/bbuggu.jpg" width="400px">
    </a>
    <HelloWorld msg="귀여운 뿌꾸"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
