/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import AppHeader from "../components/Header.vue";
import AppNavbar from "../components/Nav.vue";
import AppFooter from "../components/Footer.vue";

Vue.use(BootstrapVue)
Vue.component('AppHeader', AppHeader);
Vue.component('AppNavbar', AppNavbar);
Vue.component('AppFooter', AppFooter);

