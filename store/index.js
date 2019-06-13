import Vue from "vue";
import Vuex from "vuex";
import Cookie from "js-cookie";
Vue.use(Vuex);

export const state = () => ({
  blogPosts: [],
  allPages: [],
  siteInfo: [],
  page: "index",
  theme: "light",
  mobileMenu: false
});

export const mutations = {
  SET_POSTS(state, data) {
    state.blogPosts = data;
  },
  SET_PAGES(state, data) {
    state.allPages = data;
  },
  SET_INFO(state, data) {
    state.siteInfo = data;
  },
  SET_MOBILE_MENU(state, menu) {
    state.mobileMenu = menu;
  },
  SET_THEME(state, theme) {
    state.theme = theme;
    localStorage.setItem("theme", theme);
    Cookie.set("theme", theme);
  },
  UPDATE_PAGE(state, pageName) {
    state.page = pageName;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("getSiteInfo");
    await dispatch("getBlogPosts");
    await dispatch("getPages");
    // await dispatch("getThemePreference");
  },
  async getBlogPosts({ state, commit }) {
    const context = await require.context("~/content/blog/", false, /\.json$/);

    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    }));

    commit("SET_POSTS", searchposts.reverse());
  },
  async getPages({ state, commit }) {
    const context = await require.context("~/content/pages/", false, /\.json$/);

    const pages = await context.keys().map(key => ({
      ...context(key),
      _path: `/page/${key.replace(".json", "").replace("./", "")}`
    }));

    commit("SET_PAGES", pages);
  },
  getSiteInfo({ state, commit }) {
    const info = require("~/content/setup/info.json");
    commit("SET_INFO", info);
  }
  // getThemePreference(req) {
  //   // if (req) {
  //   //   if (!req.headers.cookie) {
  //   //     return;
  //   //   }
  //   const themeCookie = req.headers.cookie
  //     .split(";")
  //     .find(c => c.trim().startsWith("theme="));
  //   commit("SET_THEME", themeCookie);
  //   // } else if (process.browser) {
  //   //   commit("SET_THEME", localStorage.getItem("theme"));
  //   // }
  //   console.log(themeCookie);
  // }
};
