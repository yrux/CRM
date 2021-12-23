<template>
  <v-row>
    <!-- <v-col cols="12">
      <v-row align="center" justify="space-around">
          <v-col cols="3">
            <v-btn elevation="2" raised outlined block  large color="teal">
              <v-icon > mdi-calendar </v-icon>
              Tasks
            </v-btn>
          </v-col>
      </v-row>
    </v-col> -->
    <v-col cols="9">
      <v-sheet
        :color="!notification.read_at?'green lighten-4':'white'"
        elevation="2"
        height="50"
        class="mx-auto mb-2"
        :rounded="true"
        v-for="notification in notifications"
        :key="notification.id"
      >
        <PaymentPaidByCustomer :notification="notification" v-if="notification.type=='App\\Notifications\\PaymentPaidByCustomer'" />
        <taskAssigned :notification="notification" v-if="notification.type=='App\\Notifications\\taskAssigned'" />
        <taskComment :notification="notification" v-if="notification.type=='App\\Notifications\\taskComment'" />
        <BriefSubmit :notification="notification" v-if="notification.type=='App\\Notifications\\BriefSubmit'" />
      </v-sheet>
    </v-col>
    <v-col cols="3">
      <v-sheet
        elevation="2"
        class="mx-auto"
        :rounded="true"
      >
        <v-list>
          <v-list-item-group v-model="model" multiple color="indigo">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
import notificationsservice from "@services/auth/notifications";
import PaymentPaidByCustomer from "@/components/notifications/PaymentPaidByCustomer.vue";
import BriefSubmit from "@/components/notifications/BriefSubmit.vue";
import taskAssigned from "@/components/notifications/taskAssigned.vue";
import taskComment from "@/components/notifications/taskComment.vue";
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-wifi",
          text: "Payment",
        },
        {
          icon: "mdi-bluetooth",
          text: "Task",
        },
        {
          icon: "mdi-chart-donut",
          text: "Client Message",
        },
      ],
      model: [],
      page: 1,
      max_page: 0,
      notifications: [],
    };
  },
  mounted() {
    this.getList()
  },
  watch: {},
  computed: {},
  methods: {
    async getList(){
      if(this.page==1){
        this.notifications = []
      }
      let result = await notificationsservice.getlist('?page='+this.page)
      this.max_page = result.last_page
      this.notifications.push(...result.data)
    }
  },
  components:{
    PaymentPaidByCustomer,
    taskAssigned,
    taskComment,
    BriefSubmit
  }
};
</script>