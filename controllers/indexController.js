const fs = require('fs');
const { v4: uuid } = require('uuid');
const {check,validationResult,body} = require('express-validator')

const { Usuario, Produto, Cartao } = require('../models')

const indexController = {
  index: async (req, res) => {

    const produtos = await Produto.findAll()

    res.render('index', {produtos} ) 
  },
  login: (req, res) => {
    res.render('login')
  },
  cadastro: (req, res) => {
    return res.render('cadastro')
  },
  pagamento: (req, res) => {
    return res.render('formaDePagamento')
  },
  carrinho: (req, res) => {
    return res.render('carrinho')
  },
  item: (req, res) => {
    return res.render('item')
  },
  OpcoesEntrega: (req, res) => {
    return res.render("TelaDeVendas/opcoesDeEntrega")
  },
  adcProduto: (req, res) => {
    return res.render("TelaDeVendas/telaDeGerente")
  },
  pageProduto: (req, res) => {
    res.render('cadastroProduto')
  },
  novoProduto: (req, res) => {
   
    let img = '/images/upload/' + req.file.originalname
    let { nome, valor, descricao } = req.body

  
    res.redirect("/home")
  },
  editarProduto: (req, res) => {
    return res.render('atualizarProduto')
  },
  contato: (req, res) => {
    res.render('contato')
  },
  produtoVer: async (req, res) => {
    const pv = await Produto.findAll()

    res.json(pv)
  },

  produtoVerId: async (req, res) => {
    const { id } = req.params

    const produtoId = await Produto.findByPk(id)

    res.json(produtoId)
  },

  ProdutoCriar: async (req, res) => {

    const { nome, preco, desconto, categoria, descricao } = req.body

    const produto = await Produto.create({
      id: uuid(),
      nome,
      preco,
      desconto,
      categoria,
      descricao
    })

    res.json(produto)
  },

  AtualizarProduto: async (req, res) => {

    const { id } = req.params

    const { nome, preco, desconto, categoria } = req.body

    const Update = await Produto.update({ nome, preco, desconto, categoria }, {
      where: { id }
    })

    if (Update == 1) {
      return res.status(201).json({ mensagem: 'Sua alteração foi feita com sucesso' })
    } else {
      return res.status(404).json({ mensagem: 'Sua alteração já foi realizada' })
    }

  },

  DeletarProduto: async (req, res) => {

    const { id } = req.params

    const destruir = await Produto.destroy({
      where: { id }
    })

    if(destruir == 1){
      return res.status(204).json({ mensagem: "O usuario foi deletado"})
   }else {
     return res.status(204).json({ mensagem: "O usuario já foi deletado"})
   }

  },

  PegarCartao: async (req, res) => {

    const cartao = await Cartao.findAll()

    res.json(cartao)

  },

  PegarCartaoID: async (req, res) => {

    const { id } = req.params

    const cartao = await Cartao.findByPk(id)

    res.json(cartao)

  },

  error: (req,res) => {
    
    
    res.render('error')
  },

  cadastrarCartao: async (req, res) => {

    const { nome, bandeira, numero, tipo, cvv } = req.body

    const cartaoCadastrado = await Cartao.create({

      id: uuid(),
      nome,
      bandeira,
      numero,
      tipo,
      cvv

    })

    res.json(cartaoCadastrado)
  },

  updateCartao: async (req, res) => {

    const { id } = req.params

    const { nome, bandeira, numero, tipo, cvv } = req.body

    const Update = await Cartao.update({
      nome,
      bandeira,
      numero,
      tipo,
      cvv
    }, { where: { id } })

    if (Update == 1) {
      return res.status(204).json({ mensagem: 'Sua alteração foi feita com sucesso' })
    } else {
      return res.status(204).json({ mensagem: 'Sua alteração já foi realizada' })
    }
  },
  destruirCartao: async (req, res) => {
    const { id } = req.params

    const destruir = await Cartao.destroy({
      where: { id }
    })

    if(destruir == 1){
      return res.status(204).json({ mensagem: "O cartão foi deletado"})
   }else {
     return res.status(204).json({ mensagem: "O cartão já foi deletado"})
   }

  },

  criarUsuario: async (req, res) => {

    const { username, nome, sobrenome, data_nascimento, email, senha, telefone, cpf, cep, endereco, estado, cidade, bairro, referencia, numero, complemento } = req.body

    const listaDeError =  validationResult(req)

    if(listaDeError.isEmpty()) {

    const CriarUser = await Usuario.create({
      id: uuid(),
      nome,
      dataNascimento,
      telefone,
      cpf,
      endereco,
      estado,
      bairro,
      numero, 
      cidade,
      numero, 
      complemento,
      referencia,
      userName,
      senha,
      email,
      imagemPerfil,
      imagemDeFundo
    })
    
    return res.redirect('/home')

   } else {
     res.json({mesagem: "Desculpa mas o seu cadastro não foi aceito"})
   }

   

    
  },

  termos: (req, res) => {
    res.render('termos')
  },

  pegarUsuario : async (req,res) => {

    const us = await Usuario.findAll()

    res.json(us)

  }, 

  pegarUsuarioPorId: async (req,res) => {

    const { id } = req.params

    const users = await Usuario.findByPk(id)

    res.json(users)
  },

  editarUsuario: async (req,res) => {
    const { id } = req.params
    
    const { nome, dataNascimento, telefone, cpf, endereco, numero, estado, bairro, cidade, complemento, referencia, username, senha, email, imagemPerfil, imagemDeFundo } = req.body

    const usersUpdate = await Usuario.update({

      nome, 
      dataNascimento, 
      telefone, 
      cpf,
       endereco, 
      estado, 
      bairro, 
      cidade, 
      numero, 
      complemento,
       referencia, 
      username, 
      senha, 
      email,
       imagemPerfil, 
      imagemDeFundo
    },{
      where: { id }})

      if (usersUpdate == 1) {
        return res.status(201).json({ mensagem: 'Sua alteração foi feita com sucesso' })
      } else {
        return res.status(404).json({ mensagem: 'Sua alteração já foi realizada' })
      }

  },

  apagarUsuario: async (req, res) => {
    const { id } = req.params

    const destruir = await Usuario.destroy({
      where: { id }
    })

    if(destruir == 1){
       return res.status(204).json({ mensagem: "O usuario foi deletado"})
    }else {
      return res.status(204).json({ mensagem: "O usuario já foi deletado"})
    }

  },



};

module.exports = indexController;