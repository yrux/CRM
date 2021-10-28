const axios = require('axios');
class fileservice{
    async create(formData){
        var res = await  axios.post('/api/file',formData).then(function(e){
            return {status: 1, data: e.data.data}
        }).catch(function(e){
            return {status: 0, data: e.response.data.errors};
        });
        return res;
    }
}
export default new fileservice();