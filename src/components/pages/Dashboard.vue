<template>
  <div>
    <Header></Header>
    <div class="main">
      <Navbar></Navbar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../global/Header";
import Navbar from "../global/Navbar";
export default {
  name: "Dashboard",
  components: {
    Header,
    Navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Dashboard.css">
</style>
