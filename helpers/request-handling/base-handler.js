const { responseSuccess } = require('./response-success');

module.exports = {
    handlerRequest: (req, res, next) => {
        const callbackFunction = async (callback) => {
            try {
                res.sendSuccess = responseSuccess(res);
                return await callback(req, res, next);
            } catch (error) {
                next(error);
            }
        }
        return callbackFunction;
    }
}