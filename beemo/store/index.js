import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    updateAuthentication({ commit }, isAuthenticated) {
      commit('setAuthentication', isAuthenticated);
    },
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  }
})