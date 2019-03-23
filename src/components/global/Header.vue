<template>
  <div class="pos-f-t">
    <nav class="navbar navbar-dark bg-dark"> 
      <button
        @click.stop.prevent="abreMenu()"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>    
      <router-link class="navbar-brand" to="/dashboard"><img class="logo" src="../../assets/logo.jpg"></router-link>
      <div class="navbar">
        <ul class="navbar-nav mr-3">
          <li  class="nav-item">
            <a class="nav-link" href="#" >
              <i class="fas fa-sign-out-alt">
                <span class="ml-1">Sair</span>
              </i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  name: "Header",
  methods: {
    abreMenu(){ 
      EventBus.$emit('abreMenu');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Header.css"></style>
