const axios = require('axios');
const { TOKEN } = require('../../config.js');

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
