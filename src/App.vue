<template>
  <div id="app">
    <navbar />
    <div>
      <home />
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Home from "./components/home";

export default {
  name: 'App',
  components: {
    Navbar, Home
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
  margin: 0px;
  padding: 0 50px;
}
</style>
