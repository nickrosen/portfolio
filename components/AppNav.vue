<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <n-link :to="link.url">{{link.title}}</n-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { url: "/", title: "Home" },
        { url: "/about-me", title: "About Me" },
        { url: "/work", title: "Work" },
        { url: "/blog", title: "Blog" },
        { url: "/contact-me", title: "Contact Me" }
      ],
      fullScreenNav: false
    };
  }
};
</script>

<style scoped>
ul.nav-list {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin-top: 20px;
}
ul.nav-list > li {
  list-style-type: none;
}
ul.nav-list > li:not(:last-child) {
  margin-right: 20px;
}
ul.nav-list > li > a {
  text-decoration: none;
  color: hsl(216, 33%, 97%);
  font-size: 20px;
}
</style>