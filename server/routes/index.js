'use strict'
module.exports = app =>{
    app.get('/', (req, res)=>{
        res.render('index');
    })

    app.get('/reg', (req, res)=>{
        res.render('reg');
    })

    app.use('/contact', require('./contact'))
};