<template>
  <section class="about-section">
    <div>
      <p><span class="page-title">My name is Nick Rosen, </span>I'm a web designer and developer based in San Diego, California. I work at Renovation Realty automating processes, building web apps and, managing digital advertising.</p>
      <p>After trying, and not enjoying, a couple different career paths, I got into web development in 2011 and am so grateful to have found a job I love to do every day.</p>
      <h3>I have worked on a wide range of projects over the years including:</h3>
      <ul>
        <li>Wordpress sites and plugins</li>
        <li>Custom web and email frameworks</li>
        <li>Web ads and landing pages</li>
        <li>eCommerce sites and tools</li>
        <li>Full Stack and Serverless web apps</li>
        <li>CRM Customization & Automation</li>
      </ul>
      <h3>Using some of these technologies:</h3>
      <ul>
        <li>Adobe CC, Sketch, Affinity Design Suite for prototyping and design.</li>
        <li>HTML, CSS, SCSS, Stylus, jQuery, JavaScript, AngularJS, Angular, React and Vue JS for client side code.</li>
        <li>PHP, Node.js, Java, Python for server side code.</li>
        <li>Gulp and Webpack to manage build processes.</li>
        <li>MySQL, SQLite, PostgreSQL, MongoDB, and Firebase for databases.</li>
        <li>Git and SVN for version control</li>
      </ul>
    </div>
    <p class="fw">I’m looking to work on projects using modern technologies to solve interesting problems.</p>
    <div class="text-wrapper">
      <p>I live in Sherman Heights with my wife/bestie Kat and our black lab Cole. In my free time, I like to read, take classes online, and sail boats.</p>
      <p>My favorite thing about being a web developer is learning new skills to solve problems.

      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Nick Rosen | About Me"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "About Nick Rosen" }
      ]
    };
  }
};
</script>

<style scoped>
@media only screen and (min-width: 700px) {
}
</style>