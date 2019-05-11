<template>
  <div class="flex-layout">
    <div class="main-content">
      <div class="content-wrapper">
        <app-nav-bar class="app-nav" />
        <!-- <div>col2</div> -->
        <nuxt class="app-content" />
        <img
          class="selfie"
          src="~/assets/img/me_crop_half.png"
        >
      </div>
    </div>
    <app-footer />
  </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue";
import AppNavBar from "~/components/AppNavBar.vue";
export default {
  components: { AppNavBar, AppFooter }
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
  background: hsl(210, 83%, 53%);
  padding: 20px 20px 0;
}
.main-content {
  background: hsl(216, 33%, 97%);
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
}
.content-wrapper {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 240px 1fr;
  position: relative;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .app-nav {
    display: none;
  }
  .content-wrapper {
    height: calc(100vh - 116px);
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
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
