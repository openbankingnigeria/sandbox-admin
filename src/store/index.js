import Vue from 'vue';
import Vuex from 'vuex';
import State from './state';
import Actions from './actions';
import Mutations from './mutations';
import Getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: State,
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
});
