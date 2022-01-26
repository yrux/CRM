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
<v-alert
dense
outlined
type="error"
v-if="errors.for_period.length>0"
>
{{errors.for_period.join(', ')}}
</v-alert>
<v-date-picker
    v-model="form.for_period"
    :error-messages="errors.for_period"
    label="For Period"
    type="month"
></v-date-picker>
</v-col>
<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="form.max_spendings"
    :rules="[rules.required]"
    :error-messages="errors.max_spendings"
    label="Max Spending"
    type="number"
    min="0"
  ></v-text-field>
</v-col>
<v-col
  cols="6"
  sm="6"
  class="pb-0"
>
  <v-text-field
    v-model="form.required_leads"
    :rules="[rules.required]"
    :error-messages="errors.required_leads"
    label="Required Leads"
    type="number"
    min="0"
  ></v-text-field>
</v-col>


<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-select
    :items="brands"
    item-text="brand_name"
    item-value="id"
    label="Brand*"
    required
    v-model="form.brand_id"
    :error-messages="errors.brand_id"
></v-select>
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
  >Update</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import marketing_budgetservice from "@services/auth/marketing_budget";
import brandservice from "@services/auth/brand";
export default {
  name: "auth.users.add",
  async mounted() {
    brandservice.getlist("").then((e) => {
      this.brands = e.data;
    });
    let result = await marketing_budgetservice.get(this.form.id)
    this.form.for_period = result.for_period_formatted_i
    this.form.brand_id = result.brand_id
    this.form.max_spendings = result.max_spendings
    this.form.required_leads = result.required_leads
  },
  methods: {
    resetError() {
      this.errors = {
        for_period: [],
        brand_id: [],
        max_spendings: [],
        required_leads: [],
      };
    },
    addbudget: async function () {
      this.resetError();
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("for_period", this.form.for_period+'-01');
        formdata.append("brand_id", this.form.brand_id);
        formdata.append("max_spendings", this.form.max_spendings);
        formdata.append("required_leads", this.form.required_leads);
        this.btnloading = false;
        var res = await marketing_budgetservice.update(formdata, this.form.id);
        if (!res.status) {
          if (res.data.for_period) {
            this.errors.for_period = res.data.for_period;
          }
          if (res.data.brand_id) {
            this.errors.brand_id = res.data.brand_id;
          }
          if (res.data.max_spendings) {
            this.errors.max_spendings = res.data.max_spendings;
          }
          if (res.data.required_leads) {
            this.errors.required_leads = res.data.required_leads;
          }
          //errors here
        } else {
          //suuccess here
          this.$router.push({ name: "auth.marketing_budgets.listing" });
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
        for_period: "",
        brand_id: "",
        max_spendings: 0,
        required_leads: 0,
      },
      errors: {
        for_period: [],
        brand_id: [],
        max_spendings: [],
        required_leads: [],
      },
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Marketing Budget",
          to: { name: "auth.marketing_budgets.listing" },
          disabled: false,
          exact: true,
        },
        {
          text: "Update",
          to: { name: "auth.marketing_budgets.edit" },
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
