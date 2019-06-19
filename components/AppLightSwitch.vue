<template>
  <button
    @click="vantaBlack"
    aria-label="toggle dark/light mode"
  >
    <svg-light
      :class="theme"
      class="bulb-icon"
    />
    <span v-if="theme == 'dark'">Light</span>
    <span v-else>Dark</span>
    <span>Mode</span>
  </button>
</template>

<script>
import SvgLight from "~/components/SvgLight.vue";
export default {
  components: { SvgLight },
  data() {
    return {
      dark: false
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    }
  },
  methods: {
    vantaBlack() {
      if (this.theme == "light") {
        this.$store.commit("SET_THEME", "dark");
      } else {
        this.$store.commit("SET_THEME", "light");
      }
    }
  }
};
</script>

<style scoped>
.bulb-icon.light {
  fill: hsl(209, 20%, 25%);
}
.bulb-icon.dark {
  fill: hsl(42, 87%, 55%);
}
button {
  cursor: pointer;
  padding: 0 10px;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background-color: hsl(48, 95%, 76%);
  border: 1px solid hsl(44, 92%, 63%);
  border-radius: 50%;
}
button > span {
  color: hsl(209, 61%, 16%);
  font-size: 16px;
  margin-top: 2px;
  text-transform: capitalize;
  display: none;
}
@media only screen and (max-width: 653px) {
}
</style>