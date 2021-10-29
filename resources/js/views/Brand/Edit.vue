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
    v-model="brand_name"
    :rules="[rules.required]"
    :error-messages="errors.brand_name"
    label="Brand Name"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="brand_code"
    :rules="[rules.required]"
    :error-messages="errors.brand_code"
    label="Brand Code"
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
import brandservice from "@services/auth/brand";
import fileservice from "@services/auth/file";
export default {
  name: "auth.company.edit",
  async mounted(){
      this.id = this.$route.params.id
      var res = await brandservice.get(this.id)
      this.brand_name = res.brand_name
      this.brand_code = res.brand_code
      this.imageurl = res.image_url
  },
  methods: {
    resetError(){
        this.errors = {
          brand_name:[],
          brand_code: [],
          file: [],
      }
    },
    addbrand: async function () {
        this.resetError()
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("brand_name", this.brand_name);
        formdata.append("company_id", this.user.company_id);
        formdata.append("brand_code", this.brand_code);
        if(this.image.size){
            formdata.append("file", this.image);
        }
        this.btnloading = false;
        var res = await brandservice.update(formdata, this.id)
        if(!res.status){
            if(res.data.brand_name){
                this.errors.brand_name = res.data.brand_name
            }
            if(res.data.brand_code){
                this.errors.brand_code = res.data.brand_code
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
                fileData.append("table_name", 'brands');
                fileData.append("type", '1');
                fileData.append("attachements[0]", this.image);
                await fileservice.create(fileData)
            }
            this.$router.push({ name: "auth.brands.listing" });
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
      id: 0,
      brand_name:'',
      brand_code: '',
      imageurl: '',
      errors: {
          brand_name:[],
          brand_code: [],
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
          text: "Brand",
          to: { name: "auth.brands.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "Edit",
          to: { name: "auth.brands.edit", params: {id: this.$route.params.id} },
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
