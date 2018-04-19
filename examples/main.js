import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import '../node_modules/highlight.js/styles/color-brewer.css'
import './assets/css/reset.less'
import './assets/css/md.less'
import TbUi from '../packages/index'
Vue.component('demo-block', demoBlock)
Vue.use(TbUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
