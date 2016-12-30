var Sequelize = require('sequelize');
//var env = process.env.NODE_ENV || 'development';
//var sequelize;

var sequelize = new Sequelize(undefined,undefined,undefined, {
                  'dialect': 'sqlite',
                  'storage':__dirname + '/data/login-api.sqlite'


});

/*if(env==='production'){

    sequlize = new Sequelize(process.env.DATABAS_URL, {
             'dialect': 'postgres'
    });
}else{
   sequlize = new Sequelize(undefined, undefined, undefined, {
       'dialect': 'sqlite',
       'storage': __dirname + '/data/dev-login-api.sqlite'
   });
}
*/
var db = {};

db.user = sequelize.import('./models/user.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;