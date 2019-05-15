<template>
  <section>
    <h1>
      <!-- <span>Hi, I'm Nick </span>
      <span>I design <span class="spand">&</span> build </span>
      <span>web apps </span> -->

    </h1>

    <!-- <div class="circle-120"></div>
    <div class="circle-144"></div> -->
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
svg {
  width: 100%;
}
.spand {
  color: hsl(210, 16%, 82%);
}
.circle-120 {
  height: 70vmax;
  width: 70vmax;
  border: 1px solid hsl(180, 77%, 47%);
  grid-column: 2;
  align-self: center;
  justify-self: center;
  position: absolute;
  border-radius: 50%;
}
.circle-144 {
  height: 110vmax;
  width: 110vmax;
  border: 1px solid hsl(180, 77%, 47%);
  grid-column: 2;
  align-self: center;
  justify-self: center;
  position: absolute;
  border-radius: 50%;
}
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 1fr 1fr; */
  position: relative;
  overflow: hidden;
}
h1 {
  grid-column: 1;
  justify-self: center;
  align-self: center;
  text-align: center;
  z-index: 2;
  margin: 10px 20px;
  /* text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15); */
}
h1 > span {
  display: block;
}

img {
  grid-column: 2;
  /* grid-row: 1; */
  align-self: center;
  justify-self: center;
  width: calc(100% - 40px);
  height: auto;
  position: relative;
  border-radius: 50%;
  border: 1px solid hsl(180, 77%, 47%);
  margin: 20px;
  box-shadow: 0 8px 12px hsla(0, 0%, 0%, 0.1);
  max-width: 400px;
}
/* .img-frame::after {
  content: "";
  height: 70vmax;
  width: 70vmax;
  border: 1px solid hsl(180, 77%, 47%);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  z-index: 9;
  border-radius: 50%;
  justify-self: center;
  clip-path: ellipse(130px 140px at 10% 20%);
} */

@media only screen and (max-width: 1000px) {
  img {
    /* grid-row: 1; */
    grid-column: 1/3;
    align-self: start;
  }
  h1 {
    /* grid-row: 2; */
    grid-column: 1/3;
  }
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