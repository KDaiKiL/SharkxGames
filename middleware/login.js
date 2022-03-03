function login(req, res, next) {
    if(typeof(req.session.usuario) != 'undefined') {
        res.redirect('/conta')
    } else {
        return next()
    }
}

module.exports = login