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
            <div class="chat_attachements mt-2" :class="item.user_id==user.id?'float-right':'float-left'" v-if="item.files.length>0">
                <v-chip
                v-for="(currentfile, index) in item.files"
                :key="currentfile.id"
                color="green d-inline-block"
                outlined
                @click="openFile(currentfile.full_url)"
                >
                {{currentfile.url.split('/')[currentfile.url.split('/').length-1]}}
                </v-chip>
            </div>
            <span class="col-12 ma-0 pa-0 mt-1 font-weight-light" :class="item.user_id==user.id?'float-right text-right':'float-left'">{{item.created_at_formatted}}</span>
        </v-col>
    </div>
    <v-row no-gutters>
        <v-chip
        v-for="(currentfile, index) in currentfiles"
        :key="currentfile.id"
        close
        color="green"
        outlined
        @click:close="currentfiles.splice(index, 1)"
        >
        {{currentfile.url.split('/')[currentfile.url.split('/').length-1]}}
        </v-chip>
        <div v-on:drop="disableDrop" v-on:paste="pasteInMessage" v-on:keydown="typingMessage" class="message_area_editor mt-7 pa-1" contentEditable="true"></div>
    </v-row>
    </v-card>
</template>
<script>
import leadmessagesservice from "@services/auth/leadmessages";
import fileservice from "@services/auth/file";
const { io } = require("socket.io-client");
const socket = io(process.env.MIX_SOCKET_URL);
export default {
    props: ['leadid'],
    watch:{
        leadid(){
            this.getChats(this.leadid)
        },
        async messages(n, o){
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
                obj.getChats(obj.leadid)
            },500,this)
        }
    },
    async mounted(){
        await this.getChats(this.leadid)
        this.bindSocketEv()
    },
    computed:{
        user(){
            return this.$store.getters.loggedInUser;
        }
    },
    methods:{
        async getChats(head_id){
            if(head_id>0){
                if(this.messages.length==0){
                    this.loadingMessages = true
                }
                var res = await leadmessagesservice.getMessages(head_id, this.message_search)
                this.lastlen = this.messages.length
                // this.messages.push(...res)
                var narr = [...res,...this.messages]
                this.messages = narr
                this.loadingMessages = false
            }
        },
        scrolltobtm(){
            var objDiv = document.getElementsByClassName("chat_row")[0];
            if(objDiv){
                objDiv.scrollTop = objDiv.scrollHeight;
            }
        },
        onScroll (e) {
            if(this.loadingMessages==false&&leadmessagesservice.checkIfNextAvail()==true){
                var objDiv = document.getElementsByClassName("chat_row")[0];
                if(objDiv.scrollTop<=20){
                    this.loadingMessages=true
                    this.getChats(this.leadid)
                }
            }
        },
        typingMessage(e){
            if(this.leadid>0){
                if(e.keyCode==13&&e.shiftKey==true){
                    //let it line break
                }else if(e.keyCode==13){
                    if(this.allowMessages){
                        if(document.getElementsByClassName('message_area_editor')[0].innerText){
                            var formData = new FormData()
                            formData.append("message", document.getElementsByClassName('message_area_editor')[0].innerHTML);
                            for(let i = 0; i < this.currentfiles.length; i++){
                                formData.append("attachements["+i+"]", this.currentfiles[i].id);
                            }
                            leadmessagesservice.saveMsg(this.leadid, formData);
                            socket.emit('lead', [this.leadid, document.getElementsByClassName('message_area_editor')[0].innerHTML,this.leadid,this.user.id,this.currentfiles]);
                            this.currentfiles = []
                            document.getElementsByClassName('message_area_editor')[0].innerHTML = '';
                        }
                    }
                    e.preventDefault()
                    return false
                }
            }
        },
        disableDrop(e){
            e.preventDefault()
            return false;
        },
        async pasteInMessage(e){
            this.allowMessages = false
            var files = e.clipboardData.files;
            if(files.length>0){
                for(let i = 0, file; file = files[i]; i++) {
                    await this.readFile(file)
                    var formData = new FormData()
                    formData.append("ref_id", 0);
                    formData.append("table_name", 'chat');
                    formData.append("type", '2');
                    formData.append("attachements[0]", file);
                    var res = await fileservice.create(formData);
                    if(res.status){
                        this.currentfiles.push(res.data[0])
                    }
                }
            }
            var _data = e.clipboardData.getData("text/plain");
            if(_data){
                document.execCommand('insertHTML', true, _data);
            }
            this.allowMessages = true
            e.preventDefault()
            return false;
        },
        async readFile(file){
            return new Promise((resolve, reject) => {
                var fr = new FileReader();  
                fr.onload = () => {
                    resolve(fr)
                };
                //fr.onerror = reject;
                fr.readAsText(file);
            });
        },
        bindSocketEv(){
            socket.on('lead_'+this.leadid,(arg)=>{
				this.messages.push(arg)
                this.scrolltobtm()
			})
        },
        openFile(url){
            window.open(url, '_blank').focus();
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
            currentfiles: [],
            allowMessages: true,
        }
    }
}
</script>