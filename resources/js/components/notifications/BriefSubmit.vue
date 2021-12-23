<template>
  <v-col cols="12">
    {{notification.data.message}}
    <v-btn
    v-if="user.role_id==6"
      color="info"
      dark
      x-small
      :to="{
        name: 'auth.customer.briefs.edit',
        params: {id: notification.data.id}
      }"
      target="_blank"
    >
      View Detail
    </v-btn>
    <v-btn
    v-else
      color="info"
      dark
      x-small
      :to="{
        name: 'guest.brief.detail',
        params: {id: notification.data.id}
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
  computed: {
    user() {
        return this.$store.getters.loggedInUser;
    },
  },
};
</script>