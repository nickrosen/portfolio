<template>
  <section class="home-page">
    <h1>
      <span>Hello, my name is </span>
      <span class="name">Nick Rosen </span>
      <span>I build websites and apps</span>
    </h1>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home-page {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  width: 100%;
  max-width: 1280px;
  /* border: 1px solid green; */
}
h1 {
  grid-row: 2;
  align-self: center;
  justify-self: start;
  grid-column: 2;
  font-weight: 500;
  color: var(--primary);
}
h1 > span {
  display: block;
}
span.name {
  font-size: 90px;
  font-weight: 900;
  line-height: 1.1;
  position: relative;
  left: -2px;
}
/* @media only screen and (max-width: 1042px) {
  img {
    grid-column: span 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
    max-width: 440px;
    margin: 0;
  }

  h1 {
    grid-column: span 2;
    grid-row: 1;
    justify-self: center;
    align-self: end;
    margin: 0;
  }
} */
/* @media only screen and (max-width: 600px) {
  span.name {
    font-size: 48px;
  }
}
@media only screen and (max-width: 518px) {
  .home-page {
    padding: 0 20px 100px;
  }
  img {
    align-self: start;
    margin: 20px 0;
  }
}
@media only screen and (max-width: 372px) {
} */
</style>