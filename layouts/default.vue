<template>
  <!-- <div style="background: #ccc"> -->
  <!-- <div :style="`min-height:${windowHeight}px`"> -->
  <div
    class="layout-grid"
    :style="`min-height:calc(${windowHeight}px - ${dynamicMargin})`"
  >
    <!-- <app-logo-placeholder class="placeholder" /> -->
    <app-nav class="nav" />
    <nuxt class="content" />
    <app-nav-external class="external-nav" />
    <app-light-switch class="light-switch" />
  </div>
  <!-- <div class="gbg"></div> -->
  <!-- </div> -->
</template>

<script>
import AppNav from "~/components/AppNav.vue";
import AppNavExternal from "~/components/AppNavExternal.vue";
import AppLightSwitch from "~/components/AppLightSwitch.vue";
import AppLogoPlaceholder from "~/components/AppLogoPlaceholder.vue";

export default {
  components: {
    AppNav,
    AppNavExternal,
    AppLightSwitch,
    AppLogoPlaceholder
  },
  data() {
    return {
      windowHeight: null,
      footerHeight: null,
      dynamicMargin: "40px"
      // mainOffset: null
    };
  },
  methods: {
    getWindowHeight(event) {
      this.windowHeight = window.innerHeight;
      this.footerHeight = document.getElementsByClassName(
        "nav"
      )[0].offsetHeight;

      const windowWidth = window.innerWidth;
      if (windowWidth < 654) {
        this.dynamicMargin = "20px";
      }
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
.external-nav {
  grid-column: 3;
  grid-row: 2 / -1;
  align-self: end;
  justify-self: end;
}
.placeholder {
  grid-column: 3;
  grid-row: 1;
  align-self: start;
}
.light-switch {
  grid-column: 1;
  grid-row: 1 / -1;
  align-self: end;
  justify-self: start;
}
.layout-grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  height: 100%;
  margin: 20px;
}
.nav {
  grid-column: 1;
  grid-row: 1 / 3;
  align-self: start;
}
.content {
  grid-column: 2;
  grid-row: 1 / -1;
  border: 1px solid var(--primary-border);
  padding: 20px;
}
@media only screen and (max-width: 653px) {
  .layout-grid {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
    margin: 10px;
    grid-gap: 10px;
  }
  .nav {
    grid-column: 1 / -1;
    grid-row: 3;
    align-self: end;
  }
  .content {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  .external-nav {
    grid-column: 1 / -1;
    grid-row: 1;
    align-self: center;
    justify-self: start;
  }
  .light-switch {
    grid-column: 3;
    grid-row: 1;
    align-self: center;
    justify-self: end;
  }
}
</style>
