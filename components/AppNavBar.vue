<template>
  <header>
    <nav>
      <ul
        class="nav-list"
        :class="$store.state.theme"
      >
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <n-link :to="link.url">
            <component
              :is="link.icon"
              :height="link.height"
              :width="link.width"
              primaryColor="hsl(210, 16%, 82%)"
              secondaryColor="hsl(210, 16%, 82%)"
            />
            <span>{{link.title}}</span>
          </n-link>
        </li>
      </ul>
    </nav>
    <!-- {{$store.state.page}} -->
  </header>
</template>

<script>
import SvgHome from "~/components/SvgHome.vue";
import SvgAbout from "~/components/SvgAbout.vue";
import SvgWork from "~/components/SvgWork.vue";
import SvgBlog from "~/components/SvgBlog.vue";
import SvgContact from "~/components/SvgContact.vue";
export default {
  components: { SvgHome, SvgAbout, SvgWork, SvgBlog, SvgContact },
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
        },
        {
          url: "/contact",
          title: "Contact",
          icon: "svg-contact",
          height: "30px",
          width: "auto"
        }
      ],
      fullScreenNav: false
    };
  }
};
</script>

<style scoped>
ul.nav-list {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  /* border: 1px solid hsl(209, 20%, 25%); */
  margin: 0;
}
ul.nav-list > li {
  list-style-type: none;
  /* border: 1px solid hsl(209, 20%, 25%); */
}

ul.nav-list > li > a {
  text-decoration: none;
  color: hsl(209, 18%, 30%);
  font-size: 16px;
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul.nav-list.dark > li > a {
  color: hsl(210, 16%, 82%);
}
ul.nav-list.dark > li > a > svg {
  fill: hsl(221, 78%, 86%);
}
ul.nav-list.light > li > a > svg {
  fill: hsl(221, 78%, 86%);
}
ul.nav-list > li > a > span {
  /* line-height: 0.9; */
  font-weight: 400;
}
a.nuxt-link-exact-active.nuxt-link-active {
  color: hsl(221, 68%, 93%);
  background-color: hsl(227, 42%, 51%);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

@media only screen and (max-width: 653px) {
  ul.nav-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  ul.nav-list > li > a {
    font-size: 16px;
    padding: 14px 10px;
  }
}
@media only screen and (max-width: 372px) {
  ul.nav-list > li > a {
    font-size: 14px;
    padding: 14px 8px;
  }
}
</style>