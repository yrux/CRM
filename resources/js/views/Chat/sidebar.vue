<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title class="white--text black lighten-4">
      Users
    </v-card-title>

    <v-card-text class="">
      <v-text-field
        v-model="search"
        label="Search"
      ></v-text-field>
    </v-card-text>

    <!-- <v-divider></v-divider> -->
    <v-skeleton-loader
        v-for="i in 10"
        :key="i"
        type="list-item"
        v-show="users.length==0"
    ></v-skeleton-loader>
    <v-virtual-scroll
      v-if="users.length>0"
      :items="users"
      :item-height="50"
      height="500"
    >
      <template v-slot:default="{ item }">
        <v-list-item link :to="{ name: 'auth.chat.single', params:{id:item.id}}">
          <v-list-item-avatar>
            <v-img :src="item.image_url"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
          <!-- <v-list-item-action>
            <v-btn
              depressed
              small
            >
              Start Chat

              <v-icon
                color="orange darken-4"
                right
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-list-item-action> -->
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>
<script>
export default {
  props: ["users"],
  data() {
    return {
      selectedItem: "",
      search: '',
    };
  },
  watch:{
    search(){
      this.$emit('search-users', this.search)
    }
  }
};
</script>