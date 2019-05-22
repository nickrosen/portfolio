<template>
  <div>
    <!-- <div class="gbg"></div> -->
    <div
      class="layout"
      :style="{'height': `${windowHeight}px`}"
    >
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
.nav {
  z-index: 1;
  grid-column: 1 / -1;
  grid-row: 1;
  justify-self: center;
  padding-top: 20px;
}
/* .content {
  z-index: 1;
  grid-column: 1 / -1;
  grid-row: 1;
  height: 100%;
  overflow-y: hidden;
} */
.layout {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}
.gbg {
  z-index: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: hsl(212, 92%, 43%);
  clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%);
  height: 120px;
  width: 100%;
}

/* @media only screen and (max-width: 1042px) {
  .nav {
    grid-column: span 2;
  }
  .gbg {
    height: 66vh;
  }
} */

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
@media only screen and (max-width: 372px) {
  .layout {
    padding: 0 10px;
  }
}
</style>
