var express = require('express');
var app = express();
app.use(express.static('./static')); 
var server = app.listen(8080);
