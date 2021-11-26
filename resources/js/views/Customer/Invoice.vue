<template></template>
<script>
import paymentservice from "@services/auth/payment";
export default {
  data() {
    return {
      project: {},
    };
  },
  async mounted() {
    let pid = this.$route.params.id
    let payments = await paymentservice.getlist(this.user.lead.id,'?project_id='+pid+'&unpaid=true').then(e=>e.data);
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>