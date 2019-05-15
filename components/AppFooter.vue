<template>
  <section>
    <footer class="container">
      <div class="flex row wrap space-between border">
        <div class="flex row wrap">
          <div class="py-18">
            <a href="mailto:hinickrosen@gmail.com?Subject=Hello" target="_top" class="nav-link flex align-center mr-36">
              <icon-email class="nav-link-icon mr-6"/>
              <span>HiNickRosen@gmail.com</span>
            </a>
          </div>
          <div class="py-18">
            <a href="https://twitter.com/NickRosenSD" target="_blank" class="nav-link flex align-center mr-36">
              <icon-twitter class="nav-link-icon mr-6"/>
              <span>NickRosenSD</span>
            </a>
          </div>
        </div>
        <div class="py-18">
          <a href="https://github.com/nickrosen/portfolio" target="_blank" class="nav-link flex align-center">
            <icon-code class="nav-link-icon mr-6"/>
            <span>Code</span>
          </a>
        </div>
      </div>
    </footer>
  </section>  
</template>

<script>
import IconEmail from '~/components/IconEmail.vue'
import IconCode from '~/components/IconCode.vue'
import IconTwitter from '~/components/IconTwitter.vue'
export default {
  components: { IconEmail, IconCode, IconTwitter }
};
</script>

<style scoped>
.border {
  border-top: 1px solid var(--blue-10);
}
.mr-6 { margin-right: 6px; }
.mr-36 { margin-right: 36px; }

</style>