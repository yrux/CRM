const axios = require('axios');
class chatservice{
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
    getMessages(head_id){
        return axios.get(`/api/chat-history/`+head_id)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
    }
}
export default new chatservice();