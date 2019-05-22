<template>
  <div
    class="grid"
    :style="`min-height:${windowHeight}px`"
  >
    <app-nav class="nav" />
    <nuxt class="content" />
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
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
}
.nav {
  grid-column: 1 / -1;
  grid-row: 1;
  justify-self: center;
  padding-top: 20px;
}
.content {
  grid-column: 1 / -1;
  grid-row: 2;
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
@media only screen and (max-width: 518px) {
  .grid {
    grid-template-rows: 1fr auto;
  }
  .nav {
    width: 100%;
    padding: 20px 10px;
    grid-row: 2;
  }
  .content {
    grid-row: 1;
  }
}
</style>
