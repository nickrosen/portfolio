<template>
  <button>
    <svg-light />
    <span>Dark</span>
  </button>
</template>

<script>
import SvgLight from "~/components/SvgLight.vue";
export default {
  components: { SvgLight }
};
</script>

<style scoped>
button {
  width: 114px;
  height: 114px;
  margin-bottom: 20px;
  border: 1px solid var(--primary-border);
  /* box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2); */
  /* border-radius: 12px; */
  justify-self: end;
  background-color: transparent;
  color: hsl(211, 13%, 65%);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>