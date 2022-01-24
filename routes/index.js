const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
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


// GET
router.get('/home', indexController.index)
router.get('/pagamento', indexController.pagamento)
router.get('/editar', indexController.editarProduto)
router.get('/cadastro', indexController.cadastro)
router.get('/carrinho', indexController.carrinho)
router.get('/cartao', indexController.PegarCartao)
router.get('/cartao/:id', indexController.PegarCartaoID)
router.get('/item', indexController.item)
router.get('/opcoes-entrega', indexController.OpcoesEntrega)
router.get('/cadastro/produto', indexController.pageProduto)
router.get('/produto/venda', indexController.adcProduto)
router.get('/contato', indexController.contato)
router.get('/contato/Termos-e-condicoes-gerais-de-uso_0000', indexController.termos)
router.get('/produto/ver',indexController.produtoVer)
router.get('/produto/ver/:id',indexController.produtoVerId)


//POST
router.post('/cadastro', indexController.cadastrar)
router.post('/cadastro/produto', upload.single('img'), indexController.novoProduto)
router.post('/produto/criar',indexController.ProdutoCriar)
router.post('/cartao/cadastrar',indexController.cadastrarCartao)



//PUT
router.put('/produto/update/:id',indexController.AtualizarProduto)



//DELETE
router.delete('/produto/delete/:id',indexController.DeletarProduto)



module.exports = router  