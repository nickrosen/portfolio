<template>
  <section class="home-page">
    <div class="img-frame">
      <img
        src="~/assets/img/me.png"
        alt="me-face"
      >
    </div>
    <h1 class="intro">
      <span class="hi">Hi,</span>
      <span> I'm Nick Rosen.</span>
      <span>I design & build</span>
      <span> web apps.</span>
    </h1>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.job,
.intro {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 4vw;
  line-height: 1.2;
  color: var(--primary-9);
  display: flex;
  flex-direction: column;
}
.hi {
  line-height: 1.2;
  font-size: 8vw;
}
.intro {
  grid-column: 1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
}

.home-page {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
}
.img-frame {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
  grid-row: 1 / -1;
  align-self: center;
  justify-self: center;
}
.img-frame > img {
  width: 80%;
  max-width: 400px;
  height: auto;
  overflow: hidden;
  border: 1px solid var(--primary-border);
}

p {
  max-width: 530px;
  font-size: 18px;
  line-height: 28px;
  margin: 0 auto;
}
</style>