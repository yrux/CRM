<template>
  <v-col cols="12">
    Payment <strong>{{ notification.data.status }}</strong
    >, Lead <strong>{{ notification.data.lead_id }}</strong>
    >, Payment ID <strong>{{ notification.data.payment_id }}</strong>
    <v-btn
      color="info"
      dark
      x-small
      :to="{
        name: 'auth.payment.create',
        params: {id: notification.data.lead_id},
        query: {payment_id: notification.data.payment_id},
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
};
</script>