'use strict'
const portafolioService = require('../services').portafolioService

module.exports = app =>{
    app.get('/', (req, res)=>{
        res.render('index', { projects : portafolioService.getTop10()  });
    })

    app.get('/reg', (req, res)=>{
        res.render('reg');
    })

    app.use('/contact', require('./contact'))
    app.use('/portafolio', require('./portafolio'))
};