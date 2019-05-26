<template>
  <section class="home-page">
    <div class="img-col">
      <img
        src="~/assets/img/me.png"
        alt="me-face"
      >
      <div class="box-1"></div>
      <div class="box-2"></div>
      <div class="box-3"></div>
      <div class="box-4"></div>
      <div class="box-5"></div>
    </div>
    <div class="text-col">
      <div class="hi">Hi,</div>
      <div class="intro">
        <h1>
          <span> I'm Nick Rosen.</span>
          <span>I design & build</span>
          <span> web apps.</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.img-col > div {
  height: 100%;
  width: 100%;
  background-color: var(--primary-1);
  z-index: 0;
  transition: all 0.2s;
}
.img-col > div:hover {
  background-color: var(--primary-2);
}
.box-1 {
  grid-column: 1;
  grid-row: 1;
}
.box-2 {
  grid-column: 2;
  grid-row: 1;
}
.box-3 {
  grid-column: 1;
  grid-row: 2;
}
.box-4 {
  grid-column: 2;
  grid-row: 2;
}
.box-5 {
  grid-column: 1 / -1;
  grid-row: 3 / 5;
}

.text-col {
  grid-column: 1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: start;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr 1fr;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  width: 100%;
  height: 100%;
}
.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-1);
  width: 100%;
  padding: 20px;
  margin: 0;
  grid-column: 1;
  grid-row: 2;
  width: 100%;
}
.intro > h1 {
  font-size: 4.2vw;
  margin: 0;
  line-height: 1.2;
  color: var(--primary);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}

.hi {
  /* border: 1px solid var(--primary-border); */
  line-height: 1;
  font-size: 25vw;
  background-color: var(--primary-1);
  color: var(--primary);
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  padding: 20px;
  display: flex;
  align-items: center;
  line-height: 0;
  justify-content: center;
}
.home-page {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.img-col {
  height: 100%;
  width: 100%;
  grid-column: 2;
  grid-row: 1 / -1;
  align-self: start;
  justify-self: start;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
.img-col > img {
  width: 100%;
  height: auto;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: end;
  justify-self: center;
  /* border: 1px solid var(--primary-border); */
}
@media only screen and (max-width: 900px) {
  .home-page {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
  }
  .img-col {
    grid-column: 1 / -1;
    grid-row: 2;
    grid-gap: 10px;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .img-col > img {
    grid-column: 2;
    grid-row: 1 / -1;
  }
  .img-col > div {
    height: 100%;
    width: 100%;
    background-color: var(--primary-1);
    z-index: 0;
    transition: all 0.2s;
  }
  .box-1 {
    grid-column: 1;
    grid-row: 1;
  }
  .box-2 {
    grid-column: 1;
    grid-row: 2;
  }
  .box-3 {
    grid-column: 3;
    grid-row: 1;
  }
  .box-4 {
    grid-column: 3;
    grid-row: 2;
  }
  .box-5 {
    grid-column: 2;
    grid-row: 1 / -1;
  }
  .text-col {
    grid-column: 1 / -1;
    grid-row: 1;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: auto; */
  }
  .hi {
    grid-column: 1;
    grid-row: 1;
  }
  .intro {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}
@media only screen and (max-width: 653px) {
}
</style>