// Based on:
// http://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
// and
// http://expressjs.com/en/starter/static-files.html

var express = require('express');
var app = express();
var fs = require("fs");


// serve static content

app.use(express.static('bower_components'));
app.use('/bower_components', express.static('bower_components'));

app.use(express.static('css'));
app.use('/css', express.static('css'));

app.use(express.static('data'));
app.use('/data', express.static('data'));

app.use(express.static('js'));
app.use('/js', express.static('js'));

app.use(express.static('templates'));
app.use('/templates', express.static('templates'));


// set views

app.get('/', function(req, res) {
	fs.readFile( __dirname + "/index.html", "utf8", function(err, data) {
		res.end(data);
	});
});

app.get('/conversion', function(req, res) {
	fs.readFile( __dirname + "/data/conversions.json", "utf8", function(err, data) {
		res.end( data );
	});
});

app.get('/conversion/:type', function(req, res) {
	// First read existing conversions
	fs.readFile( __dirname + "/data/conversions.json", "utf8", function(err, data) {
		conversions = JSON.parse(data);
		var conversion = conversions.filter(function (type) {
			return type.name === req.params.type;
		});
		res.end( JSON.stringify(conversion) );
	});
});


// set up server

var server = app.listen(4434, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});