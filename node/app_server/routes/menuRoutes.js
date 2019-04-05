var express = require('express')
var router = express.Router()
var ctrlMenu = require('../controller/menuController')
 
router.get('/',ctrlMenu.index) 
router.get('/index',ctrlMenu.index) 
router.get('/index/page/:pageid',ctrlMenu.index) 

router.get('/create',ctrlMenu.create) 
router.post('/create',ctrlMenu.create) 

router.get('/delete/:id',ctrlMenu.delete)
router.get('/index/page/delete/:id',ctrlMenu.delete) 

/*router.get('/edit/:id',ctrlMenu.edit)*/

module.exports = router