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
    v-model="form_name"
    :rules="[rules.required]"
    :error-messages="errors.form_name"
    label="Form Name"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <ckeditor
        :editor="editor"
        v-model="form_description"
        :config="editorConfig"
    ></ckeditor>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<FormBuilder :formfields="form_fields" v-on:event-happen="syncFields" :mode="true" />
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
import briefformservice from "@services/auth/briefform";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FormBuilder from "@/views/Brief/FormBuilder.vue";
export default {
  name: "auth.brief.add",
  components: {
    FormBuilder,
  },
  methods: {
    resetError() {
      this.errors = {
        form_name: [],
        form_description: [],
        form_fields: [],
      };
    },
    syncFields(obj) {
      this.form_fields = obj;
    },
    addbrand: async function () {
      this.resetError();
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("form_name", this.form_name);
        formdata.append("form_description", this.form_description);
        formdata.append("form_fields", JSON.stringify(this.form_fields));
        this.btnloading = false;
        var res = await briefformservice.update(formdata, this.id);
        if (!res.status) {
          if (res.data.form_name) {
            this.errors.form_name = res.data.form_name;
          }
          if (res.data.form_description) {
            this.errors.form_description = res.data.form_description;
          }
          if (res.data.form_fields) {
            this.errors.form_fields = res.data.form_fields;
          }
          //errors here
        } else {
          this.$router.push({ name: "auth.brief.listing" });
        }
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
  async mounted() {
    this.id = this.$route.params.id
    var res = await briefformservice.get(this.id)
    this.form_name = res.form_name
    this.form_description = res.form_description
    this.form_fields = JSON.parse(res.form_fields)
  },
  data() {
    return {
      id: 0,
      editorConfig: {},
      editor: ClassicEditor,
      form_name: "",
      form_description: "",
      form_fields: [],
      errors: {
        form_name: [],
        form_description: [],
        form_fields: [],
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Brief Form",
          to: { name: "auth.brief.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "Add",
          to: {
            name: "auth.brief.edit",
            params: { id: this.$route.params.id },
          },
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
