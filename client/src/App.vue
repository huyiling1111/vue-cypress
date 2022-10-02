<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import { AppHeader } from "./components";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
body {
  min-width: 768px;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(44, 62, 80);
}
</style>
