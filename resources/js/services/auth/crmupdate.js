const axios = require('axios');
class crmupdateservice{
	getlist(params){
		return axios.get(`/api/crm-updates${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    async create(formData){
        var res = await  axios.post('/api/crm-updates',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
    delete({query,id}){
		return axios.delete(`/api/crm-updates/${id}`);
	}
    get(id){
		return axios.get(`/api/crm-updates/${id}`).then(e=>e.data.data);
	}
    async update(formData, id){
		formData.append('_method','put')
		var res = await  axios.post('/api/crm-updates/'+id,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
}
export default new crmupdateservice();