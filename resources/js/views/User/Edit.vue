<template>
  <div>
    <v-breadcrumbs :items="bread">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template></v-breadcrumbs
    >
</v-breadcrumbs>
<v-row no-gutters  class="grey lighten-5 pa-10 rounded elevation-10">
<v-col
cols="12"
sm="12"
>
<v-form
ref="form"
v-model="loading"
lazy-validation
>

<v-row>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="name"
    :rules="[rules.required]"
    :error-messages="errors.name"
    label="Name"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="email"
    :rules="[rules.required]"
    :error-messages="errors.email"
    label="Email"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-select
    :items="[{id: 4, value: 'Sale'},{id: 5, value: 'Support'},{id: 6, value: 'Customer'},{id:7, value: 'Production Manager'},{id:8, value: 'Developer'},{id: 9, value: 'Marketing'},{id: 10, value: 'Production Head'}]"
    item-text="value"
    item-value="id"
    label="Role*"
    required
    v-model="role_id"
    :error-messages="errors.role_id"
></v-select>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-select
    :items="departments"
    item-text="department_name"
    item-value="id"
    label="Department*"
    required
    v-model="department_id"
    :error-messages="errors.department_id"
></v-select>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="password"
    :error-messages="errors.password"
    label="Password"
    type="password"
    autocomplete="new-password"
  ></v-text-field>
</v-col>

 <v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-btn
    color="secondary"
    elevation="1"
    large
    raised
    @click="addbrand"
    :loading="btnloading"
    :disabled="btnloading"
  >Update</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import userervice from "@services/auth/user";
import departmentservice from "@services/auth/department";
export default {
  name: "auth.users.add",
  async mounted(){
    this.id = this.$route.params.id
    var res = await userervice.get(this.id)
    this.name = res.name
    this.email = res.email
    this.password = res.password
    this.role_id = res.role_id
    this.department_id = res.department_id
    departmentservice.getlist('').then(e=>{
      this.departments = e.data
    })
  },
  methods: {
    resetError(){
        this.errors = {
          name:[],
          email: [],
          password: [],
          role_id: [],
          department_id: [],
      }
    },
    addbrand: async function () {
        this.resetError()
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("name", this.name);
        formdata.append("email", this.email);
        if(this.password!=''){
          formdata.append("password", this.password);
        }
        formdata.append("role_id", this.role_id);
        formdata.append("company_id", this.user.company_id);
        formdata.append("department_id", this.department_id);
        this.btnloading = false;
        var res = await userervice.update(formdata, this.id)
        if(!res.status){
            if(res.data.name){
                this.errors.name = res.data.name
            }
            if(res.data.email){
                this.errors.email = res.data.email
            }
            if(res.data.password){
                this.errors.password = res.data.password
            }
            if(res.data.role_id){
                this.errors.role_id = res.data.role_id
            }
            if(res.data.department_id){
                this.errors.department_id = res.data.department_id
            }
            //errors here
        }else{
            //suuccess here
            this.$router.push({ name: "auth.users.listing" });
        }
      }
    },
  },
  computed: {
    user() {
        return this.$store.getters.loggedInUser;
    },
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      role_id: '',
      department_id: '',
      departments: [],
      id: 0,
      errors: {
          name:[],
          email: [],
          password: [],
          role_id: [],
          department_id: [],
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "User",
          to: { name: "auth.users.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "Add",
          to: { name: "auth.users.edit", params: {id: this.$route.params.id} },
          disabled: false,
          exact: true,
        },
      ],
      loading: false,
      btnloading: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
};
</script>
