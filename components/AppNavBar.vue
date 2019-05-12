<template>
  <header>
    <ui-link-round
      class="nav-link"
      v-for="(link, index) in navLinks"
      :key="index"
      :title="link.title"
      :link="link.link"
    ></ui-link-round>
  </header>
</template>

<script>
import UiLinkRound from "~/components/UiLinkRound.vue";
export default {
  components: { UiLinkRound },
  data() {
    return {
      navLinks: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "About me",
          link: "/about"
        },
        {
          title: "Recent Work",
          link: "/work"
        },
        {
          title: "Blog",
          link: "/blog"
        },
        {
          title: "Contact",
          link: "/contact"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav-link {
  margin-top: 40px;
  padding: 0 20px;
}
header {
  z-index: 2;
}
</style>