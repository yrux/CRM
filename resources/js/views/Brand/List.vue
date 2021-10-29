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
<v-card-title>
  {{item.brand_name}}
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
</v-card-title>
<v-card-text>
  <v-chip-group
    column
  >
    <v-chip
      pill
      v-for="user in item.users"
      :key="user.id"
      small
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
      small
      @click="addUser(item)"
    >
    <v-avatar left>
        <v-icon>mdi-plus</v-icon>
      </v-avatar>
      Create User
    </v-chip>
    <v-chip
      pill
      color="warning"
      text-color="white"
      small
      @click="assignUser(item)"
    >
    <v-avatar left>
        <v-icon>mdi-account-check</v-icon>
      </v-avatar>
      Assign User
    </v-chip>
  </v-chip-group>
</v-card-text>
</v-card>
  </v-col>
</v-row>
<userAdd :user="user" :item="selected" :dialog="userDialog" v-on:close-useraddmodal="userDialog=false;getDataFromApi()"></userAdd>
<userAssign :user="user" :item="selected" :dialogassign="assignDialog" v-on:close-assigndmodal="assignDialog=false;getDataFromApi()"></userAssign>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import brandservice from "@services/auth/brand";
import userAdd from "@/views/Brand/User/Add.vue";
import userAssign from "@/views/Brand/User/Assign.vue";
// import userAdd from "@/components/sidebars/admin.vue";
export default {
  name: "auth.brands.listing",
  computed: {
    user() {
        return this.$store.getters.loggedInUser;
    },
  },
  components:{
    userAssign,
    userAdd,
  },
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
      userDialog: false,
      assignDialog: false,
      selected: {},
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
      this.userDialog = true
      this.assignDialog = false
      this.selected = item
    },
    assignUser(item){
      this.userDialog = false
      this.assignDialog = true
      this.selected = item
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
