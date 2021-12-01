<template>
    <v-row>
      <v-col cols="3">
        <taskWidget title="Today" />
      </v-col>
      <v-col cols="3">
        <taskWidget title="Overdue" />
      </v-col>
      <v-col cols="3">
        <taskWidget title="Upcomming" />
      </v-col>
      <v-col cols="3">
        <taskWidget title="All" />
      </v-col>
    </v-row>
</template>
<script>
import adminbar from "@/components/sidebars/admin.vue";
import taskWidget from "@/components/tasks/widget.vue";
export default {
  components: {
    adminbar,
    taskWidget
  },
  data(){
    return {
      
    }
  },
  mounted(){

  },
};
</script>
