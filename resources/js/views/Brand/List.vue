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
<v-row no-gutters>
  <v-col
  cols="3"
  v-for="item in desserts"
  :key="item.id"
  >
  <v-card
  elevation="7"
  outlined
  class="my-4 mr-4"
>
<v-img
  height="100"
  :src="item.image_url"
  contain
></v-img>
<v-card-title>{{item.brand_name}}</v-card-title>
<v-card-text>
  <v-chip-group
    v-model="selection"
    active-class="deep-purple accent-4 white--text"
    column
  >
    <v-chip
      pill
      v-for="user in item.users"
      :key="user.id"
    >
      <v-avatar left>
        <v-img :src="user.user.image_url"></v-img>
      </v-avatar>
      {{user.user_name}}
    </v-chip>
    <v-chip
      pill
      color="indigo"
      text-color="white"
      @click="addUser(item)"
    >
    <v-avatar left>
        <v-icon>mdi-plus</v-icon>
      </v-avatar>
      Add User
    </v-chip>
  </v-chip-group>
</v-card-text>
</v-card>
  </v-col>
</v-row>
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
            Code
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
          <td>{{ item.brand_code }}</td>
          <td>{{ item.brand_name }}</td>
          <td>
                <v-btn
                color="info"
                fab
                x-small
                dark
                :to="{ name:'auth.brands.edit' ,params:{id:item.id}}"
                >
                <v-icon>mdi-pencil-plus</v-icon>
                </v-btn>
                <v-btn
                color="error"
                fab
                x-small
                dark
                @click="deletebrand(item.id)"
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
import brandservice from "@services/auth/brand";
export default {
  name: "auth.brands.listing",
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
          text: "Brand",
          to: { name: "auth.brands.listing" },
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
    addUser(item){
      console.log(item)
    },
    deletebrand: async function (id) {
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
        await brandservice.delete({
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
      return brandservice.getlist("");
    },
  },
};
</script>
