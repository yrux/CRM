<template>
  <div>
    <v-timeline
      v-for="(group, groupk) in tasks_grouped"
      :key="groupk"
      dense
      clipped
      style="max-width: 600px"
    >
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        :color="calendarColor[groupk]"
        large
      >
        <template v-slot:icon>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                v-on="on"
                v-if="groupk == 'Today'"
                color="white"
                >mdi-calendar-today</v-icon
              >
              <v-icon
                v-bind="attrs"
                v-on="on"
                v-if="groupk == 'Overdue'"
                color="white"
                >mdi-calendar-alert</v-icon
              >
              <v-icon
                v-bind="attrs"
                v-on="on"
                v-if="groupk == 'Upcomming'"
                color="white"
                >mdi-calendar-refresh</v-icon
              >
            </template>
            <span>{{groupk}}</span>
          </v-tooltip>
          <!-- <span>mdi-calendar-today</span> -->
        </template>
      </v-timeline-item>
      <!-- <v-timeline-item class="mb-6" hide-dot>
        <span>{{ groupk }} </span>
      </v-timeline-item> -->
      <v-timeline-item
        class="mb-4"
        color="grey"
        icon-color="grey lighten-2"
        small
        v-for="(task, taskKey) in group"
        :key="taskKey"
      >
        <v-row justify="space-between">
          <v-col cols="7"> {{ task.title }} </v-col>
          <v-col class="text-right" cols="5"> {{task.due_date}} </v-col>
        </v-row>
      </v-timeline-item>
      <v-divider></v-divider>
    </v-timeline>
  </div>
</template>
<script>
import taskservice from "@services/auth/task";
export default {
  props: ["projectid"],
  mounted() {
    this.getSummary();
  },
  methods: {
    async getSummary() {
      this.tasks = await taskservice.summary(this.projectid);
    },
  },
  data() {
    return {
      tasks: [],
      calendarColor: {
        Today: "green",
        Overdue: "red",
        Upcomming: "blue",
      },
    };
  },
  watch: {
    projectid() {
      this.getSummary();
    },
  },
  computed: {
    tasks_grouped() {
      var groups = {};
      for (let i = 0; i < this.tasks.length; i++) {
        if (!groups[this.tasks[i].due_type]) {
          groups[this.tasks[i].due_type] = [];
        }
        groups[this.tasks[i].due_type].push(this.tasks[i]);
      }
      return groups;
    },
  },
};
</script>