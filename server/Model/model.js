const axios = require('axios');
const { TOKEN } = require('../../config.js');

module.exports = {
  getAll: (endpoint) => {
    let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo${endpoint}`;

    return axios({
      url: url,
      method: 'get',
      headers: {
        'User-Agent': 'request',
        'Authorization': `${TOKEN}`
      },
    })
  }
}