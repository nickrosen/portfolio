<template>
  <section class="container">
    <p>Please feel free to reach out via twitter, email, or text message (619) 354-9149.</p>
    <p>It's a Google Voice number, I'm not crazy.</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Nick Rosen | Contact'
      }
    },
    head () {
      return {
          title: this.title,
          meta: [
              // hid is used as unique identifier. Do not use `vmid` for it as it will not work
              { hid: 'description', name: 'description', content: 'Nick Rosen Portfolio Contact Page' }
          ]
      }
    }
  }
</script>

<style scoped>

</style>