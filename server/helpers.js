

exports = module.exports = {}


//Renderiza una vista con el mismo nombre de la ruta desde la que es invocada
exports.render = (req, res)=>{ 
    let view = req.url.replace('/', '') 
    res.render(view, {
        title: view,
        domainName : 'http://localhost'
    })
}