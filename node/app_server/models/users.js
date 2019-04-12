var mysqlModel = require('mysql-model');
const config = require('../../config');

var usersModel = mysqlModel.createConnection({
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.password,
    database : config.db.database,
});

var users = usersModel.extend({
    tableName: config.db.tablePrefix+"users",
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