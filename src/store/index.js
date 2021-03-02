import Vue from "vue";
import Vuex from "vuex";

import auth from './modules/auth.module'
import creatAccount from './modules/createAccount.module'
import main from './modules/main.module'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    main,
    auth,
    creatAccount
  }
});
