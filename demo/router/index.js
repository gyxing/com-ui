import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

let router = [];
let children = [];

// 子页面
let R = {
    'start': r => require.ensure([], () => r(require('../pages/start')), 'start'),
    'icon': r => require.ensure([], () => r(require('../pages/icon')), 'icon'),
    'button': r => require.ensure([], () => r(require('../pages/button')), 'button'),
    'layout': r => require.ensure([], () => r(require('../pages/layout')), 'layout'),
    'modal': r => require.ensure([], () => r(require('../pages/modal')), 'modal'),
    'table': r => require.ensure([], () => r(require('../pages/table')), 'table'),
    'loading': r => require.ensure([], () => r(require('../pages/loading')), 'loading'),
    'code': r => require.ensure([], () => r(require('../pages/code')), 'code'),
};
for (let x in R) {
    children.push({path: `/${x}`, name: x, component: R[x]})
}
// 首页
let index = r => require.ensure([], () => r(require('../pages/index')), 'home');

router.push(
    {path: '/', component: index},
    {
        path: '/',
        component: resolve => require(['../layout/index'], resolve),
        children: children
    });
let routers = new VueRouter({
    routes: router,
    // mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return savedPosition || {x: 0, y: 0}
    }
})

export default routers
