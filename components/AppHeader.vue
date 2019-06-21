<template>
  <header>
    <div class="logo">
      <n-link
        :to="links[0].url"
        @click.native="closeMobileNav"
        class="logo-link"
        :class="$store.state.theme"
      >
        <span class="icon stripe-shadow">
          <span class="initials">NR</span>
        </span>
        <span
          v-show="$store.state.page !== 'index'"
          class="logo-name"
        >nick rosen</span>
      </n-link>
    </div>
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
        <li><a
            class="nav-link"
            href="mailto:hinickrosen@gmail.com"
          ><span>Contact</span></a></li>
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
a.logo-link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}
a.logo-link.dark > .icon {
  background-color: hsla(216, 33%, 97%, 0.12);
  border: 1px solid hsl(227, 50%, 59%);
  color: hsl(227, 42%, 51%);
}
a.logo-link.nuxt-link-exact-active.nuxt-link-active > .icon {
  background-color: hsl(224, 67%, 76%);
}
a.logo-link.dark.nuxt-link-exact-active.nuxt-link-active > .icon {
  background-color: hsla(216, 33%, 97%, 0.12);
  color: hsl(227, 42%, 51%);
}
a.logo-link > .icon {
  height: 50px;
  width: 50px;
  background-color: hsl(221, 68%, 93%);
  border: 1px solid hsl(227, 50%, 59%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232, 51%, 36%);
}
.initials {
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -8px;
  position: relative;
  left: -4px;
  font-style: italic;
}
.logo-name {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  margin-left: 10px;
  color: hsl(211, 12%, 43%);
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
  background-color: hsla(216, 33%, 97%, 0.12);
  border: 1px solid hsl(227, 42%, 51%);
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
  color: hsl(216, 33%, 97%);
}
ul.nav-list > li > a > span {
  /* line-height: 0.9; */
  font-weight: 500;
}
a.nav-link.nuxt-link-exact-active.nuxt-link-active {
  color: hsl(234, 62%, 26%);
  background-color: hsl(224, 67%, 76%);
  border-radius: 50px;
}
.dark > ul.nav-list > li > a.nuxt-link-exact-active.nuxt-link-active {
  color: hsl(216, 33%, 97%);
  background-color: hsl(227, 42%, 51%);
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