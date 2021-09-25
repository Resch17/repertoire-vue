import { createStore } from 'vuex';

export default createStore({
    state: {
        currentUser: null,
        isLoggedIn: false,
        token: '',
        globalLoading: false,
    },
    mutations: {
        setCurrentUser(state, newValue) {
            state.currentUser = newValue;
        },
        setIsLoggedIn(state, newValue) {
            state.isLoggedIn = newValue;
        },
        setGlobalLoading(state, newValue) {
            state.globalLoading = newValue;
        },
    },
    actions: {
        setCurrentUser({ commit }, newValue) {
            commit('setCurrentUser', newValue);
        },
        setIsLoggedIn({ commit }, newValue: boolean) {
            commit('setIsLoggedIn', newValue);
        },
        setGlobalLoading({ commit }, newValue: boolean) {
            commit('setGlobalLoading', newValue);
        },
    },
    getters: {
        getCurrentUser(state) {
            return state.currentUser;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        globalLoading(state) {
            return state.globalLoading;
        },
    },
    modules: {},
});
