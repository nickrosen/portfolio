<template>
  <section class="grey-1 container flex row wrap">
    <div class="title-area wave mt-24">
      <div class="title-box blue-bg-11 py-12">
        <h2 class="title">Recent Work</h2>
      </div>
    </div>
    <div class="content-area mt-24">
      <div class="flex row wrap pb-94 work-row">
        <div class="frame">
          <img src="~/assets/img/soldkey.jpg">
        </div>
        <div class="right-col pt-40">
          <div class="blue-bg-11 border-y mb-24">
            <h2 class="headline">SoldKey</h2>
          </div>
          <h3>Technology:</h3>
          <p>HTML, CSS, Vue JS, Nuxt, AWS Lambda, Firebase</p>
          <h3>Goal:</h3>
          <p>Make home selling easier. Soldkey.com is a tool for users to get an estimate of their home's value and schedule a home evaluation to facilitate an offer to buy.</p>
          <a class="work-link" href="https://soldkey.com" target="_blank">
            <span>SoldKey.com</span>
            <icon-launch class="launch-icon"/>
          </a>
        </div>
      </div>
      <div class="flex row wrap pb-94 work-row">
        
        <div class="left-col pt-40">
          <div class="blue-bg-11 border-y mb-24">
            <h2 class="headline">Apartment Worth</h2>
          </div>
          <h3>Technology:</h3>
          <p>HTML, CSS, Vue JS, Nuxt, AWS Lambda, Firebase</p>
          <h3>Goal:</h3>
          <p>Make selling a multifamily properties easier.  Apartmentworth.com lets the user get an instant offer for their property.</p>
          <a class="work-link" href="https://soldkey.com" target="_blank">
            <span>ApartmentWorth.com</span>
            <icon-launch class="launch-icon"/>
          </a>
        </div>
        <div class="frame">
          <img src="~/assets/img/aw.jpg">
        </div>
      </div>
      <div class="flex row wrap pb-94 work-row">
        <div class="frame">
          <img src="~/assets/img/eset.jpg">
        </div>
        <div class="right-col pt-40">
          <div class="blue-bg-11 border-y mb-24">
            <h2 class="headline">ESET</h2>
          </div>
          <h3>Technology:</h3>
          <p>HTML, CSS, PHP, JS, AngularJS, MySQL, Java</p>
          <h3>Goal:</h3>
          <p>Allow users to learn about, purchase and renew internet securty software.</p>
          <a class="work-link" href="https://soldkey.com" target="_blank">
            <span>ESET.com</span>
            <icon-launch class="launch-icon"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import IconLaunch from '~/components/IconLaunch.vue'
  export default {
    components: { IconLaunch }
  }
</script>

<style scoped>

.tl{
  position: relative;
  left: -120px;
  margin-bottom: 24px;
}
.pt-40{
  padding-top: 40px;
}
.py-36{
  padding-top: 36px;
  padding-bottom: 36px;
}
.pb-94{
  /* padding-top: 36px; */
  padding-bottom: 94px;
}

.work-title{
  margin-top: 0;
}
.launch-icon{
  fill: var(--blue-1);
  transition: all 0.5s ease;
}
a.work-link{
  display: inline-flex;
  align-items: center;
  /* background-color: var(--grey-1); */
  text-decoration: none;
  font-weight: 400;
  color: var(--blue-1);
  /* font-weight: bold; */
  padding: 8px 16px;
  border-left: 2px solid var(--blue-1);
  border-top: 2px solid var(--blue-1);
  transition: all 0.5s ease;
}
a.work-link > span { 
  margin-right: 16px;
}
a.work-link:hover{
  background-color: var(--blue-1);
  color: var(--blue-10);
}
a.work-link:hover > .launch-icon{
  fill: var(--blue-10);
}


p{
  margin-top: 8px;
  margin-bottom: 24px;
}
h3{
  margin: 0;
}
.work-card{
  border: 2px solid var(--blue-10);
  border-radius: 4px;
  overflow: hidden;
  grid-column: span 2;
}
.work-card > div{
  padding: 0 18px;
}
.grid{
  display: grid;
  grid-gap: 36px;
  grid-template-columns: repeat(4, 1fr)
}
img{
  width: 100%;
  max-width: 460px;
  min-width: 200px;
  border-radius: 4px;
}
.mb-64{
  margin-bottom: 64px;
}
</style>