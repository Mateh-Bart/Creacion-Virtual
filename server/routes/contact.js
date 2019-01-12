'use strict'
const router  = require('express').Router(),
mailSender = require('../config/nodemailer'),
render = require('../helpers').render

router.get('/project-request', render)

router.post('/project', (req, res)=>{ 
    mailSender.sendProjectRequest(req.body, (info)=>{
        if(info){
            res.redirect('/');
        }
    }) 
})


module.exports = router;