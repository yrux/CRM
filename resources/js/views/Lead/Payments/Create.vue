<template>
  <v-row>
    <v-col v-for="q in 5" :key="q" v-show="!lead.id">
      <v-sheet class="pa-3">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
    </v-col>
    <v-col v-if="lead.id > 0">
      <v-card elevation="2" tile>
        <v-card-title>
          <v-icon color="indigo" size="55"> mdi-projector-screen </v-icon>
          Total Projects<v-chip
            class="ma-2"
            color="pink"
            label
            text-color="white"
          >
            Tags
          </v-chip></v-card-title
        >
      </v-card>
    </v-col>
    <v-col v-if="lead.id > 0">
      <v-card elevation="2" tile>
        <v-card-title>
          <v-icon color="indigo" size="55"> mdi-currency-usd </v-icon>
          Total Paid<v-chip class="ma-2" color="pink" label text-color="white">
            Tags
          </v-chip></v-card-title
        >
      </v-card>
    </v-col>
    <v-col v-if="lead.id > 0">
      <v-card elevation="2" tile>
        <v-card-title>
          <v-icon color="indigo" size="55"> mdi-calendar-today </v-icon>
          Created@
          <v-chip class="ma-2" color="pink" label text-color="white">
            {{ lead.created_at_formatted }}
          </v-chip></v-card-title
        >
      </v-card>
    </v-col>
    <v-col v-if="lead.id > 0">
      <v-card elevation="2" tile>
        <v-card-title>
          <v-icon color="indigo" size="55"> mdi-calendar-alert </v-icon>
          Total Running Tasks<v-chip
            class="ma-2"
            color="pink"
            label
            text-color="white"
          >
            Tags
          </v-chip></v-card-title
        >
      </v-card>
    </v-col>
    <v-col v-if="lead.id > 0">
      <v-card elevation="2" tile>
        <v-card-title>
          <v-icon color="indigo" size="55"> mdi-watermark </v-icon>
          Brand<v-chip class="ma-2" color="pink" label text-color="white">
            {{ lead.brand_code }}
          </v-chip></v-card-title
        >
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <h2>Generate Payment Link</h2>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.amount"
                label="Amount$"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="form.merchant"
                :items="merchants"
                label="Merchant"
                item-text="value"
                item-value="key"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.description"
                label="Description"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="form.status"
                :items="statuses"
                label="Payment Status"
                item-text="value"
                item-value="key"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="12">
              <v-btn color="blue-grey float-right" class="white--text">
                <v-icon left dark> mdi-currency-usd </v-icon>
                Generate
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
    <v-col cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <h2>Past Payment Links</h2>
          </v-col>
          <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Amount</th>
                    <th class="text-left">Description</th>
                    <th class="text-left">Merchant</th>
                    <th class="text-left">Status</th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in payments" :key="item.id">
                    <td>{{ item.amount }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.merchant }}</td>
                    <td>
                      <StatusChip
                        v-if="item.status == 0"
                        status="orange"
                        :text="item.payment_status_text"
                      />
                      <StatusChip
                        v-if="item.status == 1"
                        status="green"
                        :text="item.payment_status_text"
                      />
                      <StatusChip
                        v-if="item.status == 2"
                        status="red"
                        :text="item.payment_status_text"
                      />
                    </td>
                    <td>
                      <v-btn
                        @click="CopyLinkToClipBoard(item.payment_link)"
                        v-if="item.status != 1 && item.merchant != 'other'"
                        small
                        color="blue float-right"
                        class="white--text"
                      >
                        <v-icon left dark> mdi-anchor </v-icon>
                        Copy Link
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row></v-container
      >
    </v-col>
  </v-row>
</template>
<script>
import leadservice from "@services/auth/lead";
import paymentservice from "@services/auth/payment";
import StatusChip from "@components/common/status.vue";
export default {
  components: {
    StatusChip,
  },
  data() {
    return {
      lead: {},
      payments: [],
      form: {
        amount: 0,
        status: 0,
        merchant: "stripe",
        description: "",
      },
      formerrors: {
        amount: [],
        status: [],
        merchant: [],
        description: [],
      },
      merchants: [
        { key: "stripe", value: "Stripe" },
        { key: "paypal", value: "paypal" },
        { key: "authorize.net", value: "Authorize.Net" },
        { key: "other", value: "Other" },
      ],
      statuses: [
        { key: 0, value: "Pending/Waiting" },
        { key: 1, value: "Paid" },
        { key: 2, value: "Failed" },
      ],
      valid: false,
    };
  },
  async mounted() {
    this.getLead(this.$route.params.id);
  },
  methods: {
    async getLead(id) {
      this.lead = await leadservice.get(id);
      if (this.lead) {
        this.payments = await paymentservice.get(this.lead.id, "");
      }
    },
    async CopyLinkToClipBoard(payment_link) {
      navigator.clipboard.writeText(payment_link);
      this.$store.commit(
        "setNotification",
        "Payment Link Copied to Clip Board"
      );
    },
  },
  watch: {},
  computed: {},
};
</script>