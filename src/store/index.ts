import { createStore } from 'vuex';
import { auth } from '../services/userService';

export default createStore({
    state: {
        currentUser: null,
        token: '',
        globalLoading: false,
    },
    mutations: {
        setCurrentUser(state, newValue) {
            state.currentUser = newValue;
        },
        setGlobalLoading(state, newValue) {
            state.globalLoading = newValue;
        },
    },
    actions: {
        setCurrentUser({ commit }, newValue) {
            commit('setCurrentUser', newValue);
        },
        setGlobalLoading({ commit }, newValue: boolean) {
            commit('setGlobalLoading', newValue);
        },
    },
    getters: {
        getCurrentUser(state) {
            return state.currentUser;
        },
        globalLoading(state) {
            return state.globalLoading;
        },
    },
    modules: {},
});
