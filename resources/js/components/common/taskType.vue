<template>
    <div class="d-inline-block">
    <v-chip
      class="ma-2"
      color="primary"
      v-if="type=='initial'"
      small
    >
      Initial
    </v-chip>
    <v-chip
      class="ma-2"
      color="green"
      text-color="white"
      v-if="type=='revision'"
      small
    >
      Revision
    </v-chip>
    <v-chip
      class="ma-2"
      color="blue"
      text-color="white"
      v-if="type=='innerpages'"
      small
    >
      Inner Pages
    </v-chip>
    <v-chip
      class="ma-2"
      color="red"
      text-color="white"
      v-if="type=='redraw'"
      small
    >
      ReDraw
    </v-chip>
    </div>
</template>
<script>
export default {
    props:{
        type:{
            default: 'initial',
            type: String,
        }
    }
}
</script>