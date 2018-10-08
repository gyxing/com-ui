// import Vue from 'vue';
import './iconfont.js';

// Vue.component('Icon', ()=>import('./Icon.vue'));

const Com_UI = {
    install(Vue, options) {
        Vue.component('Icon', ()=>import('./Icon.vue'));
    }
};

export default Com_UI;
