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
}
export default new projectservice();