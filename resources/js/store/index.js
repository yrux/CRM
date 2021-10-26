import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        authtoken: '',
        loggedIn: false,
        loggedInUser: {},
    },
    mutations: {
        setAuthToken(state, authtoken) {
            localStorage.setItem('auth_token',authtoken);
            window.axios.defaults.headers.common['Authorization'] = 'Bearer '+authtoken;
            state.authtoken = authtoken
        },
        setLoginStatus(state, loggedIn) {
            state.loggedIn = loggedIn
        },
        setloggedInUser(state, loggedInUser){
            state.loggedInUser = loggedInUser
        }
    },
    getters: {
        authtoken(state) {
            return state.authtoken
        },
        loggedIn(state) {
            return state.loggedIn
        },
        loggedInUser(state){
            return state.loggedInUser
        }
    }
})