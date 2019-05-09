import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Element, { locale });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
