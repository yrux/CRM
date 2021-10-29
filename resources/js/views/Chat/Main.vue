<template>
    <v-row class="chat_page" no-gutters>
        <v-col sm="2">
            <chats v-on:search-users="setSearch" :users="users"></chats>
        </v-col>
        <v-col sm="10">
            <rightwidget :user="user" v-if="curuser>0" :curuser="curuser" />
        </v-col>
    </v-row>
</template>
<script>
import userservice from "@services/auth/user";
import Chats from '@/views/Chat/sidebar.vue'
import rightWidget from '@/views/Chat/rightwidget.vue'
export default {
    components:{
        'chats': Chats,
        'rightwidget': rightWidget,
    },
    data() {
        return {
            users: [],
            search: '',
            curuser: 0,
        }
    },
    methods:{
        async getUsers(){
            var query = '?perpage=100';
            if(this.search!=''){
                query+='&search='+this.search
            }
            var res = await userservice.getlist(query);
            this.users = res.data
        },
        setSearch(q){
            this.search = q;
            this.getUsers()
        }
    },
    mounted(){
        this.getUsers()
        if(this.$route.params){
            this.curuser = this.$route.params.id
        }
    },
    watch:{
        $route(){
            if(this.$route.params){
                this.curuser = this.$route.params.id
            }
        }
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
    },
}
</script>