import Vue from 'vue'
import Router from 'vue-router'

const shou = () => import("./views/shou/shou");
const gou = () => import("./views/gou/gou");
const wo = () => import("./views/wo/wo");
const shang = () => import("./views/shang/shang");

Vue.use(Router)

export default new Router({
  routes: [
    { path: "", redirect: "/shou" },
    { path: "/shou", component: shou },
    { path: "/gou", component: gou },
    { path: "/wo", component: wo },
    { path: "/shang", component: shang },
  ]
})
