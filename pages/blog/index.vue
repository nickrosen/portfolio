<template>
  <div class="blog-list-page">
    <div class="post-list">
      <article
        class="post"
        v-for="(post, index) in blogPosts"
        :key="index"
      >
        <h2>
          <n-link :to="post._path">
            {{post.title}}
          </n-link>
        </h2>
        <h4>{{post.date}}</h4>
        <div
          class="post-excerpt"
          :class="$store.state.theme"
        >
          <p>{{post.body}}</p>
        </div>
        <n-link
          class="post-link stripe-shadow-half"
          :to="post._path"
        >
          <span>View Post</span>
          <icon-right-arrow />
        </n-link>
      </article>
    </div>
  </div>
</template>

<script>
import IconRightArrow from "~/components/svg/IconRightArrow.vue";
export default {
  components: {
    IconRightArrow
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
a.post-link {
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: hsl(158, 58%, 62%);
  border-radius: 50px;
  padding: 5px 15px;
  font-size: 16px;
  color: hsl(170, 97%, 15%);
  position: absolute;
  right: 0;
  bottom: -19px;
}
a.post-link > span {
  padding-right: 8px;
}

.post {
  border-bottom: 1px solid hsl(210, 16%, 82%);
  position: relative;
  margin: 0 auto 80px;
  max-width: 600px;
}
.post > h2 {
  margin: 0;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  font-size: 40px;
  line-height: 1.25;
}
.post > h2 > a {
  color: hsl(228, 45%, 45%);
  text-decoration-color: hsl(156, 73%, 74%);
}
.post > h4 {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500;
  margin: 24px 0 -6px;
}
.post-excerpt {
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  position: relative;
  height: 5.1em; /* exactly three lines */
  margin-bottom: 30px;
}

.post-excerpt:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 1.2em;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    var(--light-background) 50%
  );
}
.post-excerpt.dark:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 1.2em;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    var(--dark-background) 50%
  );
}
</style>
