<script setup lang="ts">
import AppNav from './components/AppNav.vue'
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <AppNav />
  <main>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
