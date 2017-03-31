var express = require("express");
var app = express();

var path = require("path");
var bodyParser = require('body-parser');

var PORT = 8000

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
