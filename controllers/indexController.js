const fs = require('fs')
const { v4: uuid } = require('uuid');

const  { Produto }  = require('../Models')
const  { Cartao } = require('../models')

const indexController = {
    index: (req, res) => {
        res.render('index')
    },
    login: (req, res) => {
      res.render('login')
    },
    cadastro: (req,res) => {
      return  res.render('cadastro')
    },
    pagamento: (req,res) => {
      return res.render('formaDePagamento')
    },
    carrinho: (req,res) => {
      return res.render('carrinho')
    },
    item:(req,res) => {
      return res.render('item')
    },
    OpcoesEntrega:(req,res) => {
      return res.render("TelaDeVendas/opcoesDeEntrega")
    }, 
    adcProduto:(req,res) => {
      return res.render("TelaDeVendas/telaDeGerente")
    }, 
    pageProduto: (req, res) => {
      res.render('cadastroProduto')
    },
    novoProduto: (req, res) => {
      // let content = fs.readFileSync("./json/db.json", "utf8")
      // let db = JSON.parse(content)
      let img = '/images/upload/' + req.file.originalname
      let { nome, valor, descricao } = req.body

      // db.produto.push({nome, valor: Number(valor), img, descricao})
  
      // content = JSON.stringify(db)

      // fs.writeFileSync("./json/db.json", content, "utf-8")
      
      res.redirect("/home")
    },
    
    cadastrar: (req,res) => {

      // let content = fs.readFileSync("./json/db.json", "utf8")
      // let db = JSON.parse(content)
    
      // const body = req.body

      // const { id,nome,sobrenome,email,telefone,cpf,senha,senhaConfirmar,dia,mes,ano,cep,endereco,numero,bairro,referencia,cidade,estado } = req.body ;

      // const hase = bcrypt.hashSync(body.senha,10) ;

    // db.usuarios.push( {id: uuid(),nome,sobrenome,email,telefone,cpf,senha:hase ,senhaConfirmar:hase ,dia,mes,ano,cep,endereco,numero,bairro,referencia,cidade,estado})

    // content = JSON.stringify(db)

    // fs.writeFileSync("./json/db.json", content, "utf-8")

     

    //   return  res.json(db.usuarios)  
    },
    editarProduto: (req,res) => {
      return res.render('atualizarProduto')
    },
    contato: (req, res) => {
      res.render('contato')
    },
    produtoVer: async (req,res) => {
      const pv = await Produto.findAll()

       res.json(pv)
    },

    produtoVerId: async (req,res) => {
      const { id } = req.params

      const produtoId = await Produto.findByPk(id)

      res.json(produtoId)
    },

    ProdutoCriar: async (req,res) => {

      const { nome,preco,desconto,categoria } = req.body

      const produto = await Produto.create({
        id:uuid(),
        nome,
        preco,
        desconto,
        categoria
      })

      res.json(produto)
    },

    AtualizarProduto: async (req,res) => {

      const { id } = req.params

      const { nome,preco,desconto,categoria } = req.body

      const Update = await Produto.update({ nome,preco,desconto,categoria },{
        where : { id }
      })

    if(Update == 1) {
      return res.status(201).json({mensagem: 'Sua alteração foi feita com sucesso'})
    } else {
      return res.status(404).json({mensagem: 'Sua alteração já foi realizada'})
    }

    },

    DeletarProduto: async (req,res) => {

      const { id } = req.params

      const destuir = await Produto.destroy({
        where: { id }
      })

      if(destuir == null) {
        return res.status().json({mensagem:'Produto não encontrado'})
      } 
      else {
        return res.status().json({mensagem:'tudo certo'})
      }

    },

    PegarCartao: async(req,res) => {
      
      const cartao = await Cartao.findAll()

      res.json(cartao)

    },

    PegarCartaoID: async(req,res) => {
      
      const { id } = req.params

      const cartao = await Cartao.findByPk(id)

      res.json(cartao)

    }, 
    cadastrarCartao: async (req,res) => {

      const { nome,bandeira, numero,tipo,cvv} = req.body

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

    updateCartao: async (req,res) => {

      const { id } = req.params

      const { nome, bandeira, numero, tipo, cvv} = req.body

      const Update = await Cartao.update({
         nome,
         bandeira,
         numero,
         tipo,
         cvv
      },{ where: { id }})

      if(Update == 1) {
        return res.status(201).json({mensagem: 'Sua alteração foi feita com sucesso'})
      } else {
        return res.status(404).json({mensagem: 'Sua alteração já foi realizada'})
      }
    },
    destruirCartao: async (req,res) => {
      const { id } = req.params 

      const destruir = await Cartao.destroy({
        where : { id }
      })

    },

    

    termos: (req, res) => {
      res.render('termos')
    }
};

module.exports = indexController;