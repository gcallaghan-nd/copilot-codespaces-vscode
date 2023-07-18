// Create web server
var app = express()
var fs = require('fs')

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Set up handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' })
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

// Set up public folder
app.use(express.static('public'))

// Set up port
app.set('port', process.env.PORT || 3000