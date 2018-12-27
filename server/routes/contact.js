'use strict'
const router  = require('express').Router(),
mailSender = require('../config/nodemailer');

router.post('/project', (req, res)=>{ 
    mailSender.sendProjectRequest(req.body, (info)=>{
        if(info){
            res.redirect('/');
        }
    }) 
})


module.exports = router;