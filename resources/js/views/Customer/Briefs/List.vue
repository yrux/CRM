<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Form</th>
                <th class="text-left">Status</th>
                <th class="text-left">Sent@</th>
                <th class="text-left">Filled@</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="brief in briefs" :key="brief.id">
                <td>{{ brief.form_name }}</td>
                <td>{{ brief.status_text }}</td>
                <td>{{ brief.created_at_formatted }}</td>
                <td>
                  {{ brief.status != 0 ? brief.updated_at_formatted : "N/A" }}
                </td>
                <td>
                  <v-btn
                    link
                    :to="{ name: 'auth.customer.briefs.edit', params:{id: brief.id} }"
                    small
                    color="blue float-right"
                    class="white--text"
                  >
                    <v-icon left dark> mdi-database-eye-outline </v-icon>
                    {{brief.status==0?'Edit':'View Detail'}}
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row></v-container
  >
</template>
<script>
import userbriefsservice from "@services/auth/userbriefs";
export default {
  data() {
    return {
      briefs: [],
    };
  },
  mounted(){
      userbriefsservice.get('').then(e=>{
          this.briefs = e
      })
  }
};
</script>