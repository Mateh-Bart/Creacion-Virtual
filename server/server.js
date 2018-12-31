'use strict'
const routes = require('./routes'),
express = require('express'),
morgan = require('morgan'),
path = require('path'),
app = express();

//settings
app.set('port', process.env.PORT || 80)

//midlewares
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../client'))) 
app.use(express.urlencoded({extended: false}))
app.use('/contact', routes.contacts)

//Instance the server
app.listen(app.get('port'), ()=>{
    console.log(`server running on port : ${app.get('port')}`)
})