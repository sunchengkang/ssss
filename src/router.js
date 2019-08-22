import Vue from 'vue'
import Router from 'vue-router'

const shou = () => import("./views/shou/shou");
const ge = () => import("./views/ge/ge");
const wo = () => import("./views/wo/wo");
const shang = () => import("./views/shang/shang");

Vue.use(Router)

export default new Router({
  routes: [
    { path: "", redirect: "/shou" },
    { path: "/shou", component: shou },
    { path: "/ge", component: ge },
    { path: "/wo", component: wo },
    { path: "/shang", component: shang },
  ]
})
