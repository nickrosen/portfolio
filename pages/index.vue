<template>
  <section class="home-page">
    <h1>
      <span class="hello">Hello, my name is </span>
      <span class="name">Nick Rosen </span>
      <span class="description">I'm a web app developer </span>
      <span class="description">based in San Diego, CA</span>
    </h1>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
h1 {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  align-self: center;
  grid-column: 1 / -1;
}
.hello {
  font-size: 20px;
  font-weight: 400;
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

@media only screen and (max-width: 440px) {
  .name {
    font-size: 18vw;
  }
  .description {
    font-size: 7vw;
  }
}
</style>