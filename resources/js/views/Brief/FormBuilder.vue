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
        :disabled="mode"
      ></v-text-field>
      <v-textarea
        v-if="type.type == 'description'"
        v-model="type.model"
        :label="type.label"
        :disabled="mode"
      ></v-textarea>
      <p v-show="type.type == 'checkbox' || type.type == 'radio'">
        {{ type.label }}
      </p>
      <v-radio-group :disabled="mode" v-if="type.type == 'radio'" v-model="type.model">
        <v-radio
          v-for="(radio, radiok) in type.radios"
          :key="radiok"
          :label="radio.label"
          :value="radio.label"
        ></v-radio>
      </v-radio-group>
      <v-checkbox
        :disabled="mode"
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
  </v-row>
</template>
<script>
import Swal from "sweetalert2";
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
            radios:radios,
            model: "",
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
            checkboxes:radios,
            model: "",
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
  },
  data() {
    return {
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
    console.log(this.formfields)
    if(this.formfields.length>0){
      this.form = this.formfields;
    }
  },
  watch: {
      form(){
          this.$emit('event-happen',this.form)
      },
      formfields(){
        this.form = this.formfields
      }
  },
  computed: {},
};
</script>