<template>
    <v-card
        elevation="2"
        class="mx-auto ml-12 pa-3"
    >
    <v-row no-gutters>
        <v-text-field
            v-model="message_search"
            label="Search Messages"
        ></v-text-field>
    </v-row>
    <v-skeleton-loader
        v-for="i in (messages.length==0?10:2)"
        :key="i"
        type="list-item"
        v-show="loadingMessages"
    ></v-skeleton-loader>
    <div v-if="messages.length>0" v-scroll.self="onScroll" class="row chat_row">
        <v-col sm="11" md="11" ld="11"
        v-for="item in messages"
        :key="item.id"
        :class="item.user_id==user.id?'message-sent offset-1':'message-get'"
        >
            <div class="rounded-xl pa-2 text-break" :class="item.user_id==user.id?'float-right':'float-left'" v-html="item.message"></div>
            <span class="col-12 ma-0 pa-0 mt-1 font-weight-light" :class="item.user_id==user.id?'float-right text-right':'float-left'">{{item.created_at_formatted}}</span>
        </v-col>
    </div>
    <v-row no-gutters>
        <div v-on:paste="pasteInMessage" v-on:keydown="typingMessage" class="message_area_editor mt-7 pa-1" contentEditable="true"></div>
    </v-row>
    </v-card>
</template>
<script>
import chatservice from "@services/auth/chat";
const { io } = require("socket.io-client");
const socket = io('http://localhost:9000');
export default {
    props: ['curuser','user'],
    watch:{
        curuser(){
            chatservice.resetNextUrl()
            this.lastlen = 0
            this.loadingMessages = false
            this.messages = []
            this.getHead()
        },
        async messages(n, o){
            // console.log(n, o)
            await this.$nextTick()
            if(this.lastlen==0){
                this.scrolltobtm()
            }
        },
        message_search(){
            clearInterval(this.typingSearch)
            this.typingSearch = setInterval(function(obj){
                clearInterval(obj.typingSearch)
                obj.lastlen = 0
                obj.loadingMessages = false
                obj.messages = []
                obj.getHead()
            },500,this)
        }
    },
    mounted(){
        this.getHead()
    },
    methods:{
        async getChats(head_id){
            if(this.messages.length==0){
                this.loadingMessages = true
            }
            var res = await chatservice.getMessages(head_id, this.message_search)
            this.lastlen = this.messages.length
            // this.messages.push(...res)
            var narr = [...res,...this.messages]
            this.messages = narr
            this.loadingMessages = false
        },
        async getHead(){
            var res = await chatservice.gethead(this.curuser)
            this.head_id = res.id
            this.getChats(res.id)
            this.bindSocketEv()
        },
        scrolltobtm(){
            var objDiv = document.getElementsByClassName("chat_row")[0];
            if(objDiv){
                objDiv.scrollTop = objDiv.scrollHeight;
            }
        },
        onScroll (e) {
            if(this.loadingMessages==false&&chatservice.checkIfNextAvail()==true){
                var objDiv = document.getElementsByClassName("chat_row")[0];
                if(objDiv.scrollTop<=20){
                    this.loadingMessages=true
                    this.getChats(this.head_id)
                }
            }
        },
        typingMessage(e){
            if(this.head_id>0){
                if(e.keyCode==13&&e.shiftKey==true){
                    //let it line break
                }else if(e.keyCode==13){
                    if(document.getElementsByClassName('message_area_editor')[0].innerText){
                        socket.emit('channel', [this.head_id, document.getElementsByClassName('message_area_editor')[0].innerHTML,this.curuser.id,this.user.id]);
                        document.getElementsByClassName('message_area_editor')[0].innerHTML = '';
                    }
                    e.preventDefault()
                    return false
                }
            }
        },
        pasteInMessage(e){
            // console.log(e)
        },
        bindSocketEv(){
            socket.on('channel_'+this.head_id,(arg)=>{
				this.messages.push(arg)
                this.scrolltobtm()
			})
        }
    },
    data(){
        return {
            messages: [],
            loadingMessages: false,
            head_id: 0,
            lastlen: 0,
            message_search: '',
            typingSearch: undefined,
        }
    }
}
</script>