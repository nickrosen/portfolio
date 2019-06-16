<template>
  <footer>
    <nav :class="$store.state.theme">
      <ul class="footer-nav-list">
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
          </n-link>
        </li>
      </ul>
    </nav>
    <app-light-switch class="light-switch" />
  </footer>
</template>

<script>
import IconCodePen from "~/components/svg/IconCodePen.vue";
import IconDev from "~/components/svg/IconDev.vue";
import IconGitHub from "~/components/svg/IconGitHub.vue";
import IconLinkedIn from "~/components/svg/IconLinkedIn.vue";
import IconTwitter from "~/components/svg/IconTwitter.vue";
import AppLightSwitch from "~/components/AppLightSwitch.vue";

export default {
  components: {
    AppLightSwitch,
    IconCodePen,
    IconDev,
    IconGitHub,
    IconTwitter,
    IconLinkedIn
  },
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
          title: "CodePen",
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
footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul.footer-nav-list {
  height: 50px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  border: 1px solid hsl(227, 42%, 51%);
  background-color: hsl(221, 68%, 93%);
  border-radius: 50px;
  margin: 0;
  padding: 0 15px;
}
.dark > ul.footer-nav-list {
  background-color: hsl(224, 67%, 76%);
}
ul.footer-nav-list > li {
  list-style-type: none;
  height: 100%;
}

ul.footer-nav-list > li > a {
  text-decoration: none;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
}
ul.footer-nav-list > li > a > span {
  /* line-height: 0.9; */
  font-weight: 500;
  margin-top: 2px;
}
svg {
  width: 24px;
  height: 24px;
}

@media only screen and (max-width: 410px) {
  ul.footer-nav-list > li > a {
    padding: 0 12px;
  }
}
@media only screen and (max-width: 410px) {
  ul.footer-nav-list {
    padding: 0 6px;
  }
  ul.footer-nav-list > li > a {
    padding: 0 8px;
  }
}
</style>