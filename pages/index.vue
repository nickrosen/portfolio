<template>
  <section class="home-page">
    <div class="l-col">
      <div
        class="circle-1"
        :class="`${$store.state.theme}-circle`"
      ></div>
    </div>
    <h1>
      <span
        class="hello"
        :class="$store.state.theme"
      >Hello, my name is </span>
      <span class="name">Nick Rosen </span>
      <span class="description">I'm a web app developer </span>
      <span class="description">based in San Diego, CA</span>
    </h1>
    <div class="r-col">
      <div
        class="circle-2"
        :class="`${$store.state.theme}-circle`"
      ></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.l-col {
  grid-column: 1;
  position: relative;
  justify-self: end;
}
.r-col {
  grid-column: 3;
  position: relative;
  justify-self: start;
}
.circle-1.dark-circle,
.circle-2.dark-circle {
  background-color: hsla(214, 15%, 91%, 0.05);
}
.circle-1 {
  height: 60vmin;
  width: 60vmin;
  background-color: hsl(214, 15%, 91%);
  position: absolute;
  right: 0;
  top: -30vmin;
  border-radius: 50%;
}
.circle-2 {
  height: 60vmin;
  width: 60vmin;
  background-color: hsl(214, 15%, 91%);
  position: absolute;
  bottom: -30vmin;
  left: 0;
  border-radius: 50%;
}

.home-page {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
}
h1 {
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  line-height: 1.2;
  align-self: center;
  /* justify-self: center; */
  grid-column: 2;
  grid-row: 1;
}
.hello {
  font-size: 23px;
  font-weight: 400;
  color: hsl(230, 49%, 41%);
}
.hello.dark {
  color: hsl(225, 57%, 67%);
}
.name {
  font-size: 114px;
  margin: 6px 0 10px;
  position: relative;
  left: -3px;
}
@media only screen and (max-width: 1240px) {
  .name {
    font-size: 9vw;
  }
}

.description {
  font-size: 32px;
  font-weight: 400;
}

@media only screen and (max-width: 822px) {
  .home-page {
    display: grid;
    grid-template-columns: 2fr 8fr 2fr;
    grid-template-rows: 1fr auto 1fr;
    grid-gap: 20px;
  }
  h1 {
    grid-column: 1/-1;
    grid-row: 2;
    z-index: 3;
    justify-self: center;
  }
  .name {
    font-size: 12vw;
  }
  .l-col {
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
  }
  .r-col {
    grid-column: 3;
    grid-row: 3;
    justify-self: start;
  }
  .circle-1 {
    height: 60vmin;
    width: 60vmin;
    background-color: hsl(214, 15%, 91%);
    position: absolute;
    left: -40vmin;
    top: -40vmin;
    border-radius: 50%;
  }
  .circle-2 {
    height: 60vmin;
    width: 60vmin;
    background-color: hsl(214, 15%, 91%);
    position: absolute;
    bottom: -40vmin;
    left: -40vmin;
    border-radius: 50%;
  }
}
@media only screen and (max-width: 540px) {
  h1 {
    grid-column: 1 / -1;
  }
  .name {
    font-size: 16.3vw;
  }
  .description {
    font-size: 7vw;
  }
}
</style>