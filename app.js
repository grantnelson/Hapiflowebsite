/*
* Module dependencies *
*/

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

/*
* Hapiflo Home Routes*
*/

var index = require('./routes/index');
var home = require('./routes/home');
var flo = require('./routes/flo');
var wiki = require('./routes/wiki');
var search = require('./routes/search');
var employeehealth = require('./routes/employeehealth');
var blog = require('./routes/blog');

/*
* Hapiflo App Routes*
*/

var appposes = require('./routes/appposes');
var appnoviceflo = require('./routes/appnoviceflo');
var appyogiflo = require('./routes/appyogiflo');
var appsettings = require('./routes/appsettings');
var appindex = require('./routes/appindex');
var apphelp = require('./routes/apphelp');
var app = express();

/*
* Environment*
*/

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Hapiflo Home Routes
app.get('/', index.view);
app.get('/home', home.view);
app.get('/flo', flo.view);
app.get('/wiki', wiki.view);
app.get('/search', search.view);
app.get('/employeehealth', employeehealth.view);
app.get('/blog', blog.view);

// Hapiflo
app.get('/appnoviceflo', appnoviceflo.view);
app.get('/appyogiflo', appyogiflo.view);
app.get('/appsettings', appsettings.view);
app.get('/appindex', appindex.view);
app.get('/apphelp', apphelp.view);
app.get('/appposes' , appposes.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server is listening on port ' + app.get('port'));
});


