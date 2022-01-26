<template>
  <div>
    <v-row no-gutters>
      <v-breadcrumbs :items="bread">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="items"
      :options.sync="options"
      :server-items-length="totalRecords"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.brand_name="{ item }">
        {{item.brand_name}} ({{item.brand_code}})
      </template>
      <template v-slot:item.for_period="{ item }">
        {{item.for_period_formatted}}
      </template>
      
      <template v-slot:item.actions="{ item }">
        <v-btn
          color="info"
          fab
          x-small
          dark
          :to="{ name: 'auth.marketing_budgets.edit', params: { id: item.id } }"
        >
          <v-icon>mdi-pencil-plus</v-icon>
        </v-btn>
        <v-btn color="error" fab x-small dark @click="deleteuser(item.id)">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import marketing_budgetservice from "@services/auth/marketing_budget";
export default {
  name: "auth.marketing_budgets.listing",
  data() {
    return {
      search: "",
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
      ],
      items: [],
      loading: true,
      totalRecords: 0,
      options: {},
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: true,
          value: "id",
        },
        {
          text: "Brand",
          align: "start",
          sortable: true,
          value: "brand_name",
        },
        {
          text: "Max Spending (for the Period)",
          align: "start",
          sortable: true,
          value: "max_spendings",
        },
        {
          text: "Required Leads",
          align: "start",
          sortable: true,
          value: "required_leads",
        },
        { text: "Period", value: "for_period" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  watch: {
    $route() {
      this.getDataFromApi();
    },
    perpage() {
      this.getDataFromApi();
    },
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    deleteuser: async function (id) {
      const isConfirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          return true;
        }
      });
      if (isConfirmed) {
        await marketing_budgetservice.delete({
          id: id,
        });
        Swal.fire("Deleted!", "Your record has been deleted.", "success");
        this.getDataFromApi();
      }
    },
    async getDataFromApi() {
      var data = await this.fakeApiCall();
      this.items = data.data;
      try {
        this.totalRecords = data.meta.total;
      } catch (ex) {
        //this.totalRecords=0
      }
      this.loading = false;
    },
    fakeApiCall() {
      this.loading = true;
      // this.items = []
      var query = "";
      var page = this.options.page;
      query += "?page=" + page;
      if (this.options.sortBy.length > 0) {
        query += "&sortCol=" + this.options.sortBy[0];
      }
      if (this.options.sortDesc.length > 0) {
        //if 1 then by desc else asc
        query += "&sortByDesc=" + (this.options.sortDesc[0] == true ? 1 : 0);
      }
      query += "&perpage=" + this.options.itemsPerPage;
      if (this.search != "") {
        query += "&search=" + this.search;
      }
      return marketing_budgetservice.getlist(query);
    },
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
    search() {
      this.getDataFromApi();
    },
  },
};
</script>
