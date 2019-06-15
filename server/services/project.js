const { Project } = require('../models')

service = {}

service.getAll = async ()=>{
    const projects =  await Project.find()
    return projects
}

module.exports = Object.seal(service)