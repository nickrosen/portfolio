<template>
  <header>
    <n-link
      :to="links[0].url"
      @click.native="closeMobileNav"
      class="logo stripe-shadow"
    >
      <span>NR</span>
    </n-link>
    <nav :class="$store.state.theme">
      <div class="mobile-menu">
        <button
          class="stripe-shadow"
          @click="toggleMobileNav"
        >
          <icon-menu v-show="!$store.state.mobileMenu" />
          <icon-close v-show="$store.state.mobileMenu" />
          <span>menu</span>
        </button>
      </div>
      <ul
        class="nav-list stripe-shadow"
        :class="{'open': $store.state.mobileMenu}"
      >
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <n-link
            class="nav-link"
            :to="link.url"
            @click.native="closeMobileNav"
          >
            <span>{{link.title}}</span>
          </n-link>
        </li>
        <li><a href="mailto:hinickrosen@gmail.com"><span>Contact</span></a></li>
      </ul>

    </nav>
  </header>
</template>

<script>
import IconMenu from "~/components/svg/IconMenu.vue";
import IconClose from "~/components/svg/IconClose.vue";
export default {
  components: { IconClose, IconMenu },
  data() {
    return {
      links: [
        {
          url: "/",
          title: "Home",
          icon: "svg-home",
          height: "30px",
          width: "auto"
        },
        {
          url: "/about",
          title: "About",
          icon: "svg-about",
          height: "30px",
          width: "auto"
        },
        {
          url: "/work",
          title: "Work",
          icon: "svg-work",
          height: "30px",
          width: "auto"
        },
        {
          url: "/blog",
          title: "Blog",
          icon: "svg-blog",
          height: "30px",
          width: "auto"
        }
      ],
      fullScreenNav: false
    };
  },
  methods: {
    toggleMobileNav() {
      this.$store.commit("SET_MOBILE_MENU", !this.$store.state.mobileMenu);
    },
    closeMobileNav() {
      if (this.$store.state.mobileMenu) {
        this.$store.commit("SET_MOBILE_MENU", !this.$store.state.mobileMenu);
      }
      return;
    }
  }
};
</script>

<style scoped>
.mobile-menu > button {
  background-color: hsl(221, 68%, 93%);
  border: 1px solid hsl(227, 42%, 51%);
}
.dark > .mobile-menu > button {
  background-color: hsl(224, 67%, 76%);
  border: 1px solid hsl(224, 67%, 76%);
}
.mobile-menu > button > span {
  padding-bottom: 3px;
  padding-left: 10px;
}
a.logo {
  height: 50px;
  width: 50px;
  background-color: hsl(227, 42%, 51%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
a.logo > span {
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -8px;
  position: relative;
  left: -4px;
  font-style: italic;
}

a.logo:visited > span {
  color: hsl(221, 68%, 93%);
}

header {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
}

ul.nav-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  background-color: hsl(221, 68%, 93%);
  border: 1px solid hsl(224, 67%, 76%);
  border-radius: 25px;
  margin: 0;
}
.dark > ul.nav-list {
  background-color: hsl(224, 67%, 76%);
  border: 1px solid hsl(224, 67%, 76%);
}
ul.nav-list > li {
  list-style-type: none;
}

ul.nav-list > li > a {
  text-decoration: none;
  color: hsl(209, 20%, 25%);
  font-size: 18px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dark > ul.nav-list > li > a {
  /* color: hsl(210, 16%, 82%); */
}
ul.nav-list > li > a > span {
  /* line-height: 0.9; */
  font-weight: 500;
}
a.nuxt-link-exact-active.nuxt-link-active {
  color: hsl(221, 68%, 93%);
  background-color: hsl(228, 45%, 45%);
  border-radius: 50px;
}
.mobile-menu {
  display: none;
}
.mobile-menu > button {
  height: 50px;
  border: 1px solid hsl(227, 42%, 51%);
  border-radius: 50px;
  padding: 0 30px;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
@media only screen and (max-width: 1144px) {
  header {
    grid-template-columns: 1fr 1fr 1fr;
  }
  nav {
    grid-column: 2 / span 2;
  }
}
@media only screen and (max-width: 878px) {
  header {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  nav {
    grid-column: 2 / span 3;
  }
}
@media only screen and (max-width: 780px) {
  header {
    grid-template-columns: auto 1fr;
  }
}
@media only screen and (max-width: 670px) {
  header {
    display: flex;
    justify-content: space-between;
  }
  ul.nav-list {
    display: none;
  }
  ul.nav-list.open {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: hsl(221, 68%, 93%);
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    height: calc(100% - 60px);
  }
  .dark > ul.nav-list.open {
    background-color: hsl(210, 24%, 16%);
  }
  .dark > ul.nav-list.open > li > a {
    color: hsl(210, 16%, 82%);
  }
  a.nav-link.nuxt-link-exact-active.nuxt-link-active {
    border-radius: 0;
  }
  .mobile-menu {
    display: block;
  }
}
</style>