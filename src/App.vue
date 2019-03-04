<template>
  <div id="app">
    <Navbar></Navbar>
    <br>
    <router-view></router-view>
  </div>
    
    
</template>

<script>
import Navbar from './components/global/Navbar'
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style src="./App.css"></style>
