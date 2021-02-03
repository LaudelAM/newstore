import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
// import Swal from "sweetalert2";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import {router} from "./router";
import {store} from "./stores";

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {BootstrapVueIcons} from "bootstrap-vue";

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueSweetalert2);

// const Swal = require("sweetalert2");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
