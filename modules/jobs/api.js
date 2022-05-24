const express = require('express');

const controller = require('./express-controller');

const router = express.Router();

router.post('/jobs', [
    // add Middleware
], controller.createJob);

module.exports = {
    jobApi: router,
};