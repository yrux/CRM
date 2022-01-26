const axios = require('axios');
class marketing_budgetservice{
	getlist(params){
		return axios.get(`/api/marketing_budgets${params}`)
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			return error;
		});
	}
    delete({query,id}){
		return axios.delete(`/api/marketing_budgets/${id}`);
	}
    async create(formData){
        var res = await  axios.post('/api/marketing_budgets',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
	async get(id){
		var res = await axios.get(`/api/marketing_budgets/${id}`)
		return res.data.data;
	}
	async update(formData, id){
		formData.append('_method','put')
		var res = await  axios.post('/api/marketing_budgets/'+id,formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
	}
	async getDailyBudget(period){
		return await axios.get('/api/current-budget?period='+period).then(e=>{
			return {status: 1, data: e.data}
		})
	}
	async getDailyBudgetDetail(marketing_budget_id){
		return await axios.get('/api/marketing_budgets/'+marketing_budget_id+'/spendings?sortCol=date&sortByDesc=1').then(e=>{
			return e.data
		})
	}
	async saveDailyBudgetDetail(marketing_budget_id, formData){
		return await axios.post('/api/marketing_budgets/'+marketing_budget_id+'/spendings', formData).then(e=>{
			return e.data
		})
	}
}
export default new marketing_budgetservice();