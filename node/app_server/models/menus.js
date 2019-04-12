var mysqlModel = require('mysql-model');
const config = require('../../config');

var menusModel = mysqlModel.createConnection({
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.password,
    database : config.db.database,
});

var menus = menusModel.extend({
    tableName: config.db.tablePrefix+"menus",
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

module.exports = menus
module.exports.referenceMenusModel = referenceMenusModel