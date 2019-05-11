<template>
  <!-- <section class="welcome-section"> -->
  <section>
    <!-- <deco-circle
        class="circle-top-right"
        color="hsl(204, 100%, 86%)"
        height="240px"
        width="240px"
      /> -->

    <!-- <div class="intro-section"> -->
    <h1>
      <span class="hi">Hi, </span>
      <span class="intro">I'm Nick Rosen </span>
      <span class="dnb">I design and build </span>
      <span class="web-apps">web apps </span>
      <span class="site-welcome">Welcome to my site</span>
    </h1>
    <!-- </div> -->

    <!-- <img
      class="me-head"
      src="~/assets/img/me_crop.png"
    > -->

  </section>
</template>

<script>
import DecoCircle from "~/components/DecoCircle.vue";
export default {
  components: { DecoCircle },
  data() {
    return {
      title: "Nick Rosen | Portfolio"
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
          content: "Nick Rosen Portfolio Home Page"
        }
      ]
    };
  }
};
</script>

<style scoped>
.intro-section {
  border: 1px solid;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
/* to do - clean up styles */
/* .site-welcome {
  font-size: 47px;
}
.web-apps {
  font-size: 99px;
  line-height: 1.1;
  margin-bottom: 12px;
}
.dnb {
  font-size: 52px;
}
.hi {
  font-size: 99px;
  display: block;
  line-height: 1.1;
  margin-bottom: 12px;
}
.intro {
  font-size: 62px;
} */
.circle-top-right {
  position: absolute;
  top: -100px;
  right: -100px;
}
/* h1#welcome > span {
  display: block;
} */
#welcome {
  font-family: "Playfair Display", serif;
  display: inline-block;
  width: 100%;
  max-width: 440px;
}
.title-circle {
  background-color: hsl(208, 88%, 62%);
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
  border-radius: 50%;
  box-shadow: inset 0 4px 6px hsla(0, 0%, 0%, 0.1);
}
.title-circle > div {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
}
.home-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-end; */
  margin-bottom: 40px;
}
/* .home-nav > div {
  display: inline-block;
} */

.welcome-section {
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.welcome-section > div {
  width: 100%;
}
@media only screen and (min-width: 769px) {
}
.img-col {
  align-self: flex-end;
  position: relative;
  /* overflow: hidden; */
}
.txt-col {
  align-self: center;
}
.frame {
  /* background-color: var(--teal-9); */
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  border-radius: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  /* padding-bottom: 10px; */
}
.me-head {
  width: 100%;
  position: relative;
  top: 9px;
  height: auto;
  grid-column: 1 / 3;
  /* -webkit-filter: contrast(200%); 
  filter: contrast(200%); */
  /* -webkit-filter: grayscale(100%); 
  filter: grayscale(100%);
  opacity: 1; */
}

/* h1#job-title > span.name {
  display: block;
  animation-name: moveInLeft;
  animation-duration: 0.8s;
}
h1#job-title > span.job {
  display: block;
  animation-name: moveInRight;
  animation-duration: 0.8s;
} */

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translatey(200px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
#orb {
  height: 60vmin;
  width: 60vmin;
  background-color: var(--yellow-7);
  background: var(--teal-6);
  background: linear-gradient(45deg, var(--yellow-4) 0%, var(--yellow-8) 100%);
  position: absolute;
  bottom: 18px;
  right: 18px;
  z-index: 0;
  border-radius: 50%;
  animation-name: moveInBottom;
  animation-duration: 1s;
}
</style>