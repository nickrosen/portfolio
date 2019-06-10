<template>
  <section class="grey-1 grid">
    <div class="title-area wave mt-24">
      <div class="title-box blue-bg-11 py-12">
        <h2 class="title">About Me</h2>
      </div>
    </div>

    <img src="~/assets/img/me.png">

    <div class="copy">
      <h1>My name's Nick Rosen, I'm a web app developer based in San Diego, CA.</h1>
      <p>I've been building stuff on the web professionally since 2011 and have had the chance to work on a wide range of projects from wordpress themes and plugins to serverless spa's and cloud apps. My favorite thing about this job is the constant need to learn new things to better solve problems.</p>
      <p>My go to tech stack at the moment is JAM (Javascript API's and Markup). I'm really loving Vue on the front end and either using Netlify or Firebase for continuous integration via GitHub and cloud/serverless functions for the backend.</p>
      <p>I live in the Sherman Heights neighborhood with my wife Kat and our black lab Cole. In my free time I like to sail, read, and explore San Diego.</p>
    </div>

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
img {
  max-width: 440px;
  width: 100%;
  background-color: var(--blue-10);
  margin-top: 110px;
  border: 1px solid var(--teal-9);
}
.grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 240px 1fr auto;
  width: 100%;
  max-width: 1240px;
  padding: 0 18px;
  margin: 0 auto;
}
.copy {
  grid-column: 3;
  grid-row: 1;
}
@media only screen and (max-width: 1124px) {
  .copy {
    grid-column: 2;
    grid-row: 2;
  }
  .grid {
    grid-template-columns: auto 1fr;
  }
  img {
    grid-column: 2;
    grid-row: 1;
    margin-top: 0;
  }
}
@media only screen and (max-width: 680px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
  img {
    grid-row: 2;
    grid-column: 1;
  }
  .title-area {
    grid-row: 1;
    grid-column: 1;
  }
  .copy {
    grid-row: 3;
    grid-column: 1;
  }
}
p,
h1 {
  max-width: 540px;
}
h1 {
  margin-top: 20px;
}
</style>