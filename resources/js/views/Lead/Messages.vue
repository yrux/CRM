<template>
<leadmessages class="chat_page" :leadid="id" />
</template>
<script>
import leadmessages from "@/components/common/leadmessages.vue";
export default {
    data(){
        return{
            id: 0,
        }
    },
    mounted(){
        if(this.$route.params.id){
            this.id = this.$route.params.id
        }
    },
    components:{
        leadmessages
    }
}
</script>