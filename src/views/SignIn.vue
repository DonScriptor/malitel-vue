<template>
  <div>
    <div class="generic_form_header">
      <h3>Sign in to My Malitel</h3>
      <p>Access your info, Pay your bills, Check your internet</p>
    </div>

    <b-form class="generic_form" @submit.prevent="handleSubmit">
      <!-- phone number -->
      <b-form-group label="Enter Your Phone Number">
        <b-form-input
          placeholder="Add Your Mobile Number"
          type="text"
          name="number"
          v-model="user.username"
        ></b-form-input>
      </b-form-group>
      <!-- password -->
      <b-form-group label="Enter Your Password">
        <b-form-input
          placeholder="Enter Your Password"
          type="password"
          name="password"
          v-model="user.password"
        ></b-form-input>
      </b-form-group>

      <!-- forgot password/remember me -->
      <b-form-group class="force-inline">
        <b-form-checkbox-group>
          <b-form-checkbox value="">Rememebr Me </b-form-checkbox>
        </b-form-checkbox-group>
        <span>forgot pass?</span>
      </b-form-group>

      <vue-recaptcha :sitekey="key"> </vue-recaptcha>

      <div class="generic_form_action">
        <!-- <router-link> -->
        <b-button block pill @click="handleSubmit">
          Sign In <font-awesome-icon icon="long-arrow-alt-right" />
        </b-button>
        <!-- </router-link> -->
      </div>
    </b-form>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.types";
export default {
  components: { VueRecaptcha },
  data() {
    return {
      key: "6Lfp2MQUAAAAAPOO3thVMqtV8sb5mE9rhDjI6WtT",
      user: {
        username: null,
        password: null,
        grant_type: "password"
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then(result => {
        console.log(result);
        console.log(this.user);
        if (result) {
          this.$store
            .dispatch(LOGIN, this.user)
            .then(() => this.$router.push({ name: "balance-query" }));
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
