const express = require('express');
const app = express();
const routes = require('./routes/serverRoutes');

//Settings
app.set('port',process.env.PORT || 1300);

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routes
app.use('/',routes);

module.exports = app;
