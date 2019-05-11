<template>
  <div class="sidebar-layout">
    <div>
      <nuxt />
    </div>
    <app-footer />
  </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue";
export default {
  components: { AppFooter }
};
</script>

<style>
.sidebar-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: hsl(208, 88%, 62%);
  padding: 16px 16px 0;
}
.sidebar-layout > div {
  background-color: hsl(210, 36%, 96%);
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
}
</style>
