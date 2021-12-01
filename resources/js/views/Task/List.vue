<template>
  <v-data-table
    :headers="headers"
    :items="tasks"
    :options.sync="options"
    :server-items-length="totalRecords"
    :loading="loading"
    class="elevation-1"
    item-key="id"
  >
    <template v-slot:top>
      <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
    </template>
    <template v-slot:item.task_type="{ item }">
      <taskType :type="item.task_type" />
    </template>
    <template v-slot:item.actions="{ item }">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="info"
            fab
            x-small
            dark
            :to="{
              name: 'auth.task.summary',
              params: { project: item.project_id_root },
              query: { task:item.id },
            }"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-file-tree</v-icon>
          </v-btn>
        </template>
        <span>Task Detail</span>
      </v-tooltip>
    </template>
  </v-data-table>
</template>
<script>
import taskservice from "@services/auth/task";
import taskType from "@components/common/taskType.vue"
export default {
  components:{
    taskType,
  },
  data() {
    return {
      search: "",
      taskType: "",
      tasks: [],
      loading: true,
      totalRecords: 0,
      options: {},
      perpage: 10,
      headers: [
        {
          text: "#",
          align: "start",
          sortable: true,
          value: "id",
        },
        {
          text: "Type",
          align: "start",
          sortable: true,
          value: "task_type",
        },
        {
          text: "Title",
          align: "start",
          sortable: true,
          value: "task_title",
        },
        {
          text: "Project ID",
          align: "start",
          sortable: true,
          value: "project_id",
        },
        {
          text: "Assigned On",
          align: "start",
          sortable: true,
          value: "created_at_formatted",
        },
        {
          text: "Resource Working",
          align: "start",
          sortable: true,
          value: "developer_name",
        },
        {
          text: "Assigned To",
          align: "start",
          sortable: true,
          value: "assigned_user_name",
        },
        {
          text: "Due",
          align: "start",
          sortable: false,
          value: "due_date",
        },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    async getTasks() {
      this.loading = true;
      var q = "";
      if (this.taskType != "all") {
        q += "?type=" + this.taskType;
      }
      var page = this.options.page;
      q += (q == "" ? "?" : "&") + "page=" + page;
      if (this.options.sortBy.length > 0) {
        q += "&sortCol=" + this.options.sortBy[0];
      }
      if (this.options.sortDesc.length > 0) {
        //if 1 then by desc else asc
        q += "&sortByDesc=" + (this.options.sortDesc[0] == true ? 1 : 0);
      }
      q += "&perpage=" + this.options.itemsPerPage;
      if (this.search != "") {
        q += "&search=" + this.search;
      }
      var res = await taskservice.tasks(q);
      this.totalRecords = res.total;
      this.tasks = res.data;
      this.loading = false;
    },
  },
  async mounted() {
    this.taskType = this.$route.params.type;
  },
  watch: {
    $route() {
      this.taskType = this.$route.params.type;
    },
    taskType() {
      this.getTasks();
    },
    perpage() {
      this.getTasks();
    },
    options: {
      handler() {
        this.getTasks();
      },
      deep: true,
    },
    search() {
      this.getTasks();
    },
  },
  computed: {},
};
</script>