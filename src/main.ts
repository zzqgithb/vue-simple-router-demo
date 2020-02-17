import Vue from "vue";
import store from "./store/index";
import App from "./App.vue";
import "@/router";
import '@/router/filter';
// @ts-ignore
import { RouterMount } from "uni-simple-router";
import "@/mixins/index";

Vue.config.productionTip = false;

// @ts-ignore
const app = new App({
  store
});
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, "#app");
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
