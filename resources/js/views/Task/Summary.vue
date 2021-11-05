<template>
  <div>
    <v-card class="mx-auto" outlined v-if="tasks.length > 0" elevation="2">
      <v-card-title>
        {{ project.project_id }} {{ project.title }}
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
                <v-chip class="ma-2" color="pink" label text-color="white">
                  <v-icon left> mdi-label </v-icon>
                  #{{ task.id }}
                </v-chip>
                {{ task.title }}
              </v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="open"></span>
                  <v-row v-else no-gutters style="width: 100%">
                    <v-col cols="6">
                      Start date:
                      <strong>{{
                        task.created_at_formatted || "Not set"
                      }}</strong>
                    </v-col>
                    <v-col cols="6">
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
                  <comment-task
                    v-for="comment in task.comments"
                    :key="comment.id"
                    :comment="comment"
                  />
                </v-row>
              </v-col>
              <post-task-comment
                v-if="task.status != 2"
                v-on:comment-task="refreshTasks()"
                :task_id="task.id"
              />
            </v-row>
            <v-divider></v-divider>
            <v-row class="mt-3" no-gutters>
              <v-col cols="4" sm="4">
                <small
                  >Start date:
                  <strong>{{
                    task.created_at_formatted || "Not set"
                  }}</strong></small
                >
              </v-col>
              <v-col cols="4" sm="4">
                <v-tooltip top>
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
              </v-col>
              <v-col cols="4" sm="4">
                <v-btn-toggle rounded>
                  <v-tooltip bottom v-if="task.status!=2">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="taskStatusUpdate(task.id, 2)" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                    <span>Close Task</span>
                  </v-tooltip>
                  <v-tooltip bottom v-else>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="taskStatusUpdate(task.id, 0)" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-check</v-icon>
                      </v-btn>
                    </template>
                    <span>Re-Open Task</span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="task.status!=2">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-account-convert</v-icon>
                      </v-btn>
                    </template>
                    <span>Change Assignment</span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="task.status!=2">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="taskStatusUpdate(task.id, 3)" fab small v-bind="attrs" v-on="on">
                        <v-icon>mdi-car-brake-hold</v-icon>
                      </v-btn>
                    </template>
                    <span>Put on Hold</span>
                  </v-tooltip>
                </v-btn-toggle>
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
  </div>
</template>
<script>
import taskservice from "@services/auth/task";
import projectservice from "@services/auth/project";
import CommentTask from "./CommentTask.vue";
import PostTaskComment from "./PostTaskComment.vue";
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
  },
  data() {
    return {
      project_id: 0,
      taskOpen: [],
      tasks: [],
      dialog: false,
      selectedTask: {},
      project: {},
    };
  },
  methods: {
    async taskStatusUpdate(task_id, status){
      await taskservice.updateStatus(this.project_id, task_id, status)
      this.$store.commit('setNotification','Status Updated');
      this.refreshTasks()
    },
    refreshTasks() {
      this.getTaskSummary();
    },
    async getTaskSummary() {
      var res = await taskservice.summary(this.project_id);
      this.tasks = res;
      for(let q = 0; q < this.tasks.length; q++){
        this.tasks[q].class = '';
        if(this.tasks[q].status==3){
          this.tasks[q].class = 'orange lighten-4'
        }
        if(this.tasks[q].status==2){
          this.tasks[q].class = 'green lighten-4'
        }
        if(this.tasks[q].status==1){
          this.tasks[q].class = 'blue lighten-4'
        }
      }
    },
    async updateDue(task) {
      //   this.tasks = [];
      var formData = new FormData();
      formData.append("due_date", task.due_date);
      taskservice.update(this.project_id, task.id, formData);
      this.dialog = false;
      //   this.getTaskSummary();
    },
  },
  computed: {},
  watch: {},
  components: { CommentTask, PostTaskComment },
};
</script>