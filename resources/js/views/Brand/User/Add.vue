<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Add User</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
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
              <v-select
                :items="[{id: 4, value: 'Sales'},{id:5, value: 'Support'}]"
                item-text="value"
                item-value="id"
                label="Role*"
                required
                v-model="role_id"
                :error-messages="errors.role"
            ></v-select>
            </v-col>
            <v-col cols="12">
              <v-checkbox v-model="is_owner" label="Is Owner?"></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeModal">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="saveUser"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import brandservice from "@services/auth/brand";
export default {
    props: ['dialog','item','user'],
    data() {
        return {
            user_name: '',
            user_email: '',
            role_id: 5,
            is_owner: true,
            errors:{
                user_name: [],
                user_email: [],
                role: [],
                is_owner: [],
            }
        }
    },
    methods:{
        closeModal(){
            this.$emit('close-useraddmodal', true)
        },
        resetError(){
          this.errors={
              user_name: [],
              user_email: [],
              role: [],
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
            fileData.append("role", this.role_id);
            var res = await brandservice.createUser(fileData, this.item.id);
            if(!res.status){
              if(res.data.user_email){
                  this.errors.user_email = res.data.user_email
              }
              if(res.data.user_name){
                  this.errors.user_name = res.data.user_name
              }
              if(res.data.role){
                  this.errors.role = res.data.role
              }
            }else{
              this.closeModal()
            }
        }
    }
}
</script>