<template>
  <button>
    <svg-light class="bulb-icon" />
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
.bulb-icon {
  fill: var(--primary-9);
}
button {
  /* width: 114px;
  height: 114px; */
  width: 100%;
  padding: 24px 10px;
  /* border: 1px solid var(--primary-border); */
  /* box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2); */
  /* border-radius: 12px; */
  justify-self: end;
  background-color: var(--primary-border);
  border: none;
  color: hsl(211, 13%, 65%);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
button > span {
  color: var(--primary-9);
  font-size: 15px;
  margin-top: 2px;
}
@media only screen and (max-width: 653px) {
  button {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }
  button > span {
    display: none;
  }
  .bulb-icon {
    height: 24px;
    width: auto;
  }
}
</style>