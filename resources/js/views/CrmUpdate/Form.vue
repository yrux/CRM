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
<v-col cols="12" sm="12" class="pb-0">
    <label>Message</label>
    <v-alert
      dense
      outlined
      type="error"
      v-if="errors.message.length>0"
    >
      {{errors.message.join(', ')}}
    </v-alert>
    <ckeditor :editor="editor" v-model="form.message" :config="editorConfig"></ckeditor>
</v-col>

<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
<v-checkbox
  v-model="form.is_new"
  :error-messages="errors.is_new"
  label="Is New?"
></v-checkbox>
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
    @click="addpermission"
    :loading="btnloading"
    :disabled="btnloading"
  >{{form.id>0?'Update':'Add'}}</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import crmupdateservice from "@services/auth/crmupdate";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: "auth.crm_updates.add",
  watch:{

  },
  async mounted(){
    if(this.$route.params.id){
        var res = await crmupdateservice.get(this.form.id)
        this.form = {
            message: (res.message?res.message:''),
            is_new: (res.is_new==1?true:false),
            id: this.$route.params.id,
        }
        this.bread.push({
          text: "Edit",
          to: { name: "auth.crm_updates.edit", params: {id: this.$route.params.id} },
          disabled: false,
          exact: true,
        })
    }else{
        this.bread.push({
          text: "Add",
          to: { name: "auth.crm_updates.add"},
          disabled: false,
          exact: true,
        })
    }
  },
  methods: {
    resetError(){
        this.errors = {
          message:[],
          is_new: [],
      }
    },
    addpermission: async function () {
        this.resetError()
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("message", this.form.message);
        formdata.append("is_new", (this.form.is_new==true?1:0));
        this.btnloading = false;
        if(this.form.id>0){
            var res = await crmupdateservice.update(formdata, this.form.id)
        }else{
            var res = await crmupdateservice.create(formdata)
        }
        if(!res.status){
            if(res.data.name){
                this.errors.name = res.data.name
            }
            if(res.data.slug){
                this.errors.slug = res.data.slug
            }
            //errors here
        }else{
            //suuccess here
            this.$router.push({ name: "auth.crm_updates.listing" });
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
      editor: ClassicEditor,
      editorConfig: {
        
      },
      form:{
          id: (this.$route.params.id?this.$route.params.id:0),
          message: '',
          is_new: true,
      },
      errors: {
          message:[],
          is_new: [],
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Crm Updates",
          to: { name: "auth.crm_updates.listing" },
          disabled: false,
          exact: true,
        }
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
