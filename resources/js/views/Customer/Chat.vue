<template>
  <leadmessages v-if="leadid>0" class="chat_page" :leadid="leadid" />
</template>
<script>
import leadmessages from "@/components/common/leadmessages.vue";
export default {
  data() {
    return {
      leadid: 0,
    };
  },
  async mounted() {
      this.leadid = this.user.lead.id
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
  components: {
    leadmessages,
  },
};
</script>