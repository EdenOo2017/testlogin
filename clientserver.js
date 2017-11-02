var express = require('express')
var app = express()
var path = require('path');
 

 app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'js')));
// app.use(express.static(path.join(__dirname, 'less')));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})
 
app.listen(3000)