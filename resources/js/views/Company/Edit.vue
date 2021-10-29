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
    label="Company Name"
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
  <v-text-field
    v-model="password"
    :error-messages="errors.password"
    label="password"
    type="password"
    autocomplete="new-password"
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
  <v-img
    :lazy-src="imageurl"
    max-height="100"
    max-width="150"
    contain
    :src="imageurl"
    ></v-img>
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
  name: "auth.company.edit",
  async mounted(){
      this.id = this.$route.params.id
      var res = await companyservice.get(this.id)
      this.brandname = res.company_name
      this.email = res.company_email
      this.password = res.user.password
      this.imageurl = res.image_url
  },
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
        if(this.password){
            formdata.append("password", this.password);
        }
        if(this.image.size){
            formdata.append("file", this.image);
        }
        this.btnloading = false;
        var res = await companyservice.update(formdata, this.id)
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
            if(this.image.size){
                var fileData = new FormData();
                fileData.append("ref_id", res.data.id);
                fileData.append("table_name", 'company');
                fileData.append("type", '1');
                fileData.append("attachements[0]", this.image);
                await fileservice.create(fileData)
            }
            this.$router.push({ name: "auth.company.listing" });
        }
      }
    },
  },
  data() {
    return {
      brandname: "",
      id: 0,
      email:'',
      password: '',
      imageurl: '',
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
          text: "Edit",
          to: { name: "auth.company.edit", params: {id: this.$route.params.id} },
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
