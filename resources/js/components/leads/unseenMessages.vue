<template>
  <v-row>
    <v-col v-if="loading" cols="12">
      <v-sheet :color="`primary lighten-5`" class="pa-3">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </v-sheet>
    </v-col>
    <v-col cols="12" v-else>
        <h3 class="text-center">Unseen Messages</h3>
        <template>
            <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Email</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Unseen Message</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="lead in leads" :key="lead.lead_id">
                    <td>{{ lead.email }}</td>
                    <td>{{ lead.first_name }} {{ lead.last_name }}</td>
                    <td>{{ lead.unseen_count}}</td>
                    <td>
                        <v-btn link small
                        :to="{ name: 'auth.payment.create', params:{id: lead.lead_id} }" color="blue-grey" class="white--text">
                            <v-icon left dark> mdi-account </v-icon>
                            View Summary
                        </v-btn>
                    </td>
                </tr>
                </tbody>
            </template>
            </v-simple-table>
        </template>
      </v-col>
    </v-row>
</template>
<script>
import leadmessagesservice from "@services/auth/leadmessages";
export default {
  data() {
    return {
      loading: true,
      leads: [],
    };
  },
  mounted() {
    leadmessagesservice.unseenMessages().then((e) => {
      this.leads = e;
      this.loading = false;
    });
  },
};
</script>