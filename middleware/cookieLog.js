const { Usuario } = require('../models')

async function cookieLog(req, res, next) {
    if(req.cookies.log != undefined && typeof(req.session.usuario) == 'undefined') {
        const email = req.cookies.log
        const user = await Usuario.findOne({where: {email}})
        req.session.usuario = user
    }
    next()
}

module.exports = cookieLog