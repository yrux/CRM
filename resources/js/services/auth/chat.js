const axios = require('axios');
class chatservice{
	next_url= ''
	headersEvs = []
	gethead(uid){
        var formData = new FormData()
        formData.append('user_id', uid);
		return axios.post(`/api/chat`, formData)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    async getMessages(head_id, search){
		if(this.headersEvs.indexOf(head_id)<0){
			this.headersEvs.push(head_id)
		}
        var res = await axios.get((this.next_url==''?(`/api/chat-history/`+head_id+'?search='+search):this.next_url+'&search='+search));
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
	saveMsg(head_id, formData){
		axios.post('/api/chat-send/'+head_id,formData);
	}
}
export default new chatservice();