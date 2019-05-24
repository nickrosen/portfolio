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
          height: "30px",
          width: "auto"
        },
        {
          url: "/contact",
          title: "Dev",
          icon: "icon-dev",
          height: "30px",
          width: "auto"
        },
        {
          url: "/about",
          title: "LinkedIn",
          icon: "icon-linked-in",
          height: "30px",
          width: "auto"
        },
        {
          url: "/work",
          title: "Codepen",
          icon: "icon-code-pen",
          height: "30px",
          width: "auto"
        },
        {
          url: "/blog",
          title: "GitHub",
          icon: "icon-git-hub",
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
img {
  width: 100%;
  height: auto;
  border: 8px solid hsl(40, 23%, 97%);
  border-radius: 24px;
  grid-column: 1 / span 1;
  justify-self: start;
  align-self: start;
  background-color: var(--primary);
  overflow: hidden;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.logo-link {
  height: 82px;
  width: 82px;
  background-color: hsl(40, 23%, 97%);
  border: 1px solid #ccc;
  /* box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2); */
  border-radius: 12px;
}
ul.nav-list {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  background-color: hsl(40, 23%, 97%);
  border: 1px solid var(--primary-border);
  margin: 0;
  /* box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2); */
  /* border-radius: 12px; */
  /* border-top-left-radius: 0;
  border-bottom-left-radius: 0; */
}
ul.nav-list > li {
  list-style-type: none;
}

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