<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :options.sync="options"
    :server-items-length="totalRecords"
    :loading="loading"
    class="elevation-1"
    show-select
    v-model="selectedUser"
    :single-select="true"
    item-key="id"
  >
    <template v-slot:top>
      <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
    </template>
  </v-data-table>
</template>
<script>
import userservice from "@services/auth/user";
export default {
  data() {
    return {
      selectedUser: [],
      search: "",
      items: [],
      loading: true,
      totalRecords: 0,
      options: {},
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name",
        },
        {
          text: "Email",
          align: "start",
          sortable: true,
          value: "email",
        },
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
      query += "&role_id=7";
      return userservice.getlist(query);
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
    selectedUser(){
      this.$emit('selected-user', (this.selectedUser.length>0?this.selectedUser[0]:{}))
    }
  },
};
</script>
