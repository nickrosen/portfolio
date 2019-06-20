<template>
  <div class="blog-list-page">
    <div>
      <div>
        <h4>Search Posts</h4>
      </div>
      <div>
        <h4>Category Filter</h4>
      </div>
      <div>
        <h4>Get Email Updates</h4>
      </div>
    </div>
    <div class="post-list">
      <div
        class="post"
        v-for="(post, index) in blogPosts"
        :key="index"
      >
        <h2>{{post.title}}</h2>
        <h4>{{post.date}}</h4>
        <ul>
          <li
            v-for="(tag, index) in post.tags"
            :key="index"
          >
            {{tag}}
          </li>
        </ul>
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
      </div>
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
.blog-list-page {
  display: grid;
  grid-template-columns: auto 1fr;
}
.post-list {
  justify-self: center;
}
.post {
  border-bottom: 1px solid hsl(210, 16%, 82%);
  position: relative;
  margin-bottom: 60px;
}
.post > h2 {
  margin: 0;
  font-weight: 900;
}
.post > h4 {
  font-weight: 300;
  margin: 6px 0 12px;
}
.post > ul {
  display: flex;
  margin: 0;
  padding: 0;
}
.post > ul > li {
  list-style-type: none;
  border: 1px solid hsl(234, 62%, 26%);
  margin-right: 10px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  color: hsl(234, 62%, 26%);
}
.post-excerpt {
  width: 100%;
  max-width: 530px;
  overflow: hidden;
  position: relative;
  height: 5.6em; /* exactly three lines */
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
