var mysqlModel = require('mysql-model');
var menusModel = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_test',
});

var menus = menusModel.extend({
    tableName: "node_menus",
});

module.exports = menus