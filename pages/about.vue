<template>
  <div class="about-page">

    <img
      src="~/assets/img/me.png"
      :class="$store.state.theme"
      alt="me-face"
    >

    <div class="about-copy">
      <p><span class="hi">Hi</span> my name's Nick Rosen, I'm a web developer based in San Diego, California. I've been building stuff on the web professionally since 2011 and have had the chance to work on a wide range of projects from wordpress themes and plugins to JavaScript SPA's and cloud apps. My favorite thing about this job is the constant need to learn new things to better solve problems.</p>
      <p>My go to tech stack at the moment is JAM (Javascript API's and Markup). I'm really loving Vue on the front end and either using Netlify or Firebase for continuous integration via GitHub and cloud/serverless functions for the backend.</p>
      <p>I live in the Sherman Heights neighborhood with my wife Kat and our black lab Cole. In my free time I like to sail, cook, read, and explore San Diego.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      facts: [
        "I like a verical monitor",
        "I'm married to my best friend Kat",
        "I have an old black lab named Cole",
        "I'm excited about the future of progressive web apps"
      ]
    };
  }
};
</script>

<style scoped>
.hi {
  font-weight: 400;
  color: hsl(162, 63%, 41%);
  float: left;
  font-size: 75px;
  line-height: 56px;
  padding-right: 10px;
  margin-left: -7px;
}
.about-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
.open > .about-page {
  display: none;
}
.about-page > div {
  /* border: 2px solid; */
}
.about-copy {
  justify-self: end;
}
h1 {
  line-height: 1.3;
  display: inline-flex;
  flex-direction: column;
}
h1 > .name {
  font-size: 48px;
}
img {
  width: 80%;
  height: auto;
  background-color: hsl(214, 15%, 91%);
  border-radius: 50%;
  justify-self: center;
  filter: brightness(0.9);
}
img.dark {
  background-color: hsla(195, 100%, 85%, 0.05);
  filter: brightness(0.75);
}
@media only screen and (max-width: 767px) {
  img,
  .about-copy {
    grid-column: 1 / -1;
  }
  img {
    max-width: 440px;
  }
}
</style>