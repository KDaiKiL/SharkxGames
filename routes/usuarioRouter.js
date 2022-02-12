const logUser = require('../middleware/logDb')
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const {check,validationResult,body} = require('express-validator')

router.post('/usuario/criar',logUser, [
   check("nome").isLength({min: 3}) , 
   check("dataNascimento")   , 
   check("telefone") , 
   check("cpf").isLength({min: 13}) ,
   check("endereco")  , 
   check("estado")  , 
   check("numero").isLength({min: 2}) ,  
   check("bairro")  , 
   check("cidade")  , 
   check("complemento")  ,
   check("referencia")   , 
   check("userName")  , 
   check("senha").isLength({ min: 5 })  ,
//    check('confirmarSenha').custom((value, { req }) => {
//     if (value !== req.check.senha) {
//       throw new Error('Senha errada');
//     }
//     return true;
//   }),
   check("email").isEmail() ,
    
], indexController.criarUsuario)
router.get('/usuario/ver',indexController.pegarUsuario)
router.get('/usuario/ver/:id',indexController.pegarUsuarioPorId)
router.put('/usuario/update/:id',indexController.editarUsuario)
router.delete('/usuario/apagar/:id',indexController.apagarUsuario)

module.exports = router  