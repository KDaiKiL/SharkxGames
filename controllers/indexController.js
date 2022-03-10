const fs = require('fs');
const { v4: uuid } = require('uuid');
const {check,validationResult,body} = require('express-validator')
const bcrypt = require('bcrypt')
const { Usuario, Produto, Cartao, Compra } = require('../models')

const indexController = {
  index: async(req, res) => {

    const produtos = await Produto.findAll({
      limit: 5
    })

    res.render('index', {produtos} ) 
  },
  login: (req, res) => {
    res.render('login')
  },
  loginUser: async(req, res) => {
    const { email, senha, cock } = req.body
    const usuario = await Usuario.findOne({where: { email }})
    const erros = []

    if(cock != undefined && usuario != null) {
      if(bcrypt.compareSync(senha, usuario.senha)) {
        res.cookie('log', usuario.email, {maxAge: 6000000000})
      }
    }

    if( usuario == null ) {
      erros.push('Err')
      res.render('login.ejs', {erros})
    } else {
      if(bcrypt.compareSync(senha, usuario.senha)) {
        req.session.usuario = usuario
        res.redirect('/home')
      } else {
        erros.push('Err')
        res.render('login.ejs', {erros})
      }
    }

  },
  cadastro: (req, res) => {
    return res.render('cadastro')
  },
  conta: async(req, res) => {
    const { id } = req.session.usuario
    const user = await Usuario.findByPk(id)
    res.render('conta', { user })
  },
  contaId: async(req, res) => {
    const { id } = req.params
    const acont = await Usuario.findByPk(id)

    if(acont == null) {
      res.render('not-found')
    } else {
      res.render('contaId', { user: acont })
    }
  },
  pagamento: (req, res) => {
    return res.render('formaDePagamento')
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
  novoProduto: async(req, res) => {
    const { id } = req.session.usuario
    let img = '/images/upload/' + req.file.originalname
    const { nome, preco, desconto, descricao } = req.body
    await Produto.create({
      nome,
      usuario_id: id,
      preco,
      desconto,
      descricao,
      imgPath: img
    })
    res.redirect('/home')
  },
  editarProduto: (req, res) => {
    return res.render('atualizarProduto')
  },
  contato: (req, res) => {
    res.render('contato')
  },
  produtoVer: async(req, res) => {
    const pv = await Produto.findAll()

    res.json(pv)
  },

  produtoVerId: async(req, res) => {
    const { id } = req.params
    const user = req.session.usuario
    const produtoId = await Produto.findByPk(id, {
      include: {
        association: 'usuario'
      }
    })

    if(!produtoId) {
      return res.render('telasError/idError', { id } )
    } else {
      return res.render('item', { produtoId, user } )
    }
  },
  AtualizarProduto: async(req, res) => {

    const { id } = req.params
    const produto = await Produto.findByPk(id)
    let img = produto.imgPath
    
    if(req.file != undefined) {
      img = '/images/upload/' + req.file.originalname
    }

    const { nome, preco, desconto, descricao } = req.body
    
    const update = await Produto.update({ 
      nome,
      usuario_id: req.session.usuario.id,
      preco,
      desconto,
      descricao,
      imgPath: img
    }, {
      where: { id }
    })
    
    if (update == 1) {
      return res.status(201).redirect('/home')
    } else {
      return res.status(404).redirect('/produtos/' + id)
    }

  },

  DeletarProduto: async(req, res) => {

    const { id } = req.params

    const destruir = await Produto.destroy({
      where: { id }
    })

    if(destruir == 1){
      return res.status(204).redirect('/home')
   }else {
      return res.status(404).redirect('/produtos/' + id)
   }

  },

  PegarCartao: async(req, res) => {
    const { id } = req.params
    const produtoId = await Produto.findByPk(id)

    res.render('formaDePagamento', { produtoId })
  },

  error: (req,res) => {
    res.render('error')
  },

  cadastrarCartao: async(req, res) => {
    const usuarioId = req.session.usuario.id
    const { id } = req.params
    const { nome, bandeira, numero, tipo, validade, cvv } = req.body
    const cartao = await Cartao.create({
      nome,
      bandeira,
      numero,
      tipo,
      validade,
      cvv
    })


    const compra = await Compra.create({
      frete: 0,
      usuario_id: usuarioId,
      produto_id: parseInt(id),
      cartao_id: cartao.id
    })
    // res.json(compra)
    res.redirect('/sucesso')
  },

  criarUsuario: async(req, res) => {

    const { username, nome, sobrenome, data_nascimento, email, senha, telefone, cpf, cep, endereco, estado, cidade, bairro, referencia, numero, complemento } = req.body

    const password = bcrypt.hashSync(senha, 10)
    
    await Usuario.create({
    username, nome, sobrenome, data_nascimento, email, senha: password, telefone, cpf, cep, endereco, estado, cidade, bairro, referencia, numero, complemento
    })

    res.redirect("/login")  
  },

  termos: (req, res) => {
    res.render('termos')
  },

  editarUsuario: async(req,res) => {
    const { id } = req.params
    const alterado = []
    
    const { username, nome, sobrenome, data_nascimento, telefone, cep, endereco, estado, cidade, bairro, referencia, numero, complemento } = req.body

    const usersUpdate = await Usuario.update({
      nome,
      sobrenome,
      data_nascimento, 
      telefone,
      cep, 
      endereco, 
      estado, 
      bairro, 
      cidade, 
      numero, 
      complemento,
      referencia, 
      username
    },{
      where: { id }
    })
    
      if (usersUpdate == 1) {
        alterado.push('sucess')
        return res.redirect('/home')
      } else {
        return res.redirect('/conta')
      }

  },

  sairConta: (req, res) => {
    res.clearCookie('log');
    req.session.usuario = undefined
    res.redirect('/login')
  },
  susses: async(req, res) => {
    res.render('sucesso')
  }
};

module.exports = indexController;