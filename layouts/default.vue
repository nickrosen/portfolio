<template>
  <div>
    <div
      class="grid"
      :style="`min-height:${windowHeight}px`"
    >
      <app-nav class="nav" />
      <nuxt class="content" />
    </div>
    <div class="gbg"></div>
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppNav
  },
  data() {
    return {
      windowHeight: null,
      footerHeight: null
      // mainOffset: null
    };
  },
  methods: {
    getWindowHeight(event) {
      this.windowHeight = window.innerHeight;
      this.footerHeight = document.getElementsByClassName(
        "nav"
      )[0].offsetHeight;
      console.log(this.footerHeight);
      // this.mainOffset = document.getElementsByClassName(
      //   "main-content"
      // )[0].offsetTop;
      // console.log();
      // this.windowHeight = document.documentElement.clientHeight;
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.getWindowHeight);
    this.getWindowHeight();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Fira+Sans:400,500,700,700i,900&display=swap");
* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
  z-index: 1;
  /* outline: 1px solid red; */
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

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
}
.nav {
  padding-top: 20px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  z-index: 2;
}
.content {
  grid-column: 1 / -1;
  grid-row: 2;
  justify-self: center;
}

@media only screen and (max-width: 518px) {
  .grid {
    grid-template-rows: 1fr auto;
  }
  .nav {
    grid-row: 2;
  }
  .content {
    grid-row: 1;
  }
}
.gbg {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary);
  clip-path: polygon(100% 0, 100% 30vmin, 30vmin 100%, 0 100%, 0 0);
  height: 100vh;
  width: 100%;
}
:root {
  --primary: hsl(230, 49%, 41%);
}
</style>
