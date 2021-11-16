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
<h4>Select Customer</h4>
  <user-list v-on:selected-user="userSelectEv" :role="6" />
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="title"
    :rules="[rules.required]"
    :error-messages="errors.title"
    label="Title"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-select
    :items="brands"
    item-text="brand.brand_code"
    item-value="brand_id"
    label="Brand"
    required
    v-model="brand_id"
    :error-messages="errors.brand_id"
></v-select>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <ckeditor
    :editor="editor"
    v-model="description"
    :config="editorConfig"
  ></ckeditor>
  <v-alert v-if="errors.description.length>0" type="error">
    {{errors.description[0]}}
  </v-alert>
</v-col>
<v-col cols="12" md="12">
  <v-file-input
    v-model="attachements"
    color="deep-purple accent-4"
    counter
    label="Attachements"
    multiple
    placeholder="Select Files to attach with the task"
    prepend-icon="mdi-paperclip"
    :show-size="1000"
    :error-messages="errors.attachements"
  >
    <template v-slot:selection="{ index, text }">
      <v-chip
        v-if="index < 2"
        color="deep-purple accent-4"
        dark
        label
        small
      >
        {{ text }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="text-overline grey--text text--darken-3 mx-2"
      >
        +{{ attachements.length - 2 }} File(s)
      </span>
    </template>
  </v-file-input>
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
    @click="addproject"
    :loading="btnloading"
    :disabled="btnloading"
  >Create Project</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import projectservice from "@services/auth/project";
import brandervice from "@services/auth/brand";
import UserList from "@/views/Project/UserList.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "auth.projects.add",
  components: {
    'user-list': UserList,
  },
  mounted(){
    this.myBrands()
  },
  methods: {
    async myBrands(){
      this.brands = await brandervice.myBrands()
    },
    resetError(){
        this.errors = {
          title:[],
          description: [],
          brand_id: [],
          attachements: [],
      }
    },
    async userSelectEv(data){
      this.customer_id = data.id
    },
    addproject: async function () {
        this.resetError()
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("title", this.title);
        formdata.append("brand_id", this.brand_id);
        formdata.append("customer_id", this.customer_id);
        formdata.append("description", this.description);
        for(let i = 0; i < this.attachements.length; i++){
          formdata.append('attachements['+i+']',this.attachements[i])
        }
        this.btnloading = false;
        var res = await projectservice.create(formdata)
        if(!res.status){
            if(res.data.title){
                this.errors.title = res.data.title
            }
            if(res.data.description){
                this.errors.description = res.data.description
            }
            if(res.data.brand_id){
                this.errors.brand_id = res.data.brand_id
            }
            if(res.data.attachements){
                this.errors.attachements = res.data.attachements
            }
            if(res.data.customer_id){
                this.$store.commit("setNotification", "Please Select a Customer");
                this.errors.customer_id = res.data.customer_id
            }
            //errors here
        }else{
            //suuccess here
            this.$router.push({ name: "auth.task.open",query: { project: res.data.id } });
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
      brands: [],
      users: [],
      title: '',
      description: '',
      brand_id: '',
      customer_id: 0,
      attachements: [],
      errors: {
          title: [],
          description: [],
          brand_id: [],
          attachements: [],
      },
      editorConfig: {},
      editor: ClassicEditor,
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Projects",
          to: { name: "auth.projects.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "Add",
          to: { name: "auth.projects.add" },
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
