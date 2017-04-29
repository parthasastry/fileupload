var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer({dest: './uploads'});

app.set('view engine', 'jade');

app.get('/', function(resuest, response) {
  console.log('home page');
  response.render('uploadform');
});

app.post('/upload', upload.single('control'), function(req, res) {
  console.log(req.file);
  console.log(req.file.size);
  var size = parseFloat(req.file.size/(1024*1024)).toFixed(2);
  var outputJson = {'fileSize': size};
  res.status(200).json(outputJson);
  //res.send("File uploaded");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Short url microservice has started!");
});