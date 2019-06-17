<template>
  <section class="home-page">
    <div class="l-col">
      <div
        class="circle-1"
        :class="`${$store.state.theme}-circle`"
      ></div>
    </div>
    <h1>
      <span class="hello">Hello, my name is </span>
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
  height: 90vmin;
  width: 90vmin;
  background-color: hsl(214, 15%, 91%);
  position: absolute;
  right: 0;
  top: -30vmin;
  border-radius: 50%;
}
.circle-2 {
  height: 90vmin;
  width: 90vmin;
  background-color: hsl(214, 15%, 91%);
  position: absolute;
  bottom: -30vmin;
  left: 0;
  border-radius: 50%;
}

.home-page {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 20px;
}
h1 {
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  line-height: 1.2;
  align-self: center;
  justify-self: center;
  grid-column: 2;
  grid-row: 1;
}
.hello {
  font-size: 23px;
  font-weight: 400;
  color: hsl(162, 63%, 41%);
}
.name {
  font-size: 84px;
  margin: 6px 0 10px;
  position: relative;
  left: -3px;
}
.description {
  font-size: 32px;
  font-weight: 400;
}

@media only screen and (max-width: 767px) {
  .home-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto 1fr;
    grid-gap: 20px;
  }
  h1 {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  .l-col {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    justify-self: end;
  }
  .r-col {
    grid-column: 2;
    grid-row: 3;
    position: relative;
    justify-self: start;
  }
}
@media only screen and (max-width: 480px) {
  .name {
    font-size: 16.3vw;
  }
  .description {
    font-size: 7vw;
  }
}
</style>