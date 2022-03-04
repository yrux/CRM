<template>
  <div>
    <v-card class="mx-auto">
      <v-card-title class="primary white--text">
        <span class="text-h6">Update History</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="py-0">
        <v-timeline dense>
          <v-slide-x-reverse-transition group hide-on-leave>
            <v-timeline-item
              v-for="item in updates"
              :key="item.id"
              :color="item.is_new==1?'green':'info'"
              small
              fill-dot
            >
              {{ item.created_at_formatted }}
              <v-chip class="ma-2" color="secondary" v-if="item.is_new == 1">
                New Updates
              </v-chip>
              <v-alert
                :value="true"
                :color="item.is_new==1?'green':'info'"
                icon="mdi-information"
                class="white--text"
                v-html="item.message"
              >
              </v-alert>
            </v-timeline-item>
          </v-slide-x-reverse-transition>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import crmupdateservice from "@services/auth/crmupdate";
export default {
  data() {
    return {
      updates: [],
    };
  },
  mounted() {
    crmupdateservice.getlist("").then((e) => {
      this.updates = e.data;
    });
  },
};
</script>