<template>
  <div>
    <v-card class="mx-auto" outlined v-if="!tasksLoader" elevation="2">
      <v-card-title>
        {{ project.project_id }} {{ project.title }} <v-btn @click="changeProjectName" icon color="pink"><v-icon>mdi-lead-pencil</v-icon></v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div v-html="project.description"></div>
        <div class="mt-2">
          <a
            target="_blank"
            v-for="project_files in project.files"
            :key="project_files.id"
            :href="project_files.full_url"
          >
            <v-chip class="ma-2" color="secondary">
              {{ project_files.url }}
            </v-chip></a
          >
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <h3>Tasks</h3>
        <div v-if="user.role_id!=8&&user.role_id!=7" class="mt-2">
          <v-chip
            @click="filterTaskForUser(tsu.user.id)"
            pill
            v-for="(tsu, tsuk) in task_summary_users"
            :key="tsuk"
            class="overflow-visible chip-with-badge"
            :color="selected_user_id==tsu.user.id?'primary':''"
          >
            <v-avatar left>
              <v-img :src="tsu.user.image_url"></v-img>
            </v-avatar>
            {{tsu.user.name}}
            <span class="badge">{{tsu.count}}</span>
          </v-chip>
        </div>
      </v-card-text>
      <v-expansion-panels v-model="taskOpen" multiple focusable>
        <v-expansion-panel
          :class="'mt-4'"
          v-for="(task, taskk) in tasks"
          :key="task.id"
        >
          <v-expansion-panel-header
            v-ripple="{ center: true }"
            v-slot="{ open }"
            :class="task.class"
          >
            <v-row no-gutters>
              <v-col :cols="open === true ? 12 : 4" :class="'text-break'">
                <v-chip @click="copyTaskId(task.id)" class="ma-2" color="pink" label text-color="white">
                  <!-- <v-icon left> mdi-label </v-icon> -->
                  #{{ task.id }}
                </v-chip>
                {{ task.title }}
              </v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="open"></span>
                  <v-row v-else no-gutters style="width: 100%">
                    <v-col cols="4">
                      <taskType :type="task.task_type" />
                      <v-chip
                        pill
                        class="overflow-visible chip-with-badge"
                        :color="'primary'"
                        small
                      >
                        <v-avatar left>
                          <v-img :src="task.assigned_on_user.image_url"></v-img>
                        </v-avatar>
                        {{task.assigned_on_user.name}}
                      </v-chip>
                      <v-chip
                        pill
                        v-if="task.developer_user"
                        class="overflow-visible chip-with-badge"
                        :color="'green'"
                        text-color="white"
                        small
                      >
                        <v-avatar left>
                          <v-img :src="task.developer_user.image_url"></v-img>
                        </v-avatar>
                        {{task.developer_user.name}}
                      </v-chip>
                    </v-col>
                    <v-col cols="4">
                      Start date:
                      <strong>{{
                        task.created_at_formatted || "Not set"
                      }}</strong>
                    </v-col>
                    <v-col cols="4">
                      Due date:
                      <strong>{{ task.due_date || "Not set" }}</strong>
                    </v-col>
                  </v-row>
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="mt-2 text-break" v-html="task.task_description"></div>
            <div class="mt-2">
              <a
                target="_blank"
                v-for="task_files in task.files"
                :key="task_files.id"
                :href="task_files.full_url"
              >
                <v-chip class="ma-2" color="secondary">
                  {{ task_files.url }}
                </v-chip></a
              >
            </div>
            <v-divider></v-divider>
            <v-row class="mt-3 mb-2" no-gutters>
              <h3>Comments</h3>
              <v-col cols="12" md="12">
                <v-row v-if="task.comments.length > 0">
                  <v-col cols="12" md="12">
                    <v-btn-toggle
                      v-model.number="task.is_internal"
                      tile
                      color="deep-purple accent-3"
                      group
                      v-if="user.role_id==7"
                    >
                      <v-btn :value="parseInt(0)">
                        External
                      </v-btn>
                      <v-btn :value="parseInt(1)">
                        Internal
                      </v-btn>
                    </v-btn-toggle>
                  </v-col>
                  <comment-task
                    v-for="comment in task.comments"
                    :key="comment.id"
                    :comment="comment"
                    :currenttype="task.is_internal"
                  />
                </v-row>
              </v-col>
              <post-task-comment
                v-if="task.status != 2"
                v-on:comment-task="refreshTasks()"
                :task_id="task.id"
                :currenttype="task.is_internal"
              />
            </v-row>
            <v-divider></v-divider>
            <v-row class="mt-3" no-gutters>
              <v-col cols="3" sm="3">
                <small
                  >Start date:
                  <strong>{{
                    task.created_at_formatted || "Not set"
                  }}</strong></small
                >
              </v-col>
              <v-col cols="3" sm="3">
                <v-tooltip top v-if="task.status!=2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="
                        dialog = true;
                        selectedTask = task;
                      "
                      text
                      tile
                      color="success"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left> mdi-update </v-icon>
                      <small
                        >Due date:
                        <strong>{{ task.due_date || "Not set" }}</strong></small
                      >
                    </v-btn>
                  </template>
                  <span>Change Due Date</span>
                </v-tooltip>
                <small v-else
                  >Close date:
                  <strong>{{
                    task.updated_at_formatted || "Not set"
                  }}</strong></small
                >
              </v-col>
              <v-col v-if="user.role_id!=8" cols="3" sm="3">
                <v-btn-toggle rounded>
                  <v-tooltip bottom v-if="task.status!=2">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="taskStatusUpdate(task.id, 2)" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                    <span>Close Task</span>
                  </v-tooltip>
                  <v-tooltip bottom v-else-if="task.status==2&&(user.role_id==7||user.role_id==10)">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="taskStatusUpdate(task.id, 0)" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-check</v-icon>
                      </v-btn>
                    </template>
                    <span>Re-Open Task</span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="task.status!=2">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="changeAssignmentDialog = true;selectedTask = task;" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-account-convert</v-icon>
                      </v-btn>
                    </template>
                    <span>Change Assignment</span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="user.role_id==7">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="changeAssignmentDevDialog = true;selectedTask = task;" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-code-json</v-icon>
                      </v-btn>
                    </template>
                    <span>Assign Resource</span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="task.status!=2&&task.status!=3">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="taskStatusUpdate(task.id, 3)" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-car-brake-hold</v-icon>
                      </v-btn>
                    </template>
                    <span>Put on Hold</span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="task.status==3">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="taskStatusUpdate(task.id, 0)" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-car-brake-hold</v-icon>
                      </v-btn>
                    </template>
                    <span>Resume from Hold</span>
                  </v-tooltip>

                </v-btn-toggle>
              </v-col>
              <v-col v-if="user.role_id!=8" cols="3" sm="3">
                <taskType :type="task.task_type" />
                <v-chip
                  pill
                  class="overflow-visible chip-with-badge"
                  :color="'primary'"
                  small
                >
                  <v-avatar left>
                    <v-img :src="task.assigned_on_user.image_url"></v-img>
                  </v-avatar>
                  {{task.assigned_on_user.name}}
                </v-chip>
                <v-chip
                  pill
                  v-if="task.developer_user"
                  class="overflow-visible chip-with-badge"
                  :color="'green'"
                  text-color="white"
                  small
                >
                  <v-avatar left>
                    <v-img :src="task.developer_user.image_url"></v-img>
                  </v-avatar>
                  {{task.developer_user.name}}
                </v-chip>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <v-row v-else>
      <v-col cols="12" md="12" class="pa-0" v-for="qq in 10" :key="qq">
        <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Update Due Date</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-date-picker
                  full-width
                  v-model="selectedTask.due_date"
                ></v-date-picker>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="updateDue(selectedTask)">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="changeAssignmentDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Change Assigned User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <user-list v-on:selected-user="changeAssignmentSelectEv" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="changeAssignmentDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="changeAssignmentDevDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Change Assigned User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <user-list :role="8" :department="user.department_id" v-on:selected-user="changeAssignmentDevSelectEv" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="changeAssignmentDevDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import taskservice from "@services/auth/task";
