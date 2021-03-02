<template>
  <div>
    <div class="generic_form_header">
      <h3>Create Your Account</h3>
      <p>Access your info, Pay your bills, Check your internet</p>
    </div>

    <b-form class="generic_form" @submit.prevent="handleSubmit">
      <!-- set mobile registraion -->
      <b-form-group label="Choose Registraion Method">
        <b-form-radio-group
          v-model="registerBy"
          :options="options"
          name="radio-inline"
        ></b-form-radio-group>
      </b-form-group>
      <!-- set mobile registraion -->

      <!-- set  email registraion -->
      <template v-if="registerBy == 'EMAIL'">
        <b-form-group label="Enter Your Email Adress">
          <b-form-input
            placeholder="Add Your Email Adress"
            type="email"
            name="email"
            v-validate="'required'"
            v-model="username"
          ></b-form-input>
          <p class="invalid-feedback" v-if="errors.has('email')">
            {{ errors.first("email") }}
          </p>
        </b-form-group>
      </template>
      <!-- set  email registraion -->

      <!-- phone number -->
      <template v-else>
        <b-form-group label="Enter Your Phone Number">
          <b-form-input
            placeholder="Add Your Mobile Number"
            type="number"
            name="number"
            v-validate="'required'"
            v-model="username"
          ></b-form-input>
          <p class="invalid-feedback" v-if="errors.has('number')">
            {{ errors.first("number") }}
          </p>
        </b-form-group>
      </template>
      {{ registerBy }}
      {{ username }}
      <!-- password -->

      <!-- forgot password/remember me -->
      <b-form-group class="force-inline">
        <input
          class="form-check-input"
          type="checkbox"
          v-validate="'required'"
          name="terms"
          id="invalidCheck"
        />
        <label class="form-check-label" for="invalidCheck">
          Agree to terms and conditions
        </label>
        <p class="invalid-feedback" v-if="errors.has('terms')">
          {{ errors.first("terms") }}
        </p>
        <span>forgot pass?</span>
      </b-form-group>

      <vue-recaptcha :sitekey="key"> </vue-recaptcha>

      <div class="generic_form_action">
        <!-- <b-link> -->
        <b-button
          block
          pill
          @click="handleSubmit()"
          :disabled="errors.items.length > 0"
        >
          Verify Number <font-awesome-icon icon="long-arrow-alt-right" />
        </b-button>
        <!-- </b-link> -->
      </div>
    </b-form>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import { SEND_VERIFICATION_CODE } from "@/store/actions.types";
export default {
  components: { VueRecaptcha },
  data() {
    return {
      options: [
        { text: "Register Using Phone Number", value: "MOBILE" },
        { text: "Register Using Email", value: "EMAIL" }
      ],
      username: null,
      registerBy: "EMAIL",
      key: "6Lfp2MQUAAAAAPOO3thVMqtV8sb5mE9rhDjI6WtT"
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then(result => {
        console.log("validation is: ", result);
        if (result) {
          const user = {
            username: this.username,
            registerBy: this.registerBy
          };
          this.$store.dispatch(SEND_VERIFICATION_CODE, user).then(data => {
            console.log(data, " verification data response");
            this.$router.push({ name: "verify-number" });
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
