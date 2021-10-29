<template>
    <v-card
        elevation="2"
        class="mx-auto ml-12 pa-3"
    >
    <h1>{{curuser}}</h1>
    </v-card>
</template>
<script>
import chatservice from "@services/auth/chat";
export default {
    props: ['curuser'],
    watch:{
        curuser(){
            this.getHead()
        }
    },
    mounted(){
        this.getHead()
    },
    methods:{
        async getChats(head_id){
            var res = await chatservice.getMessages(head_id)
        },
        async getHead(){
            var res = await chatservice.gethead(this.curuser)
            this.getChats(res.id)
        }
    }
}
</script>