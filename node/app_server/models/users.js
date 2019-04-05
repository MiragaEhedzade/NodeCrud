var mysqlModel = require('mysql-model');
 
var usersModel = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_test',
});

var users = usersModel.extend({
    tableName: "node_users",
});
 
module.exports = users 