<template>
  <div class="ml-2">
    <v-row>
      <v-toolbar dark color="blue darken-3" class="mb-1">
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search By Email, Name, Phone, Message"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-select
          :items="mybrands"
          item-text="brand_name"
          item-value="id"
          label="Filter By Brand"
          v-model="filterBrand"
          clearable
          return-object
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-watermark"
        ></v-select>
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-spacer></v-spacer>
          <v-select
            v-model="sortBy"
            flat
            solo-inverted
            hide-details
            :items="keys"
            item-text="value"
            item-value="key"
            prepend-inner-icon="mdi-magnify"
            label="Sort by"
          ></v-select>
          <v-spacer></v-spacer>
          <v-btn-toggle v-model="sortDesc" mandatory>
            <v-btn large depressed color="blue" :value="false">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn large depressed color="blue" :value="true">
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-btn-toggle>
        </template>
      </v-toolbar>
    </v-row>
    <v-row>
      <v-col cols="3">
        <h2>New/Pending</h2>
        <v-list flat>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in leads.new" :key="i">
              <v-list-item-content @click="openLeadFormEdit(item)">
                <v-list-item-title>
                  <v-chip class="" color="pink" label text-color="white">
                    #{{ item.brand_code }} </v-chip
                  ><br />
                  {{ item.email }}
                </v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.first_name+' '+item.last_name"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="updateStatus(item, 3, 'new', i)"
                      v-bind="attrs"
                      v-on="on"
                      icon
                    >
                      <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
                    </v-btn>
                  </template>
                  <span>Move to Follow Up</span>
                </v-tooltip>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="3">
        <h2>Follow Up</h2>
        <v-list flat>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in leads.followup" :key="i">
              <v-list-item-content @click="openLeadFormEdit(item)">
                <v-list-item-title>
                  <v-chip class="" color="pink" label text-color="white">
                    #{{ item.brand_code }} </v-chip
                  ><br />
                  {{ item.email }}
                </v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.first_name+' '+item.last_name"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="updateStatus(item, 1, 'followup', i)"
                      v-bind="attrs"
                      v-on="on"
                      icon
                    >
                      <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
                    </v-btn>
                  </template>
                  <span>Move to Paid</span>
                </v-tooltip>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="3">
        <h2>Paid</h2>
        <v-list flat>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in leads.paid" :key="i">
              <v-list-item-content @click="openLeadFormEdit(item)">
                <v-list-item-title>
                  <v-chip class="" color="pink" label text-color="white">
                    #{{ item.brand_code }} </v-chip
                  ><br />
                  {{ item.email }}
                </v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.first_name+' '+item.last_name"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="updateStatus(item, 3, 'paid', i)"
                      v-bind="attrs"
                      v-on="on"
                      icon
                    >
                      <v-icon color="grey lighten-1">mdi-arrow-left</v-icon>
                    </v-btn>
                  </template>
                  <span>Move to Followup</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="updateStatus(item, 2, 'paid', i)"
                      v-bind="attrs"
                      v-on="on"
                      icon
                    >
                      <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
                    </v-btn>
                  </template>
                  <span>Move to Junk</span>
                </v-tooltip>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="3">
        <h2>Junk</h2>
        <v-list flat>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in leads.junk" :key="i">
              <v-list-item-content @click="openLeadFormEdit(item)">
                <v-list-item-title>
                  <v-chip class="" color="pink" label text-color="white">
                    #{{ item.brand_code }} </v-chip
                  ><br />
                  {{ item.email }}
                </v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.first_name+' '+item.last_name"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="updateStatus(item, 1, 'junk', i)"
                      v-bind="attrs"
                      v-on="on"
                      icon
                    >
                      <v-icon color="grey lighten-1">mdi-arrow-left</v-icon>
                    </v-btn>
                  </template>
                  <span>Move to Paid</span>
                </v-tooltip>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-row class="mt-2" align="center" justify="center">
      <span class="grey--text">Leads per page</span>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            text
            color="primary"
            class="ml-2"
            v-bind="attrs"
            v-on="on"
          >
            {{ itemsPerPage }}
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(number, index) in itemsPerPageArray"
            :key="index"
            @click="updateItemsPerPage(number)"
          >
            <v-list-item-title>{{ number }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <span class="mr-4 grey--text">
        Page {{ page }} of {{ numberOfPages }}
      </span>
      <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
    <v-btn v-if="user.role_id==2" color="pink" dark fixed bottom right fab @click="openLeadForm">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <LeadForm
      :brands="mybrands"
      v-on:close-leaddialog="closeDialog"
      :openLeadForm="dialogueOpen"
      :lead="selectedLead"
      v-on:refresh-leads="refreshLeads"
    />
  </div>
</template>
<script>
import leadservice from "@services/auth/lead";
import LeadForm from "./LeadForm.vue";
export default {
  components: { LeadForm },
  data() {
    return {
      search: "",
      filterBrand: {},
      sortBy: "id",
      keys: [
        { key: "id", value: "ID/Date" },
        { key: "first_name", value: "First Name" },
        { key: "last_name", value: "Last Name" },
        { key: "company", value: "Company" },
        { key: "email", value: "Email" },
        { key: "phone", value: "Phone" },
      ],
      sortDesc: true,
      page: 1,
      itemsPerPage: 10,
      numberOfPages: 0,
      itemsPerPageArray: [10, 25, 50, 100],
      leads: [],
      selectedLead: {},
      dialogueOpen: false,
      mybrands: [],
    };
  },
  methods: {
    closeDialog() {
      this.dialogueOpen = false;
      this.selectedLead = {};
    },
    openLeadForm() {
      this.dialogueOpen = true;
      this.selectedLead = {};
    },
    openLeadFormEdit(lead) {
      this.dialogueOpen = true;
      this.selectedLead = lead;
    },
    refreshLeads() {
      this.getLeads();
    },
    formerPage() {
      if (this.page > 1) {
        this.page = this.page - 1;
      }
    },
    nextPage() {
      if (this.page < this.numberOfPages) {
        this.page = this.page + 1;
      }
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    async getLeads() {
      var q = "?page=" + this.page;
      if (this.search != "" && this.search != null) {
        q += "&search=" + this.search;
      }
      if(this.filterBrand&&this.filterBrand.id>0){
        q += "&brand_id=" + this.filterBrand.id;
      }
      q += "&perpage=" + this.itemsPerPage;
      q += "&sortByDesc=" + (this.sortDesc == true ? 1 : 0);
      q += "&sortCol=" + this.sortBy;
      var res = await leadservice.getlist(q);
      //find max page
      this.leads = res;
      this.numberOfPages = res.maxPage;
      this.mybrands = res.brands;
    },
    async updateStatus(lead, status, type, index) {
      await leadservice.updateStatus(lead.id, status);
      this.$store.commit("setNotification", "Lead Status Updated");
      this.getLeads()
    },
  },
  computed: {
    user() {
        return this.$store.getters.loggedInUser;
    },
  },
  watch: {
    page() {
      this.getLeads();
    },
    itemsPerPage() {
      this.getLeads();
    },
    search() {
      this.page = 1;
      this.getLeads();
    },
    filterBrand(){
      this.page = 1
      this.getLeads()
    },
    sortDesc() {
      this.page = 1;
      this.getLeads();
    },
    sortBy() {
      this.page = 1;
      this.getLeads();
    },
    $route() {
      if (this.$route.query) {
        if (this.$route.query.openAdd) {
          this.openLeadForm();
        }
      }
    },
  },
  mounted() {
    this.getLeads();
    //open lead form
    if (this.$route.query) {
      if (this.$route.query.openAdd) {
        this.openLeadForm();
      }
    }
  },
};
</script>