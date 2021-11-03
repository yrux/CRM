<template>
  <div>
    <v-expansion-panels
      v-if="tasks.length > 0"
      v-model="taskOpen"
      multiple
      focusable
    >
      <v-expansion-panel :class="'mt-4'" v-for="task in tasks" :key="task.id">
        <v-expansion-panel-header v-ripple="{ center: true }" v-slot="{ open }">
          <v-row no-gutters>
            <v-col :cols="open === true ? 12 : 4" :class="'text-break'">
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
                    Due date: <strong>{{ task.due_date || "Not set" }}</strong>
                  </v-col>
                </v-row>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="mt-2 text-break" v-html="task.task_description"></div>
          <v-divider></v-divider>
          <v-row class="mt-3" no-gutters>
              
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
                  <v-btn @click="dialog=true;selectedTask=task;" text tile color="success"  v-bind="attrs" v-on="on">
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
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row v-else>
      <v-col cols="12" md="12" class="pa-0" v-for="qq in 10" :key="qq">
        <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Update Due Date</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-date-picker full-width v-model="selectedTask.due_date"></v-date-picker>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="updateDue(selectedTask)"
          >
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
export default {
  async mounted() {
    this.project_id = this.$route.params.project;
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
      selectedTask : {},
    };
  },
  methods: {
    async getTaskSummary() {
      var res = await taskservice.summary(this.project_id);
      this.tasks = res;
    },
    async updateDue(task) {
    //   this.tasks = [];
      var formData = new FormData();
      formData.append("due_date", task.due_date);
      taskservice.update(this.project_id, task.id, formData);
      this.dialog = false
    //   this.getTaskSummary();
    },
  },
  computed: {},
  watch: {},
};
</script>