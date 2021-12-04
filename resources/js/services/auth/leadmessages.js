const axios = require('axios');
class leadmessagesservice{
	next_url= ''
	headersEvs = []
    async getMessages(lead_id, search){
		if(this.headersEvs.indexOf(lead_id)<0){
			this.headersEvs.push(lead_id)
		}
        var res = await axios.get((this.next_url==''?(`/api/lead-messages/`+lead_id+'?search='+search):this.next_url+'&search='+search));
		if(res.data.next_page_url){
			this.next_url = res.data.next_page_url
		}else{
			this.next_url=''
		}
		return res.data.result;
    }
	resetNextUrl(){
		this.next_url = ''
	}
	checkIfNextAvail(){
		return (this.next_url==''?false:true);
	}
	saveMsg(lead_id, formData){
		axios.post('/api/lead-message-send/'+lead_id,formData);
	}
	async unseenMessages(){
		return axios.get('/api/unseen-lead-messages').then(e=>e.data)
	}
}
export default new leadmessagesservice();