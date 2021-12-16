<template>
  <v-row>
    <v-col cols="12" md="12">
      <ckeditor
        :editor="editor"
        v-model="description"
        :config="editorConfig"
      ></ckeditor>
    </v-col>
    <v-col cols="12" md="12">
      <v-file-input
        v-model="files"
        color="deep-purple accent-4"
        counter
        label="Attachements"
        multiple
        placeholder="Select Files to attach with the task"
        prepend-icon="mdi-paperclip"
        :show-size="1000"
        :error-messages="errors.files"
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
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>
    </v-col>
    <v-col cols="12" md="12">
      <v-btn
        :loading="btnloading"
        :disabled="btnloading"
        elevation="1"
        raised
        @click="PostComment"
        class="float-right"
        outlined
        tile
        color="success"
      >
        <v-icon left> mdi-arrow-right-thick </v-icon>
        Comment
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import taskservice from "@services/auth/task.js";
export default {
  props: {
    task_id:{
      type: Number,
      default: 0,
    },
    currenttype:{
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      files: [],
      description: "",
      errors: {
        files: [],
        description: [],
      },
      editorConfig: {},
      editor: ClassicEditor,
      btnloading: false,
    };
  },
  methods: {
    async PostComment() {
      this.btnloading = true;
      var formData = new FormData();
      formData.append("comment", this.description);
      formData.append("is_internal", this.currenttype);
      for (let i = 0; i < this.files.length; i++) {
        formData.append("attachements[" + i + "]", this.files[i]);
      }
      await taskservice.comment(this.task_id, formData);
      this.btnloading = false;
      this.$emit("comment-task");
      this.description = ''
      this.files = []
    },
  },
};
</script>