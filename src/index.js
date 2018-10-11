import Button from './button/index';
import Icon from './icon/index';
import Modal from './modal/index';
import Table from './table/index';

import './styles';

const version = '__VERSION__';
const components = {
    Icon, Button, Modal, Table
};

function install (Vue) {
    Object.keys(components).forEach((key) => {
        Vue.use(components[key]);
    });
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export {
    version,
    Icon, Button, Modal, Table
}

export default {
    version,
    install,
    ...components
};