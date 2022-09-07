import Vue from 'vue';
import Vuex from 'vuex';
import countries from '../modules/countries/store';
import app from '../modules/app/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    countries,
    app,
  },
});
