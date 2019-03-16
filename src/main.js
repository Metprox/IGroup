import Vue from 'vue';
import App from './App';
import router from './router';
import {store} from './store';
import Typograf from 'typograf';
import VueValidate from 'vee-validate'
import {dictionary} from './validate';

import ShareLink from './tools/share';
import Helpers from '@/tools/Helpers';

import "./assets/scss/app.scss";
import 'swiper/dist/css/swiper.css'

import VueYoutube from 'vue-youtube';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import VueScrollTo from 'vue-scrollto';
import Vuebar from 'vuebar';

Vue.use(VueValidate, {
    locale: 'ru',
    dictionary: {
        en: dictionary.en,
        ru: dictionary.ru
    }
});

Vue.use(VueYoutube);
Vue.use(VueAwesomeSwiper);

Vue.use(VueScrollTo);
Vue.use(Vuebar);

let Tp = new Typograf({locale: ['ru', 'en-US']});
Vue.directive('typograph', {
    bind: (el, binding, vnode) => {
        el.innerHTML = Tp.execute(el.innerHTML)
    }
});

Vue.use(ShareLink);


Vue.config.productionTip = false;

new Vue({
    data() {
        return {
            Helpers,
            isMobile: false,
        }
    },
    el: '#app',
    store,
    router,
    template: '<App/>',
    created() {
        window.vue = this;
        this.isMobile = this.Helpers.isMobile();
    },
    components: {App}
});
