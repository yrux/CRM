<template>
  <v-row no-gutters>
    <v-chip
      v-for="(currentfile, index) in currentfiles"
      :key="currentfile.id"
      close
      color="green"
      outlined
      @click:close="currentfiles.splice(index, 1)"
    >
      {{ currentfile.url.split("/")[currentfile.url.split("/").length - 1] }}
    </v-chip>
    <div
      v-on:drop="disableDrop"
      v-on:paste="pasteInMessage"
      v-on:keydown="typingMessage"
      class="message_area_editor mt-7 pa-1"
      contentEditable="true"
      ref="message_area_editor"
    ></div>
  </v-row>
</template>
<style scoped>
.message_area_editor{
  width: 100%;
  border: 1px solid #0000001f;
}
.message_area_editor:empty::before {
    content: "Type Message Here";
    width: 100%;
    color: black;
}
</style>
<script>
import fileservice from "@services/auth/file";
export default {
  props:{
    table: {
      type: String,
      default: ''
    },
    inputName:{
      type: String,
      default: 'message'
    }
  },
  data(){
    return{
      allowMessages: true,
      currentfiles: [],
    }
  },
  methods: {
    async pasteInMessage(e){
        this.allowMessages = false
        var files = e.clipboardData.files;
        if(files.length>0){
            for(let i = 0, file; file = files[i]; i++) {
                await this.readFile(file)
                var formData = new FormData()
                formData.append("ref_id", 0);
                formData.append("table_name", this.table);
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
    disableDrop(e) {
      e.preventDefault();
      return false;
    },
    typingMessage(e) {
      if (e.keyCode == 13 && e.shiftKey == true) {
        //let it line break
      } else if (e.keyCode == 13) {
        if (this.allowMessages) {
          if (this.$refs.message_area_editor.innerText) {
            var formData = new FormData();
            formData.append(this.inputName,this.$refs.message_area_editor.innerHTML);
            for (let i = 0; i < this.currentfiles.length; i++) {
              formData.append("attachements["+i+"]",this.currentfiles[i].id);
            }
            this.currentfiles = [];
            this.$refs.message_area_editor.innerHTML = "";
            this.$emit('sendingData', formData)
          }
        }
        e.preventDefault();
        return false;
      }
    },
  },
};
</script>