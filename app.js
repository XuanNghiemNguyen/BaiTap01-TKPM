const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//Loads the handlebars module
const hbs = require('express-handlebars')
//Sets our app to use the handlebars engine
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, '/src/views/partials/'))
app.use(express.static(__dirname + '/public'));
//Sets handlebars configurations (we will go through them later on)
app.engine(
  'hbs',
  hbs({
    layoutsDir: path.join(__dirname + '/src/views/layouts/'),
    defaultLayout: 'main',
    extname: '.hbs'
  })
)

//connect database
const uri = 'mongodb+srv://XuanNghiemNguyen:2101998@cluster0-6az1w.mongodb.net/QLBH?retryWrites=true&w=majority'
const connectDatabase = () => {
  mongoose.connect(
    uri,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    },
    err => {
      if (err) {
        console.log('Failed to connect to mongo on startup - retrying in 2 sec', err)
        setTimeout(connectDatabase, 2000)
      } else {
        console.log('Connected to the database')
      }
    }
  )
}

connectDatabase()


// create a route for the app
app.use('/products', require('./src/routes/product.routes'))

// server starts listening the `PORT`
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`)
})
