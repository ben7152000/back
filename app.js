if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const cors = require('cors')
const favicon = require('express-favicon')
const userPassport = require('./config/passport')

const app = express()
const PORT = process.env.PORT || 3000

app.use('/upload', express.static(__dirname + '/upload'))
app.use(favicon(__dirname + '/public/favicon.ico'))

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({ secret: 'Secret', resave: false, saveUninitialized: false }))
app.use(flash())

app.use(methodOverride('_method'))

app.use(cors())

userPassport(app)

app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  res.locals.user = req.user
  next()
})

require('./routes')(app)

console.log(process.env.NODE_ENV, 'NODE_ENV')

app.listen(PORT, () => {
  console.log(`The server is running on localhost:${PORT}`)
})
