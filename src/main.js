/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
/******** Settings ******* */
import './settigns/components-library';
import './settigns/stylesheets';
import './settigns/fa.config';

// import './stylesheets/main.scss';

Vue.config.productionTip = false;






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
