<template>
  <div class="flex-layout">
    <div
      class="main-content"
      :style="{'height': `calc(${windowHeight}px - ${footerHeight}px - ${mainOffset}px)`}"
    >
      <app-nav-bar class="app-nav" />
      <nuxt class="nuxt-content" />
    </div>
    <app-footer />
  </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue";
import AppNavBar from "~/components/AppNavBar.vue";
export default {
  data() {
    return {
      windowHeight: null,
      footerHeight: null,
      mainOffset: null
    };
  },
  components: { AppNavBar, AppFooter },
  methods: {
    getWindowHeight(event) {
      this.windowHeight = window.innerHeight;
      this.footerHeight = document.getElementsByClassName(
        "footer-section"
      )[0].offsetHeight;
      this.mainOffset = document.getElementsByClassName(
        "main-content"
      )[0].offsetTop;
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
.selfie {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 90vmin;
  height: auto;
}
.flex-layout {
  background: hsl(216, 98%, 25%);
  padding: 20px 20px 0;
}
.main-content {
  background: hsl(216, 33%, 97%);
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 260px auto;
  position: relative;
  border-radius: 12px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 767px) {
  .app-nav {
    display: none;
  }
  .nuxt-content {
    grid-column: span 2;
  }
  .flex-layout {
    padding: 5px 5px 0;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
