<template>
  <div>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header> Select Project <strong>{{project_id}}</strong></v-expansion-panel-header>
        <v-expansion-panel-content>
          <project-list v-on:selected-project="projectSelectEv" />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel :disabled="!allowTask">
        <v-expansion-panel-header> {{allowAssign===true?task.task_title:'Create Task'}} </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="task.task_title"
                label="Task"
                required
                placeholder="Task Title Here"
                :error-messages="taskErrors.title"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <label>Description</label>
              <ckeditor
                :editor="editor"
                v-model="task.description"
                :config="editorConfig"
              ></ckeditor>
              <v-alert v-if="taskErrors.task_description.length>0" type="error">
                {{taskErrors.task_description[0]}}
              </v-alert>
            </v-col>
            <v-col cols="12" md="12">
              <label>Due Date</label>
              <v-date-picker
                :landscape="true"
                full-width
                v-model="task.picker"
              ></v-date-picker>
              <v-alert v-if="taskErrors.due_date.length>0" type="error">
                {{taskErrors.due_date[0]}}
              </v-alert>
            </v-col>
            <v-col cols="12" md="12">
              <v-file-input
                v-model="task.files"
                color="deep-purple accent-4"
                counter
                label="Attachements"
                multiple
                placeholder="Select Files to attach with the task"
                prepend-icon="mdi-paperclip"
                :show-size="1000"
                :error-messages="taskErrors.attachements"
              >
                <template v-slot:selection="{ index, text }">
                  <v-chip
                    v-if="index < 2"
                    color="deep-purple accent-4"
                    dark
                    label
                    small
                  >
                    {{ text }}
                  </v-chip>

                  <span
                    v-else-if="index === 2"
                    class="text-overline grey--text text--darken-3 mx-2"
                  >
                    +{{ task.files.length - 2 }} File(s)
                  </span>
                </template>
              </v-file-input>
            </v-col>
            <v-col cols="12" md="12">
              <v-btn @click="validateTask" class="float-right" outlined tile color="success">
                <v-icon left> mdi-arrow-right-thick </v-icon>
                Assign
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel :disabled="!allowAssign">
        <v-expansion-panel-header> Assign to Production </v-expansion-panel-header>
        <v-expansion-panel-content>
          <user-list v-on:selected-user="userSelectEv" />
          <v-col v-if="task.assigned_to>0" cols="12" md="12">
            <v-btn @click="assignTask" class="float-right" outlined tile color="success">
              <v-icon left> mdi-arrow-right-thick </v-icon>
              Assign Now
            </v-btn>
          </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import ProjectList from "@/views/Project/ProjectList.vue";
import UserList from "@/views/Project/UserList.vue";
import projectservice from "@services/auth/project";
import Swal from "sweetalert2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  async mounted(){
    if(this.$route.query){
      if(this.$route.query.project){
        var queryProject = await projectservice.get(this.$route.query.project)
        if(queryProject.id){
          this.project_id_int = queryProject.id
          this.project_id = queryProject.project_id
          this.allowTask = true
          this.panel = []
          this.panel.push(1)
        }
      }
    }
  },
  data() {
    return {
      project_id: "",
      project_id_int: 0,
      task_id: 0,
      panel: [0],
      allowTask: false,
      allowAssign: false,
      task: {
        task_title: "",
        description: "",
        files: [],
        assigned_to: 0,
        picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },
      taskErrors:{
        title: [],
        task_description:[],
        due_date: [],
        attachements: [],
      },
      editorConfig: {},
      editor: ClassicEditor,
    };
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
  components: {
    "project-list": ProjectList,
    'user-list': UserList,
  },
  methods: {
    async assignTask(){
      var formData = new FormData();
      formData.append('title',this.task.task_title)
      formData.append('task_description',this.task.description)
      formData.append('assiged_on',this.task.assigned_to)
      formData.append('due_date',this.task.picker)
      formData.append('project_id',this.task.project_id)
      for(let i = 0; i < this.task.files.length; i++){
        formData.append('attachements['+i+']',this.task.files[i])
      }
      var task = await projectservice.createTask(this.project_id_int, formData);
      Swal.fire({
        title: "Task Assigned",
        icon: "success",
        showCancelButton: false,
      })
      this.resetTaskErrors()
      this.project_id = "";
      this.project_id_int = 0
      this.panel = [];
      this.panel.push(0)
      this.allowTask = false
      this.allowAssign = false
      this.task = {
        task_title: "",
        description: "",
        files: [],
        assigned_to: 0,
        picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      }
    },
    async projectSelectEv(data) {
      if (data.project_id) {
        this.project_id_int = data.project_id_int;
        this.project_id = data.project_id;
        this.allowTask = true;
      } else {
        this.allowTask = false;
        this.project_id = "";
      }
      this.panel = [];
      this.panel.push(1);
    },
    async userSelectEv(data){
      this.task.assigned_to = data.id
    },
    resetTaskErrors(){
      this.taskErrors  = {
        title: [],
        task_description:[],
        due_date: [],
        attachements: [],
      }
    },
    async validateTask(){
      this.resetTaskErrors()
      var formData = new FormData()
      formData.append('project_id',this.project_id)
      formData.append('title',this.task.task_title)
      formData.append('task_description',this.task.description)
      formData.append('due_date',this.task.picker)
      for(let i = 0; i < this.task.files.length; i++){
        formData.append('attachements['+i+']',this.task.files[i])
      }
      var res = await projectservice.validateTask(formData)
      if(res.status){
        //validated
        this.allowAssign=true
        this.panel = []
        this.panel.push(2)
      }else{
        if(res.data.title){
              this.taskErrors.title = res.data.title
          }
          if(res.data.task_description){
              this.taskErrors.task_description = res.data.task_description
          }
          if(res.data.due_date){
              this.taskErrors.due_date = res.data.due_date
          }
          if(res.data.attachements){
              this.taskErrors.attachements = res.data.attachements
          }
      }
    }
  },
};
</script>