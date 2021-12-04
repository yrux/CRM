const axios = require('axios');
class taskservice{
	summary(project_id, query=''){
		return axios.get(`/api/project/${project_id}/task${query}`)
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
	comment(task_id, formData){
		return axios.post(`/api/task/${task_id}/comment`, formData).then(function(response){
			return response.data
		}).catch(function(error){
			return error
		})
	}
	updateStatus(project_id, task_id, status){
		return axios.post(`/api/project/${project_id}/${task_id}/status/${status}`).then(function(response){
			return response.data
		}).catch(function(error){
			return error
		})
	}
	usersSummary(project_id){
		return axios.get('/api/task/'+project_id+'/usersSummary').then(function(response){
			return response.data
		}).catch(function(error){
			return error
		})
	}
	timeUpdate(task_id){
		return axios.post(`/api/task/${task_id}/update-time`).then(function(response){
			return response.data
		}).catch(function(error){
			return error
		})
	}
	markCommentsread(task_id){
		return axios.post(`/api/task/${task_id}/mark-comments-read`).then(function(response){
			return response.data
		}).catch(function(error){
			return error
		})
	}
}
export default new taskservice();