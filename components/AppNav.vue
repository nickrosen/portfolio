<template>
  <section class="nav-section flex-row space-between">
    <nuxt-link
      class="name-logo"
      to="/"
    >
      <span class="name">Site Identity</span>
      <span class="logo-box">Nick Rosen</span>
      <span class="logo-box">Web Developer</span>
      <span class="logo-box">San Diego, CA</span>
    </nuxt-link>
    <nav class="nav-links">
      <span class="nav-label">Navigation</span>
      <ul
        class="nav-list"
        role="menubar"
      >
        <li
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <nuxt-link
            class="nav-btn"
            :to="item.link"
            role="menuitem"
            tab-index="-1"
          >{{item.title}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Work", link: "/work" },
        { title: "Blog", link: "/blog" },
        { title: "Contact", link: "/contact" }
      ]
    };
  }
};
</script>

<style scoped>
.nav-label {
  position: absolute;
  top: -12px;
  left: 40px;
  font-size: 18px;
  background-color: hsl(210, 36%, 96%);
  color: hsl(209, 28%, 39%);
}
a {
  text-decoration: none;
}
.name-logo {
  border: 1px solid hsla(0, 0%, 0%, 0.1);
  padding: 30px;
  font-size: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo-box {
  font-size: 24px;
  color: hsl(274, 87%, 43%);
}
.name-logo > span {
  display: block;
}
.name {
  color: hsl(209, 28%, 39%);
  position: absolute;
  top: -12px;
  /* padding: 0 8px; */
  background-color: hsl(210, 36%, 96%);
}
.nav-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: hsl(274, 87%, 43%);
  color: hsl(262, 100%, 88%);
  font-size: 18px;
  border-radius: 50%;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.15);
}
/* Layout */
.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.space-between {
  justify-content: space-between;
}
/* Nav Component */
.nav-section {
  /* border-bottom: 1px solid; */
  margin-top: 32px;
}
.nav-links {
  border: 1px solid hsla(0, 0%, 0%, 0.1);
  border-radius: 4px;
  padding-top: 30px;
  padding-right: 40px;
  padding-bottom: 30px;
  position: relative;
}
ul.nav-list {
  column-count: 4;
  column-gap: 24px;
  display: flex;
  margin: 0;
}
ul.nav-list > li {
  list-style-type: none;
}
</style>