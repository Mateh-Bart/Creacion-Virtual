const mongoose = require('mongoose')
process.env.NODE_ENV='dev'
const URI = (process.env.NODE_ENV) ? 'mongodb://creacion:virtual1@ds027769.mlab.com:27769/creacion-virtual': 'mongodb://localhost/creacion-virtual'
module.exports = {
    initializeDB: async ()=>{
        return await mongoose.connect(URI, { useNewUrlParser: true })
        .then(res=>{
            console.log('DB Connected to DB ', res.connections[0].name)
        })
        .catch(err=>{console.log('PROBLEMS CONNECTING DB', err)})
    }
} 