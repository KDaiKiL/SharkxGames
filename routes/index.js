const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const multer = require('multer')
const auth = require('../middleware/auth')
const login = require('../middleware/login')


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
router.get('/contas/:id', indexController.contaId)
router.get('/home', indexController.index)
router.get('/pagamento', auth, indexController.pagamento)
router.get('/editar', auth, indexController.editarProduto)
router.get('/cadastro', login, indexController.cadastro)
router.get('/carrinho', auth, indexController.carrinho)
router.get('/login', login, indexController.login)
router.get('/conta', auth, indexController.conta)
router.get('/item', indexController.item)
router.get('/opcoes-entrega', indexController.OpcoesEntrega)
router.get('/cadastro/produto', auth, indexController.pageProduto)
router.get('/produto/venda', indexController.adcProduto)
router.get('/contato', indexController.contato)
router.get('/contato/Termos-e-condicoes-gerais-de-uso_0000', indexController.termos)



//POST

router.post('/login', indexController.loginUser)




//Produto

router.get('/produto/ver',indexController.produtoVer)
router.get('/produtos/:id',indexController.produtoVerId)
router.post('/cadastro/produto', upload.single('img'),indexController.novoProduto)
router.put('/produto/update/:id',indexController.AtualizarProduto)
router.delete('/produto/delete/:id',indexController.DeletarProduto)


//Cartao

router.get('/cartao', indexController.PegarCartao)
router.get('/cartao/:id', indexController.PegarCartaoID)
router.post('/cartao/cadastrar',indexController.cadastrarCartao)
router.put('/cartao/update/:id',indexController.updateCartao)
router.delete('/cartao/delete/:id',indexController.destruirCartao)


router.get('/',indexController.error)


module.exports = router  

