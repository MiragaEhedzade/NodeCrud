var mysqlModel = require('mysql-model');
var path = require('path');

const config = require('../../config');
const filename = path.basename(__filename);
const modelName = filename.substring(0, filename.indexOf('.js'));

var usersModel = mysqlModel.createConnection({
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.password,
    database : config.db.database,
});

var users = usersModel.extend({
    tableName: config.db.tablePrefix + modelName,
});

var referenceUsersModel = {
    user_name: 
    {
      type: String,
      isRequired: true
    },
    password: {
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
 
module.exports = users 
module.exports.referenceUsersModel = referenceUsersModel