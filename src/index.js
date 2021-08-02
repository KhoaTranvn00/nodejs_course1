const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))

// template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));
console.log(path.join(__dirname, 'resource/views'));

const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.render('home');
})

app.get('/news', function (req, res) {
    res.render('new');
})

app.listen(port, () => console.log(`link http://localhost:${port}`))