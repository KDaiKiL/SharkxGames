const logUser = require('../middleware/logDb')
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const {check,validationResult,body} = require('express-validator')

router.post('/usuario/criar', indexController.criarUsuario)
router.get('/usuario/ver',indexController.pegarUsuario)
router.get('/usuario/ver/:id',indexController.pegarUsuarioPorId)
router.put('/usuario/update/:id',indexController.editarUsuario)
router.delete('/usuario/apagar/:id',indexController.apagarUsuario)

module.exports = router  