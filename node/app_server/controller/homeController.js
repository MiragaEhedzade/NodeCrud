var Users = require('../../app_server/models/users');
var Menus = require('../../app_server/models/menus');
var usersReference = require('../../app_server/modelReference/users');
var _ = require("underscore");
const {validate} = require('node-model-validation')

 

module.exports.index = function (req,res) {
    config.lang = req.originalUrl.split("/")[1];
    var i18n = new i18n_module(config.lang, config.langFile);

    var offset = 0;
    var limit = 10; 
    if(req.params.pageid)  
    {
        offset = 10;
        limit = 10; 
        offset = offset * req.params.pageid-10; 
        limit = limit * req.params.pageid; 
        pageNumber = req.params.pageid;
    }
    else
    {
        pageNumber = 1;
    }
    var getUserList = function () {
        var promise = new Promise(function (resolve, reject) {
            var user = new Users();
            var userList = [];
            var userTempList = [];
            user.find('all', {where: "active = 1", limit: [offset,limit]}, function(err, result) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    if(result.length){
                        _.each(result,function(row) { 
                            userTempList = [];  
                            userTempList['id']  = row.id;
                            userTempList['user_name']  = row.user_name;
                            userList.push(userTempList);
                        }); 
                    } 
                    else{

                    }
                    resolve(userList)
                } 
            });    
        })
        return promise;
    } 

    var getMenusList = function () {
        var promise = new Promise(function (resolve, reject) {
            var menu = new Menus();
            var menuList = [];
            var menuTempList = [];
            menu.find('all', {where: "active = 1"}, function(err, result) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    if(result.length){
                        _.each(result,function(row) { 
                            menuTempList = [];  
                            menuTempList['name']  = row.name;
                            menuTempList['url']  = row.url;
                            menuList.push(menuTempList);
                        }); 
                    }else{

                    } 
                    resolve(menuList)
                } 
            });    
        })
        return promise;
    } 
    
    var getAllUser = function () {
        var promise = new Promise(function (resolve, reject) {
            var user = new Users();
            var userList = [];
            var userTempList = [];
            user.find('all', {where: "active = 1"}, function(err, result) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    if(result.length){
                        _.each(result,function(row) { 
                            userTempList = [];  
                            userTempList['id']  = row.id;
                            userTempList['user_name']  = row.user_name;
                            userList.push(userTempList);
                        }); 
                    } 
                    else{
                        
                    }
                    resolve(userList)
                } 
            });    
        })
        return promise;
    }
 
    getUserList().then(function success(result) {
        getAllUser().then(function success(result2) {
            getMenusList().then(function success(result3) {
                res.render('../users/home',{userList: result , allPageCount : Math.ceil(result2.length/10), menuList: result3 ,pageNumber:pageNumber , i18n:i18n, layout: '../layouts/main'});
            }) 
        }) 
    })

}  
    
module.exports.create = function (req,res) {
    const userValModel = {
        user_name: 'Serenity2',
        password: passwordHash.generate('1'),
        active: 1,
        create_time: Math.floor(new Date() / 1000),
        modify_time: Math.floor(new Date() / 1000)
    };
    const referenceUserModel = usersReference;
 
    let result = validate(userValModel, referenceUserModel)
    if(result['errors'])
        console.log(result['errors']);
    else
    {
        user = new Users(userValModel);
        user.save();
    } 
    res.end();
}

module.exports.delete = function (req,res) {
    var user = new Users();
    user.remove('id='+req.params.id)
    res.end();
}

module.exports.edit = function (req,res) {
    var getOneUser = function () {
        var promise = new Promise(function (resolve, reject) {
            var user = new Users();
            var userList = [];
            var userTempList = [];
            user.find('all', {where: "id = "+req.params.id}, function(err, result) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    if(result.length){
                        _.each(result,function(row) { 
                            userTempList = [];  
                            userTempList['id']  = row.id;
                            userTempList['user_name']  = row.user_name;
                            userList.push(userTempList);
                        }); 
                    } 
                    else{
                        
                    }
                    resolve(userList)
                } 
            });    
        })
        return promise;
    }

    getOneUser().then(function success(result) {
        console.log(result);
    })

    res.end();
}