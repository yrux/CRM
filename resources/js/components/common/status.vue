<template>
  <v-chip label text-color="white" :color="status">{{text}}</v-chip>
</template>
<script>
export default {
    props:{
        status: String,
        text: String,
    },
    data(){
        return {

        }
    },
    computed:{
        
    }
}
</script>