import projectservice from "@services/auth/project";
import CommentTask from "./CommentTask.vue";
import PostTaskComment from "./PostTaskComment.vue";
import UserList from "@/views/Project/UserList.vue";
import taskType from "@components/common/taskType.vue"
import Swal from "sweetalert2";
export default {
  async mounted() {
    this.$root.snackbar = true
    this.$root.notificationText = 'Notification here'
    this.project_id = this.$route.params.project;
    this.project = await projectservice.get(this.project_id);
    await this.getTaskSummary();
    if (this.$route.query.task) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id == this.$route.query.task) {
          //opens task
          this.taskOpen = [];
          this.taskOpen.push(i);
        }
      }
    }
    await this.getTaskUsersSummary()
  },
  data() {
    return {
      project_id: 0,
      taskOpen: [],
      tasks: [],
      dialog: false,
      changeAssignmentDialog: false,
      changeAssignmentDevDialog: false,
      selectedTask: {},
      project: {},
      task_summary_users: [],
      selected_user_id: 0,
      tasksLoader: true,
      notificationsRead: []
    };
  },
  methods: {
    async changeProjectName(){
      const project_id = this.project_id
      await Swal.fire({
        title: 'Change your Project name',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Change',
        showLoaderOnConfirm: true,
        preConfirm: async (name) => {
          if (!name) throw null;
          let formData = new FormData()
          formData.append('title', name)
          let res = await projectservice.update(formData, project_id)
          this.project.title = name
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
    },
    copyTaskId(task_id){
      navigator.clipboard.writeText(task_id);
      this.$store.commit(
        "setNotification",
        "Task ID Copied to Clip Board"
      );
    },
    async changeAssignmentSelectEv(data){
      var formData = new FormData();
      formData.append("assigned_on", data.id);
      await taskservice.update(this.project_id, this.selectedTask.id, formData);
      this.$store.commit('setNotification','Task Updated');
      this.getTaskUsersSummary()
      this.refreshTasks()
    },
    async changeAssignmentDevSelectEv(data){
      var formData = new FormData();
      formData.append("developer_id", data.id);
      await taskservice.update(this.project_id, this.selectedTask.id, formData);
      this.$store.commit('setNotification','Developer Assigned');
      this.getTaskUsersSummary() 
      this.refreshTasks()
    },
    async taskStatusUpdate(task_id, status){
      await taskservice.updateStatus(this.project_id, task_id, status)
      this.$store.commit('setNotification','Status Updated');
      this.refreshTasks()
    },
    filterTaskForUser(user_id){
      if(this.selected_user_id==user_id){
        this.selected_user_id=0
      }else{
        this.selected_user_id = user_id
      }
      this.refreshTasks()
    },
    refreshTasks() {
      this.getTaskSummary();
    },
    async getTaskSummary() {
      this.tasksLoader = true
      var q = ''
      if(this.selected_user_id>0){
        q+='?user_id='+this.selected_user_id
      }
      var res = await taskservice.summary(this.project_id, q);
      let tasks = res;
      for(let q = 0; q < tasks.length; q++){
        tasks[q].class = '';
        tasks[q].is_internal = 0;
        if(tasks[q].status==3){
          tasks[q].class = 'orange lighten-4'
        }
        if(tasks[q].status==2){
          tasks[q].class = 'green lighten-4'
        }
        if(tasks[q].status==1){
          tasks[q].class = 'blue lighten-4'
        }
        if(this.user.role_id==8){
          tasks[q].is_internal = 1;
        }
        else{
          tasks[q].is_internal = 0;
        }
      }
      this.tasks = tasks
      this.tasksLoader = false
    },
    async updateDue(task) {
      //   this.tasks = [];
      var formData = new FormData();
      formData.append("due_date", task.due_date);
      taskservice.update(this.project_id, task.id, formData);
      this.dialog = false;
      //   this.getTaskSummary();
    },
    async getTaskUsersSummary(){
      this.task_summary_users = await taskservice.usersSummary(this.project_id)
    },
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
  watch: {
    taskOpen(n, o){
      if(n.length>o.length){
        //means new task opened
        //getting task opened in accordion
        let task_id = this.tasks[n[(n.length-1)]].id
        console.log(this.notificationsRead.indexOf(task_id))
        if(this.notificationsRead.indexOf(task_id)<0){
          //to hit only once over read api
          this.notificationsRead.push(task_id)
          taskservice.markCommentsread(task_id)
        }
      }
    }
  },
  components: { CommentTask, PostTaskComment, taskType, UserList },
};
</script>