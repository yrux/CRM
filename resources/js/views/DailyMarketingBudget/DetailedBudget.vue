<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    persistent
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Detail Budget Report</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-row class="mb-4 mt-4">
        <v-col cols="5">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="form.date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.date"
                label="Select Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="form.date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(form.date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model="form.budget"
            label="Budget"
            type="number"
            min="0"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn @click="saveBudget" color="success"> Save <v-icon>mdi-check</v-icon> </v-btn>
        </v-col>
      </v-row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Amount</th>
              <th class="text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in spendings" :key="item.id">
              <td>{{ item.spending }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    spendings: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      form: {
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        budget: 0,
      },
      menu: false,
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDetailedBudgetModal");
    },
    saveBudget(){
        this.$emit("saveBudgetDaily",{
            date: this.form.date,
            budget: this.form.budget
        });
    }
  },
};
</script>