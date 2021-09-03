const express = require('express');
const handlebars = require('express-handlebars');
const utils = require('./utils');
const md = require('markdown-it')();

const app = express();
const port = process.env.PORT || 5500;



app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/',
  }),
);

app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  // const readme = md.render(utils.getReadme());
  
  // res.render('main', {
  //   ...utils.getNavAttributes(),
  //   readme
  // });
  res.render('piece-bare', {
    ...utils.getNavAttributes(),
    scriptName: `basic.js`
  });
});

app.get('/:route', (req, res) => {
  res.render('piece', {
    ...utils.getNavAttributes(),
    scriptName: `${req.params.route}.js`
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
