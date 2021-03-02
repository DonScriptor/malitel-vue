<template>
  <div class="balance_query">
    <BalanceWidget />
    <bundleBreakdown />
  </div>
</template>
<script>
import BalanceWidget from '../components/balance-widget';
import bundleBreakdown from '../components/bundle-breakdown'
export default {
  components: {BalanceWidget, bundleBreakdown}
};
</script>
<style lang="scss" scoped>
.balance_query{
}
</style>
