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
      <v-col cols="12">
        <form v-on:submit="handleStripePayment" id="payment-form">
          <div  ref="stripecard" id="payment-element">
            <!-- Elements will create form elements here -->
          </div>
          <v-btn type="submit" color="green" text-color="white" id="submit">Submit</v-btn>
          <div id="error-message">
            <!-- Display error message to your customers here -->
          </div>
        </form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import paymentservice from "@services/auth/payment";
// let stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`),
// elements = stripe.elements(),
// card = undefined;
export default {
  data() {
    return {
      stripe: {
        stripe: undefined,
        elements: undefined,
        card: undefined,
      },
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
    async handleStripePayment(e){
      e.preventDefault();
      const {error} = await this.stripe.stripe.confirmSetup({
        elements: this.stripe.elements,
        confirmParams: {
          return_url: this.payment.success_url,
        }
      });
      if (error) {
        const messageContainer = document.querySelector('#error-message');
        messageContainer.textContent = error.message;
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    },
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
        await this.$nextTick();
        this.payment = res.data;
        if (this.payment.type == "stripe") {
          this.stripe.stripe = Stripe(this.payment.stripe_pk);
          const options = {
            clientSecret: this.payment.client_secret,
            // Fully customizable with appearance API.
            appearance: {
              /*...*/
            },
          };
          this.stripe.elements = this.stripe.stripe.elements(options);

          // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 2
          // this.stripe.card = this.stripe.stripe.elements(options);
          this.stripe.card = this.stripe.elements.create("payment");
          this.stripe.card.mount(this.$refs.stripecard);
        }
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