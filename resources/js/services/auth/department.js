const axios = require('axios');
class departmentservice{
	getlist(params){
		return axios.get(`/api/departments${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    delete({query,id}){
		return axios.delete(`/api/departments/${id}`);
	}
    async create(formData){
        var res = await  axios.post('/api/departments',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
	async get(id){
		var res = await axios.get(`/api/departments/${id}`)
		return res.data.data;
	}
	async update(formData, id){
		formData.append('_method','put')
		var res = await  axios.post('/api/departments/'+id,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
}
export default new departmentservice();