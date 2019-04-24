var mysqlModel = require('mysql-model');
var path = require('path');

const config = require('../../config');
const filename = path.basename(__filename);
const modelName = filename.substring(0, filename.indexOf('.js'));

var menusModel = mysqlModel.createConnection({
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.password,
    database : config.db.database,
});

var menus = menusModel.extend({
    tableName: config.db.tablePrefix + modelName,
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