<template>
  <v-row>
    <v-col v-if="mode" cols="12">
      <v-btn @click="addHeading">Add Heading</v-btn>
      <v-btn @click="addDivider">Add Divider</v-btn>
      <v-btn @click="addTextbox">Add TextBox</v-btn>
      <v-btn @click="addDescription">Add TextArea</v-btn>
      <v-btn @click="addRadio">Add Radio Buttons</v-btn>
      <v-btn @click="addCheckbox">Add Checkboxes</v-btn>
    </v-col>
    <v-col v-if="mode" cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col
      v-for="(type, typek) in form"
      :key="typek"
      :cols="type.grid ? type.grid : 12"
    >
      <h2 v-if="type.type == 'heading'" v-html="type.label"></h2>
      <v-divider v-if="type.type == 'breaker'"></v-divider>
      <v-text-field
        v-if="type.type == 'textbox'"
        v-model="type.model"
        :label="type.label"
      >
      <template v-slot:prepend>
        <v-tooltip
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-icon @click="openExplanation(typek)" v-on="on">
              mdi-help-circle-outline
            </v-icon>
          </template>
          Detail
        </v-tooltip>
      </template>
      </v-text-field>
      <v-textarea
        v-if="type.type == 'description'"
        v-model="type.model"
        :label="type.label"
      >
      <template v-slot:prepend>
        <v-tooltip
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-icon @click="openExplanation(typek)" v-on="on">
              mdi-help-circle-outline
            </v-icon>
          </template>
          Detail
        </v-tooltip>
      </template>
      </v-textarea>
      <p v-show="type.type == 'checkbox'">
        {{ type.label }}
      </p>
      <v-radio-group
        v-if="type.type == 'radio'"
        :label="type.label"
        v-model="type.model"
      >
      <template v-slot:prepend>
        <v-tooltip
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-icon @click="openExplanation(typek)" v-on="on">
              mdi-help-circle-outline
            </v-icon>
          </template>
          Detail
        </v-tooltip>
      </template>
        <v-radio
          v-for="(radio, radiok) in type.radios"
          :key="radiok"
          :label="radio.label"
          :value="radio.label"
        ></v-radio>
      </v-radio-group>
      <v-checkbox
        class="ma-0"
        v-show="type.type == 'checkbox'"
        v-for="(checkbox, index) in type.checkboxes"
        multiple
        v-model="type.model"
        :key="index"
        :value="checkbox.label"
        :label="checkbox.label"
      />
    </v-col>

    <v-dialog
      v-model="explanationDialoge"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Explanation</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
                v-if="selectedType>=0"
                v-html="form[selectedType].explanation"
              >
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <ckeditor
                    :editor="editor"
                    v-model="form_explanation"
                    :config="editorConfig"
                ></ckeditor>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="removeSelectedExplanation"
          >
            No Explanation
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="saveSelectedExplanation"
          >
            Save Explanation
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import Swal from "sweetalert2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  props: {
    mode: Boolean,
    formfields: Array,
  },
  methods: {
    async addHeading() {
      var label = await this.askQuestion("Provide Heading Text");
      if (label) {
        this.form.push({
          type: "heading",
          label: label,
        });
      }
    },
    async addDivider() {
      this.form.push({
        type: "breaker",
      });
    },
    async addTextbox() {
      var label = await this.askQuestion("TextBox Label");
      var gridSize = await this.askQuestion("Provide Grid Size", 6);
      if (parseInt(gridSize) > 0) {
        if (label) {
          this.form.push({
            type: "textbox",
            label: label,
            grid: parseInt(gridSize),
            model: "",
            explanation: '',
          });
        }
      }
    },
    async addDescription() {
      var label = await this.askQuestion("Textarea Label");
      var gridSize = await this.askQuestion("Provide Grid Size", 6);
      if (parseInt(gridSize) > 0) {
        if (label) {
          this.form.push({
            type: "description",
            label: label,
            grid: parseInt(gridSize),
            model: "",
            explanation: '',
          });
        }
      }
    },
    async addRadio() {
      var label = await this.askQuestion("Radio Box Label");
      var radioBoxesCount = await this.askQuestion(
        "How many radio boxes you require?",
        3
      );
      if (parseInt(radioBoxesCount) > 0) {
        if (label) {
          var radios = [];
          for (let q = 0; q < parseInt(radioBoxesCount); q++) {
            var label_loop = await this.askQuestion(
              "Provide Radio Box " + (q + 1) + " Label"
            );
            radios.push({ label: label_loop });
          }
          this.form.push({
            type: "radio",
            label: label,
            radios: radios,
            model: "",
            explanation: '',
          });
        }
      }
    },
    async addCheckbox() {
      var label = await this.askQuestion("CheckBox Label");
      var radioBoxesCount = await this.askQuestion(
        "How many checkboxes you require?",
        3
      );
      if (parseInt(radioBoxesCount) > 0) {
        if (label) {
          var radios = [];
          for (let q = 0; q < parseInt(radioBoxesCount); q++) {
            var label_loop = await this.askQuestion(
              "Provide Checkbox " + (q + 1) + " Label"
            );
            radios.push({ label: label_loop });
          }
          this.form.push({
            type: "checkbox",
            label: label,
            checkboxes: radios,
            model: "",
            explanation: '',
          });
        }
      }
    },
    async askQuestion(question, inputValue = "") {
      const { value: questionvalue } = await Swal.fire({
        title: question,
        input: "text",
        inputLabel: "Your Question",
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          }
        },
      });
      if (questionvalue) {
        return questionvalue;
      }
    },
    openExplanation(typek){
      this.selectedType = typek;
      this.explanationDialoge = true
      this.form_explanation = this.form[this.selectedType].explanation
    },
    removeSelectedExplanation(){
      this.form[this.selectedType].explanation = ''
      this.explanationDialoge = false
      this.selectedType = undefined
      this.form_explanation = '';
    },
    saveSelectedExplanation(){
      this.form[this.selectedType].explanation = this.form_explanation
      this.explanationDialoge = false
      this.selectedType = undefined
      this.form_explanation = '';
    },
  },
  data() {
    return {
      selectedType: undefined,
      explanationDialoge: false,
      editorConfig: {},
      editor: ClassicEditor,
      form_explanation: '',
      form: [
        // { type: "heading", label: "Brief Form" },
        // { type: "breaker" },
        // { type: "textbox", label: "Your Name", grid: 6, model: "" },
        // { type: "textbox", label: "Your Email", grid: 6, model: "" },
        // { type: "description", label: "Your Name", grid: 6, model: "" },
        // {
        //   type: "radio",
        //   label: "Your Label",
        //   radios: [
        //     { label: "Pay By Cheque" },
        //     { label: "Pay By Bank" },
        //     { label: "Pay By Value" },
        //   ],
        //   model: "",
        // },
        // {
        //   type: "radioother",
        //   label: "Your Label",
        //   radios: [
        //     { label: "Pay By Cheque" },
        //     { label: "Pay By Bank" },
        //     { label: "Pay By Value" },
        //   ],
        //   model: "",
        // },
        // {
        //   type: "checkbox",
        //   label: "Your checkbox",
        //   checkboxes: [
        //     { label: "Pay By Cheque" },
        //     { label: "Pay By Bank" },
        //     { label: "Pay By Value" },
        //   ],
        //   model: [],
        // },
        // {
        //   type: "checkboxother",
        //   label: "Your checkbox Other",
        //   checkboxes: [
        //     { label: "Pay By Cheque" },
        //     { label: "Pay By Bank" },
        //     { label: "Pay By Value" },
        //   ],
        //   model: [],
        // },
      ],
    };
  },
  async mounted() {
    if (this.formfields.length > 0) {
      this.form = this.formfields;
    }
  },
  watch: {
    form() {
      this.$emit("event-happen", this.form);
    },
    formfields() {
      this.form = this.formfields;
    },
  },
  computed: {},
};
</script>