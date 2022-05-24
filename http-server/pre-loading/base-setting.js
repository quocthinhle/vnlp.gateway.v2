const cors = require('cors');
const morgan = require('morgan');
const { urlencoded, json } = require('express');

module.exports = {
    setupBase: (app) => {
        // Setup cors
        app.use(cors());

        // Setup HTTP Request logger
        app.use(morgan('combined'));
        
        // Body parser
        app.use(urlencoded({extended: true}));
        app.use(json());

        return app;
    }
}