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
}
export default new taskservice();