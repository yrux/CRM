<template>
  <div v-if="loggedIn">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!-- <v-img
          :src="require('./assets/logo.png')"
        /> -->
      </div>

      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'guest.crm.updates' }" text>
          <v-icon>
            mdi-cellphone-arrow-down
          </v-icon>
      </v-btn>
      <v-btn :to="{ name: 'auth.notifications' }" text>
        <v-badge
          :content="user.notification_count"
          :value="user.notification_count"
          color="green"
          overlap
        >
          <v-icon >
            mdi-bell-outline
          </v-icon>
        </v-badge>
      </v-btn>
      <add-account-button />
      <add-acount-modal />
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
            v-if="
              user.role_id == 4 ||
              user.role_id == 5 ||
              user.role_id == 3 ||
              user.role_id == 2 ||
              user.role_id == 9 ||
              user.role_id == 1
            "
            link
            :to="{ name: 'auth.leads.listing', query: { openAdd: 'true' } }"
          >
            <v-list-item-title><v-icon>mdi-plus</v-icon>Lead</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-if="user.role_id == 2"
            link
            :to="{ name: 'auth.brief.add', query: { openAdd: 'true' } }"
          >
            <v-list-item-title
              ><v-icon>mdi-plus</v-icon>Brief Form</v-list-item-title
            >
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
    <v-hover v-slot="{ hover }">
    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
      mini-variant
      class=""
      v-if="!showsidebar"
      dark
      :color="!hover?'primary':undefined"
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
          v-if="user.role_id == 2"
          class="pa-0"
          link
          :to="{ name: 'auth.marketing_budgets.listing' }"
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
                <v-icon v-text="'mdi-advertisements'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Marketing Budget</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.marketing_budgets.add' }">
                <v-list-item-title>Add Marketing Budget</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 2 || user.role_id == 9"
          class="pa-0"
          link
          :to="{ name: 'auth.lead_type.listing' }"
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
                <v-icon v-text="'mdi-playlist-star'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Lead Type</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.lead_type.add' }">
                <v-list-item-title>Add Lead Type</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 1"
          class="pa-0"
          link
          :to="{ name: 'auth.crm_updates.listing' }"
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
                <v-icon v-text="'mdi-cellphone-arrow-down'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Crm Updates</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item exact link :to="{ name: 'auth.crm_updates.add' }">
                <v-list-item-title>Add Crm Updates</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 2 || user.role_id == 9"
          class="pa-0"
          link
          :to="{ name: 'auth.daily_marketing_budget' }"
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
                <v-icon v-text="'mdi-view-day-outline'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Daily Marketing Budget</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 6"
          class="pa-0"
          link
          :to="{ name: 'auth.customer.briefs.listing' }"
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
                <v-list-item-title>Briefs</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 6"
          class="pa-0"
          link
          :to="{ name: 'auth.customer.invoices' }"
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
                <v-icon v-text="'mdi-cash-multiple'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Invoices</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 6"
          class="pa-0"
          link
          :to="{ name: 'auth.customer.chat' }"
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
                <v-badge
                  bordered
                  color="info"
                  :content="
                    user.lead.unseen_messages == 0
                      ? '0'
                      : user.lead.unseen_messages
                  "
                  overlap
                >
                  <v-icon v-text="'mdi-message-bulleted'"></v-icon>
                </v-badge>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Messages</v-list-item-title>
              </v-list-item-content>
            </template>
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
          v-if="
            user.role_id == 1 ||
            user.role_id == 2 ||
            user.role_id == 3 ||
            user.role_id == 4 ||
            user.role_id == 9 ||
            user.role_id == 5
          "
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
              <v-list-item
                exact
                link
                :to="{ name: 'auth.leads.listing', query: { openAdd: 'true' } }"
              >
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
          v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 7 || user.role_id == 8 || user.role_id == 10"
          class="pa-0"
          link
          :to="{ name: 'auth.tasks.type', params: { type: 'today' } }"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%"
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
          v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 7 || user.role_id == 8 || user.role_id == 10"
          class="pa-0"
          link
          :to="{ name: 'auth.tasks.type', params: { type: 'overdue' } }"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%"
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
          v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 7 || user.role_id == 8 || user.role_id == 10"
          class="pa-0"
          link
          :to="{ name: 'auth.tasks.type', params: { type: 'upcomming' } }"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-calendar-refresh'"></v-icon>
              </v-list-item-icon>
            </template>
            <span>Upcomming</span>
          </v-tooltip>
        </v-list-item>
        <v-list-item
          v-if="user.role_id == 4 || user.role_id == 5 || user.role_id == 7 || user.role_id == 8 || user.role_id == 10"
          class="pa-0"
          link
          :to="{ name: 'auth.tasks.type', params: { type: 'all' } }"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon
                color="primary"
                dark
                class="d-block"
                style="width: 100%"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon v-text="'mdi-calendar'"></v-icon>
              </v-list-item-icon>
            </template>
            <span>All</span>
          </v-tooltip>
        </v-list-item>
        <v-list-item
          v-if="user.role_id != 6"
          class="pa-0"
          link
          :to="{ name: 'auth.chat' }"
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
                <v-icon v-text="'mdi-message-bulleted'"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Chat</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </v-hover>
  </div>
</template>
<script>
import addAccountButton from '@components/account/button.vue'
import addAcountModal from '@components/account/add.vue'
export default {
  name: "sidebar",
  components: {
    addAccountButton,
    addAcountModal
  },
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
      this.$store.commit('addAccount/clearLocalStorage')
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