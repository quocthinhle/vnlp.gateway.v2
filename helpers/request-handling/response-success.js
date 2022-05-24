const _ = require('lodash');

module.exports = {
    responseSuccess: (res) => (data, message) => {
        let dataResponse = {
            data,
            message,
        };
        dataResponse = _.omitBy(dataResponse, _.isNil);
        return res.status(200).json(dataResponse);
    }
}