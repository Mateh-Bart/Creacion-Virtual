'use strict'
const nodemailer = require('nodemailer'),
path = require('path'),
fs = require('fs');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    auth:{
        user: 'creacionvirtual01@gmail.com',
        pass: 'creacion0102virtual'
    }
});

class MailSender{

    

    sendEmail(to, next){  
    
        // Verificamos el email
        checkUserEmail(email, (user)=>{ 
            if(!user.verified){
                var url = `gruposocial.servehttp.com/users/userverified/${user._id}`
                var html = fs.readFileSync(path.join(__dirname, '../views/user-verification.html')).toString().replace('${url}', url)
                let mailOptions = {
                    from: '"Creacion Virtual Server 👻" <creacionvirtual01@gmail.com>', // sender address
                    to: email, // list of receivers
                    subject: 'Verifique su cuenta en Grupo Social ', // Subject line
                    html: html // html body
                };
            
                transporter.sendMail(mailOptions, (err, info)=>{
                    next( err, info )           
                } )
            }
            else next(null, 'Este usuario ya esta verificado')
        })
    }


    sendProjectRequest(req, next){

        let htmlTemplate = fs.readFileSync(path.join(__dirname, '../../client/views/email-templates/project-request.html'))
        .toString()
        .replace('${first}', req.first)
        .replace('${last}', req.last)
        .replace('${email}', req.email)
        .replace('${phone}', req.phone)
        .replace('${projectTitle}', req.projectTitle)
        .replace('${description}', req.description)

        let mailOptions = {
            from: `${req.first}  ${req.last} <${req.email}>`, // sender address
            to: 'alfredomateo041@gmail.com;matematicoelismar@gmail.com', // list of receivers
            subject: 'Solicitud De Proyecto', // Subject line
            // html: req.description, // html body
            html: htmlTemplate
        };

        transporter.sendMail(mailOptions, (err, info)=>{
            if(err) throw err;
            console.log(info);
            if(next != undefined)
                next(  info )           
        } )
    }
}

module.exports = new MailSender()