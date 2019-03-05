<template>
  <div id="app">
    <Header ></Header>
    <div class="main">
      <Navbar></Navbar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/global/Header";
import Navbar from "./components/global/Navbar";

export default {
  name: "app",
  components: {
    Header,
    Navbar
  }
  
};
</script>

<style src="./App.css"></style>
