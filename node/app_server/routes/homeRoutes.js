var express = require('express')
var router = express.Router()
var ctrlHome = require('../controller/homeController')

router.get('/',ctrlHome.index)
router.get('/index',ctrlHome.index) 
router.get('/index/page/:pageid',ctrlHome.index) 

router.get('/create',ctrlHome.create) 
router.get('/index/page/create',ctrlHome.create) 

router.get('/delete/:id',ctrlHome.delete)
router.get('/index/page/delete/:id',ctrlHome.delete) 

router.get('/edit/:id',ctrlHome.edit)
router.get('/index/page/edit/:id',ctrlHome.edit) 

module.exports = router