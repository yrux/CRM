<template>
<div>
  <v-row no-gutters>
    <v-breadcrumbs :items="bread">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template></v-breadcrumbs
    ></v-row
  >
</v-breadcrumbs>
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
        <th class="text-left">
            #
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Email
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.id"
          class="text-left"
        >
          <td>
            <v-img
            :lazy-src="item.image_url"
            max-height="50"
            max-width="50"
            :src="item.image_url"
            contain
            ></v-img>
          </td>
          <td>{{ item.company_name }}</td>
          <td>{{ item.company_email }}</td>
          <td>
                <v-btn
                color="info"
                fab
                x-small
                dark
                :to="{ name:'auth.company.edit' ,params:{id:item.id}}"
                >
                <v-icon>mdi-pencil-plus</v-icon>
                </v-btn>
                <v-btn
                color="error"
                fab
                x-small
                dark
                @click="deletecompany(item.id)"
                >
                <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import companyservice from "@services/auth/company";
export default {
  name: "auth.company.listing",
  data() {
    return {
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Company",
          to: { name: "auth.company.listing" },
          disabled: false,
          exact: true,
        },
      ],
      desserts: [],
    };
  },
  watch: {
    $route() {
      this.getDataFromApi();
    },
    perpage() {
      this.getDataFromApi();
    },
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    deletecompany: async function (id) {
      const isConfirmed = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          return true;
        }
      });
      if (isConfirmed) {
        await companyservice.delete({
          id: id,
        });
        Swal.fire("Deleted!", "Your record has been deleted.", "success");
        this.getDataFromApi();
      }
    },
    async getDataFromApi() {
      var data = await this.fakeApiCall();
      this.desserts = data.data;
    },
    fakeApiCall() {
      return companyservice.getlist("");
    },
  },
};
</script>
