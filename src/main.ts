import Vue from "vue";
import store from "./store/index";
import App from "./App.vue";
import "@/mixins/index";
Vue.config.productionTip = false;

// @ts-ignore
new App({
  store
}).$mount();
