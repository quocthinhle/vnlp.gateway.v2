const express = require('express');
const { apiLoader, setupBase } = require('./pre-loading');

const app = express();

setupBase(app);
apiLoader(app);

module.exports = app;