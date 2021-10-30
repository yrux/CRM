<template>
  <div>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header> Select Project </v-expansion-panel-header>
        <v-expansion-panel-content>
          <project-list v-on:selected-project="projectSelectEv" />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel :disabled="!allowTask">
        <v-expansion-panel-header> Create Task </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="task.task_title"
                label="Task"
                required
                placeholder="Task Title Here"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <label>Description</label>
              <ckeditor
                :editor="editor"
                v-model="task.description"
                :config="editorConfig"
              ></ckeditor>
            </v-col>
            <v-col cols="12" md="12">
              <label>Due Date</label>
              <v-date-picker
                :landscape="true"
                full-width
                v-model="task.picker"
              ></v-date-picker>
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
    </v-expansion-panels>
  </div>
</template>
<script>
import ProjectList from "@/views/Project/ProjectList.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      project_id: "",
      task_id: 0,
      panel: [0],
      allowTask: false,
      task: {
        task_title: "",
        description: "",
        files: [],
        picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
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
  },
  methods: {
    async projectSelectEv(data) {
      if (data.project_id) {
        this.project_id = data.project_id;
        this.allowTask = true;
      } else {
        this.allowTask = false;
        this.project_id = "";
      }
      this.panel = [];
      this.panel.push(1);
    },
    async validateTask(){
      
    }
  },
};
</script>