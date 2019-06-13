export default context => {
  console.log("[middleware] check theme");
  // console.log(context.req);
  context.store.dispatch("getThemePreference", context.req);
};
