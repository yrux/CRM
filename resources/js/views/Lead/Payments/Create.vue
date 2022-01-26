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
            {{ lead.totalPaid }}
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
              <v-btn @click="createPaymentTgl = !createPaymentTgl">
                Generate Payment Link
                <v-icon>{{
                  createPaymentTgl ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
              <v-btn color="success" v-if="lead.user_id > 0"
                >User Signedup</v-btn
              >
              <v-btn color="success" @click="signupUserManually" v-else :loading="loaders[0]==1" :disabled="loaders[0]==1"
                >Create User</v-btn
              >

              <v-btn
                v-if="lead.user_id > 0"
                @click="createBriefTgl = !createBriefTgl"
              >
                Send Brief Form
                <v-icon>{{
                  createBriefTgl ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
              <v-badge
                bordered
                color="info"
                :content="
                  lead.unseen_messages == 0 ? '0' : lead.unseen_messages
                "
                overlap
                v-if="lead.user_id > 0"
              >
                <v-btn
                  link
                  :to="{ name: 'auth.leads.messages', params: { id: lead.id } }"
                >
                  Messages
                  <v-icon>mdi-message-processing-outline</v-icon>
                </v-btn>
              </v-badge>
              <!-- <h2></h2> -->
            </v-col>
            <v-expand-transition>
              <div class="col-md-12" v-show="createPaymentTgl">
                <v-divider></v-divider>
                <v-row class="pa-4">
                  <v-col cols="6" md="6">
                    <v-text-field
                      v-model="form.amount"
                      label="Amount$"
                      required
                      :error-messages="formerrors.amount"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-select
                      v-model="form.merchant"
                      :items="merchants"
                      label="Merchant"
                      item-text="value"
                      item-value="key"
                      required
                      :error-messages="formerrors.merchant"
                    ></v-select>
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-text-field
                      v-model="form.description"
                      label="Description"
                      :error-messages="formerrors.description"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-select
                      v-model="form.status"
                      :items="statuses"
                      label="Payment Status"
                      item-text="value"
                      item-value="key"
                      required
                      :error-messages="formerrors.status"
                    ></v-select>
                  </v-col>
                  <v-col cols="3" md="3">
                    <v-select
                      v-model="form.payment_type"
                      :items="payment_types"
                      label="Type"
                      item-text="value"
                      item-value="key"
                      required
                      :error-messages="formerrors.status"
                    ></v-select>
                  </v-col>
                  <v-col cols="3" md="3">
                    <v-select
                      v-model="form.currency"
                      :items="[{key: 'USD', value: 'USD'},{key: 'GBP', value: 'GBP'}]"
                      label="Currency"
                      item-text="key"
                      item-value="value"
                      required
                      :error-messages="formerrors.currency"
                    ></v-select>
                  </v-col>
                  <v-col v-if="lead.user_id>0" cols="6" md="6">
                    <v-select
                      v-model="form.project_id"
                      :items="lead_projects"
                      label="Projects"
                      item-text="project_id"
                      item-value="project_id_int"
                      required
                      :error-messages="formerrors.project_id"
                    ></v-select>
                  </v-col>
                  <v-col cols="6" md="12">
                    <v-btn
                      @click="createPayment"
                      color="blue-grey float-left"
                      class="white--text"
                    >
                      <v-icon left dark> mdi-currency-usd </v-icon>
                      Generate
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>

            <v-expand-transition>
              <div class="col-md-12" v-show="createBriefTgl">
                <v-divider></v-divider>
                <v-row class="pa-4">
                  <v-col cols="6" md="6">
                    <v-select
                      v-model="briefform.form_id"
                      :items="briefforms"
                      label="Brief Forms"
                      item-text="form_name"
                      item-value="id"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-text-field
                      v-model="briefform.name"
                      label="Name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" md="12">
                    <v-btn
                      @click="sendForm"
                      color="blue-grey float-right"
                      class="white--text"
                    >
                      <v-icon left dark> mdi-database-eye-outline </v-icon>
                      Send
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
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
                    <th class="text-left">Type</th>
                    <th class="text-left">Currency</th>
                    <th class="text-left">Project</th>
                    <th class="text-left">Status</th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in payments" :key="item.id">
                    <td>{{ item.amount }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.merchant }}</td>
                    <td>{{ item.payment_type_text }}</td>
                    <td>{{ item.currency }}</td>
                    <td>{{ item.project_id>0?item.project.project_id:'N/A' }}</td>
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
    <v-col v-if="lead.user_id > 0" cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col v-if="lead.user_id > 0" cols="12">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <h2>Briefs Sent to Client</h2>
          </v-col>
          <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Form</th>
                    <th class="text-left">Status</th>
                    <th class="text-left">Sent@</th>
                    <th class="text-left">Filled@</th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="brief in briefs" :key="brief.id">
                    <td>{{ brief.form_name }}</td>
                    <td>{{ brief.status_text }}</td>
                    <td>{{ brief.created_at_formatted }}</td>
                    <td>
                      {{
                        brief.status != 0 ? brief.updated_at_formatted : "N/A"
                      }}
                    </td>
                    <td>
                      <v-btn
                        link
                        :to="{
                          name: 'guest.brief.detail',
                          params: { id: brief.id },
                        }"
                        v-if="brief.status != 0"
                        small
                        color="blue float-right"
                        class="white--text"
                      >
                        <v-icon left dark> mdi-database-eye-outline </v-icon>
                        See Details
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
import projectservice from "@services/auth/project";
import paymentservice from "@services/auth/payment";
import briefformservice from "@services/auth/briefform";
import userbriefsservice from "@services/auth/userbriefs";
import StatusChip from "@components/common/status.vue";
export default {
  components: {
    StatusChip,
  },
  data() {
    return {
      createPaymentTgl: false,
      createBriefTgl: false,
      lead: {},
      payments: [],
      briefs: [],
      form: {
        amount: 0,
        status: 0,
        merchant: "stripe",
        description: "",
        payment_type:'sell',
        project_id:0,
        currency: 'USD',
      },
      briefform: {
        name: "",
        form_id: 0,
      },
      briefforms: [],
      formerrors: {
        amount: [],
        status: [],
        merchant: [],
        description: [],
        payment_type:[],
        project_id: [],
        currency: [],
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
      payment_types:[
        {key:'sell',value:'Sell'},
        {key:'upsell',value:'UpSell'},
        {key:'bonus',value:'Bonus'},
      ],
      lead_projects:[],
      valid: false,
      loaders:[0]
    };
  },
  async mounted() {
    this.startupreqs()
  },
  methods: {
    async sendForm() {
      if (this.briefform.form_id > 0 && this.briefform.name != "") {
        var formdata = new FormData();
        formdata.append("form_name", this.briefform.name);
        formdata.append("form_id", this.briefform.form_id);
        formdata.append("user_id", this.lead.user_id);
        formdata.append("brand_id", this.lead.brand_id);
        var res = await userbriefsservice.create(formdata);
        if (res.status) {
          this.$store.commit("setNotification", "Brief Sent to Customer");
          this.briefs = await userbriefsservice.get(
            "?user_id=" + this.lead.user_id
          );
          this.briefform.form_id = 0;
          this.briefform.name = "";
          this.createBriefTgl = false;
        }
      } else {
        this.$store.commit(
          "setNotification",
          "Please Select Form and Type name to sent brief to user"
        );
      }
    },
    async getLead(id) {
      this.lead = await leadservice.get(id);
      if (this.lead) {
        this.payments = await paymentservice.get(this.lead.id, "");
        if (this.lead.user_id > 0) {
          this.briefs = await userbriefsservice.get(
            "?user_id=" + this.lead.user_id
          );
        }
      }
    },
    async CopyLinkToClipBoard(payment_link) {
      navigator.clipboard.writeText(payment_link);
      this.$store.commit(
        "setNotification",
        "Payment Link Copied to Clip Board"
      );
    },
    async createPayment() {
      this.formerrors = {
        amount: [],
        status: [],
        merchant: [],
        description: [],
        project_id:[],
        payment_type: [],
        currency: [],
      };
      var formData = new FormData();
      formData.append("amount", this.form.amount);
      formData.append("status", this.form.status);
      formData.append("merchant", this.form.merchant);
      formData.append("description", this.form.description);
      formData.append("payment_type", this.form.payment_type);
      formData.append("project_id", this.form.project_id);
      formData.append("currency", this.form.currency);

      var res = await paymentservice.create(this.lead.id, formData);
      if (res.status) {
        this.$store.commit("setNotification", "Payment Created");
        this.form = {
          amount: 0,
          status: 0,
          merchant: "stripe",
          description: "",
          currency: 'USD'
        };
        this.createPaymentTgl = false;
        if (this.lead) {
          this.payments = await paymentservice.get(this.lead.id, "");
        }
      } else {
        if (res.data.amount) {
          this.formerrors.amount = res.data.amount;
        }
        if (res.data.status) {
          this.formerrors.status = res.data.status;
        }
        if (res.data.merchant) {
          this.formerrors.merchant = res.data.merchant;
        }
        if (res.data.description) {
          this.formerrors.description = res.data.description;
        }
        if (res.data.payment_type) {
          this.formerrors.payment_type = res.data.payment_type;
        }
        if (res.data.project_id) {
          this.formerrors.project_id = res.data.project_id;
        }
        if (res.data.currency) {
          this.formerrors.currency = res.data.currency;
        }
      }
    },
    async signupUserManually(){
      this.loaders[0] = 1
      await leadservice.createCustomer(this.lead.id).then(e=>{
        this.lead = e
      })
      this.loaders[0] = 0
      this.startupreqs()
    },
    async startupreqs(){
      this.getLead(this.$route.params.id);
      this.briefforms = await briefformservice.get("?all=true");
      if(parseInt(this.lead.user_id)>0){
        this.lead_projects = await projectservice.getlist('?perpage=0&customer_id='+this.lead.user_id).then(e=>e.data);
      }
    }
  },
  watch: {},
  computed: {},
};
</script>