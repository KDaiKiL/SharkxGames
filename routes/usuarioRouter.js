const logUser = require('../middleware/logDb')
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const {check,validationResult,body} = require('express-validator')

router.post('/usuario/criar',logUser, [
   check("nome").isLength({min: 3}) , 
   check("dataNascimento").isLength({min: 8})   , 
   check("telefone").isLength({min: 3}) , 
   check("cpf").isLength({min: 13}) ,
   check("endereco").isLength({min: 3})  , 
   check("estado").isLength({min: 0})  , 
   check("numero").isLength({min: 2}) ,  
   check("bairro").isLength({min: 0}) , 
   check("cidade").isLength({min: 0})  , 
   check("complemento").isLength({min: 0})  ,
   check("referencia").isLength({min: 0})   , 
   check("userName").isLength({min: 0})  , 
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