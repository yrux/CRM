<template>
  <v-bottom-sheet v-if="showBtn" v-model="sheet">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text>
        <span class="mr-2">Add / Switch Account</span>
        <v-icon>mdi-account-switch</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-subheader>Add / Switch Account</v-subheader>
      <v-list-item v-for="loggedAccount in loggedAccounts" :key="loggedAccount.id">
        <v-list-item-avatar tile size="32px">
          <v-img
            :src="loggedAccount.image_url"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{loggedAccount.name}}</v-list-item-title>
        <v-list-item-action v-if="loggedAccount.id!=user.id">
          <v-btn @click="removeAccount(loggedAccount.token)" icon>
            <v-icon color="grey lighten-1">mdi-close</v-icon>
          </v-btn>
          <v-btn @click="switchAccount(loggedAccount.token)" icon>
            <v-icon color="green lighten-1">mdi-account-switch</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="addAccount()">
        <v-list-item-icon>
          <v-icon v-text="'mdi-plus'"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>Add Account</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-bottom-sheet>
</template>
<script>
import loginservice from "@services/auth/login";
export default {
  components:{
  },
  data(){
    return{
      sheet: false,
      addAccountModal: false,
      loggedAccounts: [],
    }
  },
  methods:{
    async addAccount(){
      this.sheet = false
      await this.$nextTick()
      this.$store.commit('addAccount/addAccountModal');
    },
    async removeAccount(token){
      this.$store.dispatch('addAccount/removeTokens',{
        token: token
      })
    },
    async switchAccount(token){
      this.sheet = false
      this.$store.commit('setAuthToken',token);
      this.$store.commit('setLoginStatus',true);
      var user = await loginservice.me()
      this.$store.commit('setloggedInUser',user);
      //redirecting to user dashboard
      this.$router.push({name: 'auth.account-switched'})
    }
  },
  computed:{
    tokens(){
      return this.$store.getters["addAccount/accountTokens"];
    },
    user() {
      return this.$store.getters.loggedInUser;
    },
    showBtn(){
      return this.$route.name!='auth.account-switched'
    }
  },
  watch:{
    sheet(){
      if(this.sheet===true){
        this.loggedAccounts = []
        loginservice.checkTokens(this.tokens).then(e=>{
          this.loggedAccounts = e.accounts
        })
      }
    }
  }
};
</script>