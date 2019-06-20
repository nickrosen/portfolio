<template>
  <div
    class="grid-wrapper"
    :class="theme"
  >
    <div
      class="layout-grid"
      :class="{'open': $store.state.mobileMenu}"
      :style="`min-height:calc(${windowHeight}px)`"
    >
      <app-header class="nav" />
      <nuxt class="content" />
      <app-footer class="footer" />

    </div>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      windowHeight: null,
      footerHeight: null
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  },
  methods: {
    getWindowHeight(event) {
      this.windowHeight = window.innerHeight;
      this.footerHeight = document.getElementsByClassName(
        "nav"
      )[0].offsetHeight;

      const windowWidth = window.innerWidth;
      // if (windowWidth < 654) {
      //   this.dynamicMargin = "20px";
      // }
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.getWindowHeight);
    this.getWindowHeight();
    let mql = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (localStorage.getItem("theme")) {
      this.$store.commit("SET_THEME", localStorage.getItem("theme"));
    }
    if (mql == true && !localStorage.getItem("theme")) {
      this.$store.commit("SET_THEME", "dark");
    }
    // console.log(mql == false);
  }
};
</script>

<style>
.grid-wrapper {
  overflow: hidden;
}
.layout-grid {
  height: 100%;
  display: grid;
  grid-gap: 20px;
  padding: 20px;
  grid-template-rows: auto 1fr auto;
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
}
.grid-wrapper.light {
  background-color: var(--light-background);
  color: var(--light-text);
}
.grid-wrapper.dark {
  background-color: var(--dark-background);
  color: var(--dark-text);
}
.nav {
  grid-row: 1;
  grid-column: 1;
  z-index: 2;
}
.open > .nav {
  grid-row: 1 / span 2;
  z-index: 2;
  position: relative;
}
.content {
  grid-row: 1 / -1;
  grid-column: 1;
  padding: 120px 0 80px;
  z-index: 1;
}
.footer {
  grid-row: 3;
  grid-column: 1;
  z-index: 2;
}
@media only screen and (max-width: 653px) {
  .layout-grid {
    grid-gap: 10px;
    padding: 10px;
  }
  .footer {
    margin-bottom: 20px;
  }
}
</style>
