const cadastroProduto = require('../middleware/criarProduto')
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const {check,validationResult,body} = require('express-validator')
const multer = require('multer')

const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb(null, './public/images/upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get('/produto/ver',indexController.produtoVer)
router.get('/produtos/:id',indexController.produtoVerId)
router.put('/produto/update/:id/edit', upload.single('img'),indexController.AtualizarProduto)
router.delete('/produto/delete/:id/del',indexController.DeletarProduto)
router.post('/cadastro/produto', upload.single('img'),cadastroProduto,[
    check("nome").isLength({min:50}),
    check("preco").isLength({min:3, max:30}).notEmpty(),
     check("imgPath").isEmpty() ],indexController.novoProduto)



module.exports = router  