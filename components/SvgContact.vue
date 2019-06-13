<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="icon-mail"
    :style="{width: width, height: height}"
  >
    <path
      class="primary"
      d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"
    />
    <path
      class="secondary"
      d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"
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
    }
  }
};
</script>

<style scoped>
.nuxt-link-exact-active.nuxt-link-active > svg > .secondary {
  fill: hsl(221, 68%, 93%);
}
</style>