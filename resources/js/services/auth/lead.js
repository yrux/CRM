const axios = require('axios');
class leadservice{
	getlist(params=''){
		return axios.get(`/api/leads${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    delete({query,id}){
		return axios.delete(`/api/leads/${id}`);
	}
    async create(formData){
        var res = await  axios.post('/api/leads',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
	async get(id){
		var res = await axios.get(`/api/leads/${id}`)
		return res.data.data;
	}
	async update(formData, id){
		formData.append('_method','put')
		var res = await  axios.post('/api/leads/'+id,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
	async updateStatus(lead_id, status){
		var res = await  axios.post('/api/leads/'+lead_id+'/'+status).then(function(e){
            return {status: 1}
        }).catch(function(e){
            return {status: 0};
        });
        return res;
	}
	async assignUser(lead_id, user_id){
		var res = await  axios.post('/api/leads/'+lead_id+'/user/'+user_id).then(function(e){
            return {status: 1}
        }).catch(function(e){
            return {status: 0};
        });
        return res;
	}
}
export default new leadservice();