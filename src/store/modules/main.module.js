import { SET_CURRENT_LOCALE } from "../mutations.types";

const state = {
  currentLocale: "en",
  locales: ["en", "fr"]
};

const getters = {
  currentLocale(state) {
    return state.currentLocale;
  }
};
const mutations = {
  [SET_CURRENT_LOCALE](state, locale) {
    state.currentLocale = locale;
  }
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations
};
