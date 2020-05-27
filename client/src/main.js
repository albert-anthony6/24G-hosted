import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import Home from './pages/Home.page';
import LogIn from './pages/LogIn.page';

Vue.config.productionTip = false
Vue.use(VueRouter);

// Setting up routers
const routes = [
  { path: '/', component: Home},
  { path: '/login', component: LogIn}
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
