import Vue from "vue";
import VueRouter from "vue-router";
import Authentication from "../views/Authentication.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Authentication",
    component: Authentication
  },
  {
    path: "/trs-1",
    name: "BasicInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/BasicInfo.vue")
  },
  {
    path: "/trs-2",
    name: "SlaryTax",
    component: () => import("../views/SalaryTax.vue")
  },
  {
    path: "/trs-3",
    name: "SalaryDayBook",
    component: () => import("../views/SalaryDayBook.vue")
  },
  {
    path: "/trs-4",
    name: "PurchaseDayBook",
    component: () => import("../views/PurchaseDayBook.vue")
  },
  {
    path: "/trs-5",
    name: "Summary",
    component: () => import("../views/Summary.vue")
  },
  {
    path: "/pos",
    name: "PosDash",
    component: () => import("../views/PosDash.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
