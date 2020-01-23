import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import http from './services/http';
import HTTPConfig from './config/http';
import VueClipboard from 'vue-clipboard2';
import VueSweetalert2 from 'vue-sweetalert2';

const options = {
  color: '#48bef7',
  failedColor: '#48bef7',
  thickness: '5px',
  transition: {
    speed: '2s',
    opacity: '0.166s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

Vue.use(VueSweetalert2);
Vue.use(VueProgressBar, options);
Vue.use(VueClipboard);
Vue.config.productionTip = false;

const vi = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Vue.prototype.$http = http(HTTPConfig, vi);
Vue.$http = http(HTTPConfig, vi);
