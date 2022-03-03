const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const routerUsuario = require('./routes/usuarioRouter')

const methodOverride = require('method-override')
const Sequelize = require('sequelize')
const sequelize = require('./config/database')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const Logmiddleware = require('./middleware/validaUsuario')
const cookieMiddleware = require('./middleware/cookieLog')

const db = require('./config/database') 

app.use(session({
    secret: "sharkxgames",
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(cookieMiddleware)
app.use(Logmiddleware)


// rotas

app.use(indexRouter)
app.use(routerUsuario)


app.listen(3000, () => {
    console.log('Servidor rodando')
})
  