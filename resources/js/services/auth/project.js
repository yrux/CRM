const axios = require('axios');
class projectservice{
	getlist(params){
		return axios.get(`/api/project${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	validateTask(formData){
		return axios.post('/api/task-validate',formData).then(function(response){
			return {status: 1, data: 'validated'};
		}).catch(function(error){
			return {status: 0, data: error.response.data.errors};
		})
	}
	createTask(project_id_int,formData){
		return axios.post('/api/project/'+project_id_int+'/task',formData).then(function(response){
			return {status: 1, data: response.data};
		}).catch(function(error){
			return {status: 0, data: error.response.data.errors};
		})
	}
	create(formData){
		return axios.post('/api/project',formData).then(function(response){
			return {status: 1, data: response.data.data};
		}).catch(function(error){
			return {status: 0, data: error.response.data.errors};
		})
	}
	async update(formData, id){
		formData.append('_method','put')
		var res = await  axios.post('/api/project/'+id,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
	get(projectId){
		return axios.get(`/api/project/${projectId}`)
		.then(function (response) {
			return response.data.data;
		})
		.catch(function (error) {
			return error;
		});
	}
}
export default new projectservice();