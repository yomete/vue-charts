<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1>Creating Beautiful Charts Using Vue.js Wrappers For Chart.js</h1>
        <h2>A SitePoint Tutorial</h2>
        <ul>
          <li><router-link to="/chartjs">vue-chartjs</router-link></li>
          <li><router-link to="/charts">vue-charts</router-link></li>
          <li><router-link to="/chartkick">vue-chartkick</router-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
    text-decoration: underline;
  }
</style>
