<template>
  <section class="grid">
    <div
      id="orb"
      class="my-auto"
    ></div>
    <div id="waves"></div>

    <h1
      id="job-title"
      class="blue-1"
    >
      <span class="hi">Hello, my name is</span>
      <span class="name">Nick Rosen</span>
      <span class="job">I'm a web app developer<br> based in San Diego, CA.</span>
    </h1>

  </section>
</template>

<script>
export default {
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
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1240px;
  padding: 0 18px;
  margin: 0 auto;
}
#job-title {
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: center;
  display: inline-flex;
  flex-direction: column;
  background-color: var(--blue-11);
  max-width: 420px;
  padding-bottom: 40px;
}
h1#job-title > .hi {
  font-weight: 400;
}
h1#job-title > span.name {
  animation-name: moveInLeft;
  animation-duration: 0.8s;
  font-size: 80px;
  margin-bottom: 10px;
}
h1#job-title > span.job {
  animation-name: moveInRight;
  animation-duration: 0.8s;
  font-weight: 400;
}

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
#waves {
  width: 100%;
  height: 50%;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%232186EB' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: end;
  height: 40vh;
}
#orb {
  height: 60vmin;
  width: 60vmin;
  background-color: var(--yellow-7);
  background: var(--teal-6);
  background: linear-gradient(45deg, var(--yellow-4) 0%, var(--yellow-8) 100%);
  z-index: 0;
  border-radius: 50%;
  animation-name: moveInBottom;
  animation-duration: 1s;
  grid-column: 2;
  grid-row: 1;
  justify-self: center;
  margin-bottom: 80px;
}

p {
  mix-blend-mode: exclusion;
  font-size: 4.9vw;
  margin: 0;
  color: hsl(210, 24%, 16%);
}
</style>