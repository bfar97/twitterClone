// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import Intro from './components/Intro.vue'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = new VueRouter({
  routes: [
    { path: '/', component: Intro },
    { path: '/home', component: Home },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routes,
  template: '<App/>',
  components: { App }
})
