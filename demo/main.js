import 'babel-polyfill'
import Vue from 'vue';
import simui from '../src';
import App from './App';
import router from './router'
import './css/main.less';

Vue.use(simui);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});