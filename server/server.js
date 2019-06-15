'use strict'
const { initializeDB } = require('./config/DBConsts'),
exphbs = require('express-handlebars'), 
enroute = require('./routes'),
express = require('express'),
morgan = require('morgan'),
path = require('path'),
app = express();
console.log('env', process.env.NODE_ENV)


//#region SETTING THE SERVER

//settings
app.set('port', process.env.PORT || 80)
app.set('views', path.join(__dirname, '../client/views'))
//Engine Configuration
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: {}//Aca van  los helpers; por ahora estan vacios
}))
app.set('view engine', '.hbs')

//midlewares
app.use(morgan('dev'))
app.use('/public',express.static(path.join(__dirname, '../client/public'))) 
app.use(express.urlencoded({extended: false}))
app.use(express.json())
 
//routes
enroute(app)

//#endregion


//Initialize de DB Coneccition
initializeDB() 

//Instance the server 
app.listen(app.get('port'), ()=>{
    console.log(`server running on port : ${app.get('port')}`)
})