const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const routerUsuario = require('./routes/usuarioRouter')

const methodOverride = require('method-override')
const Sequelize = require('sequelize')
const sequelize = require('./config/database')
const Logmiddleware = require('./middleware/validaUsuario')

const db = require('./config/database') 

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(Logmiddleware)


// rotas

app.use(indexRouter)
app.use(routerUsuario)


app.listen(3000, () => {
    console.log('Servidor rodando')
})
  