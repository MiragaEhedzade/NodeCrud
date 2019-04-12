var Menus = require('../../app_server/models/menus');
 
var _ = require("underscore");
var striptags = require('striptags');
  
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
        res.render('../menus/home',{ allPageCount : Math.ceil(result.length/10), menuList: result ,pageNumber:pageNumber , i18n:i18n , layout: '../layouts/main'});
    }) 

} 

module.exports.create = function(req,res){
    config.lang = req.originalUrl.split("/")[1];
    var i18n = new i18n_module(config.lang, config.langFile);
    if('submit' in req.body)
    {  
        const menuValModel = {
            name: req.body.name,
            url: striptags(req.body.url),
            active: 1,
            create_time: Math.floor(new Date() / 1000),
            modify_time: Math.floor(new Date() / 1000)
        };
        const referenceMenuModel = Menus.referenceMenusModel;
        
        
        menu = new Menus(menuValModel); 
        if(menu.validate(menuValModel, referenceMenuModel))
        {
            menu.save(); 
        } 
        else
        { 
            console.log(result['errors']); 
        }
        res.end(); 
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
        res.render('../menus/create',{ menuList: result ,i18n:i18n,layout: '../layouts/main'})
    })
}

module.exports.delete = function (req,res) {
    var menu = new Menus();
    menu.remove('id='+req.params.id)
    res.redirect('../../menus');
}