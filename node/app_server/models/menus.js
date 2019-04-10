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

var referenceMenusModel = {
    name: 
    {
      type: String,
      isRequired: true
    },
    url: {
      type: String,
      isRequired: true
    },
    active: {
      type: Number,
      isRequired: true
    },
    create_time: {
        type: Number,
        isRequired: true
    },
    modify_time: {
        type: Number,
        isRequired: true
    },
}

module.exports.menus = menus
module.exports.referenceMenusModel = referenceMenusModel