<template>
<v-card
  elevation="2"
  loading
>
<v-alert
      border="bottom"
      colored-border
      type="warning"
      elevation="2"
    >
      Thank you for you Payment
      <v-btn
        color="info"
        dark
        :to="{
          name: 'auth.dashboard',
        }"
        v-bind="attrs"
        v-on="on"
      >
        Login Now
      </v-btn>
    </v-alert>
</v-card>
</template>