const { handlerRequest } = require('../../helpers/request-handling/base-handler');

class JobController {
    createJob(req, res, next) {
        handlerRequest(req, res, next)(async () => {
            const body = req.body;
            return res.sendSuccess(body, {});
        });
    }
}

module.exports = new JobController();