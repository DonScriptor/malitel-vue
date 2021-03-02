<template>
  <div>
    <div>
      <div class="generic_form_header">
        <h3>Verify Your Phone Number</h3>
        <p>Access your info, Pay your bills, Check your internet</p>
      </div>

      <b-form class="generic_form" @submit.prevent="handleSubmit">
        <!-- verification code -->
        <b-form-group label="Enter the verification code">
          <b-form-input
            placeholder="Add Your Mobile Number"
            type="number"
            name="code"
            v-model="code"
            v-validate="'required'"
          ></b-form-input>
          <p class="invalid-feedback" v-if="errors.has('code')">
          {{ errors.first("code") }}
        </p>
        </b-form-group>

        <div class="generic_form_action">
            <b-button block pill @click="handleSubmit">
              Continue <font-awesome-icon icon="long-arrow-alt-right" />
            </b-button>
        </div>
        <b-button block class="m-auto button-raw">
          Didn’t Revice The Code? Resend
          <font-awesome-icon icon="long-arrow-alt-right" />
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { VALIDATE_CODE } from "@/store/actions.types";

export default {
  data() {
    return {
      code: null
    };
  },
  methods: {
    handleSubmit() {
      this.$validator
        .validateAll()
        .then(result => {
          console.log("validation status: ", result);
          if (result) {
            this.$store.dispatch(VALIDATE_CODE, this.code).then(data => {
              console.log(data, " response to verification");
              this.$router.push({ name: "set-password" });
            });
          }
        })
        .catch(err => {});
    }
  }
};
</script>
<style lang="scss" scoped></style>
