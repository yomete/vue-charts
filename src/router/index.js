import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueChartJS from '@/components/VueChartJS'
import VueChartKick from '@/components/VueChartKick'
import VueCharts from '@/components/VueCharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
