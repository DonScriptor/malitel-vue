import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from '../views/SignIn.vue';
import CreateAccount from '../views/CreateAccount.vue';
import VerifyNumber from '../views/VerifyNumber.vue';
import SetPassword from '../views/SetPassword.vue';
import ResetPassword from '../views/ResetPassword.vue';
import userRoutes from '../views/user/user.routes'


Vue.use(VueRouter);
const accountCreationRoutes = [
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn
  },
  {
    path: "/create-account",
    name: "create-account",
    component: CreateAccount
  },
  {
    path: "/verify-number",
    name: "verify-number",
    component: VerifyNumber
  },
  {
    path: "/set-password",
    name: "set-password",
    component: SetPassword
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: ResetPassword
  }
];
const routes = [
  {
    path: '',
    redirect: '/sign-in'
  },
  {
    path: "/",
    name: "home",
    component: Home,
    children: accountCreationRoutes
  },
  {
    path: "/",
    component: () => import( /* webpackChunkName: "user" */ '@/views/user'),
    children: userRoutes
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
