const axios = require('axios');
class taskservice{
	summary(project_id){
		return axios.get(`/api/project/${project_id}/task`)
		.then(function (response) {
			return response.data.data;
		})
		.catch(function (error) {
			return error;
		});
	}
	tasks(query){
		return axios.get('/api/tasks'+query).then(function(response){
			return response.data
		}).catch(function(error){
			return error
		})
	}
	update(project_id, id, formData){
		formData.append('_method','put')
		return axios.post(`/api/project/${project_id}/task/${id}`, formData).then(function(response){
			return response.data
		}).catch(function(error){
			return error
		})
	}
}
export default new taskservice();