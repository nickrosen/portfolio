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
import IconCodePen from "~/components/svg/IconCodePen.vue";
import IconDev from "~/components/svg/IconDev.vue";
import IconGitHub from "~/components/svg/IconGitHub.vue";
import IconLinkedIn from "~/components/svg/IconLinkedIn.vue";
import IconTwitter from "~/components/svg/IconTwitter.vue";

export default {
  components: { IconCodePen, IconDev, IconGitHub, IconTwitter, IconLinkedIn },
  data() {
    return {
      links: [
        {
          url: "/",
          title: "Twitter",
          icon: "icon-twitter",
          height: "auto",
          width: "20px"
        },
        {
          url: "/contact",
          title: "DEV.to",
          icon: "icon-dev",
          height: "auto",
          width: "20px"
        },
        {
          url: "/about",
          title: "LinkedIn",
          icon: "icon-linked-in",
          height: "auto",
          width: "20px"
        },
        {
          url: "/work",
          title: "Codepen",
          icon: "icon-code-pen",
          height: "auto",
          width: "20px"
        },
        {
          url: "/blog",
          title: "GitHub",
          icon: "icon-git-hub",
          height: "auto",
          width: "20px"
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
  margin: 0;
}
ul.nav-list > li {
  list-style-type: none;
}

ul.nav-list > li > a {
  text-decoration: none;
  color: hsl(211, 13%, 65%);
  font-size: 15px;
  padding: 14px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul.nav-list > li > a > span {
  /* line-height: 0.9; */
  font-weight: 400;
  margin-top: 2px;
}

@media only screen and (max-width: 653px) {
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