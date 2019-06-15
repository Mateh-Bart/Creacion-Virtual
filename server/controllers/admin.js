'use strict'
const multer = require('multer')
const { projectspublicPath } = require('../config/consts') 
const fs = require('fs')
const path = require('path');
const { error, Project } = require('../models')
const { ObjectId } = require('mongoose').Types
const admin = {}


//Configuring the multer object
admin.upload = multer({
    dest: 'uploads/temp', 
    fileFilter : (req, file, cb)=>{ 

        //Si el archivo es de tipo imagen permitimos que se guarde
            if(file.mimetype.includes('image')){ 
                cb(null, true)
            }
            else{
                error.status = 500;
                error.error = 'INCORRECT FILE UPLOADED'
                error.desc = 'The file uploaded is not an image'
                
                req.error = error; 
                cb(null, false)
            }
    }
})
admin.index = (req, res)=>{
    res.render('admin')
}

admin.addProject = async (req, res)=>{ 

    if(req.file){
        console.log('file', req.file) 
        
        let index = req.file.originalname.indexOf('.')
        let ext = req.file.originalname.substr(index, req.file.filename.lengh) 
        req.file.filename;  
        let dest = projectspublicPath + req.file.filename + ext
        fs.renameSync(req.file.path, dest) 
        
        const newProject = new Project({
            userID: ObjectId(req.user._id),
            name: req.body.name,
            description: req.body.description,
            imageName: req.file.filename + ext
        });
        console.log('project', newProject);

        let project = await newProject.save()
        console.log('valie', project)
        res.json(project) 
        

    }
    else{
        res.render('error', req.error)
    }
}


module.exports = admin