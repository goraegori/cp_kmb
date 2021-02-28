import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vueMoment from 'vue-moment'
var momentDurationFormatSetup = require("moment-duration-format");


Vue.config.productionTip = false
Vue.use(vueMoment)
momentDurationFormatSetup(Vue.moment);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
