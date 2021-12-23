<template>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Invoice#
          </th>
          <th class="text-left">
            Paid
          </th>
          <th class="text-left">
            Balance
          </th>
        </tr>
      </thead>
      <tbody v-if="projects.length>0">
        <tr
          v-for="project in projects"
          :key="project.project_id_int"
        >
          <td>{{ project.project_id }}</td>
          <td>{{ project.total_paid }}</td>
          <td>{{ project.total_balance }}</td>
          <td>
              <v-btn
                link
                :to="{name: 'auth.customer.invoice',params: { id: parseInt(project.project_id_int) }}"
                small
                color="blue float-right"
                class="white--text"
                >
                <v-icon left dark> mdi-cash </v-icon>
                See Details
                </v-btn>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="4">If you are not seeing any invoice, this is because project manager haven't yet created your project.</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import projectsservice from "@services/auth/project";
export default {
    data(){
        return{
            projects: [],
        }
    },
    async mounted(){
        this.projects = await projectsservice.getlist('?perpage=0').then(e=>e.data)
    },
}
</script>