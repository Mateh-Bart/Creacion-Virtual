const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types;
const { projectspublicURI } = require('../config/consts') 


const ProjectSchema = new mongoose.Schema({
    userID: {type: ObjectId, required: true},
    name: String,
    description: String,
    imageName: String
}, {
    toObject : {getters: true},
    toJSON : {getters: true}
}) 

ProjectSchema.path('imageName').get((value)=>{
    return projectspublicURI+ value;
})

module.exports = mongoose.model('Project', ProjectSchema)