// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueLocalStorage from 'vue-localstorage'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
window.$ = window.jQuery = require('jquery')

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueLocalStorage);
Vue.use(axios, VueAxios);
Vue.use({
  install: function(Vue, options){
      Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
  }
})

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
