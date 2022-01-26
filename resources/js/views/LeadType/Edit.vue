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
    v-model="form.type"
    :rules="[rules.required]"
    :error-messages="errors.type"
    label="Type"
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
    @click="addbudget"
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
import lead_typeservice from "@services/auth/lead_type";
export default {
  name: "auth.lead_type.edit",
  async mounted() {
    let result = await lead_typeservice.get(this.form.id)
    this.form.type = result.type
  },
  methods: {
    resetError() {
      this.errors = {
        type: []
      };
    },
    addbudget: async function () {
      this.resetError();
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("type", this.form.type);
        this.btnloading = false;
        var res = await lead_typeservice.update(formdata, this.form.id);
        if (!res.status) {
          if (res.data.type) {
            this.errors.type = res.data.type;
          }
          //errors here
        } else {
          //suuccess here
          this.$router.push({ name: "auth.lead_type.listing" });
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
      form: {
        id: this.$route.params.id,
        type: ""
      },
      errors: {
        type: []
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Lead Types",
          to: { name: "auth.lead_type.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "Add",
          to: { name: "auth.lead_type.add" },
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
