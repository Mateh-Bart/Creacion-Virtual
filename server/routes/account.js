'use strict'
const router  = require('express').Router() 
const { account } = require('../controllers')


router.post('/login', account.login)


module.exports = router;