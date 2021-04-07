import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: require("../store/index.js").state,
    // getters: require("../store/index.js").getters,
    actions: require("../store/index.js").actions,
    mutations: require("../store/index.js").mutations,
    siteURL: require("../store/index.js").siteURL,
});

export default store