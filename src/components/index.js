// import Vue from 'vue';
import './iconfont.js';
import Icon from './Icon.vue';

// Vue.component('Icon', ()=>import('./Icon.vue'));

const G_Com_UI = {
    install(Vue, options) {
        Vue.component(Icon.name, Icon);
    }
};

export default G_Com_UI;
