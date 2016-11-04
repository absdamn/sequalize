
const bodyParser = require('body-parser');
const express = require('express');
const nunjucks = require('nunjucks');
const pry = require('pryjs');
const routes = require('./routes');

var app = express();

nunjucks.configure('views', {noCache: true, express: app});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// you can use Morgan here - request log express module
app.use(function(req, res, next) {
  req.on("end", function(){
    console.log(`${req.method} ${req.path} ${req.statusCode}`);
  });
  next();
})

app.use('/', routes);

app.listen(3000);
