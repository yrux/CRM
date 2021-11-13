<template>
  <div v-if="loggedIn">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!-- <v-img
          :src="require('./assets/logo.png')"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn :to="{ name: 'auth.dashboard' }" text>
        <span class="mr-2">Dashboard</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn @click="logoutauthparent" text>
        <span class="mr-2">Logout</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-menu
        bottom
        left
        transition="slide-y-transition"
        open-on-hover
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon offset-y v-bind="attrs" v-on="on">
            <v-icon>mdi-anchor</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-if="user.role_id == 1"
            link
            :to="{ name: 'auth.company.add' }"
          >
            <v-list-item-title
              ><v-icon>mdi-plus</v-icon>Company</v-list-item-title
            >
          </v-list-item>
          <v-list-item
            v-if="user.role_id == 1 || user.role_id == 2"
            link
            :to="{ name: 'auth.brands.add' }"
          >
            <v-list-item-title
              ><v-icon>mdi-plus</v-icon>Brand</v-list-item-title
            >
          </v-list-item>
          <v-list-item
            v-if="user.role_id == 1 || user.role_id == 2"
            link
            :to="{ name: 'auth.users.add' }"
          >
            <v-list-item-title><v-icon>mdi-plus</v-icon>User</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-if="user.role_id == 4 || user.role_id == 5"
            link
            :to="{ name: 'auth.projects.add' }"
          >
            <v-list-item-title
              ><v-icon>mdi-plus</v-icon>Project</v-list-item-title
            >
          </v-list-item>
          <v-list-item
            v-if="user.role_id == 4 || user.role_id == 5"
            link
            :to="{ name: 'auth.task.open' }"
          >
            <v-list-item-title><v-icon>mdi-plus</v-icon>Task</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 3 || user.role_id == 2 || user.role_id == 1"
            link
            :to="{ name: 'auth.leads.listing', query:{openAdd: 'true'} }"
          >
            <v-list-item-title><v-icon>mdi-plus</v-icon>Lead</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-if="user.role_id == 2"
            link
            :to="{ name: 'auth.brief.add', query:{openAdd: 'true'} }"
          >
            <v-list-item-title><v-icon>mdi-plus</v-icon>Brief Form</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item link :to="{ name: 'auth.quote.add' }">
            <v-list-item-title
              ><v-icon>mdi-plus</v-icon>Quote</v-list-item-title
            >
          </v-list-item>
          <v-list-item link :to="{ name: 'auth.brands.add' }">
            <v-list-item-title
              ><v-icon>mdi-plus</v-icon>Brand</v-list-item-title
            >
          </v-list-item> -->
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
      mini-variant
      class=""
      v-if="!showsidebar"
    >
      <v-system-bar></v-system-bar>
      <v-system-bar></v-system-bar>
      <v-system-bar></v-system-bar>
      <v-list-item class="px-2" link :to="{ name: 'auth.profile' }">
        <v-list-item-avatar>
          <v-img :src="user.image_url"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{ user.name }}</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-if="user.role_id == 1"
          class="pa-0"
          link
          :to="{ name: 'auth.company.listing' }"
        >
          <v-menu
            open-on-hover
            offset-x
            style="max-width: 600px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%; text-align: center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-shape-circle-plus'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Company</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.company.add' }">
                <v-list-item-title>Add Company</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 2"
          class="pa-0"
          link
          :to="{ name: 'auth.brief.listing' }"
        >
          <v-menu
            open-on-hover
            offset-x
            style="max-width: 600px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%; text-align: center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-form-select'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Brief Form</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.brief.add' }">
                <v-list-item-title>Add Brief Form</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 1 || user.role_id == 2"
          class="pa-0"
          link
          :to="{ name: 'auth.brands.listing' }"
        >
          <v-menu
            open-on-hover
            offset-x
            style="max-width: 600px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%; text-align: center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-watermark'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Brands</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.brands.add' }">
                <v-list-item-title>Add Brand</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 1 || user.role_id == 2"
          class="pa-0"
          link
          :to="{ name: 'auth.users.listing' }"
        >
          <v-menu
            open-on-hover
            offset-x
            style="max-width: 600px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%; text-align: center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-account-multiple-plus-outline'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Users</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.users.add' }">
                <v-list-item-title>Add User</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 1 || user.role_id == 2 || user.role_id == 3 || user.role_id == 4 || user.role_id == 5"
          class="pa-0"
          link
          :to="{ name: 'auth.leads.listing' }"
        >
          <v-menu
            open-on-hover
            offset-x
            style="max-width: 600px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%; text-align: center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-google-ads'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Leads</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.leads.listing', query:{openAdd: 'true'} }">
                <v-list-item-title>Add Lead</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 4 || user.role_id == 5"
          class="pa-0"
          link
          :to="{ name: 'auth.projects.listing' }"
        >
          <v-menu
            open-on-hover
            offset-x
            style="max-width: 600px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%; text-align: center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-projector-screen'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.projects.add' }">
                <v-list-item-title>Add Project</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 4 || user.role_id == 5"
          class="pa-0"
          link
          :to="{ name: 'auth.tasks.type', params:{type: 'today'} }"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%;"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-calendar-today'"></v-icon>
              </v-list-item-icon>
            </template>
            <span>Today</span>
          </v-tooltip>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 4 || user.role_id == 5"
          class="pa-0"
          link
          :to="{ name: 'auth.tasks.type', params:{type: 'overdue'} }"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%;"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-calendar-alert'"></v-icon>
              </v-list-item-icon>
            </template>
            <span>Overdue</span>
          </v-tooltip>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 4 || user.role_id == 5"
          class="pa-0"
          link
          :to="{ name: 'auth.tasks.type', params:{type: 'upcomming'} }"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%;"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-calendar-refresh'"></v-icon>
              </v-list-item-icon>
            </template>
            <span>Upcomming</span>
          </v-tooltip>
        </v-list-item>
        <v-list-item v-if="user.role_id!=6" class="pa-0" link :to="{ name: 'auth.chat' }">
          <v-menu
            open-on-hover
            offset-x
            style="max-width: 600px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%; text-align: center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-message-bulleted'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Chat</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-menu>
        </v-list-item>
        <!--
        <v-list-item class="pa-0" link :to="{ name: 'auth.admin.users.main' }">
          <v-menu
            open-on-hover
            offset-x
            style="max-width: 600px"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%; text-align: center"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-account'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Users</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item
                exact
                link
                :to="{ name: 'auth.admin.users.list', params: { usertype: 1 } }"
              >
                <v-list-item-title>Admins</v-list-item-title>
              </v-list-item>
              <v-list-item
                exact
                link
                :to="{ name: 'auth.admin.users.list', params: { usertype: 2 } }"
              >
                <v-list-item-title>BUH</v-list-item-title>
              </v-list-item>
              <v-list-item
                exact
                link
                :to="{ name: 'auth.admin.users.list', params: { usertype: 3 } }"
              >
                <v-list-item-title>Purchasers</v-list-item-title>
              </v-list-item>
              <v-list-item
                exact
                link
                :to="{ name: 'auth.admin.users.list', params: { usertype: 4 } }"
              >
                <v-list-item-title>Sales</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  components: {},
  props: ["showsidebar"],
  data: () => ({
    drawer: false,
    mini: true,
    adminrolemenu: [
      {
        name: "Company",
        route: "auth.company",
      },
    ],
    companyrolemenu: [
      {
        name: "Brand",
        route: "auth.brand",
      },
    ],
  }),
  methods: {
    logoutauthparent() {
      this.$store.commit("setLoginStatus", false);
      this.$store.commit("setAuthToken", "");
      this.$store.commit("setloggedInUser", {});
      this.$router.push({ name: "auth.login" });
    },
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    sidemenus() {
      if (this.user.role_id == 1) {
        return this.adminrolemenu;
      }
      if (this.user.role_id == 2) {
        return this.companyrolemenu;
      }
    },
  },
};
</script>