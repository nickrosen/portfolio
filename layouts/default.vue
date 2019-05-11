<template>
  <div class="flex-layout">
    <div class="main-content">
      <div class="content-wrapper">
        <app-nav-bar class="app-nav" />
        <!-- <div>col2</div> -->
        <nuxt class="app-content" />
        <img
          class="selfie"
          src="~/assets/img/me_crop.png"
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
  bottom: 0;
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
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 240px 1fr;
  position: relative;
}
</style>
