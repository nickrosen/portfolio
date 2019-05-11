<template>
  <div>
    <svg
      :style="`height: ${height}; width: ${width};`"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        :fill="color"
        cx="50"
        cy="50"
        r="50"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#ccc"
    },
    height: {
      type: String,
      default: "100px"
    },
    width: {
      type: String,
      default: "100px"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>