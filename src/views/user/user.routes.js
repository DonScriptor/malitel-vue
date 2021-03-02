import BalanceQuery from "./pages/BalanceQuery";
import VoucherRecharge from "./pages/VoucherRecharge";

export default [
  {
    path: "/balance-query",
    name: "balance-query",
    component: BalanceQuery
  },
  {
    path: "/voucher-recharge",
    name: "voucher-recharge",
    component: VoucherRecharge
  }
];
