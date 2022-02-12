const fs = require('fs');


const validaUsuario = (res,req,next) => {

    fs.appendFileSync('logDB.text','Foi criado um usuario'+ " " +  req.url)
    next();
}


module.exports = validaUsuario