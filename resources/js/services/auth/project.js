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