<template>
    <v-data-table
      :headers="headers"
      :items="items"
      :options.sync="options"
      :server-items-length="totalRecords"
      :loading="loading"
      class="elevation-1"
      show-select
      v-model="selectedProject"
      :single-select="true"
      item-key="project_id"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.email="{ item }">
        {{item.name}} | {{item.email}}
      </template>
    </v-data-table>
</template>
<script>
import projectservice from "@services/auth/project";
export default {
  name: "auth.projects.listing",
  data() {
    return {
      selectedProject: [],
      search: "",
      items: [],
      loading: true,
      totalRecords: 0,
      options: {},
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: true,
          value: "title",
        },
        {
          text: "Project ID",
          align: "start",
          sortable: true,
          value: "project_id",
        },
        {
          text: "Customer",
          align: "start",
          sortable: true,
          value: "customer_email",
        },
        {
          text: "Created@",
          align: "start",
          sortable: false,
          value: "created_at_formatted",
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
      return projectservice.getlist(query);
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
    selectedProject(){
      this.$emit('selected-project', (this.selectedProject.length>0?this.selectedProject[0]:{}))
    }
  },
};
</script>
