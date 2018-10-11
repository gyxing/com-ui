import Icon from './Icon/index';

const version = '__VERSION__';
const components = {
    Icon
};

function install (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.use(components[key]);
    });
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export {
    version,
    Icon
}

export default {
    version,
    install,
    ...components
};