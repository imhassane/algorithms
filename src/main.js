import Vue from 'vue'
import App from './App.vue'

import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";

import router from "./router";
import store from "./store";

import "es6-promise";
import "@vuikit/theme";

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
