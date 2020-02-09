const express = require('express');
const path = require('path');

const homeController = require('./controllers/home');
const errorsController = require('./controllers/errors');
const aboutController = require('./controllers/about');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', homeController.getHomePage);
app.get('/about', aboutController.getAboutPage);
app.use(errorsController.get404Page);

app.listen(3000, (err) => {
  console.log('Server is listening');
});