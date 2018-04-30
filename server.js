// Require the following npm packages inside of the server.js file:
//    * express
//    * body-parser

//node depen
var express = require('express');
var parser = require('body-parser');
var overide =require('express-method-override');
var app=express();

//serve static content
app.use(express.static(process.cwd()+'/public'));

//parse app
app.use(parser.urlencoded({extended:false}));

//handlebars
var handles =require('express-handlebars');
app.engine('handlebars',handles({defaultLayout:'main'}));
app.set('veiw engine','handlebars');

var router = require('./controllers/cake_controller');
app.use('/',router);

//open server
var dock = process.env.PORT ||3000;
app.listen(dock);

