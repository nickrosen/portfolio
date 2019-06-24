<template>
  <section>
    <div
      class="work-item"
      v-for="(work, index) in detailedWorks"
      :key="index"
    >
      <h2 class="work-title">{{work.title}}</h2>
      <img
        :src="work.img"
        :class="$store.state.theme"
        :alt="`${work.title} screenshot`"
        class="stripe-shadow work-img"
      >
      <div v-if="work.overview.length">
        <h3 class="subheading">Problem: </h3>
        <p>{{work.overview[0]}}</p>
      </div>
      <div v-if="work.overview.length">
        <h3 class="subheading">Solution: </h3>
        <p>{{work.overview[1]}}</p>
      </div>
      <div v-if="work.overview.length">
        <h3 class="subheading">Result: </h3>
        <p>{{work.overview[2]}}</p>
      </div>
      <div
        class="desc"
        v-if="!work.overview.length"
      >
        <h3 class="subheading">Summary: </h3>
        <p>{{work.description}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      detailedWorks: [
        {
          title: "Responsive Dev Tools",
          description:
            "This new side project is a work in progress.  This is a tool for developers to load up their site from production or local server in multiple frame sizes in one browser window for faster, easier responsive styling.  My plan is to keep adding features that will save me time during the dev process.",
          overview: [
            "I’m wasting time dragging my window size or using the responsive/device sizing tools in the various browser tools to make sure my site looks right at any size.",
            "One browser tab where you can enter a url and display it in multiple sizes/breakpoints at one time and set zoom level for the various views so you can see as many different sizes as you’d like at one time.",
            "This is a new project but thus far I have built a MVP and will keep adding features that will save me time during the dev process."
          ],
          img: "/img/responsive_dev_tool.jpg"
        },
        {
          title: "Cloud Sync/Automantion App",
          description:
            "Building this at work right now.  This cloud app is an ever expanding tool to sync and automate processes across Calendly, G Suite, SendGrid and Salesforce.  The long term plan is to use this app to make Salesforce the only tool our team needs to do their job and keep data and leads from falling through the cracks.",
          overview: [
            "With lots of disconnected systems in use, there was a lot of manual entry and duplication from one tool to another which leads to wasted time, boredom and errors.",
            "A cloud app that accepts web hook posts from the various services we use and parses out the data and completes a sequence of steps to unify data and kick off automated processes, while saving raw data to a database for posterity and syncing all data into Salesforce as the company’s source of truth.",
            "As of writing this, the app is saving two people about an hour and a half each week.  I am particularly proud of this app because it’s both saving people time and removing monotonous tasks from their to do lists. I hope to continue building to keep saving more people more time."
          ],
          img: "/img/cloud_app.jpg"
        },
        {
          title: "SoldKey",
          description:
            "This project has been interesting, time consuming, frustrating, a great learning experience and a major focus for my employer.",
          overview: [
            "I work for a real estate investment company that buys houses off-market direct from the owner to save on fees.  Sourcing these types of deals is expensive and their is a lot of competition.",
            "We thought we’d differentiate by building a better site to move potential sellers further down our sales funnel by providing an estimated offer, online appointment scheduling, integrated chat and improve overall transparency into the process.",
            "None of these changes have resulted in any measurable improvement in conversion when compared to the old site, digital marketing has been largely unsuccessful in generating repeatable results."
          ],
          img: "/img/soldkey.jpg"
        },
        {
          title: "Apartment Worth",
          description:
            "This is basically the same thing as SoldKey above, owned by the same company but with the goal of buying multifamily properties rather than single family.  Problem, solutions and results basically the same as SoldKey as we experimented in tandem.  The only real difference here is that our valuation tool is an internally developed algorithm rather than a third party valuation.",
          overview: [],
          img: "/img/apartment_worth.jpg"
        },
        {
          title: "ESET",
          description:
            "I worked as a full stack dev at ESET focusing on front end for about 2 years.  I worked on a wide range of projects from internal analytics and data visualization apps, to java templating in our knowledge management system but primarily focused on eCommerce.  I was able to lead initiatives that quantifiably improved performance and conversions at various levels of our digital funnel.",
          overview: [],
          img: "/img/eset.jpg"
        },
        {
          title: "Murphy Dev",
          description:
            "I’ve been working with Murphy Dev since 2013 when I redesigned and built them a new Wordpress site.  I included this site because I love that it is still kicking along pretty well.  In my opinion, the design has held up and the performance is still pretty good considering it’s running a big customized off the shelf Wordpress theme.  Any time I do some work on this app I can’t help but appreciate how far I’ve come as a developer since I built this and get excited about where I’ll be 6 years from now.",
          overview: [],
          img: "/img/murphy_dev.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.desc {
  grid-column: span 2;
}
.work-img {
  grid-column: 1 / -1;
  margin-bottom: 20px;
}
.work-item {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 40px;
  margin: 20px 0 40px;
}
.summary-work-item {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 40px;
  margin: 20px 0 40px;
}
img {
  width: 100%;
  height: auto;
}
p {
  margin-top: 10px;
}
.work-title {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  margin: 0;
}
.subheading {
  margin: 0;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500;
  font-size: 20px;
  color: hsl(211, 12%, 43%);
  border-bottom: 1px solid hsl(210, 16%, 82%);
  display: inline-block;
}
</style>