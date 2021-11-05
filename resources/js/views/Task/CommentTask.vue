<template>
  <v-col cols="12" md="12">
    <v-list-item class="grow">
      <v-list-item-avatar color="grey darken-3">
        <v-img
          class="elevation-6"
          alt=""
          :src="comment.user.image_url"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{comment.user.name}}</v-list-item-title>
        <v-card
            class="pa-2"
            outlined
            tile
        >
            <div v-html="comment.comment"></div>
            <div class="mt-2">
            <a
              target="_blank"
              v-for="project_files in comment.files"
              :key="project_files.id"
              :href="project_files.full_url"
            >
              <v-chip small class="ma-2" color="secondary">
                {{ project_files.url }}
              </v-chip></a
            >
          </div>
        </v-card>
      </v-list-item-content>

      <v-row align="center" justify="end">
        <v-icon class="mr-1"> mdi-calendar </v-icon>
        <span class="subheading mr-2">{{comment.created_at_formatted}}</span>
      </v-row>
    </v-list-item>
  </v-col>
</template>
<script>
export default {
    props: ['comment'],
}
</script>