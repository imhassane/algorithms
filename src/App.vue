<template>
  <div id="app">
    <navbar />
    <div>
      <router-view></router-view>
    </div>
    <hr />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/navbar';
import Footer from "./components/footer";

export default {
  name: 'App',
  components: {
    Navbar, Footer
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
