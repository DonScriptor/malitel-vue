<template>
  <aside class="user_sidemenu">
    <div v-b-toggle.user_sidemenu_wrapper class="user_sidemenu_mobile_toggler">
      Menu
    </div>
    <b-collapse id="user_sidemenu_wrapper" class="user_sidemenu_wrapper">
      <div class="user_sidemenu_body">
        <!-- My Account -->
        <p class="token_toggler" v-b-toggle.account_tab>
          <span class="d-block token_icon"></span>
          <span class="d-block">My Account</span>
        </p>
        <b-collapse id="account_tab">
          <b-button variant="link" block>Change your number</b-button
          ><b-button variant="link" block>change your password</b-button>
        </b-collapse>
        <!-- My Account -->
        <!-- Recharge & Payment -->

        <p class="token_toggler" v-b-toggle.recharge_tab>
          <span class="d-block token_icon"></span>
          <span class="d-block">Recharge & Payment</span>
        </p>
        <b-collapse id="recharge_tab">
          <b-link :to="{ name: 'balance-query' }">
            <b-button variant="link" block>Balance Query</b-button>
          </b-link>
          <b-link :to="{ name: 'voucher-recharge' }">
            <b-button variant="link" block>Voucher Recharge</b-button>
          </b-link>
          <b-button variant="link" block>
            Recharge Log Query
          </b-button>
        </b-collapse>
        <!-- Recharge & Payment -->

        <!-- Customer Information -->

        <p class="token_toggler" v-b-toggle.customer_tab>
          <span class="d-block token_icon"></span>
          <span class="d-block">Customer Information</span>
        </p>
        <b-collapse id="customer_tab">
          <b-button variant="link" block>Query Customer Information</b-button>
          <b-button variant="link" block>VQuery Call history</b-button>
        </b-collapse>
        <!-- Customer Information -->

        <!-- Customer Information -->

        <p class="token_toggler" v-b-toggle.service_tab>
          <span class="d-block token_icon"></span>
          <span class="d-block">service management</span>
        </p>
        <b-collapse id="service_tab">
          <b-button variant="link" block>service subscription</b-button>
          <b-button variant="link" block>my offering usage</b-button>
        </b-collapse>
        <!-- Customer Information -->
      </div>
    </b-collapse>
  </aside>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.user_sidemenu {
  width: 380px;
  border-radius: 20px;
  background-color: $theme_color_variant;
  padding: 38px 30px;
  box-shadow: 0 20px 70px 0 rgba(0, 0, 0, 0.03);
  & * {
    text-transform: capitalize;
  }

  &_mobile_toggler {
    display: none;
    @media screen and (max-width: 600px) {
      display: block;
    }
  }

  &_wrapper {
    @media screen and (min-width: 600px) {
      display: block !important;
    }
  }
}

.btn-block {
  width: unset;
}
.token_toggler {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;

  & span:not(.token_icon) {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      right: 10px;
      top: 15px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #fff;
    }
  }
}
.token_icon {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  margin-bottom: 10px;
}
.collapse {
  margin-bottom: 30px;

  & button {
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.35);
  }
}
</style>
