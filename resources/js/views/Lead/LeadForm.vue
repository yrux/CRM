<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeMe">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title
          >Lead {{ form.id > 0 ? "#" + form.id : "" }}</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn v-if="(user.role_id==2||user.role_id==9||user.role_id==4)" dark text @click="updateLead">
            {{ form.id > 0 ? "Update Lead" : "Save Lead" }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-text-field
                label="Email*"
                v-model="form.email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="First Name*"
                v-model="form.first_name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Last Name*"
                v-model="form.last_name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Company"
                v-model="form.company"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Phone" v-model="form.phone"></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-select
                required
                :items="lead_types"
                item-text="type"
                item-value="id"
                label="Lead Type*"
                v-model="form.lead_type"
                return-object
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Message"
                v-model="form.message"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select
                required
                :items="brands"
                item-text="brand_name"
                item-value="id"
                label="Brand*"
                v-model="form.brand"
                :hint="`${form.brand.brand_name}, ${form.brand.brand_code}`"
                persistent-hint
                return-object
              ></v-select>
            </v-col>
            <v-col v-if="form.id > 0" cols="12">
              <h4>Custom Fields</h4>
            </v-col>
            <v-col :key="cfk" v-for="(cf, cfk) in form.custom_fields" cols="4">
              <v-text-field readonly :label="cfk" :value="cf"></v-text-field>
            </v-col>
            <v-col v-if="form.id > 0" cols="12">
              <v-divider
                v-if="form.id > 0 && lead.lead_status == 3"
              ></v-divider>
            </v-col>
            <v-col v-if="form.id > 0 && lead.lead_status != 0&& lead.lead_status != 2" cols="12">
              <v-btn link
            :to="{ name: 'auth.payment.create', params:{id: form.id} }" color="blue-grey" class="ma-2 white--text">
                <v-icon left dark> mdi-account </v-icon>
                Goto Client Summary
              </v-btn>
            </v-col>
            <v-col v-if="form.id > 0 &&(user.role_id==2||user.role_id==9||user.role_id==4)" cols="6">
              <v-select
                required
                :items="companyusers"
                item-text="name"
                item-value="id"
                label="Company Sales/Support"
                v-model="form.assigned_to"
              ></v-select>
            </v-col>
            <v-col v-if="form.id > 0 &&(user.role_id==2||user.role_id==9||user.role_id==4)" cols="6">
              <v-btn @click="assignUser" color="success" class="ma-2 white--text">
                <v-icon left dark> mdi-account </v-icon>
                Assign User to this Lead
              </v-btn>
            </v-col>
            <v-col v-if="form.id > 0 &&(user.role_id==2||user.role_id==9||user.role_id==4)" cols="12">
              <v-skeleton-loader
                  v-for="i in 10"
                  :key="i"
                  type="list-item"
                  v-show="fetchingLeadUsers"
              ></v-skeleton-loader>
              <v-simple-table v-if="!fetchingLeadUsers">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Assigned@
                      </th>
                      <th>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in assignedUsers"
                      :key="item.id"
                    >
                      <td>{{ item.user.email }}</td>
                      <td>{{ item.created_at_formatted }}</td>
                      <td>
                        <v-btn color="error" fab x-small dark @click="deletassigneduser(item)">
                          <v-icon>mdi-delete-outline</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import leadservice from "@services/auth/lead";
import lead_typeservice from "@services/auth/lead_type";
import brandservice from "@services/auth/brand";
import Swal from "sweetalert2";
import leadassignedservice from "@services/auth/leadassigned";
export default {
  data() {
    return {
      dialog: false,
      companyusers: [],
      assignedUsers: [],
      lead_types: [],
      fetchingLeadUsers: false,
      form: {
        id: 0,
        first_name: "",
        last_name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
        brand: {},
        custom_fields: {},
        assigned_to: 0,
        lead_type: {},
      },
    };
  },
  methods: {
    async deletassigneduser(item){
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
        await leadassignedservice.delete({
          lead_id: item.lead_id,
          id: item.id,
        });
        Swal.fire("Deleted!", "Your record has been deleted.", "success");
        // this.getLeadUsers();
      }
      this.closeMe();
    },
    async getLeadUsers(){
      if(this.form.id>0){
        this.fetchingLeadUsers = true
        this.assignedUsers = await leadassignedservice.getlist(this.form.id, '').then(e=>e.data)
        this.fetchingLeadUsers = false
      }
    },
    async assignUser(){
      if(this.form.id>0&&this.form.assigned_to>0){
        var formdata = new FormData()
        formdata.append('user_id',this.form.assigned_to)
        await leadassignedservice.create(this.form.id, formdata)
        this.$store.commit("setNotification", "User Assigned");
        this.$emit("refresh-leads");
        this.getLeadUsers()
      }
    },
    closeMe() {
      this.dialog = false;
      this.$emit("close-leaddialog");
    },
    async updateLead() {
      try{
        var formData = new FormData();
        formData.append("first_name", this.form.first_name);
        formData.append("last_name", this.form.last_name);
        formData.append("company", this.form.company);
        formData.append("phone", this.form.phone);
        formData.append("email", this.form.email);
        formData.append("message", this.form.message);
        formData.append("brand_id", this.form.brand.id);
        formData.append("lead_type", this.form.lead_type.id);
        if (this.form.id > 0) {
          await leadservice.update(formData, this.form.id);
          this.$store.commit("setNotification", "Lead Updated");
        } else {
          await leadservice.create(formData);
          this.$store.commit("setNotification", "Lead Created");
        }
        this.$emit("refresh-leads");
        this.closeMe()
      }catch(ex){
        this.$store.commit("setNotification", "Lead Data Invalid");
      }
    },
  },
  computed: {
    user() {
        return this.$store.getters.loggedInUser;
    },
  },
  mounted() {
    brandservice.getAllCompanyUsers().then(e=>{
      this.companyusers = e
    })
    lead_typeservice.getlist("").then(e=>{
      this.lead_types = e.data
    })
  },
  watch: {
    openLeadForm() {
      this.dialog = this.openLeadForm;
    },
    lead() {
      if (this.lead.id) {
        this.form.id = this.lead.id;
        this.form.first_name = this.lead.first_name;
        this.form.last_name = this.lead.last_name;
        this.form.company = this.lead.company;
        this.form.phone = this.lead.phone;
        this.form.email = this.lead.email;
        this.form.message = this.lead.message;
        this.form.brand = this.lead.brand;
        this.form.custom_fields = this.lead.custom_fields;
        this.form.assigned_to = this.lead.assigned_to;
        this.form.lead_type = this.lead.type;
        this.getLeadUsers()
      } else {
        this.form = {
          id: 0,
          first_name: "",
          last_name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
          brand: {},
          custom_fields: {},
          assigned_to: 0,
        };
        this.assignedUsers = []
      }
    },
  },
  props: {
    lead: Object,
    openLeadForm: Boolean,
    brands: Array,
  },
};
</script>