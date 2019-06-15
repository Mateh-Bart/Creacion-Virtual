'use strict'
const { project } = require('../services')
const { domainName } = require('../config/consts')
module.exports = app =>{
    app.get('/', async (req, res)=>{
        let projects =  await project.getAll()
        res.render('index', { domainName,  projects : projects  });
    })

    app.get('/reg', (req, res)=>{
        res.render('reg');
    })

    app.use('/portafolio', require('./portafolio'))
    app.use('/account', require('./account')) 
    app.use('/contact', require('./contact'))
    app.use('/admin', require('./admin'))
};