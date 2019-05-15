<template>
  <section class="grey-1 container flex row wrap">
    <div class="title-area wave mt-24">
      <div class="title-box blue-bg-11 py-12">
        <h2 class="title">Learning</h2>
      </div>
    </div>
    <div class="content-area mt-24">
      <div class="border-y mb-24">
        <h2 class="headline">Learning is my favorite part of the job</h2>
      </div>
      <div class="flex row wrap justify-center">
        <div class=left-col>
          <p>The best advice I've heard about learning is just to learn one thing at a time. I keep a running list of topics I'd like to learn and am constantly rearranging adding to and checking items off of it.</p>
        </div>
        <div class="right-col">
          <p>I love the study required to keep up with this fast moving field. In addition to the resources below, I've found twitter to be an amazing asset for staying up to date with the latest and greatest in web development.</p>
        </div>
      </div>
      <div class="border-y my-24">
        <h2 class="headline">Resources</h2>
      </div>
      <div class="flex row wrap">
        <div class="col-4">
          <h3>Listening</h3>
          <ul>
            <li><a
                href="https://syntax.fm/"
                target="_blank"
              >Syntax</a></li>
            <li><a
                href="https://shoptalkshow.com/"
                target="_blank"
              >Shoptalk Show</a></li>
            <li><a
                href="http://www.fullstackradio.com/"
                target="_blank"
              >Full Stack Radio</a></li>
            <li><a
                href="https://devchat.tv/js-jabber/"
                target="_blank"
              >Javascript Jabber</a></li>
            <li><a
                href="https://frontendhappyhour.com/"
                target="_blank"
              >Front End Happy Hour</a></li>
          </ul>
        </div>
        <div class="col-4">
          <h3>Reading</h3>
          <ul>
            <li><a
                href="https://css-tricks.com/"
                target="_blank"
              >CSS Tricks</a></li>
            <li><a
                href="https://stackoverflow.com/"
                target="_blank"
              >Stack Overflow</a></li>
            <li><a
                href="https://www.smashingmagazine.com/"
                target="_blank"
              >Smashing Magazine</a></li>
            <li><a
                href="https://refactoringui.com/"
                target="_blank"
              >Refactoring UI</a></li>
            <li><a
                href="https://dev.to/"
                target="_blank"
              >Dev.to</a></li>
            <li><a
                href="https://medium.com/"
                target="_blank"
              >Medium</a></li>
          </ul>
        </div>
        <div class="col-4">
          <h3>Watching</h3>
          <ul>
            <li><a
                href="https://frontendmasters.com/"
                target="_blank"
              >Front End Masters</a></li>
            <li><a
                href="https://www.youtube.com/"
                target="_blank"
              >Youtube</a></li>
            <li><a
                href="https://www.udemy.com/"
                target="_blank"
              >Udemy</a></li>
            <li><a
                href="https://www.pluralsight.com/"
                target="_blank"
              >Pluralsight</a></li>
            <li><a
                href="https://wesbos.com/courses/"
                target="_blank"
              >Wes Bos</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Nick Rosen | Learning"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Nick Rosen Portfolio Learning Page"
        }
      ]
    };
  }
};
</script>

<style scoped>
li {
  line-height: 1.5;
}
li > a {
  color: var(--blue-2);
}
</style>