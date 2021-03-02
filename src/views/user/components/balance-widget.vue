<template>
  <div class="balance_widget">
    <section class="expiry_date">
      <span class="d-block">Credit Expiry</span>
      <span class="d-block">05 Jun, 2020</span>
    </section>
    <section class="balance_breakdown">
      <img
        :src="require(`@/assets/dashboard/mobile-money.svg`)"
        alt="money icon"
        class="d-block"
      />
      <span class="d-block">200 F CFA</span>
      <span class="d-block">Current Credit Balance</span>
    </section>
    <section class="cta">
      <b-link :to="{name: 'voucher-recharge'}">
        <b-button>
          Recharge <font-awesome-icon icon="long-arrow-alt-right" />
        </b-button>
      </b-link>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.balance_widget {
  width: 390px;
  height: 340px;
  border-radius: 20px;
  box-shadow: 0 20px 70px 0 rgba(0, 0, 0, 0.03);
  border: solid 1px rgba(151, 151, 151, 0.19);
  background-color: $theme_color;
  padding: 30px 20px;
}

.expiry_date {
  text-align: right;
  span {
    font-size: 14px;
  }
  span:first-of-type {
    color: rgba(255, 255, 255, 0.51);
  }
  span:last-of-type {
    font-weight: 500;
    color: #fff;
  }
}
.balance_breakdown {
  margin-bottom: 1rem;
  img {
    margin-bottom: 26px;
  }
  span {
    font-size: 14px;
  }
  span:first-of-type {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
  }
  span:last-of-type {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.51);
  }
}

.cta {
  button {
    width: 159px;
    height: 40px;
    border-radius: 30px;
    background-color: $theme_color_secondary;
    border: none;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    .svg-inline--fa.fa-w-14 {
      margin: 0 0.5rem;
    }
  }
}
</style>
