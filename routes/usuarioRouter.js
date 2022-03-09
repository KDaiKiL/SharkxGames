const logUser = require('../middleware/logDb')
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const {check,validationResult,body} = require('express-validator')

router.post('/usuario/criar',logUser, indexController.criarUsuario)
router.get('/usuario/error',indexController.criarUsuario)
router.put('/usuarios/:id/edit',indexController.editarUsuario)
router.post('/usuario/sair',indexController.sairConta)

module.exports = router  