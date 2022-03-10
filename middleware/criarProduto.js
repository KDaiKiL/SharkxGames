const fs = require('fs');


const validarProduto = (res,req,next) => {

    fs.appendFileSync('criarProduto.text','Foi criado um produto'+ " " +  req.url + " | ")
    next();
}


module.exports = validarProduto