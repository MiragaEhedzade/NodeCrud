var express = require('express')
var router = express.Router()
var ctrlLogin = require('../controller/loginController')

router.get('/',ctrlLogin.index)
router.post('/',ctrlLogin.index)

router.post('/search',ctrlLogin.search)

module.exports = router