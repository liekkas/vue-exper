import Vue from 'vue';
import Vuex from 'vuex';
import app from './app';
import alarm from './alarm';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    alarm,
  },
  getters
});

export default store
