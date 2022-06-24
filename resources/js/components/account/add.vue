<template>
    <v-dialog v-model="modalstate" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" v-model="email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                   v-model="password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal()">
            Close
          </v-btn>
          <v-btn :disabled="tokenloader" color="blue darken-1" text @click="tryLogin()"> Add Account </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  computed: {
    modalstate() {
      return this.$store.getters["addAccount/addAccountModalTgl"];
    },
    tokenloader() {
      return this.$store.getters["addAccount/tokenloader"];
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("addAccount/addAccountModal");
    },
    async tryLogin() {
      await this.$store.dispatch('addAccount/addAccount', {
        email: this.email,
        password: this.password,
      })
      this.email = ''
      this.password = ''
    },
  },
};
</script>