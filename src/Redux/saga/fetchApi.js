const axios = require('axios');

export const fetchApi = async()=>{ 
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data
}
