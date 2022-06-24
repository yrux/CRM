import loginservice from "@services/auth/login";
import Swal from "sweetalert2";
const state = () => ({
    tokens: [],
    tokenloader: false,
    addAccountModalTgl: false,
    currentActive: 0
})
const mutations = {
    tglTokenloader(state) {
        state.tokenloader = !state.tokenloader
    },
    removeToken(state, token){
        let index = state.tokens.indexOf(token)
        state.tokens.splice(index, 1)
    },
    setupLocalStorage(state){
        localStorage.setItem('account-tokens', JSON.stringify(state.tokens))
    },
    clearLocalStorage(state){
        state.currentActive = 0
        state.tokens = []
        localStorage.removeItem('account-tokens')
    },
    addToken(state, token){
        state.tokens.push(token)
    },
    addAccountModal(state){
        state.addAccountModalTgl = !state.addAccountModalTgl
    },
    setActive(state, index){
        state.currentActive = index
    }
}
const actions = {
    async checkTokens({ commit }, { code }) {
        commit('tglTokenloader')
        let res = await this.$axios.post('check-tokens', {
            code: code
        }).then(function(e) {
            return { status: 1, data: e.data }
        }).catch(function(e) {
            return { status: 0, data: 'Your Coupon Code is Invalid' }
        })
        if (!res.status) {
            swal("Sorry", res.data, "error");
        } else {
            commit('tglTokenloader')
            swal("Congratulations", "Coupon Applied", "success");
        }
        commit('tglTokenloader')
    },
    async removeTokens({commit}, {token}){
        commit('removeToken', token)
        commit('setupLocalStorage')
        Swal.fire({
            title: "Success",
            text: "Account Removed",
            icon: "success",
        })
    },
    async addAccount({commit}, {email, password}){
        commit('tglTokenloader')
        var logindetail = await loginservice.dologin(
            email,
            password
        );
        if (logindetail.data) {
            if (logindetail.status) {
                commit('addToken', logindetail.data)
                commit('setupLocalStorage')
                commit('addAccountModal')
                Swal.fire({
                    title: "Success",
                    text: "Account Added",
                    icon: "success",
                })
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Credentials Invalid",
                    icon: "error",
                })
            }
        }
        commit('tglTokenloader')
    },
    initialize({commit}, {currentToken}){
        let tokens = localStorage.getItem('account-tokens')
        if(tokens){
            let tokenArr = JSON.parse(tokens)
            if(tokenArr.length>0){
                let index_active = tokenArr.indexOf(currentToken)
                if(index_active<0){
                    commit('setActive',0)
                }else{
                    commit('setActive',index_active)
                }
                for(let i = 0; i < tokenArr.length; i++){
                    commit('addToken', tokenArr[i])
                }
            }
        }
    }
}
const addAccount = {
    namespaced: true,
    mutations: mutations,
    actions: actions,
    getters: {
        addAccountModalTgl(state) {
            return state.addAccountModalTgl
        },
        tokenloader(state){
            return state.tokenloader
        },
        accountTokens(state){
            return state.tokens
        },
        currentActiveToken(state){
            return state.currentActive
        }
    },
    state: state,
}

export default addAccount