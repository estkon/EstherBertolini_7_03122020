import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './axios'
import store from './vuex'
import moment from 'moment'
import 'moment/min/locales';

Vue.config.productionTip = false

moment.locale('fr')

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('d  MMMM Y HH:mm')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
