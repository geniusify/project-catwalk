const model = require('../Model/model.js');

module.exports = {
  get: (req, res) => {
    const baseUrl = '/api';
    const endpoint = req.originalUrl.slice(baseUrl.length);

    return model.getAll(endpoint)
      .then((data) => res.status(200).send(data.data))
      .catch((error) => res.status(404).send(error));
  },

  post: (req, res) => {
    const baseUrl = '/api';
    const endpoint = req.originalUrl.slice(baseUrl.length);

    return model.add(endpoint, req.body)
      .then(() => res.status(201).send())
      .catch((error) => res.status(404).send(error));
  },

  put: (req, res) => {
    const baseUrl = '/api';
    const endpoint = req.originalUrl.slice(baseUrl.length);

    return model.update(endpoint)
      .then(() => res.status(204).send())
      .catch((error) => res.status(404).send(error));
  },
};
