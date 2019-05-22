export default function(context) {
  // Tell the store to update the page variable
  context.store.commit("UPDATE_PAGE", context.route.name);
}
