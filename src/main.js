// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import dayjs from 'dayjs'

/* css */
import 'normalize.css'
import './assets/less/vue-markdown.less'

Vue.config.productionTip = false

Vue.prototype.$dayjs = dayjs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
