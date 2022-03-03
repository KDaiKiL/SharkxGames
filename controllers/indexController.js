const fs = require('fs');
const { v4: uuid } = require('uuid');
const {check,validationResult,body} = require('express-validator')
const bcrypt = require('bcrypt')
const { Usuario, Produto, Cartao } = require('../models')

const indexController = {
  index: (req, res) => {
    res.render('index')
  },
  login: (req, res) => {
    res.render('login')
  },
  loginUser: async (req, res) => {
    const { email, senha, cock } = req.body
    const usuario = await Usuario.findOne({where: { email }})

    if(cock != undefined) {
      res.cookie('log', usuario.email, {maxAge: 600000})
    }

    if( usuario == null ) {
      res.redirect('/login')
    } else {
      if(bcrypt.compareSync(senha, usuario.senha)) {
        req.session.usuario = usuario
        res.redirect('/home')
      } else {
        res.redirect('/login')
      }
    }

    


  },
  cadastro: (req, res) => {
    return res.render('cadastro')
  },
  conta: async (req, res) => {
    const { id } = req.session.usuario
    const user = await Usuario.findByPk(id)
    res.render('conta', { user })
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

    const { nome, preco, desconto, categoria } = req.body

    const produto = await Produto.create({
      id: uuid(),
      nome,
      preco,
      desconto,
      categoria
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

    const password = bcrypt.hashSync(senha, 10)

    if(listaDeError.isEmpty()) {

      const newUser = await Usuario.create({
        username, nome, sobrenome, data_nascimento, email, senha: password, telefone, cpf, cep, endereco, estado, cidade, bairro, referencia, numero, complemento
      })

      res.redirect("/login")

   } else {
     res.json(listaDeError)
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