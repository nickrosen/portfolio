<template>
  <!-- <div style="background: #ccc"> -->
  <!-- <div :style="`min-height:${windowHeight}px`"> -->
  <div
    class="layout-grid"
    :style="`min-height:${windowHeight}px`"
  >
    <app-nav class="nav" />
    <nuxt class="content" />
  </div>
  <!-- <div class="gbg"></div> -->
  <!-- </div> -->
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
.layout-grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  height: 100%;
}
@media only screen and (max-width: 653px) {
  .nav {
    grid-column: 1 / -1;
    grid-row: 3;
    align-self: end;
    margin: 0 10px;
  }
  .content {
    grid-column: 1 / -1;
    grid-row: 1 / span 2;
    margin: 0 10px;
  }
}
</style>
