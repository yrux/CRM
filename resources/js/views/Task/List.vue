<template>
  <v-data-table
    :headers="headers"
    :items="tasks"
    :options.sync="options"
    :server-items-length="totalRecords"
    :loading="loading"
    class="elevation-1"
    item-key="id"
    :item-class="setRowCls"
  >
    <template v-slot:top>
      <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
    </template>
    <template v-slot:item.task_type="{ item }">
      <taskType :type="item.task_type" />
    </template>
    <template v-slot:item.total_time_on_task="{ item }">
      <taskTimer :status="item.status" :time="item.total_time_on_task" />
    </template>
    <template v-slot:item.actions="{ item }">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            :content="item.unseen_comments"
            :value="item.unseen_comments"
            color="green"
            overlap
          >
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
          </v-badge>
        </template>
        <span>Task Detail</span>
      </v-tooltip>
      <v-tooltip v-if="user.role_id==8&&(item.status==0||item.status==1)" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :color="item.task_started==0?'primary':'error'"
            fab
            x-small
            dark
            @click="timeUpdate(item)"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-watch</v-icon>
          </v-btn>
        </template>
        <span>{{item.task_started==0?'Start Timer':'Stop Timer'}}</span>
      </v-tooltip>
      <v-tooltip v-if="user.role_id!=8&&item.task_started==1" top>
        <template v-slot:activator="{ on, attrs }">
          <v-progress-circular
            indeterminate
            color="primary"
            v-bind="attrs"
            v-on="on"
          ></v-progress-circular>
        </template>
        <span>Timer in Progress</span>
      </v-tooltip>
    </template>
  </v-data-table>
</template>
<script>
import taskservice from "@services/auth/task";
import taskType from "@components/common/taskType.vue"
import taskTimer from "@components/common/taskTimer.vue"
export default {
  components:{
    taskType,
    taskTimer
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
          sortable: true,
          value: "due_date",
        },
        {
          text: "Time Worked",
          align: "start",
          sortable: false,
          value: "total_time_on_task",
        },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    async timeUpdate(item){
      this.tasks = []
      this.loading = true;
      await taskservice.timeUpdate(item.id)
      this.getTasks()
    },
    setRowCls(item){
      if(item.status==3){
        return 'orange lighten-4'
      }
      if(item.status==2){
        return 'green lighten-4'
      }
      if(item.status==1){
        return 'blue lighten-4'
      }
    },
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
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>