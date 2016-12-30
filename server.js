var express = require('express');
var sequelize = require('sequelize');
var bodyParser = require('body-parser');

var db = require('./db.js');


var app = express();
var PORT =  process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/users', function(req, res){

    db.user.create(req.body).then(function(user){

        res.json(user.toJSON());
    }, function (e){
        res.status(400).json(e);
    });
})


db.sequelize.sync().then(function(){

       app.listen(PORT, function(){
                console.log( 'app running on port  ' + PORT);
           });

    console.log('synched');
});


