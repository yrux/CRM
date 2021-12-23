<template>
  <v-col cols="12">
    Task <strong>{{ notification.data.task_id }}</strong>
    , Project ID <strong>{{ notification.data.project_id }}</strong>
    <v-btn
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
          let project_id = this.notification.data.project_id.split('-')
          return project_id[(project_id.length-1)]
      }
  }
};
</script>