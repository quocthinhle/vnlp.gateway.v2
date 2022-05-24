const { jobApi } = require('../../modules/jobs/api');

module.exports = {
    apiLoader: (app) => {
        app.use('/api/v1', jobApi);
    },
};