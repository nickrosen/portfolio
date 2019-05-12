<template>
  <div>
    <nuxt-link
      :to="link"
      class="cta"
    >
      <span>{{title}}</span>
      <svg
        width="13px"
        height="10px"
        viewBox="0 0 13 10"
      >
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </nuxt-link>
    <!-- <component :is="`IconEmail`"></component> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Go"
    },
    target: {
      type: String,
      default: "_self"
    },
    link: {
      type: String,
      default: "Go"
    },
    icon: {
      type: String,
      default: "Go"
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
}

.cta {
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
}
.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: hsl(22, 100%, 85%);
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta.nuxt-link-exact-active.nuxt-link-active:before {
  background: hsl(16, 94%, 61%);
}
.cta span {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
}
.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #111;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
.cta:hover:before {
  width: 100%;
  background: hsl(18, 100%, 70%);
}
.cta:hover svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.96);
}
</style>