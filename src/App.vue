<script setup lang="ts">
import AppNav from './components/AppNav.vue'
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <AppNav v-if="$route.name !== 'NotFound'" />
  <router-view></router-view>
  <AppFooter v-if="$route.name !== 'NotFound'" />
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
