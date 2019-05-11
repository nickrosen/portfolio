<template>
  <div>
    {{theme}}
    <div class="switch-plate">
      <div class="light-switch">
        <div class="switch-container">
          <button
            class="flipper"
            @click="setTheme('light')"
            :class="{off: theme == 'dark'}"
          >Light Theme</button>
          <button
            class="flipper"
            @click="setTheme('dark')"
            :class="{on: theme == 'light'}"
          >Dark Theme</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "grid",
  data() {
    return {
      theme: "light"
    };
  },
  methods: {
    setTheme(theme) {
      this.theme = theme;
    }
  }
};
</script>

<style scoped>
.switch-plate {
  background-color: hsl(210, 36%, 96%);
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
  padding: 96px 72px;
  display: inline-block;
  /* width: 50%; */
  /* max-width: 320px; */
}
.flipper {
  height: 180px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid red;
}
/*
.switch-container {
  display: flex;
  flex-direction: column;
  height: calc(60vh);
  width: 240px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
 */
.on {
  /* background-color: hsl(211, 27%, 70%);
  margin-top: 10px; */
}
.off {
  /* background-color: rgba(0, 0, 0, 0.05); */
}
</style>