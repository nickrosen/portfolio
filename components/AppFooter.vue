<template>
  <footer>
    <nav :class="$store.state.theme">
      <ul class="footer-nav-list">
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <a
            :href="link.url"
            rel="noopener"
            target="_blank"
            :aria-label="link.title"
          >
            <component
              :is="link.icon"
              primaryColor="hsl(210, 16%, 82%)"
              secondaryColor="hsl(210, 16%, 82%)"
            />
          </a>
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
          url: "https://twitter.com/NickRosenSD",
          title: "Twitter",
          icon: "icon-twitter"
        },
        {
          url: "https://dev.to/nickrosensd",
          title: "DEV.to",
          icon: "icon-dev"
        },
        {
          url: "https://www.linkedin.com/in/nick-rosen-720a989/",
          title: "LinkedIn",
          icon: "icon-linked-in"
        },
        {
          url: "https://codepen.io/nickrosen/#",
          title: "CodePen",
          icon: "icon-code-pen"
        },
        {
          url: "https://github.com/nickrosen",
          title: "GitHub",
          icon: "icon-git-hub"
        }
      ],
      fullScreenNav: false
    };
  }
};
</script>

<style scoped>
footer {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

@media only screen and (max-width: 840px) {
  footer {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 626px) {
  footer {
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
  }
}
@media only screen and (max-width: 500px) {
  footer {
    grid-template-columns: 1fr auto;
  }
}
ul.footer-nav-list {
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border: 1px solid hsl(224, 67%, 76%);
  background-color: hsl(221, 68%, 93%);
  border-radius: 50px;
  margin: 0;
  padding: 0 15px;
}
.dark > ul.footer-nav-list {
  background-color: var(--dark-bg-1);
  border: 1px solid hsl(227, 50%, 59%);
}
ul.footer-nav-list > li {
  list-style-type: none;
  height: 100%;
}

ul.footer-nav-list > li > a {
  text-decoration: none;
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
.light-switch {
  justify-self: end;
}
</style>