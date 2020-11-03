// Project: BookSwap - CS 361 Software Engineering I
// Team Name: Not Very Agile
// Contributors: Rohit Chaudhary, Brian Forsyth, Dan Allem, Emily McMullan, Will Coiner
// Description: Node.js server utilizing the Handlebars templating engine in order to handle front end requests from the BookSwap client and also send requests to database and external API


var express = require('express');
var request = require('request');

var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 7500);

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", function(req, res){
    // home page
    var context = {};
    res.status(200);
    console.log(context);
    res.render("home");
});

app.get("/signup", function(req, res) {
    // new user create credentials
    var context = {};
    res.status(200);
    console.log(context);
    res.render('signup');
});

app.get("/login", function(req, res){
    // already existing user login page
    var context = {};
    res.status(200);
    console.log(context);
    res.render("login");
});

app.get("/about", function(req, res){
    // about page
    var context = {};
    res.status(200);
    console.log(context);
    res.render("about");
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});
    
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log(`Express started on http://${process.env.HOSTNAME}:${app.get('port')}; press Ctrl-C to terminate.`);
});