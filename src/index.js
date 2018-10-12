import './styles';
import Button from './button';
import Icon from './icon';
import Modal from './modal';
import Table from './table';
import {Layout, Content, Footer, Header, Sider} from './layout';
import Loading from './loading';
import Code from './code';
import Timer from './timer';

const version = '__VERSION__';
const components = {
    Icon, Button, Modal, Table, Layout, Content, Footer, Header, Sider, Loading, Code, Timer
};

const install = function (Vue, opts = {}) {
    for(let key in components){
        Vue.component(key, components[key]);
    }
};
if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export {
    version,
    Icon, Button, Modal, Table, Layout, Content, Footer, Header, Sider, Loading, Code, Timer
}

export default {
    version,
    install,
    ...components
};
