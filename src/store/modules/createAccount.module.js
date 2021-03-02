import ApiService from "@/services/api.service";
import JwtService from "@/services/jwt.service";
import {
  SEND_VERIFICATION_CODE,
  VALIDATE_CODE,
  CREATE_ACCOUNT
} from "../actions.types";
import {
  SET_REGISTRATION_INFO,
  SET_ERROR,
  SET_VERIFICATION_START,
  SET_VERIFICATION_DONE,
  SET_CONFIRMED_PASSWORD
} from "../mutations.types";

const state = {
  verifyUser: {
    registerBy: null,
    username: null,
    captcha: null,
    serviceMode: null
  },
  verificationCode: null,
  isVerificationCodeSent: null,
  isVerificationCodeVerified: null,
  isPasswordConfirmed: null,
  password: null,
  errors: null
};

const getters = {
  currentCredentials(state) {
    return state.verifyNumber;
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_REGISTRATION_INFO](state, credentials) {
    state.verifyUser.username = credentials.username;
    state.verifyUser.registerBy = credentials.registerBy;
    state.verifyUser.serviceMode = "REGISTER";
  },
  [SET_VERIFICATION_START](state) {
    state.isVerificationCodeSent = true;
  },
  [SET_VERIFICATION_DONE](state, code) {
    state.isVerificationCodeVerified = true;
    state.verificationCode = code;
  },
  [SET_CONFIRMED_PASSWORD](state, password) {
    state.isPasswordConfirmed = true;
    state.password = password;
  }
};

const actions = {
  [SEND_VERIFICATION_CODE](context, credentials) {
    context.commit(SET_REGISTRATION_INFO, credentials);
    const state = context.state;
    const user = {
      // needs stringfy after setting header to accept json
      "register-by": state.verifyUser.registerBy,
      username: state.verifyUser.username,
      captcha: "",
      "service-mode": state.verifyUser.serviceMode
    };
    return new Promise(resolve => {
      ApiService.post("users/send-verify-code", user)
        .then(({ data }) => {
          context.commit(SET_VERIFICATION_START);
          console.log("#################################### ", context.state);
          resolve(data);
        })
        .catch(({ response }) => {
          console.log("#################################### ", user);
          console.log("#################################### ", context.state);

          //   context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [VALIDATE_CODE](context, code) {
    const state = context.state;
    const user = {
      username: state.verifyUser.username,
      "verification-code": code
    };
    return new Promise(resolve => {
      ApiService.post("users/validate-verification-code", user)
        .then(({ data }) => {
          context.commit(SET_VERIFICATION_DONE, code);
          console.log("#################################### ", context.state);
          resolve(data);
        })
        .catch(({ response }) => {
          //   context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [CREATE_ACCOUNT](context, password) {
    context.commit(SET_CONFIRMED_PASSWORD, password);
    const state = context.state;
    const user = {
      "register-by": state.verifyUser.registerBy,
      username: state.verifyUser.username,
      password: state.password,
      email: "",
      "verification-code": state.verificationCode
    };
    return new Promise(resolve => {
      ApiService.post("users/create-account", user)
        .then(({ data }) => {
          console.log("account created: ", data);
          console.log("#################################### ", state);
          resolve(data);
        })
        .catch(({ response }) => {
          //   context.commit(SET_ERROR, response.data.errors);
        });
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
