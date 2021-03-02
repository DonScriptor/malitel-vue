<template>
  <div>
    <div class="generic_form_header">
      <h3>Set Your Password, Ahmed</h3>
      <p>Access your info, Pay your bills, Check your internet</p>
    </div>

    <b-form class="generic_form" @submit.prevent="handleSubmit">
      <!-- enter password -->
      <div role="group" class="group-appended">
        <label>Enter Your Password</label>
        <b-input-group>
          <b-form-input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            v-model="password"
            v-validate="'required'"
          ></b-form-input>
          <b-input-group-append>
            <b-button>Show</b-button>
          </b-input-group-append>
          <p class="invalid-feedback" v-if="errors.has('password')">
            {{ errors.first("password") }}
          </p>
        </b-input-group>
      </div>

      <!-- re-enter password -->
      <div role="group" class="group-appended">
        <label>Confirm Your Password</label>
        <b-input-group>
          <b-form-input
            placeholder="Confirm Your Password"
            type="password"
            name="passwordConfirmed"
            v-model="passwordConfirmed"
            v-validate="'required'"
          ></b-form-input>
          <b-input-group-append>
            <b-button>Show</b-button>
          </b-input-group-append>
          <p class="invalid-feedback" v-if="errors.has('passwordConfirmed')">
            {{ errors.first("passwordConfirmed") }}
          </p>
        </b-input-group>
      </div>

      <div class="generic_form_action">
        <b-button block pill @click="handlesubmit">
          Enter <font-awesome-icon icon="long-arrow-alt-right" />
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { CREATE_ACCOUNT } from "@/store/actions.types";
export default {
  data() {
    return {
      password: null,
      passwordConfirmed: null
    };
  },
  methods: {
    handlesubmit() {
      this.$validator
        .validateAll()
        .then(result => {
          console.log("validation status: ", result);
          if (result) {
            this.$store.dispatch(CREATE_ACCOUNT, this.password).then(data => {
              console.log(data, " create account data response");
              this.$router.push({ name: "sign-in" });
            });
          }
        })
        .catch(err => {});
    }
  }
};
</script>
<style lang="scss" scoped>
.form-control {
  border-right: none;
}
.group-appended {
  margin-bottom: 1rem;

  .input-group-append {
    button {
      border-top-right-radius: 22.5px;
      border-color: #979797;
      border-bottom-right-radius: 22.5px;
      border-left: none;
      background: transparent;
      color: $theme_color;
      font-weight: bold;
      text-decoration: underline;
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none !important;
      }
    }
  }
}
</style>
