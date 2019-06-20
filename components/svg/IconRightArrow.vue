<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="w-8 mr-4 icon-arrow-thin-right-circle"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      class="primary"
    ></circle>
    <path
      class="secondary"
      d="M14.59 13H7a1 1 0 0 1 0-2h7.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3z"
    ></path>
  </svg>
</template>

<script>
export default {};
</script>

<style scoped>
svg {
  height: 24px;
  width: auto;
}
.primary {
  fill: hsl(166, 72%, 28%);
}
.secondary {
  fill: hsl(158, 58%, 62%);
}
</style>