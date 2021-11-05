require('./bootstrap');

import Vue from 'vue'
import vuetify from './plugins/vuetify.js' // path to vuetify export
import VueRouter from 'vue-router';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import { store } from './store'
import router from './routes'
window.Vue = require('vue').default;
import loginservice from "@services/auth/login";

Vue.use(VueRouter);
Vue.use(CKEditor);

import adminbar from "@/components/sidebars/admin.vue";
import notifications from "@/components/sidebars/notifications.vue";

router.beforeEach(async (to, from, next) => {
  // console.log(store.getters.loggedIn)
  // if(to.meta.middleware){
  //     return to.meta.middleware({
  //         next: next,
  //         store: store,
  //     })
  // }
  var isAuthenticated = localStorage.getItem('auth_token')?true:false;
  if (to.name !== 'auth.login' && !isAuthenticated) next({ name: 'auth.login' })
  if (to.name === 'auth.login' && isAuthenticated) next({ name: 'auth.dashboard' })
  else next()
})

new Vue({
  router,
  vuetify,
  store,
  async created(){
    var token = localStorage.getItem('auth_token')?localStorage.getItem('auth_token'):'';
    if(token){
      this.$store.commit('setAuthToken',token);
      this.$store.commit('setLoginStatus',true);
      var user = await loginservice.me()
      this.$store.commit('setloggedInUser',user);
      //redirecting to user dashboard
    }
  },
  components: {
    adminbar,
    notifications
  },
  data(){
    return {
    }
  },
  computed:{
    sideBarStatus() {
      return this.$store.getters.sideBarStatus;
    },
    notificaitontext() {
      return this.$store.getters.notificationText;
    },
    notificaitonstatus() {
      return this.$store.getters.notificationStatus;
    },
  },
  watch:{
    $route(){
      if(this.$route.meta.showsidebar){
        this.$store.commit('setSideBarStatus',true);
      }else{
        this.$store.commit('setSideBarStatus',false);
      }
    }
  }
}).$mount('#app')