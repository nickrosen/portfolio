<template lang="html">
  <div class="main">
    <!-- <div class="main-header">
      <h1>{{siteInfo.sitename}}</h1>
      <p>{{siteInfo.sitedescription}}</p>
    </div> -->
    <div class="post" v-for="post in blogPosts" >
      <h2>{{post.title}}</h2>
      <h4>{{post.date}}</h4>
      <n-link :to="post._path">View Post</n-link>
      {{post}}
    </div>
    
    <!-- <div class="posts-list">
      <h2 class="posts-list-title">Posts</h2>
      <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post}}</n-link></p>
    </div> -->
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    siteInfo() {
      return this.$store.state.siteInfo;
    }
  }
};
</script>

<style scoped>
.post {
  border-bottom: 1px solid;
}
</style>
