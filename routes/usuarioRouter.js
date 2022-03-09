const logUser = require('../middleware/logDb')
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const {check,validationResult,body} = require('express-validator')

router.post('/usuario/criar',logUser, [
   check("nome").isLength({min: 3}) , 
   check("dataNascimento").isLength({min: 0})   , 
   check("telefone").isLength({min: 3}) , 
   check("cpf").isLength({min: 11}) ,
   check("endereco").isLength({min: 8})  , 
   check("estado").isLength({min: 0})  , 
   check("numero").isLength({min: 3}) ,  
   check("bairro").isLength({min: 3}) , 
   check("cidade").isLength({min: 5})  , 
   check("complemento").isLength({min: 5})  ,
   check("referencia").isLength({min: 5})   , 
   check("username").isLength({min: 3})  , 
   check("senha").isLength({ min: 4 })  ,
//    check('confirmarSenha').custom((value, { req }) => {
//     if (value !== req.check.senha) {
//       throw new Error('Senha errada');
//     }
//     return true;
//   }),
   check("email").isEmail() ,
    
], indexController.criarUsuario)
router.get('/usuario/error',indexController.criarUsuario)
router.put('/usuarios/:id/edit',indexController.editarUsuario)
router.post('/usuario/sair',indexController.sairConta)

module.exports = router  