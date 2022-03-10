const logUser = require('../middleware/logDb')
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const {check,validationResult,body} = require('express-validator')

router.post('/usuario/criar',logUser, [
   check("nome").isLength({min: 3}).notEmpty().withMessage("O campo obrigatório") , 
   check("dataNascimento").isLength({min: 0}).notEmpty().withMessage("O campo obrigatório")   , 
   check("telefone").isLength({min: 3}).notEmpty().withMessage("O campo obrigatório") , 
   check("cpf").isLength({min: 11}).notEmpty().withMessage("O campo obrigatório") ,
   check("endereco").isLength({min: 8}).notEmpty().withMessage("O campo obrigatório")  , 
   check("estado").isLength({min: 0}).notEmpty().withMessage("O campo obrigatório")  , 
   check("numero").isLength({min: 3}).notEmpty().withMessage("O campo obrigatório") ,  
   check("bairro").isLength({min: 3}).notEmpty().withMessage("O campo obrigatório") , 
   check("cidade").isLength({min: 5}).notEmpty().withMessage("O campo obrigatório")  , 
   check("complemento").isLength({min: 5}).notEmpty().withMessage("O campo obrigatório")  ,
   check("referencia").isLength({min: 5}).notEmpty().withMessage("O campo obrigatório")   , 
   check("username").isLength({min: 3}).notEmpty().withMessage("O campo obrigatório")  , 
   check("senha").isLength({ min: 4 }).notEmpty().withMessage("O campo obrigatório")  ,
   check("email").isEmail().notEmpty().withMessage("O campo obrigatório") ,
    
], indexController.criarUsuario)
router.get('/usuario/error',indexController.criarUsuario)
router.put('/usuarios/:id/edit',indexController.editarUsuario)
router.post('/usuario/sair',indexController.sairConta)

module.exports = router  