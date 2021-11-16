<template>
  <v-row>
    <v-col cols="12" sm="12" class="pb-0">
      <FormBuilder
        :formfields="form_fields"
        v-on:event-happen="syncFields"
        :mode="false"
      />
    </v-col>
    <v-col cols="12" sm="12" class="pb-0">
      <v-btn
        v-if="brief.status==0"
        color="secondary"
        elevation="1"
        large
        raised
        @click="updateForm"
        :loading="btnloading"
        :disabled="btnloading"
        >Update</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
import userbriefsservice from "@services/auth/userbriefs";
import FormBuilder from "@/views/Brief/FormBuilder.vue";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      id: 0,
      brief: {},
      form_fields: [],
      btnloading: false,
    };
  },
  components: {
    FormBuilder,
  },
  mounted() {
    this.id = this.$route.params.id;
    userbriefsservice.get(this.id).then((e) => {
      this.brief = e;
      this.form_fields = JSON.parse(this.brief.form_fields);
    });
  },
  methods: {
    syncFields(obj) {
        this.form_fields = obj
    },
    async updateForm(){
        const isConfirmed = await Swal.fire({
        title: "Are you sure you want to submit this brief?",
        text: "You won't be able to edit it again once saved",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          return true;
        }
      });
      if (isConfirmed) {
        var formData = new FormData()
        formData.append('form_fields', JSON.stringify(this.form_fields))
        var res = userbriefsservice.update(formData, this.id)
        Swal.fire("Success!", "Thankyou for updating the brief form, Customer Support and Adminstration team has been updated.", "success");
        this.$router.push({ name: "auth.customer.briefs.listing" });
      }
    }
  },
};
</script>