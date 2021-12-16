<template>
  <v-row>
    <v-col cols="12">
      <v-row align="center" justify="space-around">
          <v-col cols="3">
            <v-btn elevation="2" raised outlined block  large color="teal">
              <v-icon > mdi-calendar </v-icon>
              Tasks
            </v-btn>
          </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" v-if="notificationType=='tasks'">
      <taskNotifications />
    </v-col>
  </v-row>
</template>
<script>
import taskNotifications from '@/components/notifications/tasks.vue'
export default {
  data() {
    return {
      notificationType: 'tasks',
    };
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>