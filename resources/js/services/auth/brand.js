const axios = require('axios');
class brandservice{
	getlist(params){
		return axios.get(`/api/brand${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    delete({query,id}){
		return axios.delete(`/api/brand/${id}`);
	}
    async create(formData){
        var res = await  axios.post('/api/brand',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
	async get(id){
		var res = await axios.get(`/api/brand/${id}`)
		return res.data.data;
	}
	async update(formData, id){
		formData.append('_method','put')
		var res = await  axios.post('/api/brand/'+id,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
	async createUser(formData, brandid){
		var res = await  axios.post('/api/brand/'+brandid+'/user',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
	async getAllCompanyUsers(){
		return axios.get('/api/company/user/getallusers').then(e=>e.data)
	}
	async assignUser(formData, brandid){
		var res = await  axios.post('/api/brand/'+brandid+'/assign-user',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
}
export default new brandservice();