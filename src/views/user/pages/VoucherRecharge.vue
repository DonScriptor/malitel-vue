<template>
  <div class="voucher_recharge">
    <section class="recharge_options">
      <img
        :src="require(`@/assets/dashboard/recharge.svg`)"
        alt=""
        class="d-block mb-2"
      />
      <h3>Recharge</h3>
      <p>
        The simulator is an innovation that allows you to access our best offers
        and promotions in a way adapted to your budget and your needs
      </p>
    </section>
    <section class="recharge_form">
      <div class="user_numbers">
        <span>
          <font-awesome-icon
            class="mx-2 apply-theme-color"
            icon="mobile-alt"
          />Your Number
        </span>
        <b-form-select v-model="selectedNumber">
          <option value="a">01229705441</option>
          <option value="b">01234567899</option>
        </b-form-select>
      </div>
      <div class="mt-3">
        Selected: <strong>{{ selectedNumber }}</strong>
      </div>
      <div class="charge_another_number">
        <b-button class="button-raw" @click="isChargingAnotherNumber = !isChargingAnotherNumber">
            <span v-show="!isChargingAnotherNumber">Recharge Another Number</span>
            <span v-show="isChargingAnotherNumber">Recharge My Number</span>
          <font-awesome-icon icon="long-arrow-alt-right" />
        </b-button>
      </div>

      <b-form class="generic_form mt-3" @submit.prevent="handleSubmit">
        <!-- recharge to another number -->
        <b-form-group v-if="isChargingAnotherNumber">
          <b-form-input
            placeholder="add number here"
            type="number"
            name="anotherNumber"
            v-validate="'required'"
            v-model="anotherNumber"
          ></b-form-input>
          <p class="invalid-feedback" v-if="errors.has('anotherNumber')">
            {{ errors.first("anotherNumber") }}
          </p>
        </b-form-group>
        <!-- recharge to another number -->

        <!-- enter recharge voucher number -->
        <b-form-group label="Please enter the voucher number…">
          <b-form-input
            placeholder="voucher number"
            type="number"
            name="voucher"
            v-validate="'required'"
            v-model="voucher"
          ></b-form-input>
          <p class="invalid-feedback" v-if="errors.has('voucher')">
            {{ errors.first("voucher") }}
          </p>
        </b-form-group>
        <div class="generic_form_action">
          <!-- <b-link> -->
          <b-button block pill @click="handleSubmit">
            Recharge <font-awesome-icon icon="long-arrow-alt-right" />
          </b-button>
          <!-- </b-link> -->
        </div>
      </b-form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      voucher: null,
      selectedNumber: "a",
      anotherNumber: null,
      isChargingAnotherNumber: false
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then(result => {
        console.log("validation is: ", result);
        if (result) {
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.recharge_options {
  p {
    color: rgba(0, 0, 0, 0.4);
  }
}
.charge_another_number {
  button {
    color: $theme_color_secondary !important;
    font-weight: bold;
  }
}
.recharge_form {
  .user_numbers {
    width: 500px;

    .custom-select {
      width: 200px;
      border: none;
      color: $theme_color;
      font-weight: bold;
    }
  }
}
</style>
