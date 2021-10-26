const axios = require('axios');
class loginservice{
	dologin(email,pass){
		return axios.post(`/api/login`, {
			email: email,
			password: pass
		})
		.then(function (response) {
			return {status: 1, data: response.data.token};
		})
		.catch(function (error) {
			var data = error.response.data;
			var msg = '';
			if(data.message){
				msg = data.message;
			}
			if(data.errors){
				msg = data.errors.join(', ');
			}
			return {status: 0,data: msg};
		});
	}
	me(){
		return axios.get('/api/me').then(function(response){
			return response.data;
		})
	}
}

export default new loginservice();