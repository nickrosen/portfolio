<template>
  <header>
    <nav>

      <ul class="nav-list">
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
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 20px;
  margin: 0;
  background-color: hsl(40, 23%, 97%);
  border: 1px solid #ccc;
  /* box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2); */
  border-radius: 12px;
  /* border: 4px solid hsl(212, 92%, 43%); */
}
ul.nav-list > li {
  list-style-type: none;
}
/* ul.nav-list > li:not(:last-child) {
  margin-right: 30px;
} */
ul.nav-list > li > a {
  text-decoration: none;
  color: hsl(211, 13%, 65%);
  font-size: 18px;
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul.nav-list > li > a > span {
  /* line-height: 0.9; */
  font-weight: 400;
}
a.nuxt-link-exact-active.nuxt-link-active {
  color: hsl(210, 24%, 16%);
}
a.nuxt-link-exact-active.nuxt-link-active > svg {
  fill: hsl(210, 83%, 53%);
}
svg {
  fill: hsl(210, 16%, 82%);
}
@media only screen and (max-width: 518px) {
  ul.nav-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
  }
  ul.nav-list > li > a {
    color: hsl(211, 13%, 65%);
    font-size: 16px;
    padding: 14px 10px;
  }
}
@media only screen and (max-width: 372px) {
  ul.nav-list > li > a {
    color: hsl(211, 13%, 65%);
    font-size: 14px;
    padding: 14px 8px;
  }
}
</style>