import { createStore } from 'vuex';

export default createStore({
    state: {
        currentUser: null,
        isLoggedIn: false,
        token: '',
    },
    mutations: {
        setCurrentUser(state, newValue) {
            state.currentUser = newValue;
        },
        setIsLoggedIn(state, newValue) {
            state.isLoggedIn = newValue;
        },
    },
    actions: {
        setCurrentUser({ commit }, newValue) {
            commit('setCurrentUser', newValue);
        },
        setIsLoggedIn({ commit }, newValue: boolean) {
            commit('setIsLoggedIn', newValue);
        },
    },
    getters: {
        getCurrentUser(state) {
            return state.currentUser;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
    },
    modules: {},
});
