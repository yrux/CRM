import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import addAccount from './add-account'
export const store = new Vuex.Store({
    modules:{
        auth: {
            state: {
                authtoken: '',
                loggedIn: false,
                sideBarStatus: false,
                loggedInUser: {},
                notificationStatus: false,
                notificationText: '',
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
                    localStorage.setItem('logged_in_role_id',loggedInUser.role_id);
                    state.loggedInUser = loggedInUser
                },
                setSideBarStatus(status, sideBarStatus){
                    status.sideBarStatus = sideBarStatus
                },
                setNotification(state, text){
                    state.notificationText = text
                    state.notificationStatus = true
                    setTimeout(()=>{
                        state.notificationStatus = false
                    },1000)
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
                },
                sideBarStatus(state){
                    return state.sideBarStatus
                },
                notificationStatus(state){
                    return state.notificationStatus
                },
                notificationText(state){
                    return state.notificationText
                }
            },
        },
        addAccount: addAccount
    }
}
)