<template>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="icon-user"
    :style="{width: width, height: height}"
  >
    <path
      class="primary"
      d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
    />
    <path
      class="secondary"
      d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"
    />
  </svg>

</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "auto"
    },
    width: {
      type: String,
      default: "100px"
    },
    primaryColor: {
      type: String,
      default: "#ccc"
    },
    secondaryColor: {
      type: String,
      default: "#757575"
    }
  }
};
</script>

<style scoped>
.nuxt-link-exact-active.nuxt-link-active > svg > .primary {
  fill: hsl(221, 68%, 93%);
}
</style>