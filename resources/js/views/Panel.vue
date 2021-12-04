<template>
    <v-row>
      <v-col cols="12" v-if="user.role_id==8||user.role_id==7||user.role_id==4||user.role_id==5">
        <v-row>
        <v-col v-for="(task, taskk) in tasks" cols="3" :key="taskk">
          <taskWidget :icon="task.icon" :count="task.count" :loading="task.loading" :title="task.title" />
        </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" v-if="user.role_id==2||user.role_id==4||user.role_id==5">
        <unseenMessages :user="user" />
      </v-col>
    </v-row>
</template>
<script>
import adminbar from "@/components/sidebars/admin.vue";
import taskWidget from "@/components/tasks/widget.vue";
import unseenMessages from "@/components/leads/unseenMessages.vue";
import taskservice from "@services/auth/task";
export default {
  components: {
    adminbar,
    taskWidget,
    unseenMessages
  },
  data(){
    return {
      tasks:[
        {title: 'Today Tasks',loading: true, count: 0, type:'today', icon: 'mdi-calendar-today'},
        {title: 'Overdue Tasks',loading: true, count: 0, type:'overdue', icon: 'mdi-calendar-alert'},
        {title: 'Upcomming Tasks',loading: true, count: 0, type:'upcomming', icon: 'mdi-calendar-refresh'},
        {title: 'All Tasks',loading: true, count: 0, type:'all', icon: 'mdi-calendar'},
      ]
    }
  },
  async mounted(){
    if(this.user.role_id==8||this.user.role_id==7||this.user.role_id==4||this.user.role_id==5){
      for(let i = 0; i < this.tasks.length; i++){
        this.tasks[i].count = await taskservice.tasks('?perpage=0&getCount=true&type='+this.tasks[i].type)
        this.tasks[i].loading = false
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>
