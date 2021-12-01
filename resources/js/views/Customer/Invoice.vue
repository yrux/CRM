<template>
  <v-card elevation="2">
    <v-card-title>Invoice #{{project.project_id}}</v-card-title>
    <v-card-subtitle>Invoice to {{user.email}}</v-card-subtitle>
    <v-card-text class="pl-10 pr-10">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Description
              </th>
              <th class="text-left">
                Amount
              </th>
              <th class="text-left">
                Generated@
              </th>
              <th class="text-left">
                Status
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in payments"
              :key="item.id"
            >
              <td>{{ item.description }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.created_at_formatted }}</td>
              <td>{{ item.payment_status_text }}</td>
              <td>
                <v-btn
                link
                :to="{name: 'guest.payment',params: { id: parseInt(item.id) }}"
                small
                color="blue"
                class="white--text"
                v-if="item.status!=1"
                >
                <v-icon left dark> mdi-cash </v-icon>
                Pay Now
                </v-btn>
              </td>
            </tr>
            <tr>
              <td colspan="2">&nbsp;</td>
              <td>Balance</td>
              <td><strong>{{total_amount.balance}}</strong></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2">&nbsp;</td>
              <td>Paid</td>
              <td><strong>{{total_amount.paid}}</strong></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="2">&nbsp;</td>
              <td>Total Amount</td>
              <td><strong>{{total_amount.total}}</strong></td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
      >
        Download PDF
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import paymentservice from "@services/auth/payment";
import projectservice from "@services/auth/project";
export default {
  data() {
    return {
      project: {},
      payments: []
    };
  },
  async mounted() {
    let pid = this.$route.params.id;
    let payments = await paymentservice
      .getlist(this.user.lead.id, "?project_id=" + pid)
      .then((e) => e.data);
    this.payments = payments
    this.project = await projectservice.get(pid)//.then(e=>e.data);
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
    total_amount(){
      let total = 0, paid=0, balance=0
      for(let i = 0; i < this.payments.length; i++){
        total+=this.payments[i].amount
        if(this.payments[i].status==1){
          paid+=this.payments[i].amount
        }else{
          balance+=this.payments[i].amount
        }
      }
      return {
        total: total,
        balance: balance,
        paid: paid
      }
    },
  },
};
</script>