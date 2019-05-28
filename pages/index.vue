<template>
  <section class="home-page">
    <div class="box-1">
      <h1>
        <span>Hi,</span>
        <span> I'm Nick Rosen.</span>
        <span>I design & build</span>
        <span> web apps.</span>
      </h1>
    </div>
    <div class="box-2"></div>
    <div class="box-3"></div>
    <div class="box-4"></div>
    <div class="box-5"></div>
    <div class="box-6"></div>
    <div class="box-7"></div>
    <div class="box-8"></div>
    <div class="box-9">
      <img
        src="~/assets/img/me.png"
        alt="me-face"
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
.home-page {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
.home-page > div {
  background-color: hsl(205, 67%, 45%);
  /* box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1); */
}
.box-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-2 {
  grid-column: 1;
  grid-row: 4;
}
.box-3 {
  grid-column: 2;
  grid-row: 4;
}
.box-4 {
  grid-column: 3;
  grid-row: 1;
}
.box-5 {
  grid-column: 4;
  grid-row: 1;
}
.box-6 {
  grid-column: 3;
  grid-row: 2;
}
.box-7 {
  grid-column: 4;
  grid-row: 2;
}
.box-8 {
  grid-column: 3 / span 2;
  grid-row: 3 / span 2;
}
.home-page > div.box-9 {
  grid-column: 3 / span 2;
  grid-row: 1 / -1;
  background-color: transparent;
  display: flex;
  align-items: flex-end;
}

h1 {
  font-size: 4.2vw;
  margin: 0;
  line-height: 1.2;
  grid-row: 1 / 4;
  grid-column: 1 / -1;
  color: hsl(210, 36%, 96%);
  padding: 20px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}

@media only screen and (max-width: 900px) {
  .home-page {
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
  }
  .box-1 {
    grid-column: 1 / span 3;
    grid-row: 1;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
  .box-2 {
    grid-column: 4;
    grid-row: 1;
  }
  .box-3 {
    grid-column: 1;
    grid-row: 2;
  }
  .box-4 {
    display: none;
  }
  .box-5 {
    display: none;
  }
  .box-6 {
    display: none;
  }
  .box-7 {
    display: none;
  }
  .box-8 {
    grid-column: 2 / span 3;
    grid-row: 2;
  }
  .home-page > div.box-9 {
    grid-column: 2 / span 3;
    grid-row: 1 / -1;
    background-color: transparent;
    display: flex;
    align-items: flex-end;
  }
  h1 {
    font-size: 6vw;
  }
}
</style>