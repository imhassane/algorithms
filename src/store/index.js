import Vue from "vue";
import VueX from "vuex";

import djikstra from "./modules/djikstra";

Vue.use(VueX);

export default new VueX.Store({
    modules: {
        djikstra
    }
});