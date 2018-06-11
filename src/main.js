// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import dayjs from 'dayjs'
import VueSplitPane from 'vue-splitpane'

/* css */
import 'normalize.css'
import './assets/less/vue-markdown.less'
// import '../bower_components/bttn.css/dist/bttn.min.css'

Vue.config.productionTip = false

Vue.component('split-pane', VueSplitPane);
Vue.prototype.$dayjs = dayjs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
