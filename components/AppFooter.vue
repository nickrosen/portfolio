<template>
  <section class="footer-section">
    <footer class="footer-container">
      <div class="theme-switch">
        <label class="switch">
          <input
            v-model="lightSwitch"
            type="checkbox"
            id="theme"
          >
          <span class="slider round"></span>
        </label>
        <label
          class="toggle-label"
          for="theme"
        >Toggle Dark Theme</label>
      </div>
      <div class="github-link-area">
        <a
          href="https://github.com/nickrosen/portfolio"
          target="_blank"
          class="github-link"
        >
          <span>About this site</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              d="M0 0h24v24H0V0z"
            />
            <path
              fill="#cccccc"
              d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z"
            />
          </svg>
        </a>
      </div>
      <!-- <ui-link-round
        class="mobile-menu"
        title="Menu"
        link="/link"
      ></ui-link-round> -->
    </footer>
  </section>
</template>

<script>
import UiLinkRound from "~/components/UiLinkRound.vue";

export default {
  components: { UiLinkRound },
  data() {
    return {
      lightSwitch: false
    };
  }
};
</script>

<style scoped>
.mobile-menu {
  margin: 20px 0;
}
.footer-section {
  /* background-color: hsl(210, 31%, 80%); */
}
.github-link {
  font-size: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: hsl(210, 36%, 96%);
}
.github-link > span {
  padding-right: 20px;
}
.theme-switch {
  display: flex;
  align-items: center;
}
.toggle-label {
  padding-left: 20px;
  font-size: 20px;
  color: hsl(210, 36%, 96%);
}
.footer-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  min-height: 60px;
  padding: 0 20px;
  /* border: 1px solid red; */
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(215, 96%, 32%);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: hsl(202, 100%, 95%);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: hsl(206, 93%, 73%);
}

input:focus + .slider {
  box-shadow: 0 0 1px hsl(206, 93%, 73%);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .github-link-area,
  .theme-switch {
    display: none;
  }
  .footer-container {
    justify-content: center;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>