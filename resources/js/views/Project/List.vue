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
      item-key="project_id"
			show-expand
			:expanded.sync="expanded"
			:single-expand="true"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.email="{ item }">
        {{ item.name }} | {{ item.email }}
      </template>
			<template v-slot:item.actions="{ item }">
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							color="info"
							fab
							x-small
							dark
							:to="{ name: 'auth.task.open', query: { project: item.project_id_int } }"
							v-bind="attrs"
          		v-on="on"
						>
							<v-icon>mdi-file-tree</v-icon>
						</v-btn>
					</template>
					<span>Create/Assign Task</span>
				</v-tooltip>
      </template>
			<template v-slot:expanded-item="{ headers, item }">
				<td :colspan="headers.length">
					<task-timeline :projectid="item.project_id_int" />
				</td>
			</template>
    </v-data-table>
  </div>
</template>
<script>
import projectservice from "@services/auth/project";
import taskTimeline from "@/views/Project/taskTimeline.vue";
export default {
	components: {
    'task-timeline': taskTimeline,
  },
  data() {
    return {
			expanded: [],
			bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Project",
          to: { name: "auth.projects.listing" },
          disabled: false,
          exact: true,
        },
      ],
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
    search() {
      this.getDataFromApi();
    },
		expanded(){
			if(this.expanded.length>0){
				//getting timeline
				// this.expanded[0].project_id_int
			}
		}
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
};
</script>