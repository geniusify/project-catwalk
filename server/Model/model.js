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
      }
    });
  },
};

// var fxn2 = function(endpoint){
//   const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo${endpoint}`;

//   axios({
//     url,
//     method: 'get',
//     headers: {
//       'User-Agent': 'request',
//       Authorization: `${TOKEN}`,
//     }
//   }).
//   then(function(response) { console.log(response.data) } ).catch(function(err) { console.log(err) });

// };

// console.log(fxn2('/products'))
