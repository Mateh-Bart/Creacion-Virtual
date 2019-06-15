const jwt = require('jsonwebtoken')
const { User, error } = require('../models')
const { domainName } = require('../config/consts')

const account = {}

account.login = async (req, res)=>{
    req.user =  await User.findOne({ name: req.body.name, pass: req.body.pass })
    console.log(req.user)
    console.log('hey im here')
    if(req.user){
        let token = jwt.sign({
            iis: 'code',
            _id: req.user._id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        }, 'creacion-virtual');
        res.redirect(`${domainName}/admin/${token}`)
    }
   
    else{
        error.status = 100;
        error.error = 'CREDENCIALES INCORRECTOS'
        error.desc = 'No se encuentra ningun usuario registrado con estos credenciales'
        res.render('error', error) 
    } 
}

account.isLoggedIn = (req, res, next)=>{
    jwt.verify(req.params.token, 'creacion-virtual', (err, data)=>{
        //Si no hubo error en la verificacion
        if(!err) {
            req.user = {}
            req.user._id = data._id 
            req.user.token = req.params.token 
            console.log('peticion aceptada')
            next() 
        }
        else{
            res.status(401).send('Unautorized Request')
        }
    })
}

module.exports = Object.seal(account)