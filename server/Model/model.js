const axios = require('axios');
const TOKEN = process.env.AUTHORIZATION || require('../../config.js').TOKEN;

module.exports = {
  getAll: (endpoint) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo${endpoint}`;

    return axios({
      url,
      method: 'get',
      headers: {
        'User-Agent': 'request',
        Authorization: `${TOKEN}`,
      },
    });
  },
};
