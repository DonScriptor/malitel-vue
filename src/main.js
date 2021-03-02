/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ApiService from "@/services/api.service";
/******** Settings ******* */
import './settigns/components-library';
import './settigns/stylesheets';
import './settigns/fa.config';
import './settigns/validation.config';


Vue.config.productionTip = false;

// Initializing axios
ApiService.init();



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
