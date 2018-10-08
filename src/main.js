import Vue from 'vue'
import App from './App.vue'
import Com_UI from './components/index'

Vue.use(Com_UI);

new Vue({
    el: '#app',
    render: h => h(App)
})
