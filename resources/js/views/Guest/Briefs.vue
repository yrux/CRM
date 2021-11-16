<template>
  <v-row>
    <v-col cols="12" sm="12" class="pb-0">
      <FormBuilder
        :formfields="form_fields"
        v-on:event-happen="syncFields"
        :mode="false"
      />
    </v-col>
  </v-row>
</template>
<script>
import userbriefsservice from "@services/auth/userbriefs";
import FormBuilder from "@/views/Brief/FormBuilder.vue";
export default {
  data() {
    return {
      id: 0,
      brief: {},
      form_fields: [],
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
        
    },
  },
};
</script>