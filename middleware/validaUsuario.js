const fs = require('fs');


const log = (res,req,next) => {

    fs.appendFileSync('log.text','Usuario entrou na URL'+ req.url)
    next();
}


module.exports = log