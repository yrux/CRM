<template>
  <v-dialog v-model="dialogassign" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Assign User</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-select
                :items="users"
                item-text="email"
                item-value="id"
                label="User*"
                required
                v-model="selectedUser"
                :error-messages="errors.user"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Name*"
                v-model="user_name"
                :error-messages="errors.user_name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Email*"
                v-model="user_email"
                :error-messages="errors.user_email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-checkbox v-model="is_owner" label="Is Owner?"></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeModal"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="saveUser"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import brandservice from "@services/auth/brand";
export default {
  props: ["dialogassign", "item", "user"],
  data() {
    return {
      users: [],
      selectedUser: {},
      user_email: '',
      user_name: '',
      is_owner: false,
      errors: {
        user: [],
        user_name: [],
        user_email: [],
        is_owner: [],
      },
    };
  },
  mounted() {
      this.getusers();
  },
  methods: {
    closeModal() {
    this.$emit("close-assigndmodal", true);
    },
    async getusers() {
      this.users = await brandservice.getAllCompanyUsers();
    },
    resetError(){
      this.errors={
          user: [],
          user_name: [],
          user_email: [],
          is_owner: [],
      }
    },
    async saveUser(){
        this.resetError()
        var fileData = new FormData();
        fileData.append("company_id", this.user.company_id);
        fileData.append("is_owner", (this.is_owner==true?1:0));
        fileData.append("user_name", this.user_name);
        fileData.append("user_email", this.user_email);
        fileData.append("user_id", this.selectedUser);
        var res = await brandservice.assignUser(fileData, this.item.id);
        if(!res.status){
          if(res.data.user_email){
              this.errors.user_email = res.data.user_email
          }
          if(res.data.user_name){
              this.errors.user_name = res.data.user_name
          }
          if(res.data.user_id){
              this.errors.user = res.data.user_id
          }
          if(res.data.is_owner){
              this.errors.is_owner = res.data.is_owner
          }
        }else{
          this.closeModal()
        }
    }
  },
  watch:{
    selectedUser(){
      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].id==this.selectedUser){
          this.user_name = this.users[i].name
          this.user_email = this.users[i].email
        }
      }
    }
  }
};
</script>