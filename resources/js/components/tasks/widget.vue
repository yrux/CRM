<template>
    <div>
        <v-sheet
            v-if="loader"
            :color="`primary lighten-5`"
            class="pa-3"
        >
            <v-skeleton-loader
            class="mx-auto"
            type="card"
            ></v-skeleton-loader>
        </v-sheet>
    </div>
</template>
<script>
import taskservice from "@services/auth/task";
export default {
  data() {
    return {
      tasks: {},
      loader: true,
    };
  },
  mounted() {},
  props:{
      title:{
          type: String,
          default: '',
      }
  }
};
</script>