import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router.js'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
