import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/styles/null-style.scss";
import "./assets/styles/vars.scss";
import "./assets/styles/mixins.scss";
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
