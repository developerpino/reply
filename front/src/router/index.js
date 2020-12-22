import Vue from "vue";
import VueRouter from "vue-router";
import Board from "../components/Board.vue";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/board/:user", component: Board },
    { path: "*", component: Login },
  ],
});

export default router;
