<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-img
          contain
          :lazy-src="brand.image_url"
          :src="brand.image_url"
          max-height="200"
        ></v-img>
      </v-col>
    </v-row>
    <v-row v-if="!emailVerified">
      <v-col cols="12">
        <v-text-field
          v-model="email"
          :error-messages="emailError"
          label="Email"
          hint="Provide your email address to verify"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn
          :loading="loading"
          :disabled="loading"
          @click="verifyEmail"
          color="blue-grey float-right"
          class="white--text"
        >
          Verify
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <h2>Step 2</h2>
    </v-row>
  </div>
</template>
<script>
import paymentservice from "@services/auth/payment";
export default {
  data() {
    return {
      payment_id: "",
      email: "",
      brand: {},
      loading: false,
      emailError: [],
      emailVerified: false,
      payment: {},
    };
  },
  async mounted() {
    this.payment_id = this.$route.params.id;
    this.brand = await paymentservice.getBrand(this.payment_id);
  },
  methods: {
    async verifyEmail() {
      this.emailError = [];
      this.loading = true;
      var formData = new FormData();
      formData.append("email", this.email);
      var res = await paymentservice.checkEmail(this.payment_id, formData); //company2@gmail.com
      this.loading = false;
      if (res.status) {
        //means success
        this.emailVerified = true;
        this.payment = res.data;
      } else {
        //means failed
        this.email = "";
        this.$store.commit("setNotification", "Invalid Email");
        this.emailError = ["Invalid Email"];
      }
    },
  },
};
</script>