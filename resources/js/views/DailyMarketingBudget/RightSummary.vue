<template>
  <v-row>
    <v-col v-show="loading==false" cols="12" v-for="brand_budgets in data" :key="brand_budgets.id">
      <v-row>
        <v-col cols="12">
            <h3>{{brand_budgets.brand_name}} ({{brand_budgets.brand_code}})</h3>
        </v-col>
        <v-col cols="3">
          <v-progress-circular
            :rotate="-90"
            :size="200"
            :width="15"
            :value="(((brand_budgets.max_spendings-brand_budgets.remaining_spending)/brand_budgets.max_spendings)*100)"
            color="primary"
          >
            <small>{{parseFloat(((brand_budgets.max_spendings-brand_budgets.remaining_spending)/brand_budgets.max_spendings)*100).toFixed(2)}}% Budget Spent.<br/>{{brand_budgets.max_spendings}}/{{brand_budgets.max_spendings-brand_budgets.remaining_spending}}</small>
          </v-progress-circular>
        </v-col>
        <v-col cols="3">
          <v-progress-circular
            :rotate="-90"
            :size="200"
            :width="15"
            :value="(((brand_budgets.required_leads-brand_budgets.leads_count)/brand_budgets.required_leads)*100)"
            color="red"
          >
            <small>{{ parseFloat(((brand_budgets.required_leads-brand_budgets.leads_count)/brand_budgets.required_leads)*100).toFixed(2) }} % Leads Remaining.<br/>{{brand_budgets.required_leads}}/{{brand_budgets.leads_count}}</small>
          </v-progress-circular>
        </v-col>
        <v-col v-if="summary[brand_budgets.brand_id]" cols="3">
          <v-list subheader>
            <v-subheader>Leads Summary</v-subheader>
            <v-list-item
              v-for="lead_summary in summary[brand_budgets.brand_id]"
              :key="lead_summary.lead_type"
            >
              <v-list-item-content>
                <v-list-item-title>{{lead_summary.type?lead_summary.type.type:'N/A'}} <v-chip draggable>
                    {{lead_summary.leads_summary_count}}
                  </v-chip></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="3">
          <v-btn
            rounded
            color="primary"
            dark
            @click="getDetailedBudget(brand_budgets.id)"
          >
            View/Add Daily Budget
          </v-btn>
          <!-- <v-date-picker
            v-model="form.date"
            class="mt-4"
          ></v-date-picker>
          <v-text-field
            v-model="form.budget"
            label="Budget"
            type="number"
            min="0"
          ></v-text-field> -->
        </v-col>
      </v-row>
    </v-col>
    <v-col v-if="loading" cols="12">
      <v-sheet :color="`lighten-5`" class="pa-3">
        <v-skeleton-loader
          v-for="i in 5"
          :key="i"
          class="mb-6"
          type="list-item-avatar, divider"
        ></v-skeleton-loader>
      </v-sheet>
    </v-col>
    <DetailedBudget :spendings="spendings" @saveBudgetDaily="saveBudgetDaily" :dialog="dialog" @closeDetailedBudgetModal="dialog=false" />
  </v-row>
</template>
<script>
import marketing_budgetservice from "@services/auth/marketing_budget";
import DetailedBudget from "@/views/DailyMarketingBudget/DetailedBudget.vue";
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: [],
    },
    summary: {
      type: Object,
      default: {},
    }
  },
  components:{
    DetailedBudget
  },
  data(){
    return{
      // form: {
      //   date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //     .toISOString()
      //     .substr(0, 10),
      //   budget: 0,
      // }
      dialog: false,
      selected_marketing_budget_id: 0,
      spendings: [],
    }
  },
  async mounted(){
  },
  methods:{
    getDetailedBudget(marketing_budget_id){
      this.dialog=true
      this.selected_marketing_budget_id=marketing_budget_id
      marketing_budgetservice.getDailyBudgetDetail(marketing_budget_id).then(e=>{
        this.spendings=e.data
      })
    },
    saveBudgetDaily(data){
      var formdata = new FormData();
      formdata.append("spending", data.budget);
      formdata.append("date", data.date);
      marketing_budgetservice.saveDailyBudgetDetail(this.selected_marketing_budget_id, formdata).then(e=>{
        this.getDetailedBudget(this.selected_marketing_budget_id)
        this.$emit('refreshRightSummary')
        this.$store.commit("setNotification", "Budget Added");
      })
    }
  }
};
</script>