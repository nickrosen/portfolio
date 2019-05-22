<template>
  <section class="home-page">
    <!-- <img
      src="~/assets/img/me.png"
      alt="me-face"
    >
    <h1>
      <span>Hello, my name is </span>
      <span class="name">Nick Rosen </span>
      <span>I build websites and apps</span>
    </h1> -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* .home-page {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
} */
img {
  width: 100%;
  height: auto;
  z-index: 9;
  grid-column: span 1;
  grid-row: 1 / -1;
  border: 4px solid hsl(40, 23%, 97%);
  border-radius: 10%;
  overflow: hidden;
  background-color: hsl(212, 92%, 43%);
  z-index: 1;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
h1 {
  grid-row: 1;
  grid-column: 2;
  z-index: 1;
  color: hsl(40, 23%, 97%);
  font-weight: 500;
  margin-top: 60px;
}
h1 > span {
  display: block;
}
span.name {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.1;
  position: relative;
  left: -2px;
}
@media only screen and (max-width: 1042px) {
  img {
    grid-column: span 2;
    grid-row: 1;
    align-self: center;
    justify-self: center;
    max-width: 440px;
  }

  h1 {
    grid-column: span 2;
    grid-row: 2;
    justify-self: center;
  }
}
@media only screen and (max-width: 600px) {
  span.name {
    font-size: 48px;
  }
}
</style>