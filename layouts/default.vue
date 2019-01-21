<template>
  <div class="flex-layout flex column space-between blue-bg-11">
    <app-header class="mb-24" />
    <nuxt />
    <app-footer class="mt-48" />
  </div>
</template>
<script>
  import AppHeader from '~/components/AppHeader.vue'
  import AppFooter from '~/components/AppFooter.vue'
  export default {
    components: { AppHeader, AppFooter }
  }
</script>

<style> 
.justify-end{
  justify-content: flex-end;
}

.mt-48 {
  margin-top: 48px;
}
.f-border {
  border-top: 1px solid var(--blue-10);
}
.my-60{
  margin-top: 48px;
  margin-bottom: 48px;
}
.mb-48{
  margin-bottom: 48px;
}

.my-auto{
  margin-top: auto;
  margin-bottom: auto;
}
#initials{
  font-size: 60vh;
  font-family: 'PT Serif', serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.3);
  /* color: rgba(0, 0, 0, 0.1); */
  position: absolute;
  top: 0;
  left: -2vh;
  z-index: 0;
}
.rel{
  position: relative;
}
.py-18{
  padding-top: 18px;
  padding-bottom: 18px;
}
.px-18 {
  padding-left: 18px;
  padding-right: 18px;
}
.justify-center{
  justify-content: center;
}
.flex{
  display: flex;
}
.align-center{
  align-items: center;
}
.row{
  flex-direction: row;
}
.column{
  flex-direction: column;
}
.wrap{
  flex-wrap: wrap;
}
.space-between{
  justify-content: space-between;
}

.container{
	width: 100%;
	max-width: 1240px;
	padding: 0 18px;
	margin: 0 auto;
}

.flex-layout{
  height: 100%;
  min-height: 100vh;
}

</style>
