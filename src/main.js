import Vue from 'vue'
import App from './app/App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './main.scss'
Vue.config.productionTip = false
import VueClipboard from 'vue-clipboard2'
import './components/components-define'
import store from './store'

Vue.use(VueClipboard)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
