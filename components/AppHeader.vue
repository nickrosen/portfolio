<template>
  <section>
    <header class="header-container">
      <div id="header-logo">
        <nuxt-link
          to="/"
          class="nav-link"
        >Nick Rosen</nuxt-link>
      </div>
      <nav id="header-nav">
        <ul>
          <li
            v-for="(item, index) in navItems"
            :key="index"
          >
            <nuxt-link
              class="nav-link"
              :to="item.link"
            >{{item.title}}</nuxt-link>
          </li>
        </ul>
      </nav>

    </header>
  </section>
</template>

<script>
import IconLogo from "~/components/IconLogo.vue";
export default {
  components: { IconLogo },
  data() {
    return {
      navItems: [
        { title: "About me", link: "/about" },
        { title: "Recent work", link: "/work" },
        { title: "Get in touch", link: "/contact" }
      ]
    };
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60px;
  /* border: 1px solid red; */
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  padding-left: 20px;
  display: inline-block;
}
</style>