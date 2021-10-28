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
    v-model="brandname"
    :rules="[rules.required]"
    :error-messages="errors.company_name"
    label="Brand Name"
    outlined
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
    outlined
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="password"
    :rules="[rules.required]"
    :error-messages="errors.password"
    label="password"
    type="password"
    outlined
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-file-input
    show-size
    v-model="image"
    :error-messages="errors.file"
    accept="image/png, image/jpeg, image/bmp"
    label="Title Image"
    :rules="[rules.required]"
    truncate-length="15"
  ></v-file-input>
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
  >Save</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import companyservice from "@services/auth/company";
import fileservice from "@services/auth/file";
export default {
  name: "auth.company.add",
  methods: {
    resetError(){
        this.errors = {
          company_name:[],
          password: [],
          email: [],
          file: [],
      }
    },
    addbrand: async function () {
        this.resetError()
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("company_name", this.brandname);
        formdata.append("email", this.email);
        formdata.append("password", this.password);
        formdata.append("file", this.image);
        this.btnloading = false;
        var res = await companyservice.create(formdata)
        if(!res.status){
            if(res.data.company_name){
                this.errors.company_name = res.data.company_name
            }
            if(res.data.email){
                this.errors.email = res.data.email
            }
            if(res.data.password){
                this.errors.password = res.data.password
            }
            if(res.data.file){
                this.errors.file = res.data.file
            }
            //errors here
        }else{
            //suuccess here
            var fileData = new FormData();
            fileData.append("ref_id", res.data.id);
            fileData.append("table_name", 'company');
            fileData.append("type", '1');
            fileData.append("attachements[0]", this.image);
            await fileservice.create(fileData)
            this.$router.push({ name: "auth.company.listing" });
        }
      }
    },
  },
  data() {
    return {
      brandname: "",
      email:'',
      password: '',
      errors: {
          company_name:[],
          password: [],
          email: [],
          file: [],
      },
      image: {},
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Company",
          to: { name: "auth.company.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "Add",
          to: { name: "auth.company.add" },
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
