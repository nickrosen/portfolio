<template>
  <section class="contact-section">

    <div>
      <ui-link-round
        class="contact-link"
        v-for="(contact, index) in contacts"
        :key="index"
        :title="contact.title"
        :link="contact.link"
      ></ui-link-round>

    </div>
  </section>
</template>

<script>
import IconEmail from "~/components/IconEmail.vue";
import IconCode from "~/components/IconCode.vue";
import IconTwitter from "~/components/IconTwitter.vue";
import UiLinkRound from "~/components/UiLinkRound.vue";
export default {
  data() {
    return {
      title: "Nick Rosen | Contact",
      contacts: [
        {
          title: "Send me an email",
          icon: "",
          link: "mailto:hinickrosen@gmail.com?Subject=Hello",
          target: "_top"
        },
        {
          title: "Find me on twitter",
          icon: "",
          link: "https://twitter.com/NickRosenSD",
          target: "_blank"
        }
      ]
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Nick Rosen Portfolio Contact Page"
        }
      ]
    };
  },
  components: { UiLinkRound, IconEmail, IconCode, IconTwitter }
};
</script>

<style scoped>
.contact-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.contact-link {
  margin-bottom: 40px;
}
</style>

