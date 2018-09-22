var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var Task = require('./api/models/todoListModel'); //created data model loaded in

var bodyParser = require('body-parser');

//mongoose instance connection url connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

//set up body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + ' not found'})
});

//importing routes
var routes = require('./api/routes/todoListRoutes');
routes(app); //register the route

app.listen(port, function () {
    console.log('todo list RESTful API server started on ' + port);
});