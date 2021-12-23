<template>
  <v-col cols="12">
    {{notification.data.line}}
    <v-btn
      v-if="project_id_int>0"
      color="info"
      dark
      x-small
      :to="{
        name: 'auth.task.summary',
        params: {project: project_id_int},
        query: {task: notification.data.task_id}
      }"
      target="_blank"
    >
      View Detail
    </v-btn>
  </v-col>
</template>
<script>
export default {
  props: {
    notification: {
      type: Object,
      default: {},
    },
  },
  computed:{
      project_id_int(){
          if(this.notification.data.project_id){
            let project_id = this.notification.data.project_id.split('-')
            return parseInt(project_id[(project_id.length-1)])
          }
          return 0
      }
  }
};
</script>