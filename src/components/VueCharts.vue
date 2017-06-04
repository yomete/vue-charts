<template>
  <section class="container">
    <h1>Demo examples of vue-charts</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <chartjs-line></chartjs-line>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <chartjs-bar></chartjs-bar>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Radra Chart</h3>
        <chartjs-radar></chartjs-radar>
      </div>
      <div class="column">
        <h3>Data Binding Line Chart</h3>
        <input v-on:keyup.enter="addData" placeholder="Add a Data" v-model="dataentry">
        <input v-on:keyup.enter="addLabel" placeholder="Add a Label" v-model="datalabel">
        <chartjs-line :labels="labels" :data="dataset" :bind="true"></chartjs-line>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'VueCharts',
    data () {
      return {
        dataentry: null,
        datalabel: null,
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        dataset: [65, 59, 80, 81, 56, 55, 40]
      }
    },
    methods: {
      addData () {
        this.dataset.push(this.dataentry)
        this.dataentry = ''
      },
      addLabel () {
        this.labels.push(this.datalabel)
        this.datalabel = ''
      }
    }
  }
</script>

<style scoped></style>
