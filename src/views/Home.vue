<template>
  <div class="home_wrapper">
    <section class="router_view_wrapper">
      <router-view />
    </section>
    <aside class="">
      <h3>
        Your Malitel Account Is Your All-access Pass
      </h3>
      <div class="option">
        <div class="icon oval"></div>
        <div class="description">
          <span class="d-block">Pay Your Bills</span>
          <span class="d-block">Access your info, Pay your bills</span>
        </div>
      </div>
      <div class="option">
        <div class="icon oval"></div>
        <div class="description">
          <span class="d-block">Check Your Internet Bundles</span>
          <span class="d-block">Access your info, Pay your bills</span>
        </div>
      </div>

      <div class="call_to_action">
        <b-link :to="{ name: 'create-account'}"
          >Create an Account <font-awesome-icon icon="long-arrow-alt-right"
        /></b-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss" scoped>
.home_wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 80px;
}
.router_view_wrapper {
  flex: 1;
}
aside {
  width: 437px;
  border-radius: 20px;
  background-color: $theme_color;
  padding: 38px 30px;
  h3 {
    font-size: 31px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
  }
  .option {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .icon {
    }
    .description {
      margin: 0 10px;
      span:first-of-type {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
      }
      span:last-of-type {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
.call_to_action {
  margin: 38px auto;
  text-align: center;
  a {
    color: #fff;
    font-size: 18px;
    .svg-inline--fa.fa-w-14 {
      color: $theme_color_secondary;
      margin: 0 0.5rem;
    }
  }
}
.oval {
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 50%;
}
</style>
