const axios = require('axios');
class lead_noteservice{
	getlist(lead_id, params){
		return axios.get(`/api/leads/${lead_id}/notes${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    async create(lead_id, formData){
        var res = await  axios.post(`/api/leads/${lead_id}/notes`,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
}
export default new lead_noteservice();