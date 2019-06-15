const path = require('path');

module.exports = {
    domainName: (process.env.NODE_ENV) ? 'https://creacion-virtual.herokuapp.com': 'http://localhost',
    projectspublicPath : path.join(__dirname, '../../client/public/img/project-images/'),
    projectspublicURI : '/public/img/project-images/'
}