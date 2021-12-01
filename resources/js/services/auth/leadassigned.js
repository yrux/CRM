const axios = require('axios');
class leadassignedservice{
	getlist(lead_id, params){
		return axios.get(`/api/leads/${lead_id}/assigned${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    delete({lead_id ,id}){
		return axios.delete(`/api/leads/${lead_id}/assigned/${id}`);
	}
    async create(lead_id, formData){
        var res = await  axios.post(`/api/leads/${lead_id}/assigned`,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
	async get(lead_id, id){
		var res = await axios.get(`/api/leads/${lead_id}/assigned/${id}`)
		return res.data.data;
	}
	async update(formData, lead_id, id){
		formData.append('_method','put')
		var res = await  axios.post(`/api/leads/${lead_id}/assigned/${id}`,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
}
export default new leadassignedservice();