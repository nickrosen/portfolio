<template>
  <section class="about-page">
    <img src="~/assets/img/me_round.png">
    <div class="about-work">
      <h2>My name's Nick Rosen</h2>
      <p></p>
      <p>I'm a web developer and designer based in San Diego, California. I work at Renovation Realty automating processes, building web apps and, managing digital advertising.</p>
      <p>I got into web development in 2011 and am so grateful to have found a job I love to do every day. My favorite thing about being a web dev is the constant opportunity to learn new skills to solve problems.</p>
      <p>I live in Sherman Heights with my wife/bestie Kat and our black lab Cole. In my free time, I like to read, take classes online, and sail boats.</p>
    </div>
    <!-- 
     -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Nick Rosen | About Me"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "About Nick Rosen" }
      ]
    };
  }
};
</script>

<style scoped>
.about-page {
  padding-top: 40px;
  overflow-y: scroll;
  display: grid;
  grid-gap: 20px;
}
p {
  max-width: 600px;
}
.about-work {
  grid-column: 2;
  grid-row: 1;
}
img {
  grid-column: 1;
  grid-row: 1;
  width: calc(100% - 40px);
  height: auto;
  position: relative;
  border-radius: 50%;
  border: 1px solid hsl(180, 77%, 47%);
  margin: 20px;
  box-shadow: 0 8px 12px hsla(0, 0%, 0%, 0.1);
  max-width: 400px;
}
@media only screen and (min-width: 700px) {
}
</style>