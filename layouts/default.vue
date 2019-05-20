<template>
  <div>
    <div class="gbg"></div>
    <div class="layout">
      <app-nav class="nav" />
      <nuxt class="content" />
    </div>
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppNav
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans");
.nav {
  z-index: 1;
  grid-column: 2;
  grid-row: 1;
}
.content {
  z-index: 1;
  grid-column: 1 / -1;
  grid-row: 2;
}
.layout {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  height: 100vh;
  padding: 0 20px;
}
.gbg {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(212, 92%, 43%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
  height: 100vh;
  width: 100%;
}

@media only screen and (max-width: 1042px) {
  .nav {
    grid-column: span 2;
  }
  .gbg {
    height: 80vh;
  }
}

* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
  /*   outline: 1px solid red; */
}

html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: "Fira Sans", sans-serif;
  color: hsl(40, 13%, 23%);
  background-color: hsl(40, 23%, 97%);
}
</style>
