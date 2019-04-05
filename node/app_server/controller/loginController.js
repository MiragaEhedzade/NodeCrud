var Users = require('../../app_server/models/users');
var Menus = require('../../app_server/models/menus');
var _ = require("underscore");

var getOneUser = function (userName) {
    var promise = new Promise(function (resolve, reject) {
        var user = new Users();
        var userList = [];
        var userTempList = [];
        user.find('all', {where: "active = 1 and user_name='"+userName+"'"}, function(err, result) {
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
                        userTempList['password']  = row.password;
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

module.exports.index = function (req,res,next) {
    if(req.originalUrl.split("/")[1])
    {
        config.lang = req.originalUrl.split("/")[1];
    }
    
    var i18n = new i18n_module(config.lang, config.langFile);
    if('submit' in req.body)
    {
        var userName = req.body.username
        var password = req.body.password 
        
        getOneUser(userName).then(function success(result) {
            if(passwordHash.verify(password,result[0]['password']))
            { 
               res.redirect('../az/menus')
            }
            else
            {
                 
            }
        })
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
                            menuTempList['id']  = row.id;
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
    getMenusList().then(function success(result) {
        res.render('../site/login',{menuList: result,i18n:i18n,layout: '../layouts/login'})
    }) 
    
}

module.exports.search = function (req,res) { 
    var getUserList = function () {
        var promise = new Promise(function (resolve, reject) {
            var user = new Users();
            var userList = [];
            var userTempList = [];
            user.find('all', {where: "active = 1 and user_name='"+req.body.key+"'"}, function(err, result) {
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
        console.log(result);
        res.end();
    })
}