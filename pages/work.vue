<template>
  <section class="grey-1 container flex row wrap">
    <div class="title-area wave mt-24">
      <div class="title-box blue-bg-11 py-12">
        <h2 class="title">Recent Work</h2>
      </div>
    </div>
    <div class="content-area mt-24">
      <div class="flex row wrap pb-94 justify-center">
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
      <div class="flex row wrap pb-94 justify-center">
        
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
      <div class="flex row wrap pb-94 justify-center">
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
    components: { IconLaunch },
    data() {
      return {
        title: 'Nick Rosen | Work'
      }
    },
    head () {
      return {
          title: this.title,
          meta: [
              // hid is used as unique identifier. Do not use `vmid` for it as it will not work
              { hid: 'description', name: 'description', content: 'Nick Rosen Portfolio Recent Work Page' }
          ]
      }
    }
  }
</script>

<style scoped>
/* elements */

p{
  margin-top: 8px;
  margin-bottom: 24px;
}
h3{
  margin: 0;
}

img{
  width: 100%;
  max-width: 460px;
  min-width: 200px;
  border-radius: 4px;
}
a.work-link{
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  color: var(--blue-1);
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
.launch-icon{
  fill: var(--blue-1);
  transition: all 0.5s ease;
}
@media only screen and (max-width: 936px) {
  .frame{
    order: 1;
  }
  .right-col, .left-col{
    order: 2;
  }
}
</style>