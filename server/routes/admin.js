'use strict'
const router  = require('express').Router()
const { render, renderView } = require('../helpers')
const { admin, account } = require('../controllers') 


router.get('/', (req, res)=>{
    renderView('login', res)
}) 

router.get('/:token', account.isLoggedIn, admin.index) 
   
//Agregar projectos...
router.post('/:token', account.isLoggedIn, admin.upload.single('project-image'),  admin.addProject)


module.exports = router;