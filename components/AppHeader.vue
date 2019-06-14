<template>
  <header>
    <n-link
      :to="links[0].url"
      class="logo"
    >
      <span>NR</span>
    </n-link>
    <nav :class="$store.state.theme">
      <div class="mobile-menu">
        <button @click="mobileNavState">
          <icon-menu />
          <span>menu</span>
        </button>
      </div>
      <ul
        class="nav-list"
        :class="{'open': $store.state.mobileMenu}"
      >
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <n-link
            class="nav-link"
            :to="link.url"
            @click.native="mobileNavState"
          >
            <span>{{link.title}}</span>
          </n-link>
        </li>
        <li><a href="mailto:hinickrosen@gmail.com">Contact</a></li>
      </ul>

    </nav>
  </header>
</template>

<script>
import IconMenu from "~/components/svg/IconMenu.vue";
export default {
  components: { IconMenu },
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
    mobileNavState() {
      this.$store.commit("SET_MOBILE_MENU", !this.$store.state.mobileMenu);
    }
  }
};
</script>

<style scoped>
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
}
a.logo:visited > span {
  color: #fff;
}
header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul.nav-list {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  border: 1px solid hsl(227, 42%, 51%);
  border-radius: 25px;
  margin: 0;
}
ul.nav-list > li {
  list-style-type: none;
}

ul.nav-list > li > a {
  text-decoration: none;
  color: hsl(209, 18%, 30%);
  font-size: 18px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul.nav-list.dark > li > a {
  color: hsl(210, 16%, 82%);
}
ul.nav-list > li > a > span {
  /* line-height: 0.9; */
  font-weight: 400;
}
a.nuxt-link-exact-active.nuxt-link-active {
  color: hsl(221, 68%, 93%);
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

@media only screen and (max-width: 644px) {
  ul.nav-list {
    display: none;
  }
  ul.nav-list.open {
    display: flex;
    flex-direction: column;
    background-color: #f1f5f8;
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    height: calc(100% - 60px);
  }
  a.nav-link.nuxt-link-exact-active.nuxt-link-active {
    border-radius: 0;
  }
  .mobile-menu {
    display: block;
  }
}
</style>