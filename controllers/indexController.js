const fs = require('fs');
const { v4: uuid } = require('uuid');
const {check,validationResult,body} = require('express-validator')
const bcrypt = require('bcrypt')
const { Usuario, Produto, Cartao, Imagem } = require('../models')

const indexController = {
  index: async(req, res) => {

    const produtos = await Produto.findAll()

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
      res.json(acont)
    }
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
  novoProduto: async(req, res) => {
    const { id } = req.session.usuario
    let img = '/images/upload/' + req.file.originalname
    const { nome, preco, desconto, categoria, descricao } = req.body
    const produto = await Produto.create({
      nome,
      usuario_id: id,
      preco,
      desconto,
      categoria,
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

    const produtoId = await Produto.findByPk(id, {
      include: {
        association: 'usuario'
      }
    })
    

    if(!produtoId) {
      return res.render('telasError/idError', { id } )
    }
    

   return res.render('item', { produtoId } )
  },
  attProduto: async(req, res) => {
    const { id } = req.params
    const produto = await Produto.findByPk(id)
    res.json(produto)
  },
  AtualizarProduto: async(req, res) => {

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

  DeletarProduto: async(req, res) => {

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

  PegarCartao: async(req, res) => {

    const cartao = await Cartao.findAll()

    res.json(cartao)

  },

  PegarCartaoID: async(req, res) => {

    const { id } = req.params

    const cartao = await Cartao.findByPk(id)

    res.json(cartao)

  },

  error: (req,res) => {
    res.render('error')
  },

  cadastrarCartao: async(req, res) => {

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

  updateCartao: async(req, res) => {

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
  destruirCartao: async(req, res) => {
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

  criarUsuario: async(req, res) => {

    const { username, nome, sobrenome, data_nascimento, email, senha, telefone, cpf, cep, endereco, estado, cidade, bairro, referencia, numero, complemento } = req.body

    const listaDeError =  validationResult(req)

    const password = bcrypt.hashSync(senha, 10)

    if(listaDeError.isEmpty()) {
        await Usuario.create({
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
};

module.exports = indexController;