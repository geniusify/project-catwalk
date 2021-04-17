// Testing HTTP
const request = require('supertest');
const app = require('../index.js');

request(app)
  .get('/api/products/23718/styles')
  .expect(200)
  .end((err, res) => {
    if (err) {
      throw err;
    }

    console.log('passed GET /api/*');
  });