import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VueChartJS from '@/components/VueChartJS'
import VueChartKick from '@/components/VueChartKick'
import VueCharts from '@/components/VueCharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chartjs',
      name: 'VueChartJS',
      component: VueChartJS
    },
    {
      path: '/chartkick',
      name: 'VueChartKick',
      component: VueChartKick
    },
    {
      path: '/charts',
      name: 'VueCharts',
      component: VueCharts
    }
  ]
})
