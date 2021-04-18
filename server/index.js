const express = require('express');
const app = express();

const path = require('path');
const port = 3000;

const Controller = require('./Controller/controller.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// check if property is called extended
app.use(express.urlencoded({extended: false}));

app.get('/api/*', Controller.get);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

module.exports = app;