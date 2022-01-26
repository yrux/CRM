<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <v-date-picker
          v-model="date"
          type="month"
          class="mt-4"
          color="green"
          full-width
          :show-current="false"
        ></v-date-picker>
      </v-col>
      <v-col cols="12" sm="12">
        <RightSummary @refreshRightSummary="getMarketingBudget" v-if="marketing_budgets.length>0" :summary="summary" :loading="loaders.rightsummary" :data="marketing_budgets" />
        <h2 v-else>Target Not yet Set for {{date}}</h2>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import marketing_budgetservice from "@services/auth/marketing_budget";
import RightSummary from "@/views/DailyMarketingBudget/RightSummary.vue";
export default {
  components:{
    RightSummary,
  },
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 7),
      marketing_budgets: [],
      summary: [],
      loaders: {
        'rightsummary': true
      }
    };
  },
  methods: {
    async getMarketingBudget(){
      this.loaders['rightsummary'] = true
      await marketing_budgetservice.getDailyBudget(this.date+'-01').then(e=>{
        if(e.status){
          this.marketing_budgets = e.data.marketing_budgets
          this.summary = e.data.lead_summary
        }
      });
      await this.$nextTick()
      this.loaders['rightsummary'] = false
    }
  },
  computed: {},
  watch: {
    date(){
      this.getMarketingBudget()
    }
  },
  mounted() {
    this.getMarketingBudget()
  },
};
</script>