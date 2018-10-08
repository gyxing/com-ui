import Vue from 'vue'
import App from './App.vue'
import G_Com_UI from './components/index'

Vue.use(G_Com_UI);

new Vue({
    el: '#app',
    render: h => h(App)
})
