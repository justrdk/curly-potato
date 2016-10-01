// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from './components/Hello';

Vue.use(VueRouter);

const routes = [{
  path: '/hello',
  component: Hello,
}];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
