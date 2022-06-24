<template>
  <div>
    <v-alert prominent type="success">
      <v-row align="center">
        <v-col class="grow">
          Account Switched successfully, 
        </v-col>
        <v-col class="shrink">
          <v-btn link :to="{ name: 'auth.dashboard' }">Go to Dashboard</v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>
<script>
export default {
  components: {
  },
};
</script>