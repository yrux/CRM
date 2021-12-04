<template>
  <div>
    <v-sheet v-if="loading" :color="`primary lighten-5`" class="pa-3">
      <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
    </v-sheet>
    <v-card v-else elevation="2" tile>
      <v-card-title>
        <v-icon v-if="icon!=''" color="indigo" size="55"> {{icon}} </v-icon>
        {{title}}<v-chip
          class="ma-2"
          color="pink"
          label
          text-color="white"
        >
          {{count}}
        </v-chip></v-card-title
      >
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: {
    title: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: true,
    },
    count:{
      type: Number,
      default: 0
    },
    icon:{
      type: String,
      default: ''
    }
  },
  computed:{
    
  }
};
</script>