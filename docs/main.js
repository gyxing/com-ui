import Vue from 'vue';
import GComUI from '../src';
import App from './App';
Vue.use(GComUI);

const app = new Vue({
  ...App
});

app.$mount('#app');
