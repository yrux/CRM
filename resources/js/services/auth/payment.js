const axios = require('axios');
//leads/{lead}/payments
class paymentservice{
	getlist(lead, params){
		return axios.get(`/api/leads/${lead}/payments${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    delete({lead,id}){
		return axios.delete(`/api/leads/${lead}/payments/${id}`);
	}
    async create(lead, formData){
        var res = await  axios.post(`/api/leads/${lead}/payments`,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
	async get(lead, id){
		var res = await axios.get(`/api/leads/${lead}/payments/${id}`)
		return res.data.data;
	}
	async update(formData, id, lead){
		formData.append('_method','put')
		var res = await  axios.post(`/api/leads/${lead}/payments/${id}`,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
}
export default new paymentservice();