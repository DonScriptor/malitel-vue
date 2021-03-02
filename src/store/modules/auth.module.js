import ApiService from "@/services/api.service";
import JwtService from "@/services/jwt.service";
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from "../actions.types";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "../mutations.types";
import Vue from "vue";
import { API_URL } from "@/services/endpoints";
import axios from "axios";
import VueAxios from "vue-axios";
import qs from 'querystring';
Vue.use(VueAxios, axios);

export const noAuthHTTP = Vue.axios.create({
  baseURL: API_URL,
  // You can add your headers here
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/x-www-form-urlencoded"
  },
  auth: {
    username: "mattel-app",
    password: "password"
  }
});

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      noAuthHTTP
        .post("oauth/token", qs.stringify(credentials) )
        .then(({ data }) => {
          // context.commit(SET_AUTH, data.user);
          console.log(data, " sign in data from vuex");
          resolve(data);
        })
        .catch(({ response }) => {
          console.log(response)
          // context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("user")
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  }
  //   [UPDATE_USER](context, payload) {
  //     const { email, username, password, image, bio } = payload;
  //     const user = {
  //       email,
  //       username,
  //       bio,
  //       image
  //     };
  //     if (password) {
  //       user.password = password;
  //     }

  //     return ApiService.put("user", user).then(({ data }) => {
  //       context.commit(SET_AUTH, data.user);
  //       return data;
  //     });
  //   }
};

export default {
  state,
  getters,
  actions,
  mutations
};